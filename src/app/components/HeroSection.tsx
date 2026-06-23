import introVideo from "../../images/intro.mp4";

const TICKER_ITEMS = [
  "STRATEGY", "DEVELOPMENT", "SEO", "SOCIAL MEDIA", "BRANDING",
  "CONTENT", "ADVERTISING", "DESIGN", "ANALYTICS", "STRATEGY", "DEVELOPMENT", "SEO", "SOCIAL MEDIA", "BRANDING",
  "CONTENT", "ADVERTISING", "DESIGN", "ANALYTICS",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "clamp(560px, 86vh, 700px)" }}
    >
      {/* Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src={introVideo}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Ticker at bottom */}
      <div
        className="absolute left-0 right-0 overflow-hidden"
        style={{
          bottom: "clamp(78px, 12vh, 118px)",
          height: "clamp(58px, 9vw, 72px)",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <div className="flex items-center h-full animate-ticker whitespace-nowrap gap-12 px-6">
          {TICKER_ITEMS.map((item, i) => (
            <span
              key={i}
              className="text-white shrink-0 px-5 py-2 border border-dashed border-white uppercase"
              style={{
                fontFamily: "'Pirulen', 'Orbitron', sans-serif",
                fontSize: "clamp(18px, 3.2vw, 26px)",
                fontWeight: 400,
                letterSpacing: "0.02em",
                lineHeight: "1.2",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4"
        style={{ minHeight: "clamp(560px, 86vh, 700px)", paddingBottom: "90px" }}
      >
        <h1
          className="home-hero-brand text-white mb-8 flex items-center justify-center"
          style={{
            fontFamily: "'Pirulen', 'Pirulen Rg', 'Orbitron', sans-serif",
            fontSize: "clamp(42px, 6.6vw, 64px)",
            letterSpacing: "0",
            lineHeight: "1",
            fontWeight: 400,
            fontStyle: "normal",
            gap: "clamp(20px, 4.2vw, 54px)",
          }}
        >
          <span>D&apos;</span>
          <span style={{ marginLeft: "clamp(-10px, -0.8vw, -6px)" }}>M</span>
          <span>I</span>
          <span>R</span>
          <span>A</span>
          <span>K</span>
          <span>I</span>
        </h1>
        <p
          className="text-white mb-8 max-w-2xl"
          style={{
            fontFamily: "'Inter', 'Roboto', sans-serif",
            fontSize: "clamp(14px,3.8vw,16px)",
            lineHeight: "26px",
            fontWeight: 400,
            letterSpacing: "0",
          }}
        >
          Brings Together Digital Marketing, Web Development, Software Engineering,
          And Application Development Into A Single, Structured System.
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="border border-white px-14 py-5 text-white hover:bg-white hover:text-black transition-colors uppercase"
          style={{
            fontFamily: "'Pirulen', 'Orbitron', sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            letterSpacing: "0.16em",
            lineHeight: "1",
          }}
        >
          CONTACT US
        </a>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
