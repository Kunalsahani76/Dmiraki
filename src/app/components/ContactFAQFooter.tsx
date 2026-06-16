import { useState } from "react";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { SiteFooter } from "./SiteFooter";

export function DreamingBigSection() {
  return (
    <section id="contact" className="w-full border-y border-black bg-white">
      <div
        className="mx-auto grid max-w-[1270px] grid-cols-1 gap-10 px-5 py-9 sm:px-8 lg:grid-cols-[1fr_526px] lg:gap-[88px] lg:px-[62px] lg:py-[36px]"
      >
        <div className="flex flex-col gap-[54px]">
          <div>
            <h2
              className="mb-6 text-black"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(32px,4.5vw,40px)", lineHeight: "1.5" }}
            >
              Dreaming Big?<br />Let's build it.
            </h2>
            <p
              className="max-w-[520px] text-[#191c1e]"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", lineHeight: "1.55" }}
            >
              Have big ideas but unsure where to begin? Let's talk and find the perfect solution for your business.
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
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px", overflowWrap: "anywhere" }}>B-103, Sector-2 Noida-201301, India</span>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="First name"
              className="h-12 rounded-[2px] bg-[#262626] px-4 text-[#f4f4f4] outline-none placeholder:text-[#f4f4f4]/90"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="h-12 rounded-[2px] bg-[#262626] px-4 text-[#f4f4f4] outline-none placeholder:text-[#f4f4f4]/90"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="h-12 rounded-[2px] bg-[#262626] px-4 text-[#f4f4f4] outline-none placeholder:text-[#f4f4f4]/90"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}
          />
          <input
            type="tel"
            placeholder="Phone number"
            className="h-12 rounded-[2px] bg-[#262626] px-4 text-[#f4f4f4] outline-none placeholder:text-[#f4f4f4]/90"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}
          />
          <input
            type="text"
            placeholder="Enter subject"
            className="h-12 rounded-[2px] bg-[#262626] px-4 text-[#f4f4f4] outline-none placeholder:text-[#f4f4f4]/90"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}
          />
          <textarea
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
          Frequently Asked Questions
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

export function Footer() {
  return <SiteFooter />;
}
