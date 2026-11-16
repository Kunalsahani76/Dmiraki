import type { CSSProperties } from "react";
import { ArrowRight, BarChart3, CheckCircle2, Cpu, RadioTower, Search, Share2, ShieldCheck, Zap } from "lucide-react";
import digitalHero from "../../images/Digitalmarketing.png";
import iotHero from "../../images/digitalmarketingbaner.png";
import { MarketingToolLogo } from "../components/MarketingToolLogo";
import { SoftwareTechLogo } from "../components/SoftwareTechLogo";
import { DigitalMarketingFAQSection, IoTFAQSection } from "../components/ContactFAQFooter";

const digitalTech = ["GOOGLE ADS", "META ADS", "SEMRUSH", "SHOPIFY", "MAILCHIMP", "WORDPRESS", "HUBSPOT"];
const iotTech = ["AWS IOT", "AZURE IOT", "GOOGLE CLOUD", "RASPBERRY PI", "ARDUINO", "DOCKER", "MQTT", "NODE-RED"];

const digitalSolutions = [
  ["SEO Services", "Keyword research, technical SEO and content optimisation that build lasting search visibility in India.", Search],
  ["Social Media Marketing", "Social media marketing that builds community engagement and brand awareness across major platforms.", Share2],
  ["Performance Marketing", "Targeted paid campaigns built to improve conversion rates and marketing ROI.", BarChart3],
  ["PPC Management", "Google Ads and PPC management with smart bidding and strong ad creative to capture high-value searches.", Zap],
  ["Content Marketing", "Content marketing that builds authority and turns prospects into loyal customers.", CheckCircle2],
  ["Branding & Strategy", "Branding that defines your visual identity and strategy so you stand out in your market.", ShieldCheck],
];

const digitalMethod = [
  ["01", "Research", "Market and competitor analysis."],
  ["02", "Strategy", "A clear growth roadmap for your business."],
  ["03", "Campaign Design", "Designing creatives and campaign structure."],
  ["04", "Launch", "Going live across your chosen channels."],
  ["05", "Optimization", "Continuous improvements backed by data."],
  ["06", "Scaling", "Scaling what works to reach more customers."],
];

const digitalStats = [
  ["300%", "Average ROI Growth"],
  ["92%", "Client Retention Rate"],
  ["REAL-TIME", "Analytics"],
  ["150+", "Certified Experts"],
  ["AI-READY", "Search Engine Optimization"],
];

const iotServices = [
  ["Smart Home Automation", "Smart home automation that connects residential devices for better security, comfort and energy management.", Cpu],
  ["Industrial IoT Solutions", "Industrial IoT solutions that digitise manufacturing floors with sensor networks for better throughput and safety.", RadioTower],
  ["IoT App Development", "IoT app development for mobile apps that control and monitor connected hardware from anywhere.", Zap],
  ["IoT Dashboard Development", "IoT dashboards that show live data from field devices so you can act immediately.", BarChart3],
  ["Sensor & Hardware Integration", "End-to-end integration of custom sensors and embedded systems with centralised cloud platforms.", Cpu],
  ["Cloud-Based IoT", "Scalable, secure cloud backends that manage large numbers of connected devices.", ShieldCheck],
];

const iotProcess = [
  ["01", "Discovery", "Analysing business requirements and device environment constraints."],
  ["02", "Architecture", "Mapping device protocols and cloud synchronization strategies."],
  ["03", "Integration", "Hardware provisioning and custom firmware development."],
  ["04", "Connectivity", "Secure data transmission and low-latency API routes."],
  ["05", "Security", "End-to-end encryption and penetration testing on hardware."],
];

const iotResults = [
  ["Real-Time Monitoring", "Continuous monitoring of performance metrics across your device fleet."],
  ["Predictive Maintenance", "Spot potential failures before they cause downtime."],
  ["Secure IoT Communication", "Encrypted communication between connected devices and cloud platforms."],
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
          BOOK FREE CONSULTATION
          <ArrowRight className="size-4" />
        </button>
      </div>
    </section>
  );
}

