/* About, Vision, Mission, Our Story, Values, Why Partner, How We Work sections */

export function WhatWeOfferTitle() {
  return (
    <div className="w-full border-b border-black bg-[#fbfbfb] py-10 sm:py-12">
      <h2
        className="text-center uppercase text-[#222]"
        style={{
          fontFamily: "'Pirulen', 'Orbitron', sans-serif",
          fontSize: "clamp(28px,4vw,42px)",
          fontWeight: 400,
          letterSpacing: "0",
          lineHeight: "1.15",
        }}
      >
        WHAT WE OFFER
      </h2>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="w-full">
      {/* Hero banner */}
      <div
        className="relative w-full overflow-hidden flex items-end"
        style={{ minHeight: "700px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1626908013351-800ddd734b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10 py-20 flex flex-col lg:flex-row items-end gap-12 w-full">
          <div className="flex-1">
            <h1
              className="text-white mb-6"
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: "clamp(40px,7vw,80px)",
                letterSpacing: "4px",
                lineHeight: "1.2",
              }}
            >
              ABOUT<br />DMIRAKI
            </h1>
            <p
              className="text-white mb-4"
              style={{ fontFamily: "'Playfair Display', sans-serif", fontSize: "clamp(16px,2vw,22px)", lineHeight: "1.5" }}
            >
              YOUR STRATEGIC PARTNER IN DIGITAL SUCCESS — PASSIONATE EXPERTS DEDICATED TO YOUR GROWTH.
            </p>
            <p
              className="text-white/80"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(14px,1.5vw,18px)", lineHeight: "1.8", maxWidth: "560px" }}
            >
              We Empower Businesses To Achieve Sustainable Growth Through Strategic Digital Innovation. Our Mission Is To Build Partnerships, Not Just Services, Creating Lasting Value For Ambitious Businesses Ready To Transform Their Online Presence.
            </p>
          </div>
          <div className="flex-shrink-0 lg:w-[400px]">
            <img
              src="https://images.unsplash.com/photo-1758520145147-c30bc656f314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
              alt="About DMiraki"
              className="w-full object-cover"
              style={{ height: "420px" }}
            />
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="w-full bg-white">
        <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Mission */}
            <div
              className="flex flex-col gap-5 overflow-hidden"
              style={{ border: "2px solid black" }}
            >
              <div
                className="flex items-center justify-center py-10 gap-4"
                style={{ background: "linear-gradient(to right, #b9b9b9, #2e2e2e)" }}
              >
                <h3
                  className="text-white"
                  style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "28px" }}
                >
                  OUR MISSION
                </h3>
              </div>
              <div className="p-6">
                <p
                  className="text-black"
                  style={{ fontFamily: "'Roboto', sans-serif", fontSize: "17px", lineHeight: "1.8" }}
                >
                  Empowering businesses to achieve sustainable growth through strategic digital innovation. We build partnerships, not just services.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div
              className="flex flex-col gap-5 overflow-hidden"
              style={{ border: "2px solid black" }}
            >
              <div
                className="flex items-center justify-center py-10 gap-4"
                style={{ background: "linear-gradient(to right, #b9b9b9, #2e2e2e)" }}
              >
                <h3
                  className="text-white"
                  style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "28px" }}
                >
                  OUR VISION
                </h3>
              </div>
              <div className="p-6 border border-black">
                <p
                  className="text-black"
                  style={{ fontFamily: "'Roboto', sans-serif", fontSize: "17px", lineHeight: "1.8" }}
                >
                  Empowering businesses to achieve sustainable growth through strategic digital innovation. We build partnerships, not just services.
                </p>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div
            className="flex flex-col lg:flex-row items-center justify-between gap-10 px-8 py-10 mb-12"
            style={{ border: "1px solid black" }}
          >
            <div className="flex-1">
              <h3
                className="text-black mb-4"
                style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(24px,3vw,40px)" }}
              >
                OUR STORY
              </h3>
              <p
                className="text-[#333]"
                style={{ fontFamily: "'Roboto', sans-serif", fontSize: "18px", lineHeight: "1.8", maxWidth: "520px" }}
              >
                Founded on the principle that every business deserves exceptional digital presence, DMiraki has grown from a small team of passionate experts to a comprehensive agency trusted worldwide.
              </p>
            </div>
            <div className="flex-shrink-0 lg:w-[420px]">
              <img
                src="https://images.unsplash.com/photo-1632045927895-d336d181e5d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="Our Story"
                className="w-full object-cover"
                style={{ height: "260px" }}
              />
            </div>
          </div>

          {/* Our Values */}
          <div
            className="p-8 mb-12"
            style={{
              background: "linear-gradient(to right, #000, #545454)",
              border: "1px solid white",
            }}
          >
            <h3
              className="text-white text-center mb-3 underline"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(22px,3vw,40px)" }}
            >
              OUR VALUES
            </h3>
            <p
              className="text-[#c9c9c9] text-center mb-10"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "17px", lineHeight: "1.7", maxWidth: "720px", margin: "0 auto 40px" }}
            >
              Founded on the principle that every business deserves exceptional digital presence, DMiraki has grown from a small team of passionate experts to a comprehensive agency trusted worldwide.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { title: "EXCELLENCE WITHOUT COMPROMISE", desc: "Maintaining the highest standards in everything we do." },
                { title: "INNOVATION THAT MATTERS", desc: "Staying ahead of trends to give you a competitive edge." },
                { title: "TRANSPARENCY IN EVERY INTERACTION", desc: "Clear communication and honest timelines." },
                { title: "RESULTS-DRIVEN PARTNERSHIP", desc: "Every decision is focused on measurable outcomes." },
              ].map((v) => (
                <div key={v.title} className="flex gap-4 items-start">
                  <div className="w-3 h-3 bg-white mt-1 shrink-0" />
                  <div>
                    <p
                      className="text-white mb-1"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "1.5px" }}
                    >
                      {v.title}
                    </p>
                    <p
                      className="text-white/70"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: "1.6" }}
                    >
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Expertise */}
      <div className="w-full bg-white py-12 border border-black">
        <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10">
            <h2
              className="text-black uppercase"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(24px,3vw,40px)", letterSpacing: "-1px" }}
            >
              OUR EXPERTISE
            </h2>
            <p
              className="text-black/80 mt-4 mx-auto"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "17px", lineHeight: "1.7", maxWidth: "500px" }}
            >
              Building intelligent digital ecosystems through strategy, technology, and scalable execution.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {[
              { title: "STRATEGIC DIGITAL GROWTH", desc: "Performance-driven marketing solutions designed to increase visibility, strengthen positioning, and generate meaningful business growth." },
              { title: "CUSTOM SOFTWARE DEVELOPMENT", desc: "Tailored digital systems and scalable software solutions engineered to simplify operations and improve efficiency." },
              { title: "WEB & MOBILE EXPERIENCES", desc: "Modern websites and mobile applications built for seamless functionality, user engagement, and long-term scalability." },
              { title: "BRAND IDENTITY & POSITIONING", desc: "Distinct brand experiences crafted to create recognition, credibility, and stronger market presence." },
              { title: "IoT & SMART SOLUTIONS", desc: "Intelligent connected systems designed to automate processes, improve monitoring, and enhance operational control." },
              { title: "BUSINESS STRATEGY INTEGRATION", desc: "Aligning technology, marketing, and business objectives into one unified digital growth framework." },
            ].map((ex) => (
              <div
                key={ex.title}
                className="bg-black p-12 flex flex-col gap-4"
                style={{ border: "2px solid white" }}
              >
                <div className="w-0 h-1 bg-white" />
                <h4
                  className="text-white"
                  style={{ fontFamily: "'Roboto', sans-serif", fontSize: "20px", lineHeight: "1.3" }}
                >
                  {ex.title}
                </h4>
                <p
                  className="text-white/70"
                  style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px", lineHeight: "1.6" }}
                >
                  {ex.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Partner With Us */}
      <div className="w-full bg-white py-12">
        <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10">
            <h2
              className="text-black uppercase"
              style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(22px,3vw,40px)", letterSpacing: "-1px" }}
            >
              WHY PARTNER WITH US?
            </h2>
            <p
              className="text-black/80 mt-3"
              style={{ fontFamily: "'Roboto', sans-serif", fontSize: "17px", lineHeight: "1.7" }}
            >
              Proven results, dedicated support, and industry recognition for sustained partnership success
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 px-4">
            {[
              { title: "PROVEN TRACK RECORD", desc: "200+ successful projects across industries with measurable results." },
              { title: "DEDICATED TEAM APPROACH", desc: "You'll work with a consistent team invested in your success." },
              { title: "ONGOING SUPPORT & OPTIMIZATION", desc: "Continuous optimization and support for sustained growth." },
              { title: "INDUSTRY RECOGNITION", desc: "Recognized for innovation and results by peers and publications." },
            ].map((p) => (
              <div
                key={p.title}
                className="flex flex-col gap-4 p-8"
                style={{ border: "2px solid black" }}
              >
                <div className="w-full h-1 bg-black" />
                <h4
                  className="text-black uppercase"
                  style={{ fontFamily: "'Roboto', sans-serif", fontSize: "17px", lineHeight: "1.5" }}
                >
                  {p.title}
                </h4>
                <p
                  className="text-black/70"
                  style={{ fontFamily: "'Roboto', sans-serif", fontSize: "14px", lineHeight: "1.6" }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Work */}
      <div className="w-full bg-black py-12">
        <div className="max-w-[1270px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-[400px] shrink-0">
              <img
                src="https://images.unsplash.com/photo-1758520145147-c30bc656f314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                alt="How we work"
                className="w-full object-cover"
                style={{ height: "420px", filter: "grayscale(100%) saturate(0)" }}
              />
            </div>
            <div className="flex-1">
              <h2
                className="text-white mb-4"
                style={{ fontFamily: "'Roboto', sans-serif", fontSize: "clamp(32px,5vw,72px)", letterSpacing: "-1px", fontWeight: 400 }}
              >
                HOW WE <em>WORK?</em>
              </h2>
              <p
                className="text-white/80 mb-8"
                style={{ fontFamily: "'Roboto', sans-serif", fontSize: "18px" }}
              >
                Our work process is simple, but it packs a punch.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: "→", title: "CLIENT-CENTRIC APPROACH", desc: "We prioritize our clients' needs, ensuring personalized strategies that align with their business goals and deliver measurable results." },
                  { icon: "💬", title: "TRANSPARENT COMMUNICATION", desc: "Open and honest communication is at the heart of our operations, fostering trust and collaboration throughout every project." },
                  { icon: "💡", title: "INNOVATIVE SOLUTIONS", desc: "We leverage latest technologies and creative strategies to provide cutting-edge solutions that drive business growth." },
                  { icon: "📈", title: "DATA-DRIVEN STRATEGIES", desc: "We utilize comprehensive data analysis to inform our decisions, ensuring effective and efficient marketing campaigns." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-8 flex flex-col gap-4"
                    style={{ border: "2px solid white" }}
                  >
                    <div className="text-white text-xl">{item.icon}</div>
                    <h4
                      className="text-white uppercase"
                      style={{ fontFamily: "'Roboto', sans-serif", fontSize: "17px", lineHeight: "1.4" }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-white/70"
                      style={{ fontFamily: "'Roboto', sans-serif", fontSize: "13px", lineHeight: "1.6" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
