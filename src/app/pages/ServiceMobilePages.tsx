import type { CSSProperties } from "react";
import { ArrowRight, BarChart3, CheckCircle2, Cpu, RadioTower, Search, Share2, ShieldCheck, Zap } from "lucide-react";
import digitalHero from "../../images/Digitalmarketing.png";
import iotHero from "../../images/digitalmarketingbaner.png";
import { Footer } from "../components/ContactFAQFooter";

const digitalTech = ["GOOGLE ADS", "META ADS", "SEMRUSH", "SHOPIFY", "MAILCHIMP", "WORDPRESS", "HUBSPOT"];
const iotTech = ["AWS IOT", "AZURE IOT", "GOOGLE CLOUD", "RASPBERRY PI", "ARDUINO", "DOCKER", "MQTT", "NODE-RED"];

const digitalSolutions = [
  ["SEO Optimization", "Dominating search engines through data-driven keyword research and technical structural superiority.", Search],
  ["Social Media Marketing", "Creating viral resonance and meaningful community engagement across premium social platforms.", Share2],
  ["Performance Marketing", "Hyper-targeted ad spending designed to maximize conversion rates and overall marketing ROI.", BarChart3],
  ["Google Ads & PPC", "Strategic bidding and high-impact creative deployment to win the most valuable search real estate.", Zap],
  ["Content Marketing", "Authority-building narratives and value-led assets that nurture prospects into loyal advocates.", CheckCircle2],
  ["Branding & Strategy", "Defining the visual and strategic core of your business to ensure long-term market differentiation.", ShieldCheck],
];

const digitalMethod = [
  ["01", "Research", "Deep market and competitor analysis."],
  ["02", "Strategy", "Architecting your growth roadmap."],
  ["03", "Campaign Design", "Visual and tactical deployment."],
  ["04", "Launch", "Activating high-fidelity market presence."],
  ["05", "Optimization", "Continuous data-backed refinements."],
  ["06", "Scaling", "Accelerating success to peak volume."],
];

const digitalStats = [
  ["300%", "AVG. ROI GROWTH"],
  ["92%", "RETENTION RATE"],
  ["REAL-TIME", "ANALYTICS VISIBILITY"],
  ["150+", "CERTIFIED EXPERTS"],
  ["AI-READY", "OPTIMIZATION ENGINE"],
];

const iotServices = [
  ["Smart Home Automation", "Seamless integration of residential devices for enhanced security, comfort, and energy management.", Cpu],
  ["Industrial IoT Solutions", "Digitizing manufacturing floors with robust sensor networks for optimized throughput and safety.", RadioTower],
  ["IoT Mobile Applications", "Custom mobile interfaces designed for precise control and monitoring of connected hardware on the go.", Zap],
  ["Real-Time Monitoring", "High-fidelity data streams from field devices visualized in milliseconds for immediate action.", BarChart3],
  ["Sensor & Hardware", "End-to-end integration of custom sensors and embedded systems into centralized cloud architectures.", Cpu],
  ["Cloud-Based IoT", "Scalable backend infrastructures designed to manage millions of concurrent device connections securely.", ShieldCheck],
];

const iotProcess = [
  ["01", "Discovery", "Analyzing business requirements and edge environment constraints."],
  ["02", "Architecture", "Mapping device protocols and cloud synchronization strategies."],
  ["03", "Integration", "Hardware provisioning and custom firmware development."],
  ["04", "Connectivity", "Securing data transmission tunnels and low-latency API routes."],
  ["05", "Security", "End-to-end encryption and penetration testing on hardware."],
];

const iotResults = [
  ["Real-Time Monitoring", "Continuous observation of performance metrics across global fleets."],
  ["Predictive Maintenance", "Identify potential system failures before they result in downtime."],
  ["Secure Communication", "AES-256 encrypted tunnels for all device-to-cloud telemetry."],
  ["AI-Driven Automation", "Smart edge nodes that make local decisions to reduce latency."],
];

function Heading({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <h2
      className={dark ? "text-white uppercase" : "text-black uppercase"}
      style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(26px, 8vw, 38px)", lineHeight: 1.16 }}
    >
      {children}
    </h2>
  );
}

