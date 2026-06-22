import {
  Bot,
  BrainCircuit,
  Compass,
  Gauge,
  Globe2,
  Layers3,
  MapPin,
  MessageSquareText,
  MonitorSmartphone,
  ScanSearch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import heroBackground from "../../images/digitalmarketingbaner.png";
import seoHeroVisual from "../../images/seo.png";
import heroVisual from "../../imports/Home/899ad3003fb6b8bbbc20a36dec9d11b401674a56.png";
import dashboardVisual from "../../imports/Home/ba94765630e49ad56eb0745d378f772c95ef7582.png";
import angledVisual from "../../imports/Home/d122b3ff70f38e655ad6398506d3fa09c7ea863d.png";
import structureVisual from "../../imports/Home/62e16418f7e504fb2bb78f293d401b41f8afc188.png";

const orbitron = { fontFamily: "'Orbitron', sans-serif" };
const inter = { fontFamily: "'Inter', sans-serif" };
const playfair = { fontFamily: "'Playfair Display', serif" };

const aiCards = [
  {
    icon: Bot,
    title: "ChatGPT & Perplexity",
    copy: "Brands must be part of the synthesis to be part of the decision.",
    light: true,
  },
  {
    icon: Sparkles,
    title: "Google AI Overviews",
    copy: "Engineered clarity that feeds generative search summaries directly.",
    light: false,
  },
  {
    icon: MessageSquareText,
    title: "Conversational Shift",
    copy: "Optimizing for natural inquiry and intent-driven dialogue.",
    light: true,
  },
];

const realityCards = [
  [MonitorSmartphone, "Mobile-First", "Optimized for high-speed delivery on diverse network conditions."],
  [MapPin, "Regional Intent", "Accounting for localized nuance and linguistic patterns."],
  [ShieldCheck, "Trust Summaries", "Building immediate credibility through AI-distilled snippets."],
  [Gauge, "Shorter Cycles", "Accelerating the decision journey from search to conversion."],
];

const engineeredItems = [
  ["01", "Intent Structure", "Designing the framework that maps user curiosity to your brand's specific solutions."],
  ["02", "Position Definition", "Establishing the exact mental space your brand should occupy in the search landscape."],
  ["03", "Content Calibration", "Precision-weighted assets that answer queries with absolute authority and zero fluff."],
  ["04", "Technical Discipline", "Flawless underlying code that allows search bots to crawl with maximum efficiency."],
  ["05", "Authority Layering", "Strategically connecting your digital footprint to establish high-domain trustworthiness."],
];

function GridBackdrop() {
  return (
    <div
      className="absolute inset-0 opacity-45"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    />
  );
}

export default function SEOPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="service-hero-typography relative min-h-[700px] overflow-hidden bg-[#111]">
        <img
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-95"
          src={heroBackground}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.1),rgba(0,0,0,0.54))]" />
        <div className="relative mx-auto grid min-h-[700px] max-w-[1270px] grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-[42px]">
          <div className="relative z-10">
            <h1
              className="max-w-[705px] uppercase text-[#f1f1f1]"
              style={{ ...orbitron, fontSize: "clamp(42px, 5.5vw, 64px)", fontWeight: 500, lineHeight: 1.35, letterSpacing: "0.01em" }}
            >
              NOT EVERYTHING VISIBLE IS UNDERSTOOD.
            </h1>
            <p className="mt-8 max-w-[610px] text-[16px] font-normal leading-[26px] text-[#f0f0f0]" style={inter}>
              Most brands appear in search. Very few are recognized for what they truly are.
              We architect search presence for brands that value deliberate positioning over accidental discovery.
            </p>
            <button
              className="mt-8 h-[66px] w-full max-w-[365px] border border-white/30 bg-white/[0.03] px-8 text-[#efefef] backdrop-blur-[6px] transition-colors hover:bg-white hover:text-black"
              style={{ ...orbitron, fontSize: "16px", fontWeight: 500, letterSpacing: "0.12em" }}
            >
              BOO FREE CONSULTATION
            </button>
          </div>

          <div className="relative z-10 mx-auto hidden w-full max-w-[462px] lg:block">
            <div className="absolute -inset-8 bg-black/45 blur-2xl" />
            <img
              src={seoHeroVisual}
              alt="SEO search presence architecture"
              className="relative h-[555px] w-full object-cover opacity-90 grayscale"
            />
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(100deg,#000_0%,#050505_45%,#555_100%)]">
        <div className="mx-auto grid max-w-[1270px] grid-cols-1 lg:grid-cols-2">
          <div className="min-h-[455px]">
            <img src={dashboardVisual} alt="Search intelligence dashboard" className="h-full min-h-[360px] w-full object-cover opacity-80 grayscale" />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 lg:px-20">
            <h2 className="max-w-[470px] text-[42px] leading-[1.12] text-white" style={inter}>
              Precision is the new authority.
            </h2>
            <p className="mt-8 max-w-[560px] text-[14px] font-medium leading-7 text-[#d8d8d8]" style={inter}>
              D&apos;Miraki SEO services are built for brands that value precision. We move beyond the noise of generic
              keyword rankings to ensure your brand is identified correctly by the people who matter.
              It&apos;s not just about being found; it&apos;s about being understood.
            </p>
            <div className="mt-12 grid grid-cols-2 border-t border-white/20 pt-8">
              <div>
                <p className="text-[12px] font-bold text-white" style={inter}>Strategy</p>
                <p className="mt-3 text-[12px] text-[#cfcfcf]" style={inter}>Alignment-first methodology.</p>
              </div>
              <div>
                <p className="text-[12px] font-bold text-white" style={inter}>Output</p>
                <p className="mt-3 text-[12px] text-[#cfcfcf]" style={inter}>High-intent audience capture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-6 py-20 lg:px-10">
        <div className="absolute bottom-0 right-0 h-[55%] w-[48%] bg-[linear-gradient(135deg,transparent,#4e4e4e)]" />
        <div className="relative mx-auto max-w-[1190px]">
          <h2 className="text-[42px] leading-tight text-white" style={inter}>Search Has Already Changed.</h2>
          <p className="mt-5 max-w-[560px] text-[13px] font-semibold leading-6 text-[#e0e0e0]" style={inter}>
            The era of the ten blue links is over. Generative AI systems are now the primary filters for high-intent queries.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {aiCards.map(({ icon: Icon, title, copy, light }) => (
              <article key={title} className={`min-h-[255px] p-8 ${light ? "bg-white text-[#232323]" : "bg-black text-white"}`}>
                <Icon className="h-6 w-6" strokeWidth={1.5} />
                <h3 className="mt-8 max-w-[250px] text-[29px] leading-[1.05]" style={playfair}>
                  {title}
                </h3>
                <p className={`mt-6 text-[13px] font-medium leading-6 ${light ? "text-[#474747]" : "text-[#d2d2d2]"}`} style={inter}>
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-[1190px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#9f8f66]" style={inter}>PERFORMANCE BENCHMARKS</p>
          <h2 className="mt-4 text-[48px] leading-tight text-white" style={playfair}>The D&apos;Miraki Standard</h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              ["2.5x - 4x", "Organic traffic growth within the first 12 months of deployment."],
              ["30-45%", "Lead quality improvement through precise intent mapping."],
              ["12/12", "Success rate in maintaining zero-penalty technical standards."],
            ].map(([stat, copy]) => (
              <div key={stat} className="border-l border-white/15 pl-8">
                <p className="text-[56px] leading-none text-[#d0ad72]" style={playfair}>{stat}</p>
                <p className="mt-5 max-w-[270px] text-[13px] font-medium leading-6 text-[#bfbfbf]" style={inter}>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(105deg,#000_0%,#090909_48%,#5b5b5b_100%)] px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-[1190px] grid-cols-1 items-center gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-[42px] leading-[1.12] text-[#e9e9e9]" style={inter}>The Shift in Search Behaviour</h2>
            <p className="mt-8 max-w-[420px] text-[13px] font-semibold leading-6 text-[#d6d6d6]" style={inter}>
              Data reflects a fundamental transition in how users interact with the digital landscape.
            </p>
            <ul className="mt-8 flex flex-col gap-5 text-[13px] font-semibold text-[#d9d9d9]" style={inter}>
              <li>+ 60% of searches now result in no website visit.</li>
              <li>+ AI-generated answers appear in half of all queries.</li>
              <li>+ 3x increase in conversational search patterns.</li>
            </ul>
          </div>
          <div className="bg-white p-8">
            <img src={heroVisual} alt="Search behaviour architecture" className="h-[300px] w-full object-cover grayscale" />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2">
        <img src={structureVisual} alt="Technical search infrastructure" className="h-full min-h-[500px] w-full object-cover grayscale" />
        <div className="bg-white px-8 py-28 text-[#252525] lg:px-24">
          <h2 className="text-[42px] leading-tight" style={inter}>The Approach</h2>
          <p className="mt-9 max-w-[500px] text-[13px] font-medium leading-6 text-[#484848]" style={inter}>
            We don&apos;t start with keywords. We start with alignment. Our process ensures that your search presence
            is a direct reflection of your brand&apos;s actual authority.
          </p>
          <div className="mt-10 flex flex-col gap-8">
            {[
              ["Brand Representation", "Every touchpoint reinforces your unique value proposition."],
              ["Narrative Clarity", "Ensuring search engines index your brand's true intent."],
            ].map(([title, copy]) => (
              <div key={title}>
                <h3 className="text-[13px] font-bold text-[#202020]" style={inter}>{title}</h3>
                <p className="mt-3 text-[13px] font-medium leading-6 text-[#555]" style={inter}>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(112deg,#050505_0%,#111_55%,#5b5b5b_100%)] px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-[1190px]">
          <h2 className="text-[42px] leading-tight text-white" style={inter}>India-Specific Search Reality</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {realityCards.map(([Icon, title, copy]) => {
              const CardIcon = Icon as typeof MonitorSmartphone;
              return (
                <article key={title as string} className="min-h-[245px] bg-white p-8 text-[#2a2a2a]">
                  <CardIcon className="h-5 w-5" strokeWidth={1.5} />
                  <h3 className="mt-8 text-[13px] font-bold" style={inter}>{title as string}</h3>
                  <p className="mt-5 text-[13px] font-medium leading-6 text-[#555]" style={inter}>{copy as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(110deg,#000_0%,#050505_48%,#5f5f5f_100%)] px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1190px] grid-cols-1 gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <h2 className="max-w-[330px] text-[42px] leading-[1.08] text-white" style={inter}>What Is Quietly Engineered</h2>
          <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-2">
            {engineeredItems.map(([number, title, copy]) => (
              <article key={number}>
                <p className="text-[10px] font-bold text-[#9f9f9f]" style={inter}>{number}</p>
                <h3 className="mt-7 text-[27px] leading-tight text-white" style={inter}>{title}</h3>
                <p className="mt-6 text-[13px] font-semibold leading-6 text-[#d7d7d7]" style={inter}>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-[1190px] grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Compass className="mb-5 h-7 w-7 text-white" strokeWidth={1.5} />
            <h2 className="text-[36px] leading-tight text-white" style={inter}>Search presence, engineered for meaning.</h2>
          </div>
          <div className="border border-white/15 p-8">
            <img src={angledVisual} alt="Monochrome search geometry" className="h-[260px] w-full object-cover opacity-80 grayscale" />
          </div>
        </div>
      </section>

    </main>
  );
}
