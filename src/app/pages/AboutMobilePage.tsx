import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import imgHeroBackground from "../../imports/DesktopAbout/899ad3003fb6b8bbbc20a36dec9d11b401674a56.png";
import imgHeroPerson from "../../imports/DesktopAbout/1d7d1199b6359e2a5a182bbb1787c2a835d1add3.png";
import imgStory from "../../imports/DesktopAbout/5d30b30b201bc563295ce7873381ee59fe7c305a.png";
import howWeWorkImage from "../../images/HOW-WE-WORK.png";
import { DreamingBigSection, Footer } from "../components/ContactFAQFooter";

const values = [
  ["EXCELLENCE WITHOUT COMPROMISE", "Maintaining the highest standards in everything we do."],
  ["INNOVATION THAT MATTERS", "Staying ahead of trends to give you a competitive edge."],
  ["TRANSPARENCY IN EVERY INTERACTION", "Clear communication and honest timelines."],
  ["RESULTS-DRIVEN PARTNERSHIP", "Every decision is focused on measurable outcomes."],
];

const expertise = [
  ["STRATEGIC DIGITAL GROWTH", "Performance-driven marketing solutions designed to increase visibility, strengthen positioning, and generate meaningful business growth."],
  ["CUSTOM SOFTWARE DEVELOPMENT", "Tailored digital systems and scalable software solutions engineered to simplify operations and improve efficiency."],
  ["WEB & MOBILE EXPERIENCES", "Modern websites and mobile applications built for seamless functionality, user engagement, and long-term scalability."],
  ["BRAND IDENTITY & POSITIONING", "Distinct brand experiences crafted to create recognition, credibility, and stronger market presence."],
  ["IoT & SMART SOLUTIONS", "Intelligent connected systems designed to automate processes, improve monitoring, and enhance operational control."],
  ["BUSINESS STRATEGY INTEGRATION", "Aligning technology, marketing, and business objectives into one unified digital growth framework."],
];

const partnerReasons = [
  ["PROVEN TRACK RECORD", "200+ successful projects across industries with measurable results."],
  ["DEDICATED TEAM APPROACH", "You'll work with a consistent team invested in your success."],
  ["ONGOING SUPPORT & OPTIMIZATION", "Continuous optimization and support for sustained growth."],
  ["INDUSTRY RECOGNITION", "Recognized for innovation and results by peers and publications."],
];

const process = [
  ["CLIENT-CENTRIC APPROACH", "We prioritize our clients' needs, ensuring personalized strategies that align with their business goals and deliver measurable results."],
  ["TRANSPARENT COMMUNICATION", "Open and honest communication is at the heart of our operations, fostering trust and collaboration throughout every project."],
  ["INNOVATIVE SOLUTIONS", "We leverage latest technologies and creative strategies to provide cutting-edge solutions that drive business growth."],
  ["DATA-DRIVEN STRATEGIES", "We utilize comprehensive data analysis to inform our decisions, ensuring effective and efficient marketing campaigns."],
];

const faqs = [
  ["What does D'Miraki specialise in?", "D'Miraki specialises in Digital Marketing, Branding, Website Development, Mobile App Development, Custom Software Development, and IoT Solutions designed for modern businesses."],
  ["What digital marketing services do you offer?", "We offer SEO, International SEO, Social Media Marketing, Performance Marketing, Google Ads, Content Marketing, Branding Strategy, and Lead Generation services."],
  ["Do you provide branding services for startups and businesses?", "Yes. We help businesses build a strong brand identity through logo design, brand strategy, visual communication, positioning, and digital presence."],
  ["Can D'Miraki develop custom websites?", "Yes. We design and develop custom websites based on your business goals, industry, and user experience requirements."],
  ["Do you create e-commerce websites?", "Yes. We develop secure and scalable e-commerce websites with payment integration, product management, and mobile-friendly design."],
  ["What technologies do you use for web development?", "We work with modern technologies including React, Node.js, PHP, WordPress, Shopify, Laravel, and custom frameworks based on project needs."],
  ["Do you provide mobile app development services?", "Yes. We develop Android, iOS, and cross-platform mobile applications for startups, enterprises, and growing businesses."],
  ["Can you develop custom software for businesses?", "Absolutely. We build customised software solutions that help businesses automate operations, improve efficiency, and manage workflows effectively."],
  ["What is IoT software development?", "IoT software development connects devices, sensors, and systems through smart technology to automate processes, monitor data, and improve operational control."],
  ["Which industries do you work with?", "We work with industries including Power, Infrastructure, Engineering, Construction, Real Estate, Manufacturing, Technology, Textile, Government, and SMEs."],
  ["How long does it take to develop a website or app?", "The timeline depends on the project scope, features, and complexity. Basic websites may take a few weeks, while advanced platforms and applications may require longer development cycles."],
  ["Do you offer SEO services for international markets?", "Yes. We provide international SEO strategies focused on global visibility, country-specific targeting, multilingual SEO, and organic growth."],
  ["Why should I choose D'Miraki?", "D'Miraki combines strategy, creativity, and technology to build digital systems that are focused on long-term growth, visibility, and business impact."],
  ["Do you provide ongoing support after project completion?", "Yes. We provide maintenance, technical support, updates, and performance monitoring after deployment."],
  ["How can I get started with D'Miraki?", "You can contact our team through our website, email, or phone to discuss your business requirements and project goals."],
  ["Do you work with small businesses and startups?", "Yes. We work with startups, SMEs, and enterprises, offering scalable solutions based on business stage and growth goals."],
  ["Can you redesign an existing website or application?", "Yes. We help businesses modernise outdated websites, improve user experience, and upgrade digital performance."],
  ["Do you sign NDAs and maintain project confidentiality?", "Yes. We value privacy and maintain strict confidentiality for all client projects and business information."],
  ["What makes your SEO approach different?", "Our SEO approach focuses on search intent, technical optimisation, content structure, AI search readiness, and long-term visibility rather than temporary ranking tactics."],
  ["Do you provide complete digital transformation solutions?", "Yes. From branding and marketing to software and automation, D'Miraki provides end-to-end digital solutions under one ecosystem."],
];

