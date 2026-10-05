const communityLinks = ["Linkedin", "Instagram"];
const serviceLinks = [
  { label: "Social Media", href: "/digital-marketing" },
  { label: "Branding", href: "/digital-marketing" },
  { label: "Marketing", href: "/digital-marketing" },
  { label: "Web Development", href: "/web-development" },
  { label: "Content Creation", href: "/digital-marketing" },
  { label: "UI/UX Design", href: "/custom-software" },
];
const legalLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

function FooterColumn({ title, items }: { title: string; items: string[] | { label: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h3
        className="site-footer__heading text-white text-[18px] leading-7"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
      >
        {title}
      </h3>
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

          return href ? <a key={label} className="block no-underline" href={href}>{text}</a> : <p key={label}>{text}</p>;
        })}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer normal-case bg-[#222] w-full">
      <div className="px-5 py-8 sm:p-[30px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-2 lg:col-[1/span_5]">
            <h2
              className="site-footer__brand text-white text-[30px] leading-9"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              d&apos;miraki
            </h2>
            <p
              className="site-footer__tagline text-[#a1a1aa] text-[18px] leading-7"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Creating digital excellence
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-[6/span_7]">
            <FooterColumn title="Community" items={communityLinks} />
            <FooterColumn title="Services" items={serviceLinks} />
            <FooterColumn title="Legal" items={legalLinks} />
          </div>
        </div>

        <div className="border-t border-[#18181b] pt-[33px]">
          <p
            className="site-footer__copyright text-[#a1a1aa] text-[14px] text-center leading-5"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            &copy; 2026 DMiraki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
