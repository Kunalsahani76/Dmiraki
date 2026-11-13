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
import css3Logo from "../../icons/Technologies Logos/CSS3.png";
import html5Logo from "../../icons/Technologies Logos/HTML5.png";
import javascriptLogo from "../../icons/Technologies Logos/Javascript.png";
import reactLogo from "../../icons/Technologies Logos/React.png";
import nextJsLogo from "../../icons/Technologies Logos/Next js.png";
import nodeJsLogo from "../../icons/Technologies Logos/Node js.png";
import tailwindLogo from "../../icons/Technologies Logos/Tailwindcss.png";
import wordpressLogo from "../../icons/Technologies Logos/Wordpress.png";

const techStack = [
  { name: "HTML5", logo: html5Logo },
  { name: "CSS3", logo: css3Logo },
  { name: "JAVASCRIPT", logo: javascriptLogo },
  { name: "REACT", logo: reactLogo },
  { name: "NEXT.JS", logo: nextJsLogo },
  { name: "NODE.JS", logo: nodeJsLogo },
  { name: "TAILWIND", logo: tailwindLogo },
  { name: "WORDPRESS", logo: wordpressLogo },
];

const services = [
  {
    icon: LayoutDashboard,
    title: "Corporate Website Development",
    desc: "Scalable corporate websites designed for security, stability and professional branding.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Web Design",
    desc: "Responsive websites that look and work well on mobile, tablet and desktop.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Website Development",
    desc: "E-commerce websites built for conversions, with secure payment gateways.",
  },
  {
    icon: Sparkles,
    title: "Landing Page Design",
    desc: "Surgical precision in conversion optimization and visual impact for product launches and campaigns.",
  },
  {
    icon: Database,
    title: "WordPress & CMS Development",
    desc: "Custom WordPress and CMS websites tailored to how your team publishes content.",
  },
  {
    icon: TerminalSquare,
    title: "Next.js Web App Development",
    desc: "Next.js and React web apps for real-time data and rich interactivity.",
  },
];

const process = ["Research", "Wireframing", "UI/UX Design", "Development", "Testing", "Launch & Maintenance"];

const performance = [
  {
    icon: Zap,
    title: "Fast Performance",
    desc: "Fast load times through edge delivery and optimised assets.",
  },
  {
    icon: Search,
    title: "SEO-Ready Code",
    desc: "Semantic HTML and metadata that help your site rank.",
  },
  {
    icon: MonitorSmartphone,
    title: "Mobile-First Design",
    desc: "Mobile-first design for a smooth experience on every device.",
  },
  {
    icon: ShieldCheck,
    title: "Website Security",
    desc: "Secure architecture that protects your data.",
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
      <section className="service-hero-typography relative overflow-hidden border-b-[6px] border-white bg-[#151515]">
        <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.75)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.75)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="relative mx-auto grid max-w-[1270px] grid-cols-1 gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_470px] lg:px-10 lg:py-28">
          <div className="flex max-w-[720px] flex-col items-start justify-center">
            <h1
              className="mb-8 uppercase text-white"
              style={{ fontFamily: "'Pirulen', 'Pirulen Rg', 'Orbitron', sans-serif", fontWeight: 500, fontSize: "clamp(38px, 6vw, 76px)", lineHeight: 1.35, letterSpacing: "0.01em" }}
            >
              Website Development Services
            </h1>
            <p className="mb-9 max-w-[530px] text-[#d0d0d0]" style={{ fontFamily: "'Inter', sans-serif", fontSize: 15, lineHeight: "26px" }}>
              D'Miraki is a website development company in India. We build fast, mobile-first, SEO-ready business and e-commerce websites on Next.js for clients in Delhi NCR and across India.
            </p>
            <a
              href="#web-development-contact"
              className="border border-white/35 px-14 py-5 uppercase text-white transition-colors hover:bg-white hover:text-black"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 13, letterSpacing: "1.4px" }}
            >
              GET A WEBSITE QUOTE
            </a>
          </div>
          <div className="xl:translate-x-12">
            <DashboardVisual />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 text-black sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1270px] text-center">
          <p className="mb-9 font-bold uppercase" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 18, letterSpacing: "6px" }}>
            Technologies We Use
          </p>
          <div className="grid grid-cols-2 gap-6 text-[#9a9a9a] sm:grid-cols-4 lg:grid-cols-8">
            {techStack.map(({ name, logo }) => (
              <figure key={name} className="flex flex-col items-center gap-1">
                <img src={logo} alt={`${name} logo`} className="h-[92px] w-full max-w-[92px] object-contain" />
                <figcaption className="text-sm font-bold">{name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1270px]">
          <div className="mb-16 text-center">
            <h2 className="mb-6 uppercase" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15 }}>
              Website Development Services
            </h2>
            <p className="mx-auto max-w-[560px] text-[#b9b9b9]" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: "24px" }}>
              Custom website development for businesses, from corporate sites and online stores to landing pages and web apps.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="min-h-[300px] border border-white/30 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_48%)] p-9">
                <Icon className="mb-10 h-7 w-7 text-white" strokeWidth={1.8} />
                <h3 className="mb-4 max-w-[250px] text-xl font-bold leading-tight text-white">
                  {title === "Next.js Web App Development" ? <a href="/custom-software" className="text-inherit no-underline">{title}</a> : title}
                </h3>
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
            Our Website Development Process
          </h2>
          <p className="mb-20 text-[#bcbcbc]" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14 }}>
            A clear roadmap from first idea to launch.
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {process.map((step, index) => (
              <div key={step} className="relative flex flex-col items-center">
                <span className={`mb-5 rounded-lg border border-white/20 px-4 py-3 text-3xl font-bold shadow-[0_0_18px_rgba(255,255,255,0.12)] ${index === process.length - 1 ? "bg-white text-black" : "bg-black/70 text-white"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 uppercase tracking-[3px] text-white" style={{ fontSize: 11, fontWeight: 800 }}>{step}</h3>
                <p className="max-w-[120px] text-center text-[#aaa]" style={{ fontSize: 11, lineHeight: "17px" }}>
                  {index === 0 && "Market and competitor research."}
                  {index === 1 && "Page layouts and site structure."}
                  {index === 2 && "Visual design and user flow."}
                  {index === 3 && "Clean, scalable code."}
                  {index === 4 && "Thorough QA and optimisation."}
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
              Fast, Mobile-First,<br />SEO-Ready Websites
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
          Get a Website Quote
        </h2>
        <p className="mx-auto mb-12 max-w-[560px] text-[#d0d0d0]" style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, lineHeight: "27px" }}>
          Get a quote from our Delhi NCR web development team for a fast, scalable website built for your business.
        </p>
        <a
          href="/contact"
          className="inline-flex bg-white px-16 py-6 uppercase text-black transition-colors hover:bg-black hover:text-white"
          style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 15, letterSpacing: "2px" }}
        >
          GET A WEBSITE QUOTE
        </a>
      </section>

    </main>
  );
}