function SectionHeading({ title, dark = false }: { title: string; dark?: boolean }) {
  return (
    <h2
      className={dark ? "text-white uppercase" : "text-black uppercase"}
      style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(26px, 9vw, 38px)", lineHeight: 1.16 }}
    >
      {title}
    </h2>
  );
}

function InfoCard({ title, body, dark = false }: { title: string; body: string; dark?: boolean }) {
  return (
    <article className={dark ? "border border-white p-5 text-white" : "border border-black p-5 text-black"}>
      <div className={dark ? "mb-5 h-1 w-12 bg-white" : "mb-5 h-1 w-12 bg-black"} />
      <h3 className="mb-3 text-[18px] uppercase leading-tight" style={{ fontFamily: "'Roboto', sans-serif" }}>
        {title}
      </h3>
      <p className={dark ? "text-sm leading-6 text-white/75" : "text-sm leading-6 text-black/70"} style={{ fontFamily: "'Inter', sans-serif" }}>
        {body}
      </p>
    </article>
  );
}

function MobileFAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b-2 border-black">
      <button className="flex w-full items-start justify-between gap-4 py-6 text-left" onClick={() => setOpen((value) => !value)}>
        <span className="text-[18px] leading-7 text-black" style={{ fontFamily: "'Roboto', sans-serif" }}>{q}</span>
        <ChevronDown className="mt-1 size-5 shrink-0 transition-transform" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
      </button>
      {open && (
        <p className="pb-6 text-[15px] leading-7 text-black/75" style={{ fontFamily: "'Inter', sans-serif" }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function AboutMobilePage() {
  return (
    <main className="w-full overflow-x-hidden bg-[#fbfbfb] md:hidden">
      <section className="relative overflow-hidden bg-black px-5 pb-8 pt-10 text-white">
        <img alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" src={imgHeroBackground} />
        <div className="relative z-10 flex flex-col gap-7">
          <div>
            <h1 className="text-[44px] uppercase leading-[1.05]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              About<br />DMiraki
            </h1>
            <p className="mt-5 text-[20px] leading-7" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Strategic Partner in Digital Success - passionate experts dedicated to your growth.
            </p>
            <p className="mt-4 text-[15px] leading-7 text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
              We empower businesses to achieve sustainable growth through strategic digital innovation. Our mission is to build partnerships, not just services, creating lasting value for ambitious businesses ready to transform their online presence.
            </p>
          </div>
          <div className="overflow-hidden border border-white/40 bg-white/10 shadow-2xl">
            <img alt="About DMiraki" className="aspect-[1/1.04] w-full object-cover" src={imgHeroPerson} />
          </div>
        </div>
      </section>

      <section className="grid gap-4 px-5 py-8">
        <article className="bg-gradient-to-r from-[#b9b9b9] to-[#2e2e2e] p-5 text-white">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-[26px] uppercase leading-tight" style={{ fontFamily: "'Orbitron', sans-serif" }}>Our Mission</h2>
            <ArrowRight className="size-5 shrink-0" />
          </div>
          <p className="border border-black bg-white p-4 text-[15px] leading-7 text-black" style={{ fontFamily: "'Inter', sans-serif" }}>
            Empowering businesses to achieve sustainable growth through strategic digital innovation. We build partnerships, not just services.
          </p>
        </article>

        <article className="bg-gradient-to-r from-[#b9b9b9] to-[#2e2e2e] p-5 text-white">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-[26px] uppercase leading-tight" style={{ fontFamily: "'Orbitron', sans-serif" }}>Our Vision</h2>
            <ArrowRight className="size-5 shrink-0" />
          </div>
          <p className="border border-black bg-white p-4 text-[15px] leading-7 text-black" style={{ fontFamily: "'Inter', sans-serif" }}>
            Empowering businesses to achieve sustainable growth through strategic digital innovation. We build partnerships, not just services.
          </p>
        </article>
      </section>

      <section className="px-5 py-6">
        <div className="border border-black p-5">
          <SectionHeading title="Our Story" />
          <p className="mt-4 text-[15px] leading-7 text-[#333]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Founded on the principle that every business deserves exceptional digital presence, DMiraki has grown from a small team of passionate experts to a comprehensive agency trusted worldwide.
          </p>
          <img alt="Our Story" className="mt-5 aspect-[469/296] w-full object-cover" src={imgStory} />
        </div>
      </section>

      <section className="mx-5 bg-gradient-to-r from-black to-[#545454] px-5 py-8 text-white">
        <div className="text-center">
          <SectionHeading title="Our Values" dark />
          <p className="mt-4 text-[15px] leading-7 text-white/75" style={{ fontFamily: "'Inter', sans-serif" }}>
            Founded on the principle that every business deserves exceptional digital presence, DMiraki has grown from a small team of passionate experts to a comprehensive agency trusted worldwide.
          </p>
        </div>
        <div className="mt-7 grid gap-5">
          {values.map(([title, body]) => (
            <div className="flex items-start gap-4" key={title}>
              <span className="mt-1 flex size-4 shrink-0 items-center justify-center bg-white text-black">
                <Check className="size-3" />
              </span>
              <div>
                <h3 className="text-[14px] font-bold uppercase leading-5 tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>{title}</h3>
                <p className="mt-1 text-[14px] leading-6 text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-10">
        <div className="text-center">
          <SectionHeading title="Our Expertise" />
          <p className="mt-4 text-[15px] leading-7 text-black/75" style={{ fontFamily: "'Inter', sans-serif" }}>
            Building intelligent digital ecosystems through strategy, technology, and scalable execution.
          </p>
        </div>
        <div className="mt-7 grid gap-4">
          {expertise.map(([title, body]) => <InfoCard key={title} title={title} body={body} dark />)}
        </div>
      </section>

      <section className="px-5 pb-10">
        <div className="text-center">
          <SectionHeading title="Why Partner With Us?" />
          <p className="mt-4 text-[15px] leading-7 text-black/75" style={{ fontFamily: "'Inter', sans-serif" }}>
            Proven results, dedicated support, and industry recognition for sustained partnership success.
          </p>
        </div>
        <div className="mt-7 grid gap-4">
          {partnerReasons.map(([title, body]) => <InfoCard key={title} title={title} body={body} />)}
        </div>
      </section>

      <section className="bg-black px-5 py-10 text-white">
        <img alt="How we work" className="aspect-square w-full bg-[#202020] object-cover p-3 shadow-2xl" src={howWeWorkImage} />
        <div className="mt-8">
          <SectionHeading title="How We Work?" dark />
          <p className="mt-3 text-[15px] leading-7 text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
            Our work process is simple, but it packs a punch.
          </p>
        </div>
        <div className="mt-7 grid gap-4">
          {process.map(([title, body]) => <InfoCard key={title} title={title} body={body} dark />)}
        </div>
      </section>

      <section className="border-y border-black bg-white px-5 py-8">
        <SectionHeading title="Let's Talk" />
        <div className="mt-6 grid gap-4 text-[15px] text-black" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div className="flex min-w-0 items-center gap-3"><Phone className="size-5 shrink-0" /><span>+91 92113 41245</span></div>
          <div className="flex min-w-0 items-center gap-3"><Mail className="size-5 shrink-0" /><span className="break-all">info@dmiraki.com</span></div>
          <div className="flex min-w-0 items-start gap-3"><MapPin className="mt-1 size-5 shrink-0" /><span>B-103, Sector-2 Noida-201301, India</span></div>
        </div>
      </section>

      <DreamingBigSection />
      <section className="bg-white px-5 py-10">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="mt-6 border-t-2 border-black">
          {faqs.map(([q, a]) => (
            <MobileFAQItem key={q} q={q} a={a} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
