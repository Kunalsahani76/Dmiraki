const communityLinks = ["Linkedin", "Instagram"];
const serviceLinks = [
  "Social Media",
  "Branding",
  "Marketing",
  "Web Development",
  "Content Creation",
  "UI/UX Design",
];
const legalLinks = ["Terms & Conditions", "Privacy Policy", "Disclaimer"];

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h3
        className="text-white text-[18px] leading-7"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
      >
        {title}
      </h3>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <p
            key={item}
            className="text-[#a1a1aa] text-[16px] leading-6"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#222] w-full">
      <div className="px-5 py-8 sm:p-[30px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-2 lg:col-[1/span_5]">
            <h2
              className="text-white text-[30px] leading-9"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              d&apos;miraki
            </h2>
            <p
              className="text-[#a1a1aa] text-[18px] leading-7"
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
            className="text-[#a1a1aa] text-[14px] text-center leading-5"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            &copy; 2026 DMiraki. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
