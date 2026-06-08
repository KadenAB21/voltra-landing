/* VOLTRA — page sections, part 1. Primitives from components.jsx */

function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" aria-label="Voltra home"><Wordmark /></a>
        <nav className="nav-links">
          <a className="mono hide-sm" href="#why">Why Voltra</a>
          <a className="mono hide-sm" href="#how">How it works</a>
          <a className="mono hide-sm" href="#pricing">Pricing</a>
          <a className="btn btn-primary btn-sm" href="#join">Join the list</a>
        </nav>
      </div>
    </header>);

}

/* ---------- HERO (unchanged — the north star) ---------- */
function HeroProofCard() {
  return (
    <div className="proof-card">
      <div className="proof-top">
        <span className="pc-label">TODAY'S SESSION</span>
        <span className="chip is-accent"><span className="led" />Readiness 82%</span>
      </div>
      <div className="proof-day">Acceleration day</div>
      <ul className="proof-list">
        <li><span className="pl-k">4×20m</span> Block starts</li>
        <li><span className="pl-k">3×30m</span> Sled pulls</li>
        <li><span className="pl-k">2×60m</span> Fly sprints</li>
      </ul>
      <div className="proof-foot">
        <span className="pf-lab">CNS load</span>
        <span className="pf-val">Managed</span>
      </div>
    </div>);

}

function Hero({ showCard = true }) {
  return (
    <section className="hero" id="top" data-screen-label="Hero" style={{ color: "rgb(208, 208, 208)", fontSize: "24px" }}>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="eyebrow heroA-eyebrow reveal"><span className="dot" />Founding athlete access</div>
          <h1 className="display heroA-title reveal d1">
            <div>You don't have</div>
            <div>a coach.</div>
            <div>Now you do.</div>
          </h1>
          <p className="heroA-sub reveal d2">
            Daily sprint training generated from your readiness, CNS load, and training phase.
            <b> Built for athletes who refuse to guess.</b>
          </p>
          <div className="reveal d3" id="join">
            <EmailCapture accent cta="Join the founding athlete list" note={<>We email once, before launch. <span className="vk">No spam.</span></>} />
            <ul className="hero-checks">
              <li><i className="tick" />Lock in $9.99/month for life</li>
              <li><i className="tick" />Or $59.99/year — before it jumps to $74.99</li>
              <li><i className="tick" />Receive email the day of public launch</li>
              <li><i className="tick" />Founding athlete status</li>
            </ul>
          </div>
        </div>

        <div className="hero-stack reveal d2">
          <div className="hero-photo">
            <img className="hero-img" src="images/hero-runner-opt.jpg" alt="Sprinter accelerating on a red track in yellow spikes" />
          </div>
          {showCard && <HeroProofCard />}
        </div>
      </div>
    </section>);

}

/* ---------- SECTION 2 · THE PROBLEM (cinematic) ---------- */
function Problem() {
  return (
    <section className="cine cine-dark" id="problem" data-screen-label="The Problem">
      <img className="cine-img" src="images/problem-runners.jpg" alt="Three runners at speed, motion blur, black and white" style={{ objectPosition: "50% 42%" }} />
      <div className="cine-scrim" />
      <div className="wrap cine-inner">
        <div className="cine-content">
          <div className="eyebrow cine-eyebrow"><span className="dot" />The problem</div>
          <h2 className="display cine-title reveal">Most sprinters are<br />training <span className="volt">blind.</span></h2>
          <p className="cine-lead reveal d1">
            You show up early. You stay late. You leave everything on the track —
            then drive home and guess whether any of it was the right work.
          </p>
          <p className="cine-punch reveal d2">Hard work you can't aim is just fatigue.</p>
        </div>
      </div>
    </section>);

}

/* ---------- SECTION 3 · THE DREAM (cinematic) ---------- */
function Dream() {
  const outcomes = [
  "Times that keep dropping.",
  "Confidence that doesn't flinch at the line.",
  "A body that holds up all season.",
  "Every ounce of talent — used."];

  return (
    <section className="cine cine-dream" id="dream" data-screen-label="The Dream">
      <img className="cine-img" src="images/dream-sprinter.jpg" alt="Sprinter at golden hour, sunlight flare behind" style={{ objectPosition: "50% 38%" }} />
      <div className="cine-scrim" />
      <div className="wrap cine-inner">
        <div className="cine-content cine-content-wide">
          <div className="eyebrow cine-eyebrow"><span className="dot" />The dream</div>
          <h2 className="display cine-title reveal">Every decision.<br /><span className="volt">Right.</span></h2>
          <p className="cine-lead reveal d1">What changes when nothing you do on the track is wasted?</p>
          <ul className="dream-list reveal d2">
            {outcomes.map((o) => <li key={o}>{o}</li>)}
          </ul>
        </div>
      </div>
    </section>);

}

/* ---------- SECTION 4 · WHY VOLTRA EXISTS ---------- */
function WhyVoltra() {
  return (
    <section className="section why" id="why" data-screen-label="Why Voltra">
      <div className="wrap why-grid2">
        <div className="why-l">
          <div className="eyebrow"><span className="dot" />Why Voltra exists</div>
          <h2 className="display why-h reveal">
            Elite athletes have<br />elite coaching.<br /><span className="why-dim">You should too.</span>
          </h2>
        </div>
        <div className="why-r reveal d1">
          <p className="why-p">
            The fastest sprinters in the world don't train harder than you. They train
            with someone making the right call — every session, every week, every phase.
          </p>
          <p className="why-p">Almost no one else gets that.</p>
          <div className="why-punch">Voltra closes the <span className="volt">gap.</span></div>
        </div>
      </div>
    </section>);

}

/* ---------- SECTION 5 · HOW IT WORKS (condensed → outputs) ---------- */
function HowItWorks() {
  const beats = [
  { k: "01", lead: "It knows when to", em: "push you." },
  { k: "02", lead: "It knows when to", em: "pull you back." },
  { k: "03", lead: "It never hands you a day that", em: "doesn't fit." }];

  return (
    <section className="section how2" id="how" data-screen-label="How it works">
      <div className="wrap">
        <div className="how2-head">
          <div className="eyebrow"><span className="dot" />How it works</div>
          <h2 className="display how2-h reveal">You log.<br /><span className="why-dim">Voltra decides.</span></h2>
          <p className="how2-sub reveal d1">
            Thirty seconds of input. One session that's exactly right — built, scaled,
            and explained. Every single day.
          </p>
        </div>
        <ul className="how2-list">
          {beats.map((b) =>
          <li className="reveal" key={b.k}>
              <span className="h2-k">{b.k}</span>
              <p>{b.lead} <b>{b.em}</b></p>
            </li>
          )}
        </ul>
      </div>
    </section>);

}

Object.assign(window, { Nav, Hero, HeroProofCard, Problem, Dream, WhyVoltra, HowItWorks });