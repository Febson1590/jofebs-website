"use client";

const SERVICES = [
  {
    emoji: "⚓",
    title: "Tugboat Building",
    desc: "We build tough tugboats that push and pull other vessels on rivers and offshore. Strong, reliable and made for hard daily work.",
    image: "/images/service-tugboat.jpg",
    features: ["Strong steel hull", "Engine installation", "Navigation system", "Full safety gear"],
  },
  {
    emoji: "🚢",
    title: "Barge Building",
    desc: "We build wide flat barges from heavy steel. They carry large loads of cargo across rivers and waterways with ease.",
    image: "/images/service-barge.jpg",
    features: ["Heavy steel frame", "Custom deck layout", "Load capacity design", "Anti-rust treatment"],
  },
  {
    emoji: "🏠",
    title: "Houseboat Building",
    desc: "We build floating houses on water. They are solid, comfortable and great for living or working on the river.",
    image: "/images/service-houseboat.jpg",
    features: ["Steel pontoon frame", "Interior fit-out", "Electrical & plumbing", "Stability system"],
  },
  {
    emoji: "⛏️",
    title: "Dredger Building",
    desc: "We build dredgers that dig sand and mud from river beds. They help keep waterways open and usable.",
    image: "/images/service-dredger.jpg",
    features: ["Suction & cutter pump", "Heavy hull plating", "Hydraulic system", "High capacity engine"],
  },
  {
    emoji: "⚡",
    title: "Engine & Electrical Work",
    desc: "We install and repair engines, generators and electrical systems on any vessel. We get your boat running right.",
    image: "/images/service-engine.jpg",
    features: ["Engine install & repair", "Generator setup", "Marine wiring", "Propeller fitting"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{ padding: "100px 8%", background: "#05091a", position: "relative" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <span style={{ width: 28, height: 1.5, background: "#38bdf8", display: "inline-block", borderRadius: 2 }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#38bdf8", letterSpacing: "0.18em" }}>
            WHAT WE BUILD
          </span>
        </div>

        <h2 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 800, lineHeight: 1.12, marginBottom: 14, letterSpacing: "-0.5px", color: "#f0f8ff" }}>
          Our <span style={{ color: "#38bdf8" }}>Services</span>
        </h2>
        <p style={{ color: "#8899b0", fontSize: 15, maxWidth: 540, lineHeight: 1.8, marginBottom: 56 }}>
          From tugboats to dredgers, we build every vessel with strong materials and care.
          Each one is made to handle tough conditions on the water.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: 20 }}>
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service: s }: { service: typeof SERVICES[0] }) {
  return (
    <div
      style={{
        background: "rgba(10,18,42,0.9)",
        border: "1px solid #1a2f4e",
        borderRadius: 16,
        overflow: "hidden",
        transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#38bdf8";
        el.style.transform = "translateY(-5px)";
        el.style.boxShadow = "0 20px 48px rgba(14,165,233,0.15)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#1a2f4e";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div
        style={{
          height: 200,
          backgroundColor: "#0c1f3f",
          backgroundImage: `url('${s.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(5,9,26,0.9) 0%,rgba(5,9,26,0.15) 55%)" }} />
        <div style={{ position: "absolute", bottom: 16, left: 18, fontSize: 34 }}>{s.emoji}</div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,#38bdf8,transparent)" }} />
      </div>

      {/* Content */}
      <div style={{ padding: "22px 22px 26px" }}>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: "#f0f8ff", marginBottom: 9 }}>{s.title}</h3>
        <p style={{ fontSize: 13, color: "#8899b0", lineHeight: 1.8, marginBottom: 18 }}>{s.desc}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {s.features.map((f) => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#38bdf8", flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: "#8899b0" }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
