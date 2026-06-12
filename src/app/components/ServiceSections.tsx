/* Digital Marketing, Custom Software, IoT, Web Development sections */

const glassCard = "backdrop-blur-md bg-white/30 border border-[rgba(64,64,64,0.5)] flex flex-col gap-3 px-4 py-3";

function GlassServiceCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className={glassCard}>
      <div className="text-white text-2xl">{icon}</div>
      <div>
        <p className="text-white mb-1" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "14px", lineHeight: "1.6" }}>
          {title}
        </p>
        <p className="text-[#eee]" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px", lineHeight: "22px" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

export function DigitalMarketingSection() {
  const row1 = [
    { icon: "🔍", title: "Search Engine Optimization (SEO)", desc: "Keyword architecture, technical structure, and content alignment for sustained search visibility" },
    { icon: "📊", title: "Performance Marketing", desc: "Paid media campaigns structured for efficiency, control, and measurable return." },
    { icon: "📱", title: "Social Media Management (SMO)", desc: "Planned and managed communication across platforms with consistency and clarity." },
    { icon: "💰", title: "Pay Per Click Advertising (PPC)", desc: "Targeted campaigns with controlled spend and continuous optimisation." },
  ];
  const row2 = [
    { icon: "🌐", title: "Website Development", desc: "Responsive, secure websites built for performance, search compatibility, and usability." },
    { icon: "🤖", title: "Answer Engine Optimization (AEO)", desc: "Content structured for AI-generated answers, voice search, and featured results." },
    { icon: "✨", title: "Generative Engine Optimization (GEO)", desc: "Brand presence aligned with AI platforms through structured data and content signals." },
    { icon: "📧", title: "Email Marketing", desc: "Direct communication systems designed for engagement and continuity." },
  ];

  return (
    <section id="digital-marketing" className="relative w-full overflow-hidden" style={{ minHeight: "600px" }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <h2
          className="text-white mb-10"
          style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(22px,4vw,36px)" }}
        >
          Digital Marketing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {row1.map((c) => <GlassServiceCard key={c.title} {...c} />)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {row2.map((c) => <GlassServiceCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  );
}

function WhiteServiceCard({
  icon,
  title,
  desc,
  borderStyle,
}: {
  icon: string;
  title: string;
  desc: string;
  borderStyle?: string;
}) {
  return (
    <div className={`relative flex flex-col gap-4 p-8 ${borderStyle ?? "border border-black"}`}>
      <div className="text-2xl">{icon}</div>
      <div>
        <p className="text-[#1b1b1d] mb-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: "20px", fontWeight: 600, lineHeight: "1.4" }}>
          {title}
        </p>
        <p className="text-[#44474d]" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "15px", lineHeight: "24px" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

export function CustomSoftwareSection() {
  const row1 = [
    { icon: "⚙️", title: "Custom software", desc: "Tailored codebases built to solve specific organizational challenges." },
    { icon: "🏢", title: "Enterprise systems", desc: "Robust, scalable platforms for high-volume corporate operations." },
    { icon: "🔄", title: "CRM and ERP platforms", desc: "Centralized resource management and customer relationship architecture." },
    { icon: "☁️", title: "SaaS products", desc: "Cloud-native software products designed for recurring value delivery." },
  ];
  const row2 = [
    { icon: "🌩️", title: "Cloud-based applications", desc: "Highly available, auto-scaling solutions deployed on major cloud providers." },
    { icon: "🔗", title: "API development", desc: "Secure and efficient data interfaces for ecosystem interoperability." },
    { icon: "⚡", title: "Automation systems", desc: "Custom workflows that eliminate manual friction and human error." },
    { icon: "🗄️", title: "Data management", desc: "Complex storage, retrieval, and analysis systems for big data." },
  ];

  return (
    <section id="custom-software" className="w-full bg-white py-8 border-b border-black">
      <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="border-b border-black py-5 mb-8">
          <h2
            className="text-[#222] text-center"
            style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(18px,3vw,36px)" }}
          >
            Custom Software Development
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-4">
          {row1.map((c, i) => (
            <WhiteServiceCard
              key={c.title}
              {...c}
              borderStyle={
                i === 0
                  ? "border-t border-l border-b border-black"
                  : i === 3
                  ? "border-t border-r border-b border-black"
                  : "border border-black"
              }
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-black">
          {row2.map((c) => (
            <WhiteServiceCard key={c.title} {...c} borderStyle="border-r border-black last:border-r-0" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function IoTSection() {
  const items = [
    {
      title: "Smart infrastructure systems",
      desc: "Intelligent facility management through sensor networks and real-time analytics.",
    },
    {
      title: "IoT integration for monitoring",
      desc: "Seamless bridging of hardware sensors with centralized software dashboards.",
    },
    {
      title: "Industrial IoT systems",
      desc: "Hardened, industrial-grade connectivity for manufacturing and logistics.",
    },
  ];

  return (
    <section id="iot" className="w-full bg-white py-12">
      <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left text */}
          <div className="flex-1">
            <h2
              className="text-[#222] mb-8"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(22px,3vw,36px)" }}
            >
              IoT-Based Solutions
            </h2>
            <div className="flex flex-col gap-10">
              {items.map((item) => (
                <div key={item.title} className="flex gap-6 items-start">
                  <div
                    className="flex items-center justify-center rounded shrink-0"
                    style={{ width: 48, height: 48, backgroundColor: "rgba(143,143,143,0.2)" }}
                  >
                    <span className="text-xl">📡</span>
                  </div>
                  <div>
                    <p className="text-[#222] mb-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: "20px", fontWeight: 600, lineHeight: "1.4" }}>
                      {item.title}
                    </p>
                    <p className="text-[#44474d]" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "15px", lineHeight: "24px" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-[#c5c6cd] flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.7px" }}>Device connectivity</span>
              </div>
              <div className="flex items-center gap-2">
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.7px" }}>Real-time data environments</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 lg:max-w-[50%]">
            <img
              src="https://images.unsplash.com/photo-1703675858673-56aab77ccbec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="IoT Solutions"
              className="w-full object-cover"
              style={{ maxHeight: "500px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function WebDevSection() {
  const row1 = [
    { icon: "🏛️", title: "Corporate Websites" },
    { icon: "💼", title: "Business websites" },
    { icon: "🛒", title: "E-commerce platforms" },
    { icon: "⚒️", title: "Custom web applications" },
    { icon: "🚀", title: "Landing pages" },
  ];
  const row2 = [
    { icon: "📝", title: "CMS and wordpress" },
    { icon: "🔎", title: "SEO-ready architecture" },
    { icon: "⚡", title: "Speed optimisation" },
    { icon: "🛠️", title: "Maintenance and support" },
    { icon: "📈", title: "Conversion integration" },
  ];

  return (
    <section id="web-dev" className="relative w-full overflow-hidden" style={{ minHeight: "460px" }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1626908013351-800ddd734b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <h2
          className="text-white mb-10"
          style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(18px,3vw,36px)" }}
        >
          Web Development Services
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
          {row1.map((c) => (
            <div
              key={c.title}
              className="backdrop-blur-md bg-white/30 border border-[rgba(64,64,64,0.5)] flex flex-col items-center gap-3 px-3 py-4 text-center"
            >
              <div className="text-white text-2xl">{c.icon}</div>
              <p className="text-white" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "13px", lineHeight: "1.6" }}>
                {c.title}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {row2.map((c) => (
            <div
              key={c.title}
              className="backdrop-blur-md bg-white/30 border border-[rgba(64,64,64,0.5)] flex flex-col items-center gap-3 px-3 py-4 text-center"
            >
              <div className="text-white text-2xl">{c.icon}</div>
              <p className="text-white" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "13px", lineHeight: "1.6" }}>
                {c.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
