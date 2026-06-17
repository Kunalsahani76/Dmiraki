import heroBg from "../../images/digitalmarketingbaner.png";
import heroVisual from "../../images/customsoftwarebanner.png";
import svgPaths from "./svg-v1mu0axv8t";
import { SiteFooter } from "../../app/components/SiteFooter";

/* SVG Icon component */
function SvgIcon({ pathKey, viewBox }: { pathKey: keyof typeof svgPaths; viewBox: string }) {
  return (
    <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox={viewBox}>
      <path d={svgPaths[pathKey]} fill="white" />
    </svg>
  );
}

/* Hero Section */
function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[600px] lg:h-[700px] flex items-center overflow-hidden"
    >
      {/* Background */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-[700px]">
            {/* Heading */}
            <h1
              className="text-[#fbfbfb] mb-8 leading-tight"
              style={{
                fontFamily: "'Orbitron', monospace",
                fontWeight: 500,
                fontSize: "clamp(48px, 5.2vw, 66px)",
                letterSpacing: "0.01em",
                lineHeight: "1.35",
              }}
            >
              Custom
              <br />
              Software
              <br />
              Development
              <br />
              Solutions
            </h1>

          {/* Description */}
          <p
            className="text-[#fbfbfb] mb-10 max-w-[576px]"
            style={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: "1.6",
            }}
          >
            We build scalable, secure, and high-performance software tailored for startups, enterprises, and growing
            businesses. Precision-engineered code for the infinite digital horizon.
          </p>

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-block no-underline"
            style={{
              backdropFilter: "blur(6px)",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "17px 33px",
            }}
          >
            <span
              className="text-[#e5e1e4] text-[16px] sm:text-[18px] leading-7 whitespace-nowrap"
              style={{ fontFamily: "'Orbitron', monospace", fontWeight: 400 }}
            >
              Book Free Consultation
            </span>
          </a>
          </div>
          <div className="relative hidden min-h-[430px] overflow-hidden bg-black/20 md:block">
            <img
              src={heroVisual}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-90 pointer-events-none"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Tech Stack Bar */
