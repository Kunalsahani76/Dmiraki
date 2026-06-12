const TICKER_ITEMS = [
  "Strategy", "Development", "SEO", "Social Media", "Branding",
  "Content", "Advertising", "Design", "Analytics", "Strategy", "Development", "SEO", "Social Media", "Branding",
  "Content", "Advertising", "Design", "Analytics",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "700px" }}
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
        style={{ height: "72px", backgroundColor: "rgba(0,0,0,0.4)" }}
      >
        <div className="flex items-center h-full animate-ticker whitespace-nowrap gap-12 px-6">
          {TICKER_ITEMS.map((item, i) => (
            <span
              key={i}
              className="text-white shrink-0 px-5 py-2 border border-dashed border-white"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "16px" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4"
        style={{ minHeight: "700px", paddingBottom: "90px" }}
      >
        <p
          className="text-white mb-8 max-w-2xl"
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: "16px",
            lineHeight: "26px",
          }}
        >
          brings together digital marketing, web development, software engineering,
          and application development into a single, structured system.
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
          contact US
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
