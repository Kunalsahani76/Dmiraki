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
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1626908013351-800ddd734b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Ticker at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{ height: "clamp(58px, 9vw, 72px)", backgroundColor: "rgba(0,0,0,0.4)" }}
      >
        <div className="flex items-center h-full animate-ticker whitespace-nowrap gap-12 px-6">
          {TICKER_ITEMS.map((item, i) => (
            <span
              key={i}
              className="text-white shrink-0 px-5 py-2 border border-dashed border-white"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(12px, 3.2vw, 16px)" }}
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
          className="text-white mb-8"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "clamp(34px,10vw,66px)",
            letterSpacing: "clamp(3px,2.8vw,42px)",
            lineHeight: "1.1",
            fontWeight: 400,
            paddingLeft: "clamp(3px,2.8vw,42px)",
          }}
        >
          D&apos;MIRAKI
        </h1>
        <p
          className="text-white mb-8 max-w-2xl"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: "clamp(14px,3.8vw,16px)",
            lineHeight: "26px",
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
          className="border border-dashed border-white px-6 py-3 text-white hover:bg-white hover:text-black transition-colors"
          style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "16px" }}
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
