"use client";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Strong dark overlay so text reads clearly */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(105deg, rgba(5,9,26,0.96) 0%, rgba(5,9,26,0.82) 55%, rgba(5,9,26,0.45) 100%)",
        }}
      />

      {/* Subtle grid overlay — same as portfolio */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(56,189,248,0.025) 1px,transparent 1px)",
          backgroundSize: "52px 52px",
          pointerEvents: "none",
        }}
      />

      {/* Radial glow blob */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "0%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(14,165,233,0.12) 0%,transparent 68%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom fade into page */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 140,
          background: "linear-gradient(transparent,#05091a)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "140px 8% 80px",
          maxWidth: 720,
        }}
      >
        {/* Eyebrow label */}
        <div
          className="fade-up"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 20,
            animationDelay: "0.05s",
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: "#38bdf8",
            letterSpacing: "0.18em",
          }}
        >
          <span style={{ width: 28, height: 1.5, background: "#38bdf8", display: "inline-block", borderRadius: 2 }} />
          RC 620442 · Effurun, Delta State Nigeria
        </div>

        {/* Headline */}
        <h1
          className="fade-up"
          style={{
            fontSize: "clamp(38px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.06,
            marginBottom: 22,
            letterSpacing: "-1.5px",
            animationDelay: "0.12s",
            background: "linear-gradient(135deg, #f0f8ff 30%, #82c8f0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          We Build Boats
          <br />
          That Last a Lifetime
        </h1>

        {/* Subtext */}
        <p
          className="fade-up"
          style={{
            fontSize: "clamp(15px, 1.8vw, 17px)",
            color: "#8899b0",
            lineHeight: 1.85,
            maxWidth: 520,
            marginBottom: 42,
            animationDelay: "0.2s",
          }}
        >
          Jofebs Global Concept Ltd. is a marine engineering company in Nigeria.
          We build tugboats, barges, houseboats and dredgers — all made from
          strong steel right here in our yard in Effurun, Delta State.
        </p>

        {/* Buttons */}
        <div
          className="fade-up"
          style={{ display: "flex", gap: 14, flexWrap: "wrap", animationDelay: "0.28s" }}
        >
          <a
            href="#services"
            style={{
              background: "linear-gradient(135deg,#38bdf8,#0ea5e9)",
              color: "#05091a",
              fontWeight: 700,
              fontSize: 14,
              padding: "13px 30px",
              borderRadius: 10,
              letterSpacing: "0.03em",
              transition: "transform 0.2s, box-shadow 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 28px rgba(14,165,233,0.38)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            See What We Build
          </a>

          <a
            href="#contact"
            style={{
              background: "transparent",
              color: "#38bdf8",
              fontWeight: 700,
              fontSize: 14,
              padding: "13px 30px",
              borderRadius: 10,
              letterSpacing: "0.03em",
              border: "1.5px solid rgba(56,189,248,0.35)",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(56,189,248,0.07)";
              (e.currentTarget as HTMLElement).style.borderColor = "#38bdf8";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(56,189,248,0.35)";
            }}
          >
            Get a Quote
          </a>
        </div>

        {/* Quick stats */}
        <div
          className="fade-up"
          style={{
            display: "flex",
            gap: 40,
            marginTop: 60,
            flexWrap: "wrap",
            animationDelay: "0.36s",
            paddingTop: 40,
            borderTop: "1px solid rgba(56,189,248,0.1)",
          }}
        >
          {[
            { val: "20+", label: "Years in business" },
            { val: "50+", label: "Vessels completed" },
            { val: "100+", label: "Happy clients" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: "clamp(24px,3.5vw,36px)", fontWeight: 800, color: "#38bdf8", lineHeight: 1 }}>
                {s.val}
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#8899b0", marginTop: 5, letterSpacing: "0.06em" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          zIndex: 10,
        }}
      >
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.16em" }}>
          SCROLL
        </div>
        <div style={{ width: 1, height: 36, background: "linear-gradient(#38bdf8, transparent)" }} />
      </div>
    </section>
  );
}
