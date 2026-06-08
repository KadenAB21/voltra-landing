/* VOLTRA — the session screen, mocked as the real mobile product.
   Lives inside the iOS device frame. Dark, adaptive, data-driven — "this is software." */

function ReadinessRing({ value = 76, size = 92 }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const off = c * (1 - value / 100);
  return (
    <svg className="vr-ring" viewBox="0 0 100 100" width={size} height={size}>
      <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(0,0,0,0.09)" strokeWidth="8" />
      <circle
        cx="50" cy="50" r={r} fill="none" style={{ stroke: "var(--accent)" }} strokeWidth="8"
        strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off}
        transform="rotate(-90 50 50)" />
      <text x="50" y="49" className="vr-num" textAnchor="middle">{value}</text>
      <text x="50" y="65" className="vr-unit" textAnchor="middle">READY</text>
    </svg>);

}

function CnsBars({ level = 2 }) {
  return (
    <span className="vcns">
      {[1, 2, 3].map((i) =>
      <i key={i} className={i <= level ? "on" : ""} />
      )}
    </span>);

}

function SessionScreen() {
  const rows = [
  { n: 1, phase: "Warm-up", detail: "20 min · dynamic + drills", state: "done" },
  { n: 2, phase: "Movement prep", detail: "Hips · ankles · CNS primers", state: "done" },
  { n: 3, phase: "Block starts", detail: "3 × 20m · full recovery", state: "active", set: "Set 2 of 4" },
  { n: 4, phase: "Accelerations", detail: "4 × 30m @ 95%", state: "next", key: true },
  { n: 5, phase: "Flys", detail: "2 × 20m · 20m run-in", state: "todo" },
  { n: 6, phase: "Power", detail: "3 × 5 box jumps", state: "todo" },
  { n: 7, phase: "Cooldown", detail: "12 min · easy + mobility", state: "todo" }];


  return (
    <div className="vapp">
      {/* app header */}
      <header className="vhead">
        <div className="vhead-l">
          <VoltraMark size={26} variant="ink" />
          <div className="vhead-meta">
            <span className="vh-day">Monday · Mar 17</span>
            <span className="vh-week">Speed block · Week 3 of 6</span>
          </div>
        </div>
        <span className="vh-avatar" aria-hidden="true">JL</span>
      </header>

      {/* readiness hero */}
      <section className="vready">
        <ReadinessRing value={76} />
        <div className="vready-x">
          <div className="vr-lab">Readiness</div>
          <div className="vr-state">Primed</div>
          <div className="vr-delta"><span className="up">▲ 4</span> vs 7-day avg</div>
        </div>
        <div className="vready-tip">Session scaled to <b>today's score</b></div>
      </section>

      {/* session objective card */}
      <section className="vcard">
        <div className="vcard-top">
          <div>
            <div className="vc-kicker">Today's session</div>
            <h3 className="vc-title">Acceleration<span className="vc-plus"> + </span>Power</h3>
          </div>
          <span className="vc-focus">Focus<b>Early accel</b></span>
        </div>
        <div className="vc-stats">
          <div className="vc-stat"><span className="vs-lab">Duration</span><span className="vs-val">~75<i>min</i></span></div>
          <div className="vc-stat"><span className="vs-lab">Exercises</span><span className="vs-val">7</span></div>
          <div className="vc-stat"><span className="vs-lab">CNS load</span><span className="vs-val vs-cns">Mod <CnsBars level={2} /></span></div>
        </div>
        <p className="vc-obj">
          <b>Objective.</b> Build early acceleration while managing CNS fatigue carried from last week's speed work.
        </p>
      </section>

      {/* progress */}
      <section className="vprog">
        <div className="vprog-row">
          <span className="vp-lab">Progress</span>
          <span className="vp-count"><b>2</b> / 7 complete</span>
        </div>
        <div className="vp-track"><span className="vp-fill" style={{ width: "28.5%" }} /></div>
      </section>

      {/* exercise list */}
      <section className="vlist">
        {rows.map((r) =>
        <div className={"vrow is-" + r.state} key={r.n}>
            <span className="vr-mark">
              {r.state === "done" ?
            <svg viewBox="0 0 24 24" className="vr-check"><path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg> :

            r.state === "active" ?
            <span className="vr-pulse" /> :

            <span className="vr-idx">{r.n}</span>
            }
            </span>
            <div className="vr-body">
              <div className="vr-top">
                <span className="vr-phase">{r.phase}</span>
                {r.key && <span className="vr-tag">Key effort</span>}
                {r.state === "active" && <span className="vr-now">Now</span>}
              </div>
              <span className="vr-detail">{r.detail}</span>
            </div>
            {r.state === "active" && <span className="vr-set">{r.set}</span>}
            {r.state === "next" && <span className="vr-arrow">→</span>}
          </div>
        )}
      </section>

      {/* sticky action bar */}
      <div className="vbar">
        <div className="vbar-l">
          <span className="vbar-lab">Now · Block starts</span>
          <span className="vbar-sub">Set 2 of 4 · full recovery</span>
        </div>
        <button className="vbar-btn">Log set</button>
      </div>
    </div>);

}

/* ---------- section wrapper: copy + phone ---------- */
function SessionPreview() {
  return (
    <section className="section session-section" id="session" data-screen-label="Session">
      <div className="wrap session-aside">
        <div className="sa-copy reveal">
          <div className="eyebrow"><span className="dot" />The product</div>
          <h2 className="display">Not a workout list.<br /><span className="why-dim">A daily decision.</span></h2>
          <p>
            Every morning Voltra reads your readiness and hands you one session —
            scaled, sequenced, and explained — the way an elite coach would on the track.
          </p>
          <ul className="sa-list">
            <li><span className="k">→</span><span>Built around <b>today's readiness</b>, not a fixed template</span></li>
            <li><span className="k">→</span><span>Every rep carries a <b>target and a reason</b></span></li>
            <li><span className="k">→</span><span>CNS load tracked so you <b>peak — not crash</b></span></li>
          </ul>
          <div className="sa-note mono">Mockup · iOS · live data shown</div>
        </div>

        <div className="phone-stage reveal">
          <div className="phone-glow" aria-hidden="true" />
          <div className="phone-scale">
            <IOSDevice width={402} height={862}>
              <SessionScreen />
            </IOSDevice>
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, { SessionPreview, SessionScreen });
