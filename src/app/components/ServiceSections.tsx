/* Digital Marketing, Custom Software, IoT, Web Development sections */

import type { ComponentType } from "react";
import {
  Blocks,
  Building2,
  Cloud,
  CloudCog,
  Code2,
  Database,
  Network,
  Workflow,
} from "lucide-react";
import whatWeOfferImage from "../../images/What We Offer.png";
import iotBasedSolutionsImage from "../../images/IoT-Based Solutions.png";
import smartInfrastructureIcon from "../../images/Smart infrastructure systems.png";
import iotMonitoringIcon from "../../images/IoT integration for monitoring.png";
import industrialIotIcon from "../../images/Industrial IoT systems.png";
import deviceConnectivityIcon from "../../images/Device connectivity.png";
import realTimeDataIcon from "../../images/Real-time data environments.png";
import seoIcon from "../../icons/seo.png";
import pmIcon from "../../icons/pm.png";
import smoIcon from "../../icons/smo.png";
import ppcIcon from "../../icons/ppc.png";
import wdIcon from "../../icons/wd.png";
import aeoIcon from "../../icons/aeo.png";
import geoIcon from "../../icons/geo.png";
import emIcon from "../../icons/em.png";

const glassCard = "min-h-[194px] backdrop-blur-xl bg-white/25 border border-white/45 shadow-[0_14px_40px_rgba(0,0,0,0.28)] flex flex-col gap-3 px-3.5 py-3.5";

function GlassServiceCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className={glassCard}>
      <img src={icon} alt="" className="h-[31px] w-[38px] object-contain object-left" />
      <div>
        <p className="mb-2 text-white" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(24px,2vw,28px)", fontWeight: 400, lineHeight: "1.15", overflowWrap: "normal" }}>
          {title}
        </p>
        <p className="text-white/90" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(15px,1.3vw,16px)", lineHeight: "1.5" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

