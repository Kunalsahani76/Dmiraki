/* Stats, What We Pay Attention To, The Approach sections */

export function StatsSection() {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-5">
          {/* Row 1: 60%+ wide, ~50% narrow */}
          <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-5">
            <div
              className="relative flex items-center justify-start px-10 py-16"
              style={{ background: "linear-gradient(to right, #000, #545454)", minHeight: "238px", border: "1px solid black" }}
            >
              <span
                className="text-white"
                style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(40px,7vw,65px)", letterSpacing: "-2px" }}
              >
                60%+
              </span>
            </div>
            <div
              className="relative flex items-center justify-center px-10 py-16"
              style={{ background: "linear-gradient(to right, #000, #545454)", minHeight: "238px", border: "1px solid black" }}
            >
              <span
                className="text-white"
                style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(40px,7vw,65px)", letterSpacing: "-2px" }}
              >
                ~50%
              </span>
            </div>
          </div>
          {/* Row 2: 3× narrow, Less Compare wide */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-5">
            <div
              className="relative flex items-center justify-center px-10 py-16"
              style={{ background: "linear-gradient(to right, #000, #545454)", minHeight: "238px", border: "1px solid black" }}
            >
              <span
                className="text-white"
                style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(40px,7vw,65px)", letterSpacing: "-2px" }}
              >
                3×
              </span>
            </div>
            <div
              className="relative flex items-center justify-center px-10 py-16"
              style={{ background: "linear-gradient(to right, #000, #545454)", minHeight: "238px", border: "1px solid black" }}
            >
              <span
                className="text-white text-center"
                style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(28px,5vw,44px)", letterSpacing: "-1px" }}
              >
                Less<br />Compare
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AttentionSection() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left content */}
          <div className="flex-1">
            <h2
              className="mb-6"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(22px,3vw,34px)", color: "#0a0a0a", letterSpacing: "-1.5px" }}
            >
              What We Pay <span style={{ color: "#787872" }}>Attention</span> to
            </h2>
            <div className="flex flex-col gap-6">
              <div className="p-4" style={{ border: "1px solid black" }}>
                <p
                  className="text-[#4a4a46]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "1.8" }}
                >
                  Most agencies optimise for visibility. We optimise for understanding. In a landscape where search behaviour is fragmenting and AI intermediaries are reshaping how information reaches people, we focus on what endures.
                </p>
              </div>
              <div className="p-4" style={{ border: "1px solid black" }}>
                <p
                  className="text-[#4a4a46]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "1.8" }}
                >
                  Clarity. Authority. The quiet confidence of a brand that does not need to shout to be heard.
                </p>
              </div>
            </div>
          </div>

          {/* Right images */}
          <div className="flex-shrink-0 flex flex-col lg:flex-row gap-0" style={{ width: "auto", maxWidth: "440px" }}>
            <img
              src="https://images.unsplash.com/photo-1481026469463-66327c86e544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
              alt="Attention 1"
              className="w-full lg:w-1/2 object-cover"
              style={{ height: "300px" }}
            />
            <img
              src="https://images.unsplash.com/photo-1690944851207-3f288c8fcd0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
              alt="Attention 2"
              className="w-full lg:w-1/2 object-cover"
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
    <section className="w-full bg-white py-12">
      <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10">
        <h2
          className="mb-8"
          style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(22px,3vw,34px)", color: "#0a0a0a", letterSpacing: "-1.5px" }}
        >
          The <span style={{ color: "#787872" }}>Approach</span>
        </h2>
        <div className="flex flex-col gap-6">
          <div className="p-4" style={{ border: "1px solid black" }}>
            <p
              className="text-[#4a4a46]"
              style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 500, fontSize: "15px", lineHeight: "1.8" }}
            >
              What does your brand represent when no one is there to push it? We build digital foundations that work without constant intervention — content that answers, systems that convert, and brands that mean something.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Audit", desc: "We assess what you have and identify critical gaps in your digital strategy." },
              { num: "02", title: "Strategy", desc: "We build a focused plan aligned with your business goals and market position." },
              { num: "03", title: "Execute", desc: "We implement with precision, measuring outcomes and iterating for growth." },
            ].map((step) => (
              <div key={step.num} className="p-6" style={{ border: "1px solid black" }}>
                <p
                  className="text-gray-400 mb-2"
                  style={{ fontFamily: "'Roboto', sans-serif", fontSize: "12px", letterSpacing: "2px" }}
                >
                  {step.num}
                </p>
                <h4
                  className="text-black mb-2"
                  style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "16px" }}
                >
                  {step.title}
                </h4>
                <p
                  className="text-[#4a4a46]"
                  style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px", lineHeight: "1.7" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
