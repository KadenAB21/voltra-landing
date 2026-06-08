/* VOLTRA — shared primitives. Exported to window for other babel scripts. */

/* The Voltra symbol — an ascending "V": two strokes that read as the letter V,
   an upward-right performance vector, and a "right-call" check. Precision +
   optimization, no lightning. Built to live as app icon / favicon / avatar. */
function VoltraMark({ size = 28, variant = "ink", style }) {
  // variant: "ink" (black tile, volt mark) | "volt" (volt tile, black mark) | "bare" (no tile)
  const tile = variant === "volt" ? "var(--accent)" : variant === "bare" ? "transparent" : "#0A0A0A";
  const mark = variant === "volt" ? "#0A0A0A" : "var(--accent)";
  const r = variant === "bare" ? 0 : Math.round(size * 0.255);
  return (
    <span
      className={"vmark vmark-" + variant}
      style={{ width: size, height: size, background: tile, borderRadius: r, ...style }}>
      <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
        <polyline
          points="15,21 28,45 49,13"
          fill="none" style={{ stroke: mark }} strokeWidth="8.5"
          strokeLinecap="square" strokeLinejoin="miter" />
      </svg>
    </span>);

}

function Wordmark({ size = 26, onDark = false, markOnly = false }) {
  const markSize = Math.round(size * 1.18);
  if (markOnly) return <VoltraMark size={markSize} variant={onDark ? "volt" : "ink"} />;
  return (
    <span className={"wordmark" + (onDark ? " on-dark" : "")}>
      <VoltraMark size={markSize} variant={onDark ? "volt" : "ink"} />
      <span className="wm-text" style={{ fontSize: size }}>VOLTRA</span>
    </span>);

}

function Placeholder({ label, onDark = false, style, children }) {
  return (
    <div className={"ph" + (onDark ? " on-dark" : "")} style={style}>
      {children || <span className="ph-tag">{label}</span>}
    </div>);

}

function Chip({ children, accent = false, onDark = false }) {
  return (
    <span className={"chip" + (accent ? " is-accent" : "") + (onDark ? " on-dark" : "")}>
      <span className="led" />{children}
    </span>);

}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Kit (ConvertKit) public form submission — no API key, no secret. Posts to the
   hosted form's public action URL (numeric form id 9537793 = embed uid 9882eaea99
   on voltra-2.kit.com). CORS-enabled; returns { status: "success" } on subscribe. */
const KIT_FORM_ACTION = "https://app.kit.com/forms/9537793/subscriptions";

function EmailCapture({ onDark = false, accent = false, cta = "Claim founding access", note }) {
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState("idle"); // idle | loading | error | done
  const [errMsg, setErrMsg] = React.useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (state === "loading") return;
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setErrMsg("Enter a valid email to join the founding list.");
      setState("error");
      return;
    }
    setState("loading");
    try {
      const res = await fetch(KIT_FORM_ACTION, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ email_address: value }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data && data.status === "success") {
        setState("done");
      } else {
        throw new Error("subscribe failed");
      }
    } catch (err) {
      setErrMsg("Couldn't reach the list — please try again in a moment.");
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <div className={"capture" + (onDark ? " on-dark" : "")}>
        <div className="capture-success">
          <span className="check">✓</span>
          <div>
            <div className="ok-title">You're on the list</div>
            <div className="ok-sub">Founding rate locked · We'll email before launch</div>
          </div>
        </div>
      </div>);

  }
  const loading = state === "loading";
  return (
    <form className={"capture" + (onDark ? " on-dark" : "")} onSubmit={submit} noValidate>
      <div className="capture-row" style={state === "error" ? { borderColor: "#e0473a" } : null}>
        <input
          type="email"
          placeholder="you@email.com"
          value={email}
          disabled={loading}
          onChange={(e) => {setEmail(e.target.value);if (state === "error") setState("idle");}}
          aria-label="Email address" />
        
        <button
          type="submit"
          disabled={loading}
          className={"btn " + (accent ? "btn-accent" : onDark ? "btn-inverse" : "btn-primary")}
          style={loading ? { opacity: 0.7, cursor: "wait" } : null}>
          {loading ? "Joining…" : cta}
        </button>
      </div>
      <div className="capture-note">
        {state === "error" ?
        <span style={{ color: "#e0473a" }}>{errMsg}</span> :
        note || <>Founding athletes lock <span className="vk">$9.99/mo for life</span>. No spam — launch list only.</>}
      </div>
    </form>);

}

/* Quiet finish-line divider — breaks the section flow without adding noise. */
function Divider() {
  return (
    <div className="wrap">
      <div className="divider" role="separator" aria-hidden="true" style={{ lineHeight: "1.4" }}>
        <span className="dv-ln" />
        <span className="dv-mark"><i /><i className="v" /><i /></span>
        <span className="dv-ln" />
      </div>
    </div>);

}

Object.assign(window, { Wordmark, VoltraMark, Placeholder, Chip, EmailCapture, Divider });