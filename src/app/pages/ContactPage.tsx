import {
  BarChart3,
  Boxes,
  Cloud,
  Code2,
  Database,
  Gauge,
  Mail,
  MapPin,
  Network,
  Phone,
  ShieldCheck,
  TimerReset,
} from "lucide-react";
import heroVisual from "../../imports/Home/ba94765630e49ad56eb0745d378f772c95ef7582.png";
import analyticsVisual from "../../imports/Home/7e7289376327a991cbaea03f686e9c032ef6270e.png";

const orbitron = { fontFamily: "'Orbitron', sans-serif" };
const inter = { fontFamily: "'Inter', sans-serif" };

const contactCards = [
  { icon: Mail, label: "EMAIL", value: "concierge@aether.sys" },
  { icon: Phone, label: "PHONE", value: "+1 (888) AETHER-0" },
  { icon: MapPin, label: "LOCATION", value: "Neo-Tokyo, Sector 7" },
  { icon: TimerReset, label: "HOURS", value: "24/7 Global Access" },
];

const developItems = [
  {
    icon: Code2,
    title: "Custom Software",
    copy: "Bespoke software solutions tailored to your unique business requirements and operational challenges.",
  },
  {
    icon: Network,
    title: "Enterprise Systems",
    copy: "Robust and scalable enterprise-level applications designed to streamline complex business processes.",
  },
  {
    icon: BarChart3,
    title: "CRM & ERP",
    copy: "Integrated management systems to optimize resource planning and customer relationship management.",
  },
  {
    icon: Cloud,
    title: "SaaS",
    copy: "Scalable and secure Software as a Service platforms built for modern cloud delivery models.",
  },
  {
    icon: Boxes,
    title: "Cloud Apps",
    copy: "Cloud-native applications engineered for high availability, performance, and seamless scalability.",
  },
  {
    icon: ShieldCheck,
    title: "API Integration",
    copy: "Seamless connectivity between disparate systems through custom API development and integration.",
  },
  {
    icon: Gauge,
    title: "Automation",
    copy: "Smart automation tools to reduce manual overhead and enhance overall organizational efficiency.",
  },
  {
    icon: Database,
    title: "Data Solutions",
    copy: "Advanced data warehousing and analytics platforms to drive informed business decisions.",
  },
];

const techColumns = [
  {
    title: "Core Development",
    rows: [
      ["Frontend Architecture", "React / Next.js / Vue"],
      ["Backend Frameworks", "Laravel / Django / .NET / Spring"],
      ["Mobile Development", "Flutter / React Native"],
    ],
  },
  {
    title: "Data & Cloud",
    rows: [
      ["Database Layer", "Postgres / Mongo / MySQL"],
      ["Cloud Ecosystems", "AWS / Azure / GCP"],
      ["API Services", "GraphQL / REST / gRPC"],
    ],
  },
  {
    title: "Infrastructure & AI",
    rows: [
      ["DevOps Lifecycle", "Docker / Kubernetes / CI-CD"],
      ["Security Standards", "AES-256 / OAuth / JWT"],
      ["AI & Automation", "PyTorch / LLMs / Python"],
    ],
  },
];

const reasons = [
  ["Business focused software architecture", "Design choices driven by ROI and organizational objectives, not just technology trends."],
  ["Scalable and future ready development", "Infrastructure built to support millions of concurrent users without performance degradation."],
  ["Enterprise grade security standards", "Military-grade encryption and zero-trust protocols embedded at every layer of the system."],
  ["Cloud optimised infrastructure", "Native cloud applications designed for resilience and elastic scalability."],
  ["Fast loading and high performance systems", "Optimized codebases and architecture to ensure ultra-low latency for global users."],
  ["UI/UX focused modern interface design", "High-fidelity user experiences that combine aesthetic elegance with functional clarity."],
  ["Automation and AI integration expertise", "Smart workflows and AI modules that eliminate redundant tasks and increase team velocity."],
  ["Dedicated technical consultation and support", "High-priority engineering support to ensure continuous operational excellence."],
];