export function DigitalMarketingSection() {
  const row1 = [
    { icon: seoIcon, title: "Search Engine Optimization (SEO)", desc: "Keyword architecture, technical structure, and content alignment for sustained search visibility" },
    { icon: pmIcon, title: "Performance Marketing", desc: "Paid media campaigns structured for efficiency, control, and measurable return." },
    { icon: smoIcon, title: "Social Media Management (SMO)", desc: "Planned and managed communication across platforms with consistency and clarity." },
    { icon: ppcIcon, title: "Pay Per Click Advertising (PPC)", desc: "Targeted campaigns with controlled spend and continuous optimisation." },
  ];
  const row2 = [
    { icon: wdIcon, title: "Website Development", desc: "Responsive, secure websites built for performance, search compatibility, and usability." },
    { icon: aeoIcon, title: "Answer Engine Optimization (AEO)", desc: "Content structured for AI-generated answers, voice search, and featured results." },
    { icon: geoIcon, title: "Generative Engine Optimization (GEO)", desc: "Brand presence aligned with AI platforms through structured data and content signals." },
    { icon: emIcon, title: "Email Marketing", desc: "Direct communication systems designed for engagement and continuity." },
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
        <h2
          className="mb-11 text-center uppercase text-white"
          style={{ fontFamily: "'Pirulen', 'Orbitron', sans-serif", fontSize: "clamp(30px,4vw,38px)", fontWeight: 400, letterSpacing: "0", lineHeight: "1.15" }}
        >
          DIGITAL MARKETING
        </h2>
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

function WhiteServiceCard({
  icon,
  title,
  desc,
}: {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  desc: string;
}) {
  const Icon = icon;

  return (
    <div className="relative flex min-h-[228px] flex-col gap-5 border-r border-b border-black p-7 sm:min-h-[288px] sm:p-8">
      <Icon className="h-6 w-6 text-black" strokeWidth={2} />
      <div>
        <p className="text-[#1b1b1d] mb-3" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(22px,2.1vw,25px)", fontWeight: 700, lineHeight: "1.18", overflowWrap: "anywhere" }}>
          {title}
        </p>
        <p className="text-[#44474d]" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "16px", lineHeight: "1.45" }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

export function CustomSoftwareSection() {
  const row1 = [
    { icon: Blocks, title: "Custom software", desc: "Tailored codebases built to solve specific organizational challenges." },
    { icon: Building2, title: "Enterprise systems", desc: "Robust, scalable platforms for high-volume corporate operations." },
    { icon: Network, title: "CRM and ERP platforms", desc: "Centralized resource management and customer relationship architecture." },
    { icon: CloudCog, title: "SaaS products", desc: "Cloud-native software products designed for recurring value delivery." },
  ];
  const row2 = [
    { icon: Cloud, title: "Cloud-based applications", desc: "Highly available, auto-scaling solutions deployed on major cloud providers." },
    { icon: Code2, title: "API development", desc: "Secure and efficient data interfaces for ecosystem interoperability." },
    { icon: Workflow, title: "Automation systems", desc: "Custom workflows that eliminate manual friction and human error." },
    { icon: Database, title: "Data management", desc: "Complex storage, retrieval, and analysis systems for big data." },
  ];

  return (
    <section id="custom-software" className="w-full bg-white py-10 border-b border-black">
      <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="py-1 mb-10">
          <h2
            className="text-[#222] text-center"
            style={{ fontFamily: "'Pirulen', 'Orbitron', sans-serif", fontSize: "clamp(24px,4vw,38px)", fontWeight: 400, lineHeight: "1.15" }}
          >
            CUSTOM SOFTWARE DEVELOPMENT
          </h2>
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
      title: "Smart infrastructure systems",
      desc: "Intelligent facility management through sensor networks and real-time analytics.",
    },
    {
      icon: iotMonitoringIcon,
      title: "IoT integration for monitoring",
      desc: "Seamless bridging of hardware sensors with centralized software dashboards.",
    },
    {
      icon: industrialIotIcon,
      title: "Industrial IoT systems",
      desc: "Hardened, industrial-grade connectivity for manufacturing and logistics.",
    },
  ];

  return (
    <section id="iot" className="w-full bg-white py-12">
      <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-12">
          {/* Left text */}
          <div className="flex-1">
            <h2
              className="text-[#222] mb-8"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(22px,3vw,36px)" }}
            >
              IOT-BASED SOLUTIONS
            </h2>
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
                    <p className="text-[#222] mb-2" style={{ fontFamily: "'Roboto', sans-serif", fontSize: "18px", fontWeight: 600, lineHeight: "1.4" }}>
                      {item.title}
                    </p>
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
    { icon: "🏛️", title: "CORPORATE WEBSITES" },
    { icon: "💼", title: "BUSINESS WEBSITES" },
    { icon: "🛒", title: "E-COMMERCE PLATFORMS" },
    { icon: "⚒️", title: "CUSTOM WEB APPLICATIONS" },
    { icon: "🚀", title: "LANDING PAGES" },
  ];
  const row2 = [
    { icon: "📝", title: "CMS AND WORDPRESS" },
    { icon: "🔎", title: "SEO-READY ARCHITECTURE" },
    { icon: "⚡", title: "SPEED OPTIMISATION" },
    { icon: "🛠️", title: "MAINTENANCE AND SUPPORT" },
    { icon: "📈", title: "CONVERSION INTEGRATION" },
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
        <h2
          className="mb-10 text-center text-white"
          style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(18px,3vw,36px)" }}
        >
          WEB DEVELOPMENT SERVICES
        </h2>
        <div className="grid grid-cols-1 min-[430px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
          {row1.map((c) => (
            <div
              key={c.title}
              className="min-h-[132px] backdrop-blur-md bg-white/30 border border-[rgba(64,64,64,0.5)] flex flex-col items-center justify-center gap-3 px-3 py-4 text-center"
            >
              <div className="text-white text-2xl">{c.icon}</div>
              <p className="text-white" style={{ fontFamily: "'Pirulen', 'Orbitron', sans-serif", fontSize: "13px", lineHeight: "1.6", overflowWrap: "anywhere" }}>
                {c.title}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 min-[430px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {row2.map((c) => (
            <div
              key={c.title}
              className="min-h-[132px] backdrop-blur-md bg-white/30 border border-[rgba(64,64,64,0.5)] flex flex-col items-center justify-center gap-3 px-3 py-4 text-center"
            >
              <div className="text-white text-2xl">{c.icon}</div>
              <p className="text-white" style={{ fontFamily: "'Pirulen', 'Orbitron', sans-serif", fontSize: "13px", lineHeight: "1.6", overflowWrap: "anywhere" }}>
                {c.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
