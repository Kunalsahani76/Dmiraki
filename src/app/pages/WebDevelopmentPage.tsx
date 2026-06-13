import {
  Database,
  LayoutDashboard,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  TerminalSquare,
  Zap,
} from "lucide-react";
import { SiteFooter } from "../components/SiteFooter";

const techStack = ["HTML5", "CSS3", "JAVASCRIPT", "REACT", "NEXT.JS", "NODE.JS", "TAILWIND", "WORDPRESS"];

const services = [
  {
    icon: LayoutDashboard,
    title: "Corporate Website Development",
    desc: "Scalable enterprise-grade platforms designed for security, stability, and professional branding.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Web Design",
    desc: "Flawless execution across all device vectors, ensuring cinematic quality on mobile, tablet, and desktop.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    desc: "High-conversion transactional interfaces built with headless architectures and secure gateways.",
  },
  {
    icon: Sparkles,
    title: "Landing Page Design",
    desc: "Surgical precision in conversion optimization and visual impact for product launches and campaigns.",
  },
  {
    icon: Database,
    title: "CMS & WordPress Solutions",
    desc: "Custom-themed, high-performance content management systems tailored to your editorial workflow.",
  },
  {
    icon: TerminalSquare,
    title: "Web App Development",
    desc: "Complex functional applications built with React/Next.js for real-time data and high interactivity.",
  },
];

const process = ["Research", "Wireframing", "UI/UX Design", "Development", "Testing", "Launch"];

const performance = [
  {
    icon: Zap,
    title: "Speed",
    desc: "Sub-second load times via edge delivery and optimized assets.",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Semantic HTML and metadata engineered for visibility.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile",
    desc: "Mobile-first approach for seamless portable experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    desc: "Hardened architectures protecting data and integrity.",
  },
];

function DashboardVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative overflow-hidden border border-white/10 bg-[#111] shadow-2xl ${compact ? "min-h-[260px]" : "min-h-[470px]"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_52%)]" />
      <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="absolute left-[12%] right-[12%] top-[18%] rotate-[-8deg] rounded-sm border border-white/45 bg-black/60 p-4 shadow-[0_0_42px_rgba(255,255,255,0.18)]">
        <div className="mb-4 flex items-center justify-between border-b border-white/20 pb-3">
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((item) => (
              <span key={item} className="h-6 w-6 rounded-full border border-white/30" />
            ))}
          </div>
          <span className="h-4 w-20 rounded-full bg-white/20" />
        </div>
        <div className="grid grid-cols-[1.25fr_0.75fr] gap-4">
          <div className="space-y-3">
            <span className="block h-4 w-3/4 bg-white/35" />
            <span className="block h-3 w-full bg-white/18" />
            <span className="block h-3 w-5/6 bg-white/18" />
            <div className="mt-5 flex h-24 items-end gap-2">
              {[36, 64, 48, 82, 58, 92, 72].map((height) => (
                <span key={height} className="w-full bg-white/35" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <span className="block aspect-square rounded-full border-[14px] border-white/30" />
            <span className="block h-3 w-full bg-white/18" />
            <span className="block h-3 w-2/3 bg-white/18" />
            <span className="block h-16 border border-white/25 bg-white/10" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[12%] left-[10%] h-3 w-3 rotate-45 bg-white/35" />
      <div className="absolute right-[11%] top-[13%] h-5 w-5 rotate-45 border border-white/35" />
      <div className="absolute bottom-[18%] right-[8%] h-4 w-7 rotate-[-18deg] border border-white/35" />
    </div>
  );
}

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b-[6px] border-white bg-[#151515]">
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.75)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.75)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative mx-auto grid max-w-[1270px] grid-cols-1 gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_470px] lg:px-10 lg:py-28">
          <div className="flex max-w-[720px] flex-col items-start justify-center">
            <h1
              className="mb-8 uppercase text-white"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(38px, 6vw, 76px)", lineHeight: 1.18, letterSpacing: 0 }}
            >
              Modern Web Development Services
            </h1>
            <p className="mb-9 max-w-[530px] text-[#d0d0d0]" style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: "26px" }}>
              We engineer high-performance, scalable web ecosystems using cutting-edge frontend architectures. Architectural stability meets cinematic user experiences.
            </p>
            <a
              href="#web-development-contact"
              className="border border-white/35 px-14 py-5 uppercase text-white transition-colors hover:bg-white hover:text-black"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 13, letterSpacing: "1.4px" }}
            >
              Book Free Consultation
            </a>
          </div>
          <DashboardVisual />
        </div>
      </section>

      <section className="bg-white px-5 py-12 text-black sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1270px] text-center">
          <h2 className="mb-9 uppercase" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 16, letterSpacing: "6px" }}>
            Built with modern web technologies
          </h2>
          <div className="grid grid-cols-2 gap-6 text-[#9a9a9a] sm:grid-cols-4 lg:grid-cols-8">
            {techStack.map((tech) => (
              <span key={tech} className="text-sm font-bold">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1270px]">
          <div className="mb-16 text-center">
            <h2 className="mb-6 uppercase" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}>
              High-Performance<br />Web Solutions
            </h2>
            <p className="mx-auto max-w-[560px] text-[#b9b9b9]" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: "24px" }}>
              We engineer high-performance, scalable web ecosystems using cutting-edge frontend architectures. Architectural stability meets cinematic user experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="min-h-[300px] border border-white/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_48%)] p-9">
                <Icon className="mb-10 h-7 w-7 text-white" strokeWidth={1.8} />
                <h3 className="mb-4 max-w-[250px] text-xl font-bold leading-tight text-white">{title}</h3>
                <p className="max-w-[275px] text-[#bdbdbd]" style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: "25px" }}>
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-[6px] border-white bg-[linear-gradient(105deg,#000_0%,#000_48%,#5c5c5c_100%)] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1270px] text-center">
          <h2 className="mb-5 uppercase" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 800 }}>
            Our Architectural Process
          </h2>
          <p className="mb-20 text-[#bcbcbc]" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14 }}>
            The systematic roadmap from initial concept to deployment.
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {process.map((step, index) => (
              <div key={step} className="relative flex flex-col items-center">
                <span className={`mb-5 rounded-lg border border-white/20 px-4 py-3 text-3xl font-bold shadow-[0_0_18px_rgba(255,255,255,0.12)] ${index === process.length - 1 ? "bg-white text-black" : "bg-black/70 text-white"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 uppercase tracking-[3px] text-white" style={{ fontSize: 11, fontWeight: 800 }}>{step}</h3>
                <p className="max-w-[120px] text-center text-[#aaa]" style={{ fontSize: 11, lineHeight: "17px" }}>
                  {index === 0 && "Deep dive into market dynamics."}
                  {index === 1 && "Structural blueprints and logic."}
                  {index === 2 && "Visual identity and flow."}
                  {index === 3 && "Clean, scalable code execution."}
                  {index === 4 && "Rigorous QA and optimization."}
                  {index === 5 && "Deployment and maintenance."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[6px] border-white bg-black px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1270px] grid-cols-1 gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="mb-14 uppercase" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(34px, 4vw, 52px)", lineHeight: 1.08, fontWeight: 900 }}>
              Engineered For<br />Peak<br />Performance
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {performance.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-white" />
                  <div>
                    <h3 className="mb-2 uppercase tracking-[2px] text-white" style={{ fontSize: 12, fontWeight: 800 }}>{title}</h3>
                    <p className="text-[#bcbcbc]" style={{ fontSize: 13, lineHeight: "20px" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DashboardVisual compact />
        </div>
      </section>

      <section id="web-development-contact" className="bg-[linear-gradient(115deg,#050505_0%,#111_45%,#606060_100%)] px-5 py-24 text-center sm:px-8 lg:px-10">
        <h2 className="mx-auto mb-8 max-w-[980px] uppercase" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(38px, 5vw, 70px)", lineHeight: 1.22, fontWeight: 300 }}>
          Let's Build Your<br />Next-Generation Website
        </h2>
        <p className="mx-auto mb-12 max-w-[560px] text-[#d0d0d0]" style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: "27px" }}>
          Partner with our architectural team to deploy a high-performance web solution that scales with your ambition.
        </p>
        <a
          href="/#contact"
          className="inline-flex bg-white px-16 py-6 uppercase text-black transition-colors hover:bg-black hover:text-white"
          style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 15, letterSpacing: "2px" }}
        >
          Start Your Project
        </a>
      </section>

      <SiteFooter />
    </main>
  );
}
