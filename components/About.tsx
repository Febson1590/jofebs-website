"use client";

const VALUES = [
  { icon: "🛡️", title: "Safety First", desc: "Every boat we build is safe for the crew. We never skip on safety." },
  { icon: "⚙️", title: "Quality Work", desc: "We use strong steel and the right equipment. Every vessel is built to last." },
  { icon: "🤝", title: "We Keep Our Word", desc: "We stay in touch with every client from start to finish. No surprises." },
  { icon: "⏱️", title: "On Time, Every Time", desc: "We finish our jobs on time. Our team is experienced and well organized." },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "100px 8%", background: "#05091a", position: "relative" }}
    >
      {/* Faint grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.02) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <span style={{ width: 28, height: 1.5, background: "#38bdf8", display: "inline-block", borderRadius: 2 }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#38bdf8", letterSpacing: "0.18em" }}>
            ABOUT US
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }} className="two-col">
          {/* Left */}
          <div>
            <h2 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 800, lineHeight: 1.12, marginBottom: 24, letterSpacing: "-0.5px", color: "#f0f8ff" }}>
              Over 20 Years of
              <br />
              <span style={{ color: "#38bdf8" }}>Marine Engineering</span>
            </h2>

            <p style={{ color: "#8899b0", lineHeight: 1.9, fontSize: 15, marginBottom: 16 }}>
              Jofebs Global Concept Ltd. is a Nigerian marine engineering company registered under RC 620442.
              We are based in Effurun, Delta State and we have been building marine vessels for more than
              20 years for clients all across the Niger Delta.
            </p>
            <p style={{ color: "#8899b0", lineHeight: 1.9, fontSize: 15, marginBottom: 16 }}>
              Our CEO, <strong style={{ color: "#ccd6f6" }}>Joseph Awo Febaide</strong>, leads a team of
              skilled engineers, welders and marine specialists who take pride in every vessel they build.
            </p>
            <p style={{ color: "#8899b0", lineHeight: 1.9, fontSize: 15, marginBottom: 36 }}>
              Our yard in Effurun has heavy cranes, welding stations and all the equipment we need to
              build any type of marine vessel from scratch.
            </p>

            {/* Info cards */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              {[
                { label: "RC Number", val: "RC 620442" },
                { label: "CEO", val: "Joseph Awo Febaide" },
                { label: "Location", val: "Effurun, Delta State" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "rgba(10,18,42,0.85)",
                    border: "1px solid #1a2f4e",
                    borderRadius: 10,
                    padding: "14px 18px",
                    flex: 1,
                    minWidth: 130,
                  }}
                >
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: "#38bdf8", letterSpacing: "0.14em", marginBottom: 5 }}>
                    {item.label.toUpperCase()}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#ccd6f6" }}>{item.val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — values */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  style={{
                    background: "rgba(10,18,42,0.85)",
                    border: "1px solid #1a2f4e",
                    borderRadius: 14,
                    padding: "22px 18px",
                    transition: "border-color 0.2s, transform 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#38bdf8";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#1a2f4e";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{v.icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#ccd6f6", marginBottom: 7 }}>{v.title}</div>
                  <div style={{ fontSize: 13, color: "#8899b0", lineHeight: 1.7 }}>{v.desc}</div>
                </div>
              ))}
            </div>

            {/* Mission */}
            <div
              style={{
                marginTop: 16,
                padding: "20px 22px",
                background: "rgba(14,165,233,0.05)",
                border: "1px solid rgba(56,189,248,0.2)",
                borderLeft: "3px solid #38bdf8",
                borderRadius: 12,
              }}
            >
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#38bdf8", letterSpacing: "0.16em", marginBottom: 8 }}>
                OUR MISSION
              </div>
              <p style={{ fontSize: 14, color: "#8899b0", lineHeight: 1.75, fontStyle: "italic" }}>
                "To build world-class marine vessels that help move commerce across Africa's waters —
                done with honesty, skill and hard work."
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){ .two-col{grid-template-columns:1fr!important;gap:40px!important} }`}</style>
    </section>
  );
}
