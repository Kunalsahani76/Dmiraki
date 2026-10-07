type LegalPageKey = "terms" | "privacy" | "disclaimer";

type LegalSection = {
  heading: string;
  paragraphs: string[];
};

const updatedOn = "October 5, 2026";

const documents: Record<LegalPageKey, { title: string; intro: string; sections: LegalSection[] }> = {
  terms: {
    title: "Terms & Conditions",
    intro: "These terms apply when you visit the D'Miraki website or contact us through it. By using the website, you agree to these terms.",
    sections: [
      { heading: "Using this website", paragraphs: ["Use this website only for lawful purposes. Do not attempt to disrupt its operation, gain unauthorized access to it, or misuse its forms or content."] },
      { heading: "Enquiries and services", paragraphs: ["Sending an enquiry does not create a client relationship or require either party to proceed with a project. A service engagement begins only when both parties agree to a written proposal, scope, and applicable commercial terms.", "Project deliverables, fees, schedules, revisions, and ownership rights are governed by the written agreement for that project."] },
      { heading: "Website content", paragraphs: ["Website text, graphics, and other materials belong to D'Miraki or their respective owners. You may view them for personal and business evaluation, but may not copy, republish, or commercially use them without permission."] },
      { heading: "Third-party services and links", paragraphs: ["This website may link to third-party websites or services. D'Miraki does not control those services and is not responsible for their content, availability, or policies."] },
      { heading: "Availability and liability", paragraphs: ["We may update, suspend, or remove website content or features. To the extent permitted by applicable law, the website is provided without a promise that it will always be uninterrupted or error-free. Nothing in these terms limits rights or remedies that cannot legally be limited."] },
      { heading: "Governing law", paragraphs: ["These terms are governed by the laws of India. Courts with jurisdiction in Noida, Uttar Pradesh will have jurisdiction, subject to applicable law."] },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    intro: "This policy explains how D'Miraki handles information you share through this website, by email, or by phone.",
    sections: [
      { heading: "Information you provide", paragraphs: ["When you contact us, you may provide your name, email address, phone number, the service you are interested in, and details about your project or enquiry. Please avoid sending sensitive personal information unless it is needed for your request."] },
      { heading: "How we use it", paragraphs: ["We use enquiry information to respond to you, understand your requirements, prepare proposals, provide requested services, and maintain business communications. We may also use it to protect our website and records or meet legal obligations."] },
      { heading: "Sharing and service providers", paragraphs: ["We may share information with service providers who help us operate our website, email, communications, or business systems, and where disclosure is required by law. We do not publish your enquiry details for general access."] },
      { heading: "Retention and security", paragraphs: ["We keep information for as long as reasonably needed for the purposes above, including project, accounting, and legal records. We use reasonable safeguards to protect it, though no method of online transmission or storage can be guaranteed to be completely secure."] },
      { heading: "Your requests", paragraphs: ["You can contact us to ask about personal information you have shared, request a correction, or ask us to stop using it where applicable law allows. We may need to verify your identity before responding."] },
      { heading: "Changes to this policy", paragraphs: ["We may update this policy when our website or practices change. The date at the top of this page shows when it was last updated."] },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    intro: "The information on this website is provided to help visitors understand D'Miraki and its services.",
    sections: [
      { heading: "General information", paragraphs: ["Website content is general information, not professional, legal, tax, or financial advice. Consider your own requirements and obtain appropriate advice before making business decisions."] },
      { heading: "Services and results", paragraphs: ["Examples, descriptions, and expected approaches are illustrative. Actual scope, delivery dates, and fees are set out in a written project agreement. Results depend on many factors, so no particular business outcome is promised unless expressly agreed in writing."] },
      { heading: "Accuracy and availability", paragraphs: ["We aim to keep website information useful and current, but it may not cover every situation and may change over time. We do not guarantee that every page or feature will always be available or free of errors."] },
      { heading: "External links", paragraphs: ["Links to third-party websites are provided for convenience. Their content and services are managed by those third parties, and their own terms and privacy policies apply."] },
    ],
  },
};

export default function LegalPage({ page }: { page: LegalPageKey }) {
  const document = documents[page];

  return (
    <main className="min-h-[70vh] bg-[#101010] px-5 py-16 text-white sm:px-8 lg:px-10">
      <article className="mx-auto max-w-[900px]">
        <p className="text-xs uppercase tracking-[0.2em] text-white/55" style={{ fontFamily: "'Inter', sans-serif" }}>
          Last updated {updatedOn}
        </p>
        <h1 className="mt-4 text-3xl uppercase leading-tight sm:text-4xl" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          {document.title}
        </h1>
        <p className="mt-6 max-w-[760px] text-base leading-7 text-white/75" style={{ fontFamily: "'Inter', sans-serif" }}>
          {document.intro}
        </p>

        <div className="mt-10 space-y-8">
          {document.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-semibold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-sm leading-7 text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <section className="mt-12 border border-white/20 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-lg font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>Contact Us</h2>
          <p className="mt-2 text-sm leading-6 text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>
            For questions about these terms or this policy, contact D'Miraki:
          </p>
          <div className="mt-5 space-y-2 text-sm text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>
            <p><span className="font-semibold text-white">Number: </span><a className="hover:text-white" href="tel:+919211341245">+91 92113 41245</a></p>
            <p><span className="font-semibold text-white">Email: </span><a className="hover:text-white" href="mailto:info@dmiraki.com">info@dmiraki.com</a></p>
            <p><span className="font-semibold text-white">Address: </span>B-103, Sector-2 Noida-201301, India</p>
          </div>
        </section>
      </article>
    </main>
  );
}
