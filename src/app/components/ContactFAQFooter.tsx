import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SiteFooter } from "./SiteFooter";

export function DreamingBigSection() {
  return (
    <section id="contact" className="w-full bg-white py-0">
      {/* CTA Banner */}
      <div className="w-full bg-white border-t border-black py-12 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1270px] mx-auto">
          <h2
            className="text-black mb-4"
            style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(28px,5vw,56px)", lineHeight: "1.2" }}
          >
            Dreaming Big?<br />Let's build it.
          </h2>
          <p
            className="text-[#191c1e] mb-0"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", lineHeight: "1.7", maxWidth: "500px" }}
          >
            Have big ideas but unsure where to begin? Let's talk and find the perfect solution for your business.
          </p>
        </div>
      </div>

      {/* Contact form section */}
      <div
        className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10 py-10"
        style={{ border: "1px solid black" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            <div>
              <h3
                className="text-black mb-4"
                style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(22px,3vw,38px)", lineHeight: "1.3" }}
              >
                Dreaming Big?<br />Let's build it.
              </h3>
              <p
                className="text-[#191c1e]"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", lineHeight: "1.7" }}
              >
                Have big ideas but unsure where to begin? Let's talk and find the perfect solution for your business.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="text-xl">📞</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px" }}>+91 92113 41245</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">✉️</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px" }}>info@dmiraki.com</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl mt-1">📍</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px" }}>B-103, Sector-2 Noida-201301, India</span>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="bg-[#262626] text-[#f4f4f4] px-4 py-3 rounded-sm outline-none"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px" }}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-[#262626] text-[#f4f4f4] px-4 py-3 rounded-sm outline-none"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px" }}
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="bg-[#262626] text-[#f4f4f4] px-4 py-3 rounded-sm outline-none"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px" }}
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="bg-[#262626] text-[#f4f4f4] px-4 py-3 rounded-sm outline-none"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px" }}
              />
              <input
                type="text"
                placeholder="Enter subject"
                className="bg-[#262626] text-[#f4f4f4] px-4 py-3 rounded-sm outline-none"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px" }}
              />
              <textarea
                placeholder="Short description of the project"
                rows={5}
                className="bg-[#262626] text-[#f4f4f4] px-4 py-3 rounded-sm outline-none resize-none"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px" }}
              />
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 rounded-sm hover:bg-black hover:text-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 600, border: "1px solid black" }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
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
