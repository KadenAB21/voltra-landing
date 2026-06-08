/* VOLTRA — app shell + Tweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#F5FF3D",
  "heroCard": true,
  "grain": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent", t.accent);
  }, [t.accent]);

  React.useEffect(() => {
    document.body.classList.toggle("grain", !!t.grain);
  }, [t.grain]);

  React.useEffect(() => {
    const html = document.documentElement;
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;
    html.classList.add("js-anim");
    const els = Array.from(document.querySelectorAll(".reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    requestAnimationFrame(() => els.forEach((el) => io.observe(el)));
    const t0 = setTimeout(() => els.forEach((el) => el.classList.add("is-in")), 1600);
    return () => { io.disconnect(); clearTimeout(t0); };
  }, [t.heroCard]);

  return (
    <div>
      <Nav />
      <Hero showCard={t.heroCard} />
      <Problem />
      <Dream />
      <WhyVoltra />
      <HowItWorks />
      <SessionPreview />
      <WhoFor />
      <FounderProof />
      <FoundingOffer />
      <FinalCTA />
      <Footer />

      <TweaksPanel>
        <TweakSection label="Accent" />
        <TweakColor
          label="Volt"
          value={t.accent}
          options={["#F5FF3D", "#C8FF3D", "#3DF0FF", "#FF5E3D"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakSection label="Hero" />
        <TweakToggle
          label="Proof card"
          value={t.heroCard}
          onChange={(v) => setTweak("heroCard", v)}
        />
        <TweakSection label="Imagery" />
        <TweakToggle
          label="Film grain"
          value={t.grain}
          onChange={(v) => setTweak("grain", v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