function TechStrip({ label, items }: { label: string; items: string[] }) {
  return (
    <section className="bg-white px-5 py-8 text-black">
      <p className="text-center text-[14px] font-bold uppercase leading-5 tracking-[0.28em]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        {label}
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map((item) => (
          <figure className="flex min-h-[112px] flex-col items-center justify-center gap-2 px-2 py-3 text-center" key={item}>
            {label === "Tools We Work With" ? <MarketingToolLogo name={item} /> : <SoftwareTechLogo name={item} />}
            <figcaption className="text-[12px] font-bold uppercase text-[#888]" style={{ fontFamily: "'Roboto', sans-serif" }}>{item}</figcaption>
          </figure>
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
      {items.map(([title, body, Icon]) => {
        const card = (
          <article className={dark ? "border border-white/75 bg-black p-5 text-white" : "border border-black bg-white p-5 text-black"} key={title}>
            <Icon className="mb-5 size-8" />
            <h3 className="mb-3 text-[20px] leading-7" style={{ fontFamily: "'Roboto', sans-serif" }}>{title}</h3>
            <p className={dark ? "text-[15px] leading-7 text-white/70" : "text-[15px] leading-7 text-black/70"} style={{ fontFamily: "'Roboto', sans-serif" }}>
              {body}
            </p>
          </article>
        );

        return title === "SEO Services" ? <a className="block text-inherit no-underline" href="/seo-services" key={title}>{card}</a> : card;
      })}
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

function FooterCta({ title, copy, buttonLabel = "BOOK FREE CONSULTATION" }: { title: string; copy: string; buttonLabel?: string }) {
  return (
    <section className="bg-black px-5 py-10 text-white">
      <Heading dark>{title}</Heading>
      <p className="mt-4 text-[15px] leading-7 text-white/75" style={{ fontFamily: "'Roboto', sans-serif" }}>{copy}</p>
      <button className="mt-7 flex w-full items-center justify-center gap-2 border border-white/40 px-5 py-4 text-[14px] uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        {buttonLabel}
        <ArrowRight className="size-4" />
      </button>
    </section>
  );
}

export function DigitalMarketingMobilePage() {
  return (
    <main className="w-full overflow-x-hidden bg-white md:hidden">
      <Hero
        title="Digital Marketing Services"
        copy="D'Miraki is a digital marketing agency in India built around leads, not vanity metrics. We combine SEO, PPC, social media, content and branding to grow businesses across Delhi NCR and India."
        image={digitalHero}
        titleStyle={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 500, letterSpacing: "0.01em" }}
      />
      <TechStrip label="Tools We Work With" items={digitalTech} />

      <section className="bg-[#fbfbfb] px-5 py-10">
        <div className="text-center">
          <Heading>Our Digital Marketing Services</Heading>
        </div>
        <Cards items={digitalSolutions} />
      </section>

      <section className="bg-white px-5 py-10">
        <div className="text-center">
          <Heading>Our Process</Heading>
        </div>
        <Steps items={digitalMethod} />
      </section>

      <section className="bg-black px-5 py-10 text-white">
        <Heading dark>Measurable Results</Heading>
        <p className="mt-4 text-[15px] leading-7 text-white/75" style={{ fontFamily: "'Roboto', sans-serif" }}>
          We don't chase vanity metrics. We focus on revenue, cost per acquisition and customer lifetime value. Every campaign is built to drive measurable growth.
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
          {["Audience Targeting", "Automated Campaign Optimization", "Multi-Channel Attribution"].map((item) => (
            <li className="flex gap-3" key={item}><CheckCircle2 className="mt-1 size-5 shrink-0" />{item}</li>
          ))}
        </ul>
      </section>

      <FooterCta title="Book a Free Strategy Call" copy="Ready to grow your business online? Start with a free consultation with our Delhi NCR team." />
      <DigitalMarketingFAQSection />
    </main>
  );
}

export function IotMobilePage() {
  return (
    <main className="w-full overflow-x-hidden bg-white md:hidden">
      <Hero
        title="IoT Solutions and Development Services"
        copy="D'Miraki is an IoT development company in India. We connect devices, dashboards and data, so businesses in Delhi NCR and across India can automate operations and decide from real-time insights."
        image={iotHero}
        titleStyle={{ fontFamily: "'Pirulen', 'Pirulen Rg', 'Orbitron', sans-serif", fontWeight: 500, letterSpacing: "0.01em" }}
      />
      <TechStrip label="Technologies We Use" items={iotTech} />

      <section className="bg-[#fbfbfb] px-5 py-10">
        <div className="text-center">
          <Heading>IoT Development Services</Heading>
          <p className="mt-4 text-[15px] leading-7 text-black/70" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Connected systems for automation, efficiency and real-time monitoring.
          </p>
        </div>
        <Cards items={iotServices} />
      </section>

      <section className="bg-white px-5 py-10">
        <div className="text-center">
          <Heading>Our IoT Development Process</Heading>
          <p className="mt-4 text-[15px] leading-7 text-black/70" style={{ fontFamily: "'Roboto', sans-serif" }}>
            A clear engineering process from hardware discovery to cloud deployment.
          </p>
        </div>
        <Steps items={iotProcess} />
      </section>

      <section className="bg-black px-5 py-10 text-white">
        <Heading dark>Key IoT Capabilities</Heading>
        <div className="mt-7 grid gap-4">
          {iotResults.map(([title, body]) => (
            <article className="border border-white/30 p-5" key={title}>
              <h3 className="text-[20px] leading-7" style={{ fontFamily: "'Roboto', sans-serif" }}>{title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/70" style={{ fontFamily: "'Roboto', sans-serif" }}>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <FooterCta title="Book a Free IoT Consultation" copy="From connected hardware to cloud dashboards, we help you turn real-time data into practical business control. Talk to our Delhi NCR IoT team today." buttonLabel="BOOK FREE IOT CONSULTATION" />
      <IoTFAQSection />
    </main>
  );
}