function SectionHeading({ children }: { children: string }) {
  return (
    <h2
      className="text-[#e8e8e8] uppercase"
      style={{ ...orbitron, fontSize: "clamp(24px, 3.6vw, 45px)", fontWeight: 500, lineHeight: 1.15 }}
    >
      {children}
    </h2>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_68%_18%,rgba(97,97,97,0.42),transparent_28%),linear-gradient(135deg,#020202_0%,#060606_52%,#1d1d1d_100%)]">
        <div className="mx-auto grid max-w-[1270px] grid-cols-1 gap-12 px-6 pb-20 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-24">
          <div className="flex flex-col items-start">
            <h1
              className="max-w-[620px] text-[#f1f1f1] uppercase"
              style={{ ...orbitron, fontSize: "clamp(42px, 6vw, 74px)", fontWeight: 500, lineHeight: 1.18 }}
            >
              LET&apos;S BUILD SOMETHING EXTRAORDINARY
            </h1>
            <p className="mt-8 max-w-[530px] text-[13px] font-semibold leading-6 text-[#d1d1d1]" style={inter}>
              We engineer high-performance, scalable web ecosystems using cutting-edge frontend architectures.
              Architectural stability meets cinematic user experiences.
            </p>
            <button
              className="mt-8 h-[64px] min-w-[365px] border border-white/40 px-8 text-[#eeeeee] transition-colors hover:bg-white hover:text-black max-sm:min-w-full"
              style={{ ...orbitron, fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em" }}
            >
              BOO FREE CONSULTATION
            </button>
          </div>

          <div className="relative mx-auto flex w-full max-w-[460px] items-center justify-center lg:justify-end">
            <div className="absolute -inset-10 bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_58%)] blur-2xl" />
            <img
              src={heroVisual}
              alt="Analytics interface"
              className="relative aspect-square w-full object-cover opacity-80 grayscale"
            />
          </div>
        </div>

        <div className="mx-auto max-w-[1110px] px-6 pb-16 lg:px-10">
          <h2
            className="mb-12 text-center text-[#dedede] uppercase"
            style={{ ...orbitron, fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 500, lineHeight: 1.2 }}
          >
            CONNECT WITH OUR TEAM
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex min-h-[165px] flex-col items-center justify-center border border-white/25 bg-white/[0.03] px-5 text-center">
                <Icon className="mb-4 h-5 w-5 text-[#bdbdbd]" strokeWidth={1.5} />
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#cfcfcf]" style={inter}>
                  {label}
                </p>
                <p className="mt-2 text-[13px] font-bold text-white" style={inter}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(145deg,#080808_0%,#111_58%,#222_100%)] px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1110px] grid-cols-1 gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading>SEND US A MESSAGE</SectionHeading>
            <form className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {["FULL NAME", "EMAIL ADDRESS", "PHONE NUMBER"].map((label, index) => (
                <label key={label} className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d6d6d6]" style={inter}>
                    {label}
                  </span>
                  <input
                    className="h-[58px] border border-white/25 bg-black/20 px-5 text-sm text-white outline-none transition-colors placeholder:text-[#7d7d7d] focus:border-white/70"
                    placeholder={index === 0 ? "John Doe" : index === 1 ? "john@enterprise.com" : "+1 (555) 000-0000"}
                  />
                </label>
              ))}
              <label className="flex flex-col gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d6d6d6]" style={inter}>
                  SERVICE
                </span>
                <select className="h-[58px] border border-white/25 bg-black/20 px-5 text-sm text-[#9f9f9f] outline-none transition-colors focus:border-white/70">
                  <option>System Architecture</option>
                  <option>Custom Software</option>
                  <option>Web Development</option>
                  <option>Automation</option>
                </select>
              </label>
              <label className="flex flex-col gap-3 sm:col-span-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d6d6d6]" style={inter}>
                  PROJECT DETAILS
                </span>
                <textarea
                  className="min-h-[132px] resize-none border border-white/25 bg-black/20 px-5 py-5 text-sm text-white outline-none transition-colors placeholder:text-[#7d7d7d] focus:border-white/70"
                  placeholder="Briefly describe your objectives..."
                />
              </label>
              <button
                className="h-[66px] bg-[linear-gradient(180deg,#ffffff_0%,#d9dce2_100%)] text-[#5b5b5b] transition-opacity hover:opacity-85 sm:col-span-2"
                style={{ ...orbitron, fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em" }}
              >
                TRANSMIT INQUIRY
              </button>
            </form>
          </div>

          <aside className="border border-white/25 p-8">
            <img src={analyticsVisual} alt="Support analytics dashboard" className="h-[340px] w-full object-cover opacity-75 grayscale" />
            <div className="px-4 py-10 text-center">
              <h3 className="text-[#e6e6e6] uppercase" style={{ ...orbitron, fontSize: "22px", fontWeight: 500 }}>
                SUPPORT ANALYTICS
              </h3>
              <p className="mx-auto mt-3 max-w-[310px] text-[13px] font-semibold leading-5 text-[#d5d5d5]" style={inter}>
                Our team uses advanced diagnostic metrics to ensure 99.9% project success rates.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/15 bg-[linear-gradient(145deg,#1b1b1b_0%,#515151_100%)] px-6 py-12 lg:px-10">
        <div className="mx-auto max-w-[1210px]">
          <SectionHeading>WHAT WE DEVELOP</SectionHeading>
          <p className="mt-7 max-w-[650px] text-[13px] font-medium leading-6 text-[#dfdfdf]" style={inter}>
            Engineered for performance, built for scale. Our development lifecycle prioritizes architectural integrity and user excellence.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {developItems.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="min-h-[250px] border border-white/20 bg-white/[0.08] p-7">
                <Icon className="h-6 w-6 text-white" strokeWidth={1.6} />
                <h3 className="mt-6 text-[16px] font-bold text-white" style={inter}>
                  {title}
                </h3>
                <p className="mt-5 text-[13px] font-medium leading-6 text-[#e3e3e3]" style={inter}>
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(145deg,#2b2b2b_0%,#666_100%)] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-[1150px]">
          <div className="text-center">
            <SectionHeading>TECHNOLOGIES WE USE</SectionHeading>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3">
            {techColumns.map((column) => (
              <div key={column.title}>
                <div className="mb-8 flex items-center gap-4">
                  <span className="h-px w-36 bg-white/35" />
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#ececec]" style={inter}>
                    {column.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-7">
                  {column.rows.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[0.8fr_1.2fr] gap-4 border-b border-white/10 pb-4">
                      <p className="text-[13px] font-medium text-[#efefef]" style={inter}>
                        {label}
                      </p>
                      <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#bdbdbd]" style={inter}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(145deg,#5c5c5c_0%,#898989_100%)] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-[1210px]">
          <div className="text-center">
            <SectionHeading>WHY CHOOSE D&apos;MIRAKI</SectionHeading>
            <p className="mt-8 uppercase text-[#ededed]" style={{ ...orbitron, fontSize: "15px", fontWeight: 500 }}>
              We don&apos;t just write code: we architect competitive advantages.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 border border-black/45 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(([title, copy]) => (
              <article key={title} className="min-h-[210px] border-b border-r border-black/20 p-8">
                <h3 className="text-[15px] font-bold leading-6 text-white" style={inter}>
                  {title}
                </h3>
                <p className="mt-7 text-[13px] font-medium leading-6 text-[#ececec]" style={inter}>
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(145deg,#747474_0%,#bcbcbc_100%)] px-6 py-20 text-center lg:px-10">
        <h2
          className="mx-auto max-w-[980px] text-white uppercase"
          style={{ ...orbitron, fontSize: "clamp(34px, 5vw, 62px)", fontWeight: 500, lineHeight: 1.15 }}
        >
          READY TO TRANSFORM YOUR OPERATIONS?
        </h2>
        <p className="mx-auto mt-12 max-w-[590px] text-[14px] font-medium leading-6 text-[#eeeeee]" style={inter}>
          Join the ranks of elite enterprises leveraging custom intelligence to dominate their industries.
          Consultation sessions are currently available for Q4 2024.
        </p>
        <button
          className="mt-10 h-[66px] min-w-[360px] bg-[linear-gradient(180deg,#ffffff_0%,#d9dce2_100%)] text-[#5b5b5b] transition-opacity hover:opacity-85 max-sm:min-w-full"
          style={{ ...orbitron, fontSize: "13px", fontWeight: 700 }}
        >
          GET IN TOUCH
        </button>
      </section>

    </main>
  );
}