function Hero({
  title,
  copy,
  image,
  titleStyle,
}: {
  title: string;
  copy: string;
  image: string;
  titleStyle?: CSSProperties;
}) {
  return (
    <section className="service-hero-typography relative min-h-[620px] overflow-hidden bg-black px-5 py-12 text-white">
      <img alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" src={image} />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex min-h-[520px] flex-col justify-center">
        <h1 className="text-[38px] uppercase" style={{ fontFamily: "'Pirulen', 'Orbitron', sans-serif", lineHeight: 1.35, ...titleStyle }}>
          {title}
        </h1>
        <p className="mt-6 text-[16px] leading-7 text-white/85" style={{ fontFamily: "'Roboto', sans-serif" }}>
          {copy}
        </p>
        <button className="mt-8 flex w-full items-center justify-center gap-2 border border-white/35 bg-white/5 px-5 py-4 text-[14px] uppercase text-white backdrop-blur-md" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          BOO FREE CONSULTATION
          <ArrowRight className="size-4" />
        </button>
      </div>
    </section>
  );
}

function TechStrip({ label, items }: { label: string; items: string[] }) {
  return (
    <section className="bg-white px-5 py-8 text-black">
      <p className="text-center text-[12px] uppercase leading-5 tracking-[0.28em]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        {label}
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {items.map((item) => (
          <div className="border border-black px-3 py-3 text-center text-[13px] uppercase" key={item} style={{ fontFamily: "'Roboto', sans-serif" }}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function Cards({
  items,
  dark = false,
}: {
  items: Array<[string, string, typeof Search]>;
  dark?: boolean;
}) {
  return (
    <div className="mt-7 grid gap-4">
      {items.map(([title, body, Icon]) => (
        <article className={dark ? "border border-white/75 bg-black p-5 text-white" : "border border-black bg-white p-5 text-black"} key={title}>
          <Icon className="mb-5 size-8" />
          <h3 className="mb-3 text-[20px] leading-7" style={{ fontFamily: "'Roboto', sans-serif" }}>{title}</h3>
          <p className={dark ? "text-[15px] leading-7 text-white/70" : "text-[15px] leading-7 text-black/70"} style={{ fontFamily: "'Roboto', sans-serif" }}>
            {body}
          </p>
        </article>
      ))}
    </div>
  );
}

function Steps({ items }: { items: Array<[string, string, string]> }) {
  return (
    <div className="mt-7 grid gap-4">
      {items.map(([number, title, body]) => (
        <article className="border border-black bg-white p-5 text-black shadow-[8px_8px_0_#000]" key={number}>
          <span className="text-[26px] leading-none text-black/30" style={{ fontFamily: "'Orbitron', sans-serif" }}>{number}</span>
          <h3 className="mt-4 text-[20px] leading-7" style={{ fontFamily: "'Roboto', sans-serif" }}>{title}</h3>
          <p className="mt-2 text-[15px] leading-7 text-black/70" style={{ fontFamily: "'Roboto', sans-serif" }}>{body}</p>
        </article>
      ))}
    </div>
  );
}

function FooterCta({ title, copy }: { title: string; copy: string }) {
  return (
    <section className="bg-black px-5 py-10 text-white">
      <Heading dark>{title}</Heading>
      <p className="mt-4 text-[15px] leading-7 text-white/75" style={{ fontFamily: "'Roboto', sans-serif" }}>{copy}</p>
      <button className="mt-7 flex w-full items-center justify-center gap-2 border border-white/40 px-5 py-4 text-[14px] uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        BOO FREE CONSULTATION
        <ArrowRight className="size-4" />
      </button>
    </section>
  );
}

export function DigitalMarketingMobilePage() {
  return (
    <main className="w-full overflow-x-hidden bg-white md:hidden">
      <Hero
        title="DIGITAL MARKETING THAT DRIVES REAL GROWTH"
        copy="AetherForge blends high-precision engineering with visionary digital strategies to scale enterprise brands. We don't just run ads; we architect ecosystems of performance."
        image={digitalHero}
        titleStyle={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 500, letterSpacing: "0.01em" }}
      />
      <TechStrip label="ENGINEERED WITH INDUSTRY-LEADING TECH STACKS" items={digitalTech} />

      <section className="bg-[#fbfbfb] px-5 py-10">
        <div className="text-center">
          <Heading>STRATEGIC SOLUTIONS</Heading>
        </div>
        <Cards items={digitalSolutions} />
      </section>

      <section className="bg-white px-5 py-10">
        <div className="text-center">
          <Heading>THE AETHER METHOD</Heading>
        </div>
        <Steps items={digitalMethod} />
      </section>

      <section className="bg-black px-5 py-10 text-white">
        <Heading dark>PERFORMANCE THAT SPEAKS FOR ITSELF</Heading>
        <p className="mt-4 text-[15px] leading-7 text-white/75" style={{ fontFamily: "'Roboto', sans-serif" }}>
          We don't deal in vanity metrics. Our focus is on the numbers that move the needle: revenue, cost-per-acquisition, and lifetime value. Every campaign is a precision-engineered instrument of growth.
        </p>
        <div className="mt-7 grid gap-3">
          {digitalStats.map(([value, label]) => (
            <div className="border border-white/25 bg-white/5 p-5" key={label}>
              <p className="text-[30px] leading-10" style={{ fontFamily: "'Orbitron', sans-serif" }}>{value}</p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-white/65" style={{ fontFamily: "'Inter', sans-serif" }}>{label}</p>
            </div>
          ))}
        </div>
        <ul className="mt-7 grid gap-3 text-[15px] leading-7 text-white/80" style={{ fontFamily: "'Roboto', sans-serif" }}>
          {["Granular Audience Targeting Systems", "Automated Performance Optimization", "Dynamic Multi-Channel Attribution"].map((item) => (
            <li className="flex gap-3" key={item}><CheckCircle2 className="mt-1 size-5 shrink-0" />{item}</li>
          ))}
        </ul>
      </section>

      <FooterCta title="LET'S SCALE YOUR BRAND TO THE NEXT LEVEL" copy="Ready to engineer a digital presence that dominates? Your journey to unprecedented growth starts with a single audit." />
      <Footer />
    </main>
  );
}

export function IotMobilePage() {
  return (
    <main className="w-full overflow-x-hidden bg-white md:hidden">
      <Hero
        title="IOT-BASED SMART SOLUTIONS"
        copy="We build intelligent IoT ecosystems that connect devices, automate operations, and deliver real-time insights for smarter business decisions."
        image={iotHero}
        titleStyle={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 500, letterSpacing: "0.01em" }}
      />
      <TechStrip label="POWERED BY ADVANCED IOT TECHNOLOGIES" items={iotTech} />

      <section className="bg-[#fbfbfb] px-5 py-10">
        <div className="text-center">
          <Heading>INTELLIGENT IOT SERVICES</Heading>
          <p className="mt-4 text-[15px] leading-7 text-black/70" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Advanced connected systems engineered for automation, efficiency, and real-time monitoring.
          </p>
        </div>
        <Cards items={iotServices} />
      </section>

      <section className="bg-white px-5 py-10">
        <div className="text-center">
          <Heading>OUR CONNECTED DEVELOPMENT PROCESS</Heading>
          <p className="mt-4 text-[15px] leading-7 text-black/70" style={{ fontFamily: "'Roboto', sans-serif" }}>
            A rigorous engineering framework from hardware discovery to global cloud deployment.
          </p>
        </div>
        <Steps items={iotProcess} />
      </section>

      <section className="bg-black px-5 py-10 text-white">
        <Heading dark>SMART TECHNOLOGY. REAL RESULTS.</Heading>
        <div className="mt-7 grid gap-4">
          {iotResults.map(([title, body]) => (
            <article className="border border-white/30 p-5" key={title}>
              <h3 className="text-[20px] leading-7" style={{ fontFamily: "'Roboto', sans-serif" }}>{title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/70" style={{ fontFamily: "'Roboto', sans-serif" }}>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <FooterCta title="BUILD A SMARTER CONNECTED ECOSYSTEM" copy="From connected hardware to cloud dashboards, we can help you turn real-time data into practical business control." />
      <Footer />
    </main>
  );
}
