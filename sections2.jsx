/* VOLTRA — page sections, part 2. Primitives from components.jsx */

/* ---------- WHO IT'S FOR ---------- */
function WhoFor() {
  return (
    <section className="section whofor" id="who" data-screen-label="Who it's for">
      <div className="wrap">
        <div className="section-head whofor-head">
          <div className="eyebrow"><span className="dot" />Who it's for</div>
          <h2 className="display" style={{ marginTop: 18 }}>Two athletes.<br />One problem.</h2>
        </div>

        <div className="ident-grid">
          <article className="ident reveal">
            <div className="ident-q">&ldquo;I don't<br />have a<br />coach.&rdquo;</div>
            <p>
              High school. Club. On your own. You've got the drive and the talent &mdash; there's
              just no one in your corner making the calls. Voltra is the coach your program
              never gave you.
            </p>
          </article>

          <article className="ident reveal d1">
            <div className="ident-q">&ldquo;I coach<br />myself.&rdquo;</div>
            <p>
              You know the training. You've read the books. But you can't see yourself clearly
              at 6am on tired legs. Voltra makes the objective call &mdash; every day, without ego.
            </p>
          </article>
        </div>

        <p className="prob-foot reveal">Different athletes. Same goal. <span className="pf-em">Get faster.</span></p>
      </div>
    </section>);
}

/* ---------- THE PROOF — before / after transformation ---------- */
function FounderProof() {
  const rows = [
  { ev: "100m", before: "11.58", after: "10.94" },
  { ev: "200m", before: "23.23", after: "22.35" },
  { ev: "400m", before: "Never ran 400", after: "48.96", na: true }];

  return (
    <section className="section tform" id="proof" data-screen-label="The proof">
      <div className="wrap">
        <div className="tform-head">
          <div className="eyebrow"><span className="dot" />The proof</div>
          <h2 className="display tform-title reveal">Same athlete.<br /><span className="why-dim">Different coaching.</span></h2>
        </div>

        <div className="ba-table reveal">
          <div className="ba-row ba-head">
            <div className="ba-ev" />
            <div className="ba-before">Before</div>
            <div className="ba-after">After</div>
          </div>
          {rows.map((r) =>
          <div className="ba-row" key={r.ev}>
              <div className="ba-ev">{r.ev}</div>
              <div className={"ba-before" + (r.na ? " is-na" : "")}>{r.before}</div>
              <div className="ba-after">{r.after}</div>
            </div>
          )}
        </div>

        <figure className="ba-note reveal">
          <p className="ba-story">
            Two years under a football coach running the track program.<br />
            One year under a sprint coach.
          </p>
          <p className="ba-punch">The athlete didn't change.<br /><span className="volt">The coaching did.</span></p>
          <figcaption className="tf-attrib">
            <span className="tf-name">The Founder</span>
            <span className="tf-role">Sprint coach · built Voltra</span>
          </figcaption>
        </figure>
      </div>
    </section>);

}

/* ---------- FOUNDING ATHLETE OFFER ---------- */
function FoundingOffer() {
  return (
    <section className="section founding" id="pricing">
      <div className="wrap">
        <div className="founding-panel reveal">
          <div className="fp-head">
            <div className="eyebrow fp-eyebrow"><span className="dot" />Founding athlete offer</div>
            <h2 className="display fp-title">Lock in founding pricing for life.</h2>
            <p className="fp-sub">Two ways in — both locked forever. Founding athletes keep their rate; future users pay full price.</p>
          </div>

          <div className="plan-grid">
            <article className="plan">
              <div className="plan-flag plan-flag-plain">Flexible</div>
              <div className="plan-inner">
                <div className="plan-label">Monthly</div>
                <div className="plan-price">
                  <span className="pl-cur">$</span><span className="pl-num">9.99</span><span className="pl-per">/mo</span>
                </div>
                <div className="plan-note">Billed monthly · cancel anytime</div>
                <div className="plan-foot">
                  <span className="pf-k">Comes to</span>
                  <span className="pf-v">$119.88 / yr</span>
                </div>
              </div>
            </article>

            <article className="plan is-feat">
              <div className="plan-flag"><span className="pf-led" />Best value — save 50%</div>
              <div className="plan-inner">
                <div className="plan-label">Annual <span className="plan-tag">Limited founding rate</span></div>
                <div className="plan-price">
                  <span className="pl-cur">$</span><span className="pl-num">59.99</span><span className="pl-per">/yr</span>
                </div>
                <div className="plan-was">$74.99 / yr after launch</div>
                <div className="plan-eff">Works out to just <b>$5 / mo</b>, billed yearly.</div>
                <div className="plan-foot is-save">
                  <span className="pf-k">You save</span>
                  <span className="pf-v">$59.98 / YR</span>
                </div>
              </div>
            </article>
          </div>

          <div className="why-annual">
            <div className="wa-head">
              <span className="wa-label">Why go annual?</span>
              <span className="wa-note">12 months of monthly vs one founding year</span>
            </div>
            <div className="wa-bars">
              <div className="wa-row">
                <span className="wa-name">Monthly × 12</span>
                <span className="wa-bar"><i style={{ width: "100%" }} /></span>
                <span className="wa-amt">$119.88</span>
              </div>
              <div className="wa-row is-best">
                <span className="wa-name">Annual <span className="wa-badge">Best value</span></span>
                <span className="wa-bar"><i className="v" style={{ width: "277px" }} /></span>
                <span className="wa-amt">$59.99</span>
              </div>
            </div>
            <div className="wa-foot">Pay for the year once and it costs <b>less than half</b> of month-to-month — and your founding rate never goes up.</div>
          </div>

          <div className="fp-convert">
            <ul className="fp-checks">
              <li><i className="tick dark" />Lifetime pricing protection</li>
              <li><i className="tick dark" />First to know when app launches</li>
              <li><i className="tick dark" />Priority feedback access</li>
              <li><i className="tick dark" />Founding athlete badge</li>
            </ul>
            <div className="fp-capture">
              <EmailCapture cta="Claim founding pricing" note={<>Choose monthly or annual at launch. No spam — launch updates only.</>} />
              <div className="fp-urgency">
                <span className="fu-led" />
                Founding enrollment closes when launch capacity is reached.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- SECTION 10 · FINAL CTA (cinematic) ---------- */
function FinalCTA() {
  return (
    <section className="cine cine-final" id="final" data-screen-label="Final CTA">
      <img className="cine-img" src="images/track-lines.jpg" alt="Track lane lines curving across black asphalt" />
      <div className="cine-scrim" />
      <div className="wrap cine-inner">
        <div className="final2">
          <div className="eyebrow cine-eyebrow"><span className="dot" />One last thing</div>
          <h2 className="display final2-h">Stop guessing.<br /><span className="volt">Start dropping<br />times.</span></h2>
          <p className="final2-sub">
            Join the founding athlete list. Lock in $9.99/mo for life and be first
            through the door when Voltra launches.
          </p>
          <div className="final2-form">
            <EmailCapture onDark accent cta="Join the founding list" note={<>No spam. No daily emails. Only launch updates.</>} />
          </div>
        </div>
      </div>
    </section>);

}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <Wordmark size={22} />
        <nav className="f-links">
          <a href="#problem">Problem</a>
          <a href="#why">Why Voltra</a>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="copy">© 2026 Voltra · Train like you have a coach</div>
      </div>
    </footer>);

}

Object.assign(window, { WhoFor, FounderProof, FoundingOffer, FinalCTA, Footer });