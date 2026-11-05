/* Digital Marketing, Custom Software, IoT, Web Development sections */

import whatWeOfferImage from "../../images/What We Offer.png";
import iotBasedSolutionsImage from "../../images/IoT-Based Solutions.png";
import smartInfrastructureIcon from "../../images/Smart infrastructure systems.png";
import iotMonitoringIcon from "../../images/IoT integration for monitoring.png";
import industrialIotIcon from "../../images/Industrial IoT systems.png";
import deviceConnectivityIcon from "../../images/Device connectivity.png";
import realTimeDataIcon from "../../images/Real-time data environments.png";

const glassCard = "min-h-[194px] backdrop-blur-xl bg-white/25 border border-white/45 shadow-[0_14px_40px_rgba(0,0,0,0.28)] flex flex-col gap-3 px-3.5 py-3.5";

function GlassServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className={glassCard}>
      <div>
        <h4 className="mb-2 text-white uppercase" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(24px,2vw,28px)", fontWeight: 400, lineHeight: "1.15", overflowWrap: "normal" }}>
          {title}
        </h4>
        <p className="text-white/90" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(15px,1.3vw,16px)", lineHeight: "1.5" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

export function DigitalMarketingSection() {
  const row1 = [
    { title: "SEO Services", desc: "Keyword research, technical SEO and content optimisation that build lasting search visibility in India." },
    { title: "Performance Marketing", desc: "Paid media campaigns built for efficiency, control and measurable ROI." },
    { title: "Social Media Management", desc: "Consistent, well-planned social media management across platforms to build your brand." },
    { title: "PPC Advertising", desc: "Targeted PPC campaigns with controlled spend and continuous optimisation." },
  ];
  const row2 = [
    { title: "Answer Engine Optimization (AEO)", desc: "Content structured for AI answers, voice search and featured snippets." },
    { title: "Generative Engine Optimization (GEO)", desc: "Structured data and content signals that help your brand appear on AI platforms." },
    { title: "Email Marketing", desc: "Email marketing systems built for engagement and long-term customer relationships." },
  ];

  return (
    <section id="digital-marketing" className="relative w-full overflow-hidden border-b border-black" style={{ minHeight: "640px" }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${whatWeOfferImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center 44%",
          filter: "grayscale(1)",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto w-full px-4 py-12 sm:px-8">
        <h3
          className="mb-11 text-center uppercase text-white"
          style={{ fontFamily: "'Pirulen', 'Orbitron', sans-serif", fontSize: "clamp(30px,4vw,38px)", fontWeight: 400, letterSpacing: "0", lineHeight: "1.15" }}
        >
          Digital Marketing Services
        </h3>
        <div className="mx-auto mb-6 grid w-full max-w-[1270px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {row1.map((c) => <GlassServiceCard key={c.title} {...c} />)}
        </div>
        <div className="mx-auto grid w-full max-w-[1270px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {row2.map((c) => <GlassServiceCard key={c.title} {...c} />)}
        </div>
      </div>
    </section>
  );
}

function WhiteServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="relative flex min-h-[170px] flex-col border-r border-b border-black p-5 sm:min-h-[190px] sm:p-6">
      <div>
        <h4 className="text-[#1b1b1d] mb-3 uppercase" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(22px,2.1vw,25px)", fontWeight: 700, lineHeight: "1.18", overflowWrap: "anywhere" }}>
          {title}
        </h4>
        <p className="text-[#44474d]" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "16px", lineHeight: "1.45" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

export function CustomSoftwareSection() {
  const row1 = [
    { title: "Custom Software", desc: "Custom software built around your specific business challenges." },
    { title: "Enterprise Software", desc: "Scalable enterprise software for high-volume corporate operations." },
    { title: "CRM & ERP Software", desc: "CRM and ERP software that centralises customer data and business resources." },
    { title: "SaaS Development", desc: "Cloud-native SaaS development for products that deliver recurring value." },
  ];
  const row2 = [
    { title: "Cloud Applications", desc: "Highly available, auto-scaling cloud applications on major cloud platforms." },
    { title: "API Development", desc: "Secure, efficient APIs that connect your systems and data." },
    { title: "Automation Systems", desc: "Custom automation workflows that remove manual work and human error." },
    { title: "Data Management", desc: "Data storage, retrieval and analysis systems for large datasets." },
  ];

  return (
    <section id="custom-software" className="w-full bg-white py-10 border-b border-black">
      <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="py-1 mb-10">
          <h3
            className="text-[#222] text-center uppercase"
            style={{ fontFamily: "'Pirulen', 'Orbitron', sans-serif", fontSize: "clamp(24px,4vw,38px)", fontWeight: 400, lineHeight: "1.15" }}
          >
            Custom Software Development
          </h3>
        </div>
        <div className="grid grid-cols-1 border-t border-l border-black sm:grid-cols-2 lg:grid-cols-4">
          {row1.map((c) => (
            <WhiteServiceCard key={c.title} {...c} />
          ))}
        </div>
        <div className="mt-3 grid grid-cols-1 border-t border-l border-black sm:grid-cols-2 lg:grid-cols-4">
          {row2.map((c) => (
            <WhiteServiceCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function IoTSection() {
  const items = [
    {
      icon: smartInfrastructureIcon,
      title: "Smart Infrastructure Systems",
      desc: "Smart infrastructure systems using sensor networks and real-time analytics for facility management.",
    },
    {
      icon: iotMonitoringIcon,
      title: "IoT Monitoring Integration",
      desc: "IoT integration that connects hardware sensors to centralised software dashboards.",
    },
    {
      icon: industrialIotIcon,
      title: "Industrial IoT Systems",
      desc: "Industrial IoT systems with reliable connectivity for manufacturing and logistics.",
    },
  ];

  return (
    <section id="iot" className="w-full bg-white py-12">
      <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-12">
          {/* Left text */}
          <div className="flex-1">
            <h3
              className="text-[#222] mb-8 uppercase"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(22px,3vw,36px)" }}
            >
              IoT Solutions
            </h3>
            <div className="flex flex-col gap-10">
              {items.map((item) => (
                <div key={item.title} className="flex gap-4 sm:gap-6 items-start">
                  <div
                    className="flex items-center justify-center rounded shrink-0"
                    style={{ width: 48, height: 48, backgroundColor: "rgba(143,143,143,0.2)" }}
                  >
                    <img src={item.icon} alt="" className="h-5 w-5 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-[#222] mb-2 uppercase" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "18px", fontWeight: 600, lineHeight: "1.4" }}>
                      {item.title}
                    </h4>
                    <p className="text-[#44474d]" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px", lineHeight: "20px" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-[#c5c6cd] flex flex-wrap gap-8">
              <div className="flex items-center gap-2">
                <img src={deviceConnectivityIcon} alt="" className="h-4 w-4 object-contain" />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.7px" }}>Device connectivity</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={realTimeDataIcon} alt="" className="h-4 w-4 object-contain" />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.7px" }}>Real-time data environments</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="w-full flex-1 lg:max-w-[50%]">
            <img
              src={iotBasedSolutionsImage}
              alt="IoT Solutions"
              className="w-full object-cover"
              style={{ maxHeight: "500px", minHeight: "260px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function WebDevSection() {
  const row1 = [
    { icon: "🏛️", key: "corporate", title: <>Corporate<br />Websites</>, isHeading: true },
    { icon: "💼", key: "business", title: <>Business<br />Websites</>, isHeading: true },
    { icon: "🛒", key: "ecommerce", title: "E-Commerce Development", isHeading: true },
    { icon: "⚒️", key: "custom-web", title: "Custom Web Applications", isHeading: true },
    { icon: "🚀", key: "landing", title: <>Landing<br />Pages</>, isHeading: true },
  ];
  const row2 = [
    { icon: "📝", key: "wordpress", title: <>WordPress &amp; CMS<br />Development</>, isHeading: true },
    { icon: "🔎", key: "seo-ready", title: "SEO-Ready Architecture", isHeading: false },
    { icon: "⚡", key: "speed", title: <>Speed<br />Optimisation</>, isHeading: false },
    { icon: "🛠️", key: "support", title: "Maintenance and Support", isHeading: false },
    { icon: "📈", key: "conversion", title: "Conversion Integration", isHeading: false },
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

      <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <h3
          className="mb-10 text-center text-white uppercase"
          style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(18px,3vw,36px)" }}
        >
          Web Development Services
        </h3>
        <p className="mb-6 text-center text-white" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "16px", lineHeight: "1.5" }}>
          Fast, secure, SEO-ready websites for B2B businesses, from corporate sites to custom web applications.
        </p>
        <div className="grid grid-cols-1 min-[430px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
          {row1.map((c) => (
            <div
              key={c.key}
              className="min-h-[132px] backdrop-blur-md bg-white/30 border border-[rgba(64,64,64,0.5)] flex flex-col items-center justify-center gap-3 px-3 py-4 text-center"
            >
              <div className="text-white text-2xl">{c.icon}</div>
              {c.isHeading ? <h4 className="text-white uppercase" style={{ fontFamily: "'Pirulen', 'Orbitron', sans-serif", fontSize: "13px", lineHeight: "1.6", overflowWrap: "anywhere" }}>{c.title}</h4> : <p className="text-white uppercase" style={{ fontFamily: "'Pirulen', 'Orbitron', sans-serif", fontSize: "13px", lineHeight: "1.6", overflowWrap: "anywhere" }}>{c.title}</p>}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 min-[430px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {row2.map((c) => (
            <div
              key={c.key}
              className="min-h-[132px] backdrop-blur-md bg-white/30 border border-[rgba(64,64,64,0.5)] flex flex-col items-center justify-center gap-3 px-3 py-4 text-center"
            >
              <div className="text-white text-2xl">{c.icon}</div>
              {c.isHeading ? <h4 className="text-white uppercase" style={{ fontFamily: "'Pirulen', 'Orbitron', sans-serif", fontSize: "13px", lineHeight: "1.6", overflowWrap: "anywhere" }}>{c.title}</h4> : <p className="text-white uppercase" style={{ fontFamily: "'Pirulen', 'Orbitron', sans-serif", fontSize: "13px", lineHeight: "1.6", overflowWrap: "anywhere" }}>{c.title}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
