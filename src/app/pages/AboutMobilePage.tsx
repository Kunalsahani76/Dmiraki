import { useState } from "react";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import imgHeroBackground from "../../imports/DesktopAbout/899ad3003fb6b8bbbc20a36dec9d11b401674a56.png";
import imgHeroPerson from "../../imports/DesktopAbout/1d7d1199b6359e2a5a182bbb1787c2a835d1add3.png";
import imgStory from "../../imports/DesktopAbout/5d30b30b201bc563295ce7873381ee59fe7c305a.png";
import howWeWorkImage from "../../images/HOW-WE-WORK.png";
import { DreamingBigSection } from "../components/ContactFAQFooter";

const values = [
  ["Excellence", "Maintaining the highest standards in everything we do."],
  ["Innovation", "Staying ahead of trends to give you a competitive edge."],
  ["Transparency", "Clear communication and honest timelines."],
  ["Results", "Every decision is focused on measurable outcomes."],
];

const expertise = [
  ["Digital Marketing Services", "Performance-driven marketing solutions designed to increase visibility, strengthen positioning, and generate meaningful business growth."],
  ["Custom Software Development", "Tailored digital systems and scalable software solutions engineered to simplify operations and improve efficiency."],
  ["Website & Mobile App Development", "Modern websites and mobile applications built for seamless functionality, user engagement, and long-term scalability."],
  ["Branding Services", "Distinct brand experiences crafted to create recognition, credibility, and stronger market presence."],
  ["IoT Solutions", "Intelligent connected systems designed to automate processes, improve monitoring, and enhance operational control."],
  ["Digital Strategy Consulting", "Aligning technology, marketing, and business objectives into one unified digital growth framework."],
];

const partnerReasons = [
  ["200+ Projects Delivered", "200+ successful projects across industries with measurable results."],
  ["Dedicated Team", "You'll work with a consistent team invested in your success."],
  ["Support & Optimization", "Continuous optimization and support for sustained growth."],
  ["Industry Recognition", "Recognized for innovation and results by peers and publications."],
];

const process = [
  ["Client-Centric Approach", "We prioritize our clients' needs, ensuring personalized strategies that align with their business goals and deliver measurable results."],
  ["Transparent Communication", "Open and honest communication is at the heart of our operations, fostering trust and collaboration throughout every project."],
  ["Modern Technology", "We leverage latest technologies and creative strategies to provide cutting-edge solutions that drive business growth."],
  ["Data-Driven Marketing", "We utilize comprehensive data analysis to inform our decisions, ensuring effective and efficient marketing campaigns."],
];

const faqs = [
  ["What does D'Miraki specialise in?", "D'Miraki is a Noida-based digital marketing and web development company. We help businesses grow with SEO, performance marketing, web development, custom software and IoT solutions."],
  ["What digital marketing services do you offer?", "We offer SEO, social media marketing, performance marketing, Google Ads, content marketing, branding strategy and lead generation."],
  ["Do you build custom websites and mobile apps?", "Yes. We design and develop custom websites and mobile apps around your business goals and user needs."],
  ["Can you develop custom software for businesses?", "Yes. We build custom software, including ERP, CRM and SaaS platforms, to help businesses improve and automate their operations."],
  ["Which industries and business sizes do you work with?", "We work with startups, small and medium businesses, and enterprises across a range of industries."],
  ["Why should I choose D'Miraki?", "Our team brings strategy, marketing and technology together to create solutions focused on meaningful business growth."],
  ["Do you provide support after a project is completed?", "Yes. We provide ongoing maintenance, technical support, updates and performance monitoring."],
  ["How can I get started with D'Miraki?", "Contact our team through the website, email or phone to discuss your project and business requirements."],
];

function SectionHeading({ title, dark = false }: { title: string; dark?: boolean }) {
  return (
    <h2
      className={dark ? "text-white uppercase" : "text-black uppercase"}
      style={{ fontFamily: "'Pirulen:Regular', sans-serif", fontSize: "clamp(26px, 9vw, 38px)", lineHeight: 1.16 }}
    >
      {title}
    </h2>
  );
}

function InfoCard({ title, body, dark = false }: { title: string; body: string; dark?: boolean }) {
  return (
    <article className={dark ? "border border-white p-5 text-white" : "border border-black p-5 text-black"}>
      <div className={dark ? "mb-5 h-1 w-12 bg-white" : "mb-5 h-1 w-12 bg-black"} />
      <h3 className="mb-3 text-[18px] leading-tight uppercase" style={{ fontFamily: "'Pirulen:Regular', sans-serif" }}>
        {title}
      </h3>
      <p className={dark ? "text-sm leading-6 text-white/75" : "text-sm leading-6 text-black/70"} style={{ fontFamily: "'Roboto', sans-serif" }}>
        {body}
      </p>
    </article>
  );
}

function MobileFAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(q === faqs[0][0]);
  return (
    <div className={`overflow-hidden rounded-[13px] border ${open ? "border-[#4a4a47]" : "border-[#3a3a38]"}`}>
      <h3 className="m-0">
        <button aria-expanded={open} className="flex w-full items-center justify-between gap-4 px-5 py-3 text-left text-[#ededeb]" onClick={() => setOpen((value) => !value)}>
          <span className="text-[17px] font-semibold leading-6" style={{ fontFamily: "'Roboto', sans-serif" }}>{q}</span>
          <span aria-hidden="true" className="shrink-0 text-[25px] leading-none">{open ? "?" : "+"}</span>
        </button>
      </h3>
      {open && <p className="px-5 pb-5 text-[15px] leading-7 text-[#b9b9b5]" style={{ fontFamily: "'Roboto', sans-serif" }}>{a}</p>}
    </div>
  );
}

export default function AboutMobilePage() {
  return (
    <main className="about-page-typography w-full overflow-x-hidden bg-[#fbfbfb] md:hidden">
      <section className="relative overflow-hidden bg-black px-5 pb-8 pt-10 text-white">
        <img alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" src={imgHeroBackground} />
        <div className="relative z-10 flex flex-col gap-7">
          <div>
            <h1 className="text-[44px] uppercase leading-[1.05]" style={{ fontFamily: "'Pirulen:Regular', sans-serif" }}>
              About <br />D&apos;Miraki <span className="sr-only"> Digital Marketing Agency in Noida</span>
            </h1>
            <p className="mt-5 text-[15px] leading-6" style={{ fontFamily: "'Roboto', sans-serif" }}>
              At D'Miraki, we believe technology should solve real problems, not add to them.
            </p>
            <p className="mt-4 text-[14px] leading-6 text-white/80" style={{ fontFamily: "'Roboto', sans-serif" }}>
              With <strong>15+ years of experience in top-tier MNCs</strong>, we understand the challenges businesses face when trying to grow, manage operations, and reach the right customers. We bring together software development, mobile apps, CRM, parking management solutions, and digital marketing to help businesses simplify their work and build a stronger digital presence. We take the time to understand your business before we suggest a solution. Because the right technology starts with the right understanding.
            </p>
          </div>
          <div className="about-hero-floating-image overflow-hidden border border-white/40 bg-white/10 shadow-2xl">
            <img alt="About DMiraki" className="aspect-[1/1.04] w-full object-cover" src={imgHeroPerson} />
          </div>
        </div>
      </section>

      <section className="grid gap-4 px-5 py-8">
        <article className="bg-gradient-to-r from-[#b9b9b9] to-[#2e2e2e] p-5 text-white">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-[26px] uppercase leading-tight" style={{ fontFamily: "'Pirulen:Regular', sans-serif" }}>Our Mission</h2>
            <ArrowRight className="size-5 shrink-0" />
          </div>
          <p className="border border-black bg-white p-4 text-[15px] leading-7 text-black" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Empowering businesses to achieve sustainable growth through strategic digital innovation. We build partnerships, not just services.
          </p>
        </article>

        <article className="bg-gradient-to-r from-[#b9b9b9] to-[#2e2e2e] p-5 text-white">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-[26px] uppercase leading-tight" style={{ fontFamily: "'Pirulen:Regular', sans-serif" }}>Our Vision</h2>
            <ArrowRight className="size-5 shrink-0" />
          </div>
          <p className="border border-black bg-white p-4 text-[15px] leading-7 text-black" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Empowering businesses to achieve sustainable growth through strategic digital innovation. We build partnerships, not just services.
          </p>
        </article>
      </section>

      <section className="px-5 py-6">
        <div className="border border-black p-5">
          <SectionHeading title="OUR STORY" />
          <p className="mt-4 text-[15px] leading-7 text-[#333]" style={{ fontFamily: "'Roboto', sans-serif" }}>
            We believe good work starts with understanding people. DMiraki was built on a simple belief: businesses don't need more promises; they need people who understand their challenges and care about getting things right. With experience across technology and digital marketing, we look beyond the brief to understand what a business is trying to achieve, what's holding it back, and where we can make a real difference. We don't believe in recommending solutions just because we offer them. We believe in honest conversations, thoughtful work, and relationships built on trust. Because behind every business is a person who has invested their time, money, and belief in making it work. <strong>We respect that.</strong>
          </p>
          <img alt="Our Story" className="mt-5 aspect-[469/296] w-full object-cover" src={imgStory} />
        </div>
      </section>

      <section className="mx-5 bg-gradient-to-r from-black to-[#545454] px-5 py-8 text-white">
        <div className="text-center">
          <SectionHeading title="Our Values" dark />
          <p className="mt-4 text-[15px] leading-7 text-white/75" style={{ fontFamily: "'Roboto', sans-serif" }}>
            We put people before projects and relationships before transactions. We listen before we suggest, speak honestly about what is possible, and recommend solutions based on what our customers actually need. For us, trust is earned through actions, not words.
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
                <p className="mt-1 text-[14px] leading-6 text-white/70" style={{ fontFamily: "'Roboto', sans-serif" }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-5 my-8 border border-black p-6 text-black">
        <SectionHeading title="What We Stand For" />
        <p className="mt-4 text-[16px] font-bold leading-7" style={{ fontFamily: "'Roboto', sans-serif" }}>Customers are not just projects or payments. They are the reason we do what we do.</p>
        <p className="mt-2 text-[16px] leading-7" style={{ fontFamily: "'Roboto', sans-serif" }}>We listen, we stay honest, and we work towards finding the right solution together.</p>
      </section>

      <section className="px-5 py-10">
        <div className="text-center">
          <SectionHeading title="OUR EXPERTISE" />
          <p className="mt-4 text-[15px] leading-7 text-black/75" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Building intelligent digital ecosystems through strategy, technology, and scalable execution.
          </p>
        </div>
        <div className="mt-7 grid gap-4">
          {expertise.map(([title, body]) => <InfoCard key={title} title={title} body={body} />)}
        </div>
      </section>

      <section className="px-5 pb-10">
        <div className="text-center">
        <SectionHeading title="Why Partner With D'Miraki" />
          <p className="mt-4 text-[15px] leading-7 text-black/75" style={{ fontFamily: "'Roboto', sans-serif" }}>
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
          <SectionHeading title="How We Work" dark />
          <p className="mt-3 text-[15px] leading-7 text-white/80" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Our work process is simple, but it packs a punch.
          </p>
        </div>
        <div className="mt-7 grid gap-4">
          {process.map(([title, body]) => <InfoCard key={title} title={title} body={body} dark />)}
        </div>
      </section>

      <section className="border-y border-black bg-white px-5 py-8">
        <SectionHeading title="Contact DMiraki in Noida" />
        <div className="mt-6 grid gap-4 text-[15px] text-black" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div className="flex min-w-0 items-center gap-3"><Phone className="size-5 shrink-0" /><span>+91 92113 41245</span></div>
          <div className="flex min-w-0 items-center gap-3"><Mail className="size-5 shrink-0" /><span className="break-all">info@dmiraki.com</span></div>
          <div className="flex min-w-0 items-start gap-3"><MapPin className="mt-1 size-5 shrink-0" /><span>A-20, Global Business Park, Sector 63, Noida, Uttar Pradesh – 201309, India.</span></div>
        </div>
      </section>

      <DreamingBigSection />
      <section className="bg-[#fbfbfb] px-5 py-10">
        <div className="rounded-[20px] border border-[#30302e] bg-[#191918] p-5 text-[#ededeb]">
          <h2 className="text-[30px] font-semibold leading-tight tracking-[-0.03em]" style={{ fontFamily: "'Roboto', sans-serif" }}>Frequently asked questions</h2>
          <p className="mt-3 text-[17px] leading-7 text-[#b9b9b5]" style={{ fontFamily: "'Roboto', sans-serif" }}>Quick answers about D'Miraki and how we work.</p>
          <p className="mt-6 text-[15px] text-[#b9b9b5]" style={{ fontFamily: "'Roboto', sans-serif" }}>Still have a question?</p>
          <a href="/contact" className="mt-3 inline-flex items-center gap-3 rounded-[12px] border border-[#484845] px-5 py-3 text-[16px] font-medium text-[#e6e6e3]" style={{ fontFamily: "'Roboto', sans-serif" }}>Book a free call <ArrowRight className="size-4" /></a>
          <div className="mt-7 space-y-1">
            {faqs.map(([q, a]) => <MobileFAQItem key={q} q={q} a={a} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
