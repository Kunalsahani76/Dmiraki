import { Link } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";

const communityLinks = ["Linkedin", "Instagram"];
const serviceLinks = [
  { label: "Digital Marketing", href: "/digital-marketing" },
  { label: "SEO", href: "/seo-services" },
  { label: "Custom Software", href: "/custom-software" },
  { label: "IoT-Based Solutions", href: "/iot-solutions" },
  { label: "Web Development Services", href: "/web-development" },
];
const legalLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

function FooterColumn({ title, items, nonHeadingLabels }: { title: string; items: string[] | { label: string; href: string }[]; nonHeadingLabels: boolean }) {
  const HeadingTag = nonHeadingLabels ? "div" : "h3";
  return (
    <div className="flex flex-col gap-4">
      <HeadingTag
        className="site-footer__heading text-white text-[18px] leading-7"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
      >
        {title}
      </HeadingTag>
      <div className="flex flex-col gap-3">
        {items.map((item) => {
          const label = typeof item === "string" ? item : item.label;
          const href = typeof item === "string" ? undefined : item.href;
          const text = (
            <span
              className="site-footer__text text-[#a1a1aa] text-[16px] leading-6"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              {label}
            </span>
          );

          return href ? <Link key={label} className="block no-underline" to={href}>{text}</Link> : <p key={label}>{text}</p>;
        })}
      </div>
    </div>
  );
}

export function SiteFooter({ homePage = false, nonHeadingLabels = homePage }: { homePage?: boolean; nonHeadingLabels?: boolean }) {
  const BrandTag = nonHeadingLabels ? "div" : "h2";
  return (
    <footer className="site-footer normal-case bg-[#222] w-full">
      <div className="px-5 py-8 sm:p-[30px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-2 lg:col-[1/span_5]">
            <BrandTag
              className="site-footer__brand text-white text-[30px] leading-9"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              d&apos;miraki
            </BrandTag>
            <p
              className="site-footer__tagline text-[#a1a1aa] text-[18px] leading-7"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              {homePage ? "Digital marketing, web development and software solutions." : "Creating digital excellence"}
            </p>
            <div className="mt-3 flex flex-col gap-4">
              <a href="tel:+919211341245" className="flex items-center gap-4 text-[#a1a1aa] no-underline hover:text-white">
                <Phone aria-hidden="true" className="h-6 w-6 shrink-0 text-white" strokeWidth={1.8} />
                <span className="site-footer__text text-[16px] leading-6 sm:text-[18px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>+91 92113 41245</span>
              </a>
              <a href="mailto:info@dmiraki.com" className="flex items-center gap-4 text-[#a1a1aa] no-underline hover:text-white">
                <Mail aria-hidden="true" className="h-6 w-6 shrink-0 text-white" strokeWidth={1.8} />
                <span className="site-footer__text text-[16px] leading-6 sm:text-[18px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>info@dmiraki.com</span>
              </a>
              <div className="flex items-center gap-4 text-[#a1a1aa]">
                <MapPin aria-hidden="true" className="h-6 w-6 shrink-0 text-white" strokeWidth={1.8} />
                <span className="site-footer__text text-[16px] leading-6 sm:text-[18px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>A-20, Global Business Park, Sector 63, Noida,<br />Uttar Pradesh – 201309, India.</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-[6/span_7]">
            <FooterColumn title="Community" items={communityLinks} nonHeadingLabels={nonHeadingLabels} />
            <FooterColumn title="Services" items={serviceLinks} nonHeadingLabels={nonHeadingLabels} />
            <FooterColumn title="Legal" items={legalLinks} nonHeadingLabels={nonHeadingLabels} />
          </div>
        </div>

        <div className="border-t border-[#18181b] pt-[33px]">
          <p
            className="site-footer__copyright text-[#a1a1aa] text-[14px] text-center leading-5"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            &copy; 2026 {homePage ? "D'Miraki" : "DMiraki"}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
