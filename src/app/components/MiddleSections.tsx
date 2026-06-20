/* Stats, What We Pay Attention To, The Approach sections */

import whatWePayAttentionImage from "../../images/What We Pay Attention to.png";
import approachImage from "../../imports/Home/d122b3ff70f38e655ad6398506d3fa09c7ea863d.png";
import statPanelImage from "../../imports/Home/ba94765630e49ad56eb0745d378f772c95ef7582.png";
import statCircuitImage from "../../imports/Home/7e7289376327a991cbaea03f686e9c032ef6270e.png";

type StatCardProps = {
  value: React.ReactNode;
  detail: string;
  image: string;
  align?: "start" | "center";
  valueSize?: string;
};

function StatCard({ value, detail, image, align = "center", valueSize = "clamp(40px,7vw,65px)" }: StatCardProps) {
  return (
    <div
      className={`group relative flex min-h-[238px] overflow-hidden border border-black px-10 py-16 transition-transform duration-300 hover:-translate-y-1 ${
        align === "start" ? "items-center justify-start" : "items-center justify-center"
      }`}
      style={{ background: "linear-gradient(to right, #000, #545454)" }}
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-105 group-hover:opacity-70"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative z-10 flex max-w-full flex-col items-center gap-3 text-center text-white md:group-hover:flex-row md:group-hover:items-center md:group-hover:text-left">
        <span
          className="whitespace-nowrap transition duration-300 group-hover:scale-105"
          style={{ fontFamily: "'Orbitron', sans-serif", fontSize: valueSize, letterSpacing: "0" }}
        >
          {value}
        </span>
        <span
          className="max-w-[430px] translate-y-2 text-[15px] uppercase leading-[1.45] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          style={{ fontFamily: "'Orbitron', sans-serif", letterSpacing: "0" }}
        >
          {detail}
        </span>
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-5">
          {/* Row 1: 60%+ wide, ~50% narrow */}
          <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-5">
            <StatCard
              value="60%+"
              detail="of searches now end without a website visit"
              image={statPanelImage}
              align="start"
            />
            <StatCard
              value="~50%"
              detail="of high-intent queries surface AI-generated answers"
              image={statCircuitImage}
            />
          </div>
          {/* Row 2: 3× narrow, Less Compare wide */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-5">
            <StatCard
              value="3×"
              detail="growth in conversational search queries over two years"
              image={statCircuitImage}
            />
            <StatCard
              value={<>LESS<br />COMPARE</>}
              detail="users spend less time comparing, more time deciding"
              image={statPanelImage}
              valueSize="clamp(28px,5vw,44px)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function AttentionSection() {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 border-[3px] border-black px-6 py-7 lg:px-7">
          {/* Left content */}
          <div className="flex-1 lg:max-w-[555px]">
            <h2
              className="mb-5"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(22px,3vw,34px)", color: "#0a0a0a", letterSpacing: "-1.5px" }}
            >
              WHAT WE PAY <span style={{ color: "#787872" }}>ATTENTION</span> TO
            </h2>
            <div className="flex flex-col gap-5">
              <div className="p-3" style={{ border: "1px solid black" }}>
                <p
                  className="text-[#4a4a46]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "1.8" }}
                >
                  Most agencies optimise for visibility. We optimise for understanding. In a landscape where search behaviour is fragmenting and AI intermediaries are reshaping how information reaches people, we focus on what endures.
                </p>
              </div>
              <div className="p-3" style={{ border: "1px solid black" }}>
                <p
                  className="text-[#4a4a46]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "1.8" }}
                >
                  Clarity. Authority. The quiet confidence of a brand that does not need to shout to be heard.
                </p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-shrink-0 flex flex-col lg:flex-row gap-0 lg:ml-auto w-full lg:w-auto" style={{ maxWidth: "432px" }}>
            <img
              src={whatWePayAttentionImage}
              alt="What We Pay Attention to"
              className="w-full object-cover"
              style={{ height: "300px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ApproachSection() {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 border-[3px] border-black px-6 py-7 lg:px-7">
          <div className="flex-shrink-0 w-full lg:max-w-[432px]">
            <img
              src={approachImage}
              alt="The Approach"
              className="h-[300px] w-full object-cover lg:h-[395px]"
            />
          </div>

          <div className="flex-1">
            <h2
              className="mb-8"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(22px,3vw,34px)", color: "#0a0a0a", letterSpacing: "-1.5px" }}
            >
              THE <span style={{ color: "#787872" }}>APPROACH</span>
            </h2>
            <div className="flex flex-col gap-5">
              {[
                "What does your brand represent when no one is there to explain it?",
                "What does a visitor understand within the first few seconds of arrival?",
                "Why should you be chosen, without the need for comparison?",
              ].map((question) => (
                <div key={question} className="p-3" style={{ border: "1px solid black" }}>
                  <p
                    className="text-[#4a4a46]"
                    style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "1.8" }}
                  >
                    {question}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
