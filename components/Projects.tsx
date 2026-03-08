"use client";

const PROJECTS = [
  {
    id: 1,
    title: "Steel Barge — 100ft",
    category: "Barge Building",
    status: "Completed",
    location: "Warri, Delta State",
    image: "/images/project-barge-1.jpg",
    desc: "A 100ft steel barge built to carry heavy loads on the Niger Delta waterways. Fully painted and treated to resist rust.",
  },
  {
    id: 2,
    title: "Twin Engine Tugboat",
    category: "Tugboat Building",
    status: "Completed",
    location: "Effurun, Delta State",
    image: "/images/project-tug-1.jpg",
    desc: "A powerful twin-engine tugboat built for river and offshore towing. Has full navigation gear and a strong hull.",
  },
  {
    id: 3,
    title: "Floating Houseboat",
    category: "Houseboat Building",
    status: "Completed",
    location: "Delta State",
    image: "/images/project-houseboat-1.jpg",
    desc: "A comfortable floating houseboat with multiple rooms, a kitchen and full electrical system. Built on a solid steel pontoon.",
  },
  {
    id: 4,
    title: "Sand Dredger Vessel",
    category: "Dredger Building",
    status: "In Progress",
    location: "Niger Delta",
    image: "/images/project-dredger-1.jpg",
    desc: "A custom sand dredger with a heavy suction pump and reinforced hull, built to dig and move riverbed materials.",
  },
  {
    id: 5,
    title: "Engine Overhaul & Refit",
    category: "Engine & Electrical",
    status: "Completed",
    location: "Warri, Delta State",
    image: "/images/project-engine-1.jpg",
    desc: "Full engine overhaul and electrical refit on an existing vessel — new shaft, rewired systems and a new generator.",
  },
  {
    id: 6,
    title: "Large Cargo Barge — 150ft",
    category: "Barge Building",
    status: "Completed",
    location: "Effurun, Delta State",
    image: "/images/project-barge-2.jpg",
    desc: "A 150ft cargo barge with extra strong deck plating for moving heavy equipment. Delivered ahead of schedule.",
  },
];

const STATUS: Record<string, { color: string; bg: string }> = {
  Completed:   { color: "#22c55e", bg: "rgba(34,197,94,0.1)" },
  "In Progress": { color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
};

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "100px 8%", background: "rgba(10,18,42,0.5)", position: "relative" }}
    >
      {/* Grid */}
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
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <span style={{ width: 28, height: 1.5, background: "#38bdf8", display: "inline-block", borderRadius: 2 }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#38bdf8", letterSpacing: "0.18em" }}>
            OUR WORK
          </span>
        </div>

        <h2 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 800, lineHeight: 1.12, marginBottom: 14, letterSpacing: "-0.5px", color: "#f0f8ff" }}>
          Recent <span style={{ color: "#38bdf8" }}>Projects</span>
        </h2>
        <p style={{ color: "#8899b0", fontSize: 15, maxWidth: 520, lineHeight: 1.8, marginBottom: 56 }}>
          Here are some of the vessels we have built for clients across the Niger Delta and beyond.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: 20 }}>
          {PROJECTS.map((p) => (
            <div
              key={p.id}
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
                el.style.boxShadow = "0 16px 40px rgba(14,165,233,0.15)";
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
                  height: 196,
                  backgroundColor: "#0c1f3f",
                  backgroundImage: `url('${p.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <div style={{ position: "absolute", inset: 0, background: "rgba(5,9,26,0.3)" }} />
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    background: STATUS[p.status].bg,
                    border: `1px solid ${STATUS[p.status].color}`,
                    borderRadius: 20,
                    padding: "3px 11px",
                    fontSize: 11,
                    fontWeight: 700,
                    fontFamily: "'DM Mono', monospace",
                    color: STATUS[p.status].color,
                    letterSpacing: "0.04em",
                  }}
                >
                  {p.status}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: "20px 20px 24px" }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#38bdf8", letterSpacing: "0.14em", marginBottom: 7 }}>
                  {p.category.toUpperCase()}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#f0f8ff", marginBottom: 9 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "#8899b0", lineHeight: 1.75, marginBottom: 14 }}>{p.desc}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 13 }}>📍</span>
                  <span style={{ fontSize: 12, color: "#1e3a5f", fontFamily: "'DM Mono', monospace" }}>{p.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
