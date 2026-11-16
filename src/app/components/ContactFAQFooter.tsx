import { useState } from "react";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { SiteFooter } from "./SiteFooter";

export function DreamingBigSection() {
  const sendInquiryToWhatsApp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const message = [
      "Website inquiry",
      `Name: ${[fields.get("firstName"), fields.get("lastName")].filter(Boolean).join(" ")}`,
      `Email: ${fields.get("email")}`,
      `Phone: ${fields.get("phone")}`,
      `Subject: ${fields.get("subject")}`,
      `Project details: ${fields.get("details")}`,
    ].join("\n");
    window.location.href = `https://wa.me/919211341245?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="w-full border-y border-black bg-white">
      <div
        className="mx-auto grid max-w-[1270px] grid-cols-1 gap-10 px-5 py-9 sm:px-8 lg:grid-cols-[1fr_526px] lg:gap-[88px] lg:px-[62px] lg:py-[36px]"
      >
        <div className="flex flex-col gap-[54px]">
          <div>
            <h2
              className="mb-6 text-black uppercase"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(32px,4.5vw,40px)", lineHeight: "1.5" }}
            >
              Book a Free Strategy Call
            </h2>
            <p
              className="max-w-[520px] text-[#191c1e]"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", lineHeight: "1.55" }}
            >
              Book a free call with our Delhi NCR team and find the right solution for your business.
            </p>
          </div>
          <div className="flex flex-col gap-[26px] text-black">
            <div className="flex min-w-0 items-center gap-5">
              <Phone className="size-5 shrink-0" strokeWidth={1.8} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", overflowWrap: "anywhere" }}>+91 92113 41245</span>
            </div>
            <div className="flex min-w-0 items-center gap-5">
              <Mail className="size-5 shrink-0" strokeWidth={1.8} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", overflowWrap: "anywhere" }}>info@dmiraki.com</span>
            </div>
            <div className="flex min-w-0 items-start gap-5">
              <MapPin className="mt-1 size-5 shrink-0" strokeWidth={1.8} />
              <span style={{ display: "block", maxWidth: "390px", whiteSpace: "normal", fontFamily: "'Inter', sans-serif", fontSize: "18px", lineHeight: 1.5, overflowWrap: "anywhere" }}>
                <span className="block">A-20, Global Business Park, Sector 63,</span>
                <span className="block">Noida, Uttar Pradesh – 201309, India.</span>
              </span>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-4" onSubmit={sendInquiryToWhatsApp}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="firstName"
              required
              placeholder="First name"
              className="h-12 rounded-[2px] bg-[#262626] px-4 text-[#f4f4f4] outline-none placeholder:text-[#f4f4f4]/90"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}
            />
            <input
              type="text"
              name="lastName"
              required
              placeholder="Last Name"
              className="h-12 rounded-[2px] bg-[#262626] px-4 text-[#f4f4f4] outline-none placeholder:text-[#f4f4f4]/90"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}
            />
          </div>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="h-12 rounded-[2px] bg-[#262626] px-4 text-[#f4f4f4] outline-none placeholder:text-[#f4f4f4]/90"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone number"
            className="h-12 rounded-[2px] bg-[#262626] px-4 text-[#f4f4f4] outline-none placeholder:text-[#f4f4f4]/90"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}
          />
          <input
            type="text"
            name="subject"
            required
            placeholder="Enter subject"
            className="h-12 rounded-[2px] bg-[#262626] px-4 text-[#f4f4f4] outline-none placeholder:text-[#f4f4f4]/90"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}
          />
          <textarea
            name="details"
            required
            placeholder="Short description of the project"
            rows={5}
            className="min-h-[124px] resize-none rounded-[2px] bg-[#262626] px-4 py-3 text-[#f4f4f4] outline-none placeholder:text-[#f4f4f4]/90"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}
          />
          <button
            type="submit"
            className="h-12 w-full border border-black bg-white px-6 text-center text-black transition-colors hover:bg-black hover:text-white"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 700 }}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "What does D'Miraki specialise in?",
    a: "D'Miraki specialises in Digital Marketing, Branding, Website Development, Mobile App Development, Custom Software Development, and IoT Solutions designed for modern businesses.",
  },
  {
    q: "What digital marketing services do you offer?",
    a: "We offer SEO, International SEO, Social Media Marketing, Performance Marketing, Google Ads, Content Marketing, Branding Strategy, and Lead Generation services.",
  },
  {
    q: "Do you provide branding services for startups and businesses?",
    a: "Yes. We help businesses build a strong brand identity through logo design, brand strategy, visual communication, positioning, and digital presence.",
  },
  {
    q: "Can D'Miraki develop custom websites?",
    a: "Yes. We design and develop custom websites based on your business goals, industry, and user experience requirements.",
  },
  {
    q: "Do you create e-commerce websites?",
    a: "Yes. We build full-featured e-commerce platforms with product management, payment integration, and SEO-ready architecture.",
  },
  {
    q: "Can you develop mobile applications?",
    a: "Yes, we develop native and cross-platform mobile applications for iOS and Android tailored to your business needs.",
  },
  {
    q: "Can you build custom software for businesses?",
    a: "Yes. We build custom ERP, CRM, SaaS platforms, and enterprise systems for businesses of all sizes.",
  },
  {
    q: "Do you offer IoT solutions for industrial use?",
    a: "Yes. We develop IoT-based systems for smart infrastructure, industrial monitoring, and connected device ecosystems.",
  },
  {
    q: "Why should I choose D'Miraki over other agencies?",
    a: "We offer a full-stack digital approach — marketing, development, software, and IoT — under one roof, with a dedicated team focused on measurable outcomes.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b-2 border-black">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-8 px-4 text-left"
      >
        <span
          className="text-black pr-4"
          style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(16px,2vw,22px)", lineHeight: "1.5" }}
        >
          {q}
        </span>
        <ChevronDown
          size={20}
          className="shrink-0 transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {open && (
        <div className="px-4 pb-6">
          <p
            className="text-black"
            style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(14px,1.5vw,20px)", lineHeight: "1.7" }}
          >
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10">
        <h2
          className="text-black uppercase mb-4"
          style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(24px,5vw,72px)", letterSpacing: "-1px", fontWeight: 400 }}
        >
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="mt-8">
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.q} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

const HOME_FAQ_ITEMS = [
  ["What does D'Miraki do?", "D'Miraki is a Noida-based agency for digital marketing, SEO, web development, custom software and IoT solutions."],
  ["Who does D'Miraki work with?", "B2B businesses, startups and growing companies across Delhi NCR and India."],
  ["Which digital marketing services do you offer?", "SEO, performance marketing, social media management, PPC, content marketing and email marketing. See our digital marketing services."],
  ["Do you build websites and software?", "Yes. Websites, web apps, mobile apps and custom software such as CRM, ERP and SaaS products. See web development and custom software."],
  ["Do you offer IoT solutions?", "Yes. IoT solutions that connect devices, dashboards and data, from sensor integration to cloud apps. See our IoT solutions."],
  ["What does D'Miraki focus on in digital marketing?", "Leads and measurable results, not vanity metrics."],
  ["Where is D'Miraki based?", "Noida, Uttar Pradesh. We serve businesses across Delhi NCR and India."],
  ["How do I get started?", "Book a free strategy call or email info@dmiraki.com. We start by understanding your business."],
] as const;

function HomeFAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className={`overflow-hidden rounded-[13px] border ${open ? "border-[#4a4a47]" : "border-[#3a3a38]"}`}>
      <h3 className="m-0">
        <button aria-expanded={open} className="flex w-full items-center justify-between gap-4 px-5 py-[13px] text-left sm:px-6" onClick={() => setOpen((value) => !value)} type="button">
          <span className="text-[16px] font-semibold leading-6 sm:text-[18px]" style={{ fontFamily: "'Roboto', sans-serif" }}>{q}</span>
          <span className="shrink-0 text-[25px] leading-none" aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
      </h3>
      {open && <p className="px-5 pb-5 text-[16px] leading-[1.65] text-[#b9b9b5] sm:px-6" style={{ fontFamily: "'Roboto', sans-serif" }}>{a}</p>}
    </div>
  );
}

export function HomeFAQSection() {
  return (
    <section className="bg-[#fbfbfb] px-5 py-10 sm:px-8">
      <div className="mx-auto w-full max-w-[1226px] rounded-[20px] border border-[#30302e] bg-[#191918] p-6 text-[#ededeb] sm:p-9 lg:p-10">
        <div className="grid gap-8 md:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.3fr)] md:gap-12">
          <div>
            <h2 className="max-w-[340px] text-[32px] font-semibold leading-[1.2] tracking-[-0.03em] sm:text-[36px]" style={{ fontFamily: "'Roboto', sans-serif" }}>Frequently Asked Questions</h2>
            <p className="mt-4 max-w-[340px] text-[18px] leading-[1.65] text-[#b9b9b5]" style={{ fontFamily: "'Roboto', sans-serif" }}>Quick answers about D'Miraki and how we work.</p>
            <p className="mt-7 text-[16px] text-[#b9b9b5]" style={{ fontFamily: "'Roboto', sans-serif" }}>Still have a question?</p>
            <a href="/contact" className="mt-3 inline-flex items-center gap-3 rounded-[12px] border border-[#484845] px-6 py-3 text-[17px] font-medium text-[#e6e6e3] transition-colors hover:bg-white/5" style={{ fontFamily: "'Roboto', sans-serif" }}>Book a free call <span aria-hidden="true">&#8594;</span></a>
          </div>
          <div className="space-y-0.5">
            {HOME_FAQ_ITEMS.map(([q, a], index) => <HomeFAQItem key={q} q={q} a={a} index={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

const DIGITAL_MARKETING_FAQ_ITEMS = [
  ["Do you manage Google Ads and PPC campaigns?", "Yes. We handle PPC management, including bidding, ad creatives and ongoing optimisation."],
  ["Do you offer social media and content marketing?", "Yes. We plan and manage social media, and create content that builds authority and trust."],
  ["How do you measure results?", "We track revenue, cost per acquisition and customer lifetime value, not vanity metrics."],
  ["How long does digital marketing take to show results?", "Paid campaigns can bring traffic soon after launch. SEO and content usually take months. Timing depends on your market and goals."],
  ["What is your digital marketing process?", "Research, strategy, campaign design, launch, optimisation and scaling."],
  ["How much do your digital marketing services cost?", "It depends on your goals and scope. Book a free strategy call for a quote."],
] as const;

export function DigitalMarketingFAQSection() {
  return (
    <section className="bg-[#fbfbfb] px-5 py-10 sm:px-8">
      <div className="mx-auto w-full max-w-[1226px] rounded-[20px] border border-[#30302e] bg-[#191918] p-6 text-[#ededeb] sm:p-9 lg:p-10">
        <div className="grid gap-8 md:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.3fr)] md:gap-12">
          <div>
            <h2 className="max-w-[340px] text-[32px] font-semibold leading-[1.2] tracking-[-0.03em] sm:text-[36px]" style={{ fontFamily: "'Roboto', sans-serif" }}>Frequently Asked Questions</h2>
            <p className="mt-4 max-w-[340px] text-[18px] leading-[1.65] text-[#b9b9b5]" style={{ fontFamily: "'Roboto', sans-serif" }}>Quick answers about our digital marketing services.</p>
            <p className="mt-7 text-[16px] text-[#b9b9b5]" style={{ fontFamily: "'Roboto', sans-serif" }}>Still have a question?</p>
            <a href="/contact" className="mt-3 inline-flex items-center gap-3 rounded-[12px] border border-[#484845] px-6 py-3 text-[17px] font-medium text-[#e6e6e3] transition-colors hover:bg-white/5" style={{ fontFamily: "'Roboto', sans-serif" }}>Book a free call <span aria-hidden="true">&#8594;</span></a>
          </div>
          <div className="space-y-0.5">
            {DIGITAL_MARKETING_FAQ_ITEMS.map(([q, a], index) => <HomeFAQItem key={q} q={q} a={a} index={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

const SEO_FAQ_ITEMS = [
  ["Do you offer link building services?", "Yes. We build quality backlinks that grow your domain authority."],
  ["Do you offer a free SEO audit?", "Yes. Get a free SEO audit from our Delhi NCR team. Book it here."],
  ["How long does SEO take to show results?", "Usually several months, depending on competition and your starting point."],
  ["Do you optimise for AI search like ChatGPT and Google AI Overviews?", "Yes. We structure content so AI tools can cite your brand."],
  ["Do you offer local SEO for Delhi NCR?", "Yes. We optimise for regional and local search intent, including Delhi NCR."],
  ["What makes your SEO approach different?", "We start with brand alignment, then keyword research, so your search presence reflects your real authority."],
] as const;

export function SEOFAQSection() {
  return (
    <section className="bg-[#fbfbfb] px-5 py-10 sm:px-8">
      <div className="mx-auto w-full max-w-[1226px] rounded-[20px] border border-[#30302e] bg-[#191918] p-6 text-[#ededeb] sm:p-9 lg:p-10">
        <div className="grid gap-8 md:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.3fr)] md:gap-12">
          <div>
            <h2 className="max-w-[340px] text-[32px] font-semibold leading-[1.2] tracking-[-0.03em] sm:text-[36px]" style={{ fontFamily: "'Roboto', sans-serif" }}>Frequently Asked Questions</h2>
            <p className="mt-4 max-w-[340px] text-[18px] leading-[1.65] text-[#b9b9b5]" style={{ fontFamily: "'Roboto', sans-serif" }}>Quick answers about our SEO services.</p>
            <p className="mt-7 text-[16px] text-[#b9b9b5]" style={{ fontFamily: "'Roboto', sans-serif" }}>Still have a question?</p>
            <a href="/contact" className="mt-3 inline-flex items-center gap-3 rounded-[12px] border border-[#484845] px-6 py-3 text-[17px] font-medium text-[#e6e6e3] transition-colors hover:bg-white/5" style={{ fontFamily: "'Roboto', sans-serif" }}>Book a free call <span aria-hidden="true">&#8594;</span></a>
          </div>
          <div className="space-y-0.5">
            {SEO_FAQ_ITEMS.map(([q, a], index) => <HomeFAQItem key={q} q={q} a={a} index={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

const SOFTWARE_FAQ_ITEMS = [
  ["Do you build SaaS products?", "Yes, from MVP to scale, using multi-tenant cloud platforms."],
  ["Can you build CRM and ERP systems?", "Yes. Custom tools that centralise your operations and customer data."],
  ["Do you build AI-powered apps?", "Yes. We build apps that use LLMs, computer vision and predictive analytics."],
  ["Which technologies and cloud platforms do you use?", "React, Flutter and native technologies, on AWS, Azure and Google Cloud."],
  ["What is your software development process?", "Requirement analysis, UI/UX design, development, testing, deployment and support."],
  ["How long does it take and what does it cost?", "Both depend on scope. We give you a timeline and quote after discussing your requirements. Book a free call."],
] as const;

export function SoftwareFAQSection() {
  return (
    <section className="bg-[#fbfbfb] px-5 py-10 sm:px-8">
      <div className="mx-auto w-full max-w-[1226px] rounded-[20px] border border-[#30302e] bg-[#191918] p-6 text-[#ededeb] sm:p-9 lg:p-10">
        <div className="grid gap-8 md:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.3fr)] md:gap-12">
          <div>
            <h2 className="max-w-[340px] text-[32px] font-semibold leading-[1.2] tracking-[-0.03em] sm:text-[36px]" style={{ fontFamily: "'Roboto', sans-serif" }}>Frequently Asked Questions</h2>
            <p className="mt-4 max-w-[340px] text-[18px] leading-[1.65] text-[#b9b9b5]" style={{ fontFamily: "'Roboto', sans-serif" }}>Quick answers about our custom software services.</p>
            <p className="mt-7 text-[16px] text-[#b9b9b5]" style={{ fontFamily: "'Roboto', sans-serif" }}>Still have a question?</p>
            <a href="/contact" className="mt-3 inline-flex items-center gap-3 rounded-[12px] border border-[#484845] px-6 py-3 text-[17px] font-medium text-[#e6e6e3] transition-colors hover:bg-white/5" style={{ fontFamily: "'Roboto', sans-serif" }}>Book a free call <span aria-hidden="true">&#8594;</span></a>
          </div>
          <div className="space-y-0.5">
            {SOFTWARE_FAQ_ITEMS.map(([q, a], index) => <HomeFAQItem key={q} q={q} a={a} index={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

const WEB_DEVELOPMENT_FAQ_ITEMS = [
  ["What website development services do you offer?", "Corporate websites, e-commerce, landing pages, WordPress and CMS sites, and custom web apps."],
  ["Do you build e-commerce websites?", "Yes. E-commerce websites built for conversions, with secure payment gateways."],
  ["Which technologies do you use for web development?", "Next.js and React, plus WordPress and other CMS platforms."],
  ["Are your websites mobile-friendly and SEO-ready?", "Yes. Every site is built mobile-first with SEO-ready code."],
  ["Can you build a WordPress website?", "Yes. We build custom WordPress and CMS websites around how your team publishes content."],
  ["Can you redesign my existing website?", "Yes. We can redesign your site after reviewing what you have today."],
  ["What is your website development process?", "Research, wireframing, UI/UX design, development, testing, and launch with maintenance."],
  ["How long does it take to build a website?", "It depends on size and features. We confirm the timeline once the scope is clear."],
  ["How can I get a website quote?", "Share your requirements on our contact page and we will send a quote."],
] as const;

export function WebDevelopmentFAQSection() {
  return (
    <section className="bg-[#fbfbfb] px-5 py-10 sm:px-8">
      <div className="mx-auto w-full max-w-[1226px] rounded-[20px] border border-[#30302e] bg-[#191918] p-6 text-[#ededeb] sm:p-9 lg:p-10">
        <div className="grid gap-8 md:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.3fr)] md:gap-12">
          <div>
            <h2 className="max-w-[340px] text-[32px] font-semibold leading-[1.2] tracking-[-0.03em] sm:text-[36px]" style={{ fontFamily: "'Roboto', sans-serif" }}>Frequently Asked Questions</h2>
            <p className="mt-4 max-w-[340px] text-[18px] leading-[1.65] text-[#b9b9b5]" style={{ fontFamily: "'Roboto', sans-serif" }}>Quick answers about our website development services.</p>
            <p className="mt-7 text-[16px] text-[#b9b9b5]" style={{ fontFamily: "'Roboto', sans-serif" }}>Still have a question?</p>
            <a href="/contact" className="mt-3 inline-flex items-center gap-3 rounded-[12px] border border-[#484845] px-6 py-3 text-[17px] font-medium text-[#e6e6e3] transition-colors hover:bg-white/5" style={{ fontFamily: "'Roboto', sans-serif" }}>Book a free call <span aria-hidden="true">&#8594;</span></a>
          </div>
          <div className="space-y-0.5">
            {WEB_DEVELOPMENT_FAQ_ITEMS.map(([q, a], index) => <HomeFAQItem key={q} q={q} a={a} index={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

const IOT_FAQ_ITEMS = [
  ["What is IoT software development?", "Building software that connects devices and sensors to dashboards and cloud systems."],
  ["What IoT services do you offer?", "Smart home automation, industrial IoT, IoT apps, dashboards, sensor and hardware integration, and cloud IoT."],
  ["Do you build IoT mobile apps?", "Yes. Mobile apps that control and monitor connected hardware from anywhere."],
  ["What is an IoT dashboard?", "A screen that shows live data from your devices so you can monitor and act."],
  ["Do you integrate sensors and hardware?", "Yes. We integrate custom sensors and embedded systems with cloud platforms."],
  ["How do you secure IoT data?", "We use encryption for device-to-cloud data and security testing."],
  ["Which industries use your IoT solutions?", "Manufacturing, logistics, smart homes and facility management."],
  ["Do you offer predictive maintenance?", "Yes. We help spot potential failures before they cause downtime."],
  ["What is your IoT development process?", "Discovery, architecture, integration, connectivity and security."],
] as const;

export function IoTFAQSection() {
  return (
    <section className="bg-[#fbfbfb] px-5 py-10 sm:px-8">
      <div className="mx-auto w-full max-w-[1226px] rounded-[20px] border border-[#30302e] bg-[#191918] p-6 text-[#ededeb] sm:p-9 lg:p-10">
        <div className="grid gap-8 md:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.3fr)] md:gap-12">
          <div>
            <h2 className="max-w-[340px] text-[32px] font-semibold leading-[1.2] tracking-[-0.03em] sm:text-[36px]" style={{ fontFamily: "'Roboto', sans-serif" }}>Frequently Asked Questions</h2>
            <p className="mt-4 max-w-[340px] text-[18px] leading-[1.65] text-[#b9b9b5]" style={{ fontFamily: "'Roboto', sans-serif" }}>Quick answers about our IoT solutions.</p>
            <p className="mt-7 text-[16px] text-[#b9b9b5]" style={{ fontFamily: "'Roboto', sans-serif" }}>Still have a question?</p>
            <a href="/contact" className="mt-3 inline-flex items-center gap-3 rounded-[12px] border border-[#484845] px-6 py-3 text-[17px] font-medium text-[#e6e6e3] transition-colors hover:bg-white/5" style={{ fontFamily: "'Roboto', sans-serif" }}>Book a free call <span aria-hidden="true">&#8594;</span></a>
          </div>
          <div className="space-y-0.5">
            {IOT_FAQ_ITEMS.map(([q, a], index) => <HomeFAQItem key={q} q={q} a={a} index={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

const CONTACT_FAQ_ITEMS = [
  ["How can I contact D'Miraki?", "Call +91 92113 41245, email info@dmiraki.com or send an enquiry through the form."],
  ["Where is your office?", "A-20, Global Business Park, Sector 63, Noida, Uttar Pradesh – 201309, India."],
  ["What is a free digital strategy call?", "A free call to discuss your goals in SEO, digital marketing, web development or custom software."],
  ["How do I book a free call?", "Fill in the enquiry form or call us, and we will arrange it."],
  ["What should I include in my enquiry?", "Your name, email, phone number, the service you need and a short description of your project."],
  ["Which services can I enquire about?", "SEO, digital marketing, web development, custom software and IoT solutions."],
  ["Do you work with clients outside Delhi NCR?", "Yes. We serve businesses across India."],
] as const;

export function ContactFAQSection() {
  return (
    <section className="bg-[#fbfbfb] px-5 py-10 sm:px-8">
      <div className="mx-auto w-full max-w-[1226px] rounded-[20px] border border-[#30302e] bg-[#191918] p-6 text-[#ededeb] sm:p-9 lg:p-10">
        <div className="grid gap-8 md:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.3fr)] md:gap-12">
          <div>
            <h2 className="max-w-[340px] text-[32px] font-semibold leading-[1.2] tracking-[-0.03em] sm:text-[36px]" style={{ fontFamily: "'Roboto', sans-serif" }}>Frequently Asked Questions</h2>
            <p className="mt-4 max-w-[340px] text-[18px] leading-[1.65] text-[#b9b9b5]" style={{ fontFamily: "'Roboto', sans-serif" }}>Quick answers about contacting D'Miraki.</p>
            <p className="mt-7 text-[16px] text-[#b9b9b5]" style={{ fontFamily: "'Roboto', sans-serif" }}>Still have a question?</p>
            <a href="/contact" className="mt-3 inline-flex items-center gap-3 rounded-[12px] border border-[#484845] px-6 py-3 text-[17px] font-medium text-[#e6e6e3] transition-colors hover:bg-white/5" style={{ fontFamily: "'Roboto', sans-serif" }}>Book a free call <span aria-hidden="true">&#8594;</span></a>
          </div>
          <div className="space-y-0.5">
            {CONTACT_FAQ_ITEMS.map(([q, a], index) => <HomeFAQItem key={q} q={q} a={a} index={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return <SiteFooter />;
}