function TechStackBar() {
  const techs = ["React", "Node.js", "Python", "AWS", "MongoDB", "Docker", "Flutter", "Firebase"];
  return (
    <section className="bg-[#fffffe] w-full">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 py-10 sm:py-12 flex flex-col gap-9">
        <p
          className="text-black text-center text-[12px] sm:text-[14px] tracking-[4px] uppercase"
          style={{ fontFamily: "'Orbitron', monospace", fontWeight: 400 }}
        >
          ENGINEERED WITH INDUSTRY-LEADING TECH STACKS
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-6 opacity-40">
          {techs.map((tech) => (
            <div key={tech} className="flex items-center justify-center">
              <span
                className="text-black text-[14px] sm:text-[18px] font-bold text-center leading-7"
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700 }}
              >
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Service Card */
interface ServiceCardProps {
  iconPath: keyof typeof svgPaths;
  viewBox: string;
  iconH: string;
  title: string;
  description: string;
}
function ServiceCard({ iconPath, viewBox, iconH, title, description }: ServiceCardProps) {
  return (
    <div
      className="relative flex flex-col gap-4 p-6 sm:p-8 overflow-hidden"
      style={{
        backdropFilter: "blur(6px)",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.4)",
      }}
    >
      {/* Blur accent */}
      <div
        className="absolute rounded-full"
        style={{
          right: "-31px",
          top: "-31px",
          width: 96,
          height: 96,
          background: "rgba(0,0,0,0.1)",
          filter: "blur(20px)",
        }}
      />
      {/* Icon */}
      <div className="w-full shrink-0" style={{ height: iconH }}>
        <SvgIcon pathKey={iconPath} viewBox={viewBox} />
      </div>
      {/* Title */}
      <h3
        className="text-[#e5e1e4] text-[20px] sm:text-[24px] leading-8 mt-2"
        style={{ fontFamily: "'Geist', 'DM Sans', sans-serif", fontWeight: 400 }}
      >
        {title}
      </h3>
      {/* Description */}
      <p
        className="text-[#c1c6d7] text-[14px] sm:text-[16px] leading-6"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
      >
        {description}
      </p>
    </div>
  );
}

const services: ServiceCardProps[] = [
  {
    iconPath: "p36df7c0",
    viewBox: "0 0 309.333 27",
    iconH: "27px",
    title: "Enterprise Software",
    description:
      "Robust, high-availability systems engineered for complex organizational workflows and large-scale data processing.",
  },
  {
    iconPath: "p11230c80",
    viewBox: "0 0 309.333 24",
    iconH: "24px",
    title: "SaaS Product Development",
    description:
      "From MVP to global scale, we build multi-tenant cloud platforms with performance and monetization in mind.",
  },
  {
    iconPath: "pb45c080",
    viewBox: "0 0 309.333 34.5",
    iconH: "34px",
    title: "CRM & ERP Solutions",
    description:
      "Customized business management tools that centralize your operations and unlock actionable intelligence.",
  },
  {
    iconPath: "p2214e800",
    viewBox: "0 0 309.333 30",
    iconH: "30px",
    title: "AI-Powered Apps",
    description:
      "Integrating LLMs, computer vision, and predictive analytics to automate tasks and enhance user experiences.",
  },
  {
    iconPath: "p3f5ff500",
    viewBox: "0 0 309.333 24",
    iconH: "24px",
    title: "Cloud-Based Software",
    description:
      "Serverless and containerized architectures optimized for AWS, Azure, and Google Cloud environments.",
  },
  {
    iconPath: "p179370c0",
    viewBox: "0 0 309.333 24",
    iconH: "24px",
    title: "Mobile & Web Apps",
    description:
      "Immersive, cross-platform experiences using React, Flutter, and native technologies for seamless reach.",
  },
];

/* Services Section */
function ServicesSection() {
  return (
    <section id="services" className="bg-black w-full">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 pb-1 mb-10">
          <h2
            className="text-white text-center text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.2]"
            style={{ fontFamily: "'Orbitron', monospace", fontWeight: 400, letterSpacing: "-0.8px" }}
          >
            World-Class Services
          </h2>
          <p
            className="text-white text-[14px] sm:text-[16px] text-center leading-6 max-w-[672px] capitalize"
            style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 400 }}
          >
            Strategic software solutions designed for reliability, scalability, and competitive advantage.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <ServiceCard key={svc.title} {...svc} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Process Step */
interface StepProps {
  num: string;
  title: string;
  description: string;
}
function ProcessStep({ num, title, description }: StepProps) {
  return (
    <div className="flex flex-col gap-2 flex-1 min-w-0">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
        style={{
          backdropFilter: "blur(6px)",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <span
          className="text-white text-[15px] leading-6"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
        >
          {num}
        </span>
      </div>
      <h4
        className="text-white text-[16px] sm:text-[18px] leading-7 mt-4"
        style={{ fontFamily: "'Geist', 'DM Sans', sans-serif", fontWeight: 400 }}
      >
        {title}
      </h4>
      <p
        className="text-white text-[13px] sm:text-[14px] leading-5"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
      >
        {description}
      </p>
    </div>
  );
}

const steps: StepProps[] = [
  { num: "01", title: "Requirement Analysis", description: "Defining your vision with deep technical discovery sessions." },
  { num: "02", title: "UI/UX Design", description: "Crafting intuitive, pixel-perfect digital interfaces." },
  { num: "03", title: "Development", description: "Writing clean, scalable code with modern tech stacks." },
  { num: "04", title: "Testing", description: "Rigorous QA and automated tests to ensure zero bugs." },
  { num: "05", title: "Deployment", description: "Safe, seamless CI/CD integration into production." },
  { num: "06", title: "Support", description: "Ongoing maintenance to keep your product evolving." },
];

/* Process Section */
function ProcessSection() {
  return (
    <section
      className="w-full"
      style={{ background: "linear-gradient(105deg, #000 51%, #666 96%)" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 flex flex-col gap-10">
        {/* Heading card */}
        <div
          className="w-full p-6 sm:p-8 flex items-center justify-center"
          style={{
            backdropFilter: "blur(6px)",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.4)",
          }}
        >
          <h2
            className="text-white text-center text-[22px] sm:text-[32px] lg:text-[40px] leading-[1.2]"
            style={{ fontFamily: "'Orbitron', monospace", fontWeight: 400, letterSpacing: "-0.8px" }}
          >
            Our Symphony of Development
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div
            className="hidden lg:block absolute top-6 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, rgba(173,198,255,0) 0%, rgba(173,198,255,0.3) 50%, rgba(173,198,255,0) 100%)" }}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
            {steps.map((step) => (
              <ProcessStep key={step.num} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* CTA Banner */
function CtaBanner() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden"
      style={{ background: "linear-gradient(114deg, #000 51%, #666 96%)" }}
    >
      {/* Inner gradient */}
      <div
        className="absolute inset-[2px]"
        style={{ background: "linear-gradient(168deg, rgba(218,218,218,0.1) 0%, rgba(255,255,255,0.1) 100%)" }}
      />
      {/* Blur accent */}
      <div
        className="absolute rounded-full"
        style={{ left: -78, top: -78, width: 256, height: 256, background: "rgba(114,114,114,0.2)", filter: "blur(50px)" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-5 px-6 py-12 sm:py-16 text-center">
        <h2
          className="text-white leading-tight"
          style={{
            fontFamily: "'Orbitron', monospace",
            fontWeight: 400,
            fontSize: "clamp(24px, 4vw, 48px)",
            letterSpacing: "-0.96px",
            lineHeight: "1.27",
          }}
        >
          Let's Build Your Next Big
          <br />
          Software Product
        </h2>
        <a
          href="#"
          className="inline-block no-underline"
          style={{
            backdropFilter: "blur(6px)",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.3)",
            padding: "17px 33px",
          }}
        >
          <span
            className="text-[#e5e1e4] text-[16px] sm:text-[18px] leading-7 whitespace-nowrap"
            style={{ fontFamily: "'Orbitron', monospace", fontWeight: 400 }}
          >
            Book Free Consultation
          </span>
        </a>
      </div>
    </section>
  );
}

/* Footer */
function Footer() {
  return <SiteFooter />;
}

/* App */
export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fbfbfb]">
      <main className="flex flex-col w-full">
        <HeroSection />
        <TechStackBar />
        <ServicesSection />
        <ProcessSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
