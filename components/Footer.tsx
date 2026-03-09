"use client";

const NAV = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery",  href: "#gallery" },
  { label: "Contact",  href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#030712",
        borderTop: "1px solid #1a2f4e",
        padding: "60px 8% 28px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#f0f8ff", letterSpacing: "0.04em" }}>JOFEBS</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: "#38bdf8", letterSpacing: "0.18em", marginTop: 2 }}>
                GLOBAL CONCEPT LTD.
              </div>
            </div>
            <p style={{ fontSize: 14, color: "#c0d4e8", lineHeight: 1.8, maxWidth: 300, marginBottom: 20 }}>
              We build marine vessels that work hard and last long.
              Based in Effurun, Delta State — serving the Niger Delta and beyond.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { label: "RC 620442", color: "rgba(56,189,248,0.1)" },
                { label: "Delta State, NG", color: "rgba(14,165,233,0.08)" },
              ].map((b) => (
                <span
                  key={b.label}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    color: "#c0d4e8",
                    background: b.color,
                    border: "1px solid #1a2f4e",
                    borderRadius: 20,
                    padding: "3px 10px",
                    letterSpacing: "0.06em",
                  }}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#38bdf8", letterSpacing: "0.18em", marginBottom: 18 }}>
              QUICK LINKS
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {NAV.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  style={{ fontSize: 14, color: "#c0d4e8", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#38bdf8")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#c0d4e8")}
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#38bdf8", letterSpacing: "0.18em", marginBottom: 18 }}>
              CONTACT US
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: "📞", text: "08055940735" },
                { icon: "📞", text: "08132666244" },
                { icon: "📧", text: "jofebsglobal@yahoo.com" },
                { icon: "📍", text: "Ken Complex, #229, Jakpa Road, Effurun, Delta State" },
              ].map((c) => (
                <div key={c.text} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 13, flexShrink: 0 }}>{c.icon}</span>
                  <span style={{ fontSize: 13, color: "#c0d4e8", lineHeight: 1.6 }}>{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid #1a2f4e",
            paddingTop: 22,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#6b8aaa" }}>
            © 2026 Jofebs Global Concept Ltd. All rights reserved.
          </p>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#6b8aaa" }}>
            Built by{" "}
            <a
              href="https://febson.dev"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#38bdf8", fontWeight: 600 }}
            >
              Febson.Dev
            </a>
          </p>
        </div>
      </div>

      <style>{`@media(max-width:768px){ .footer-grid{grid-template-columns:1fr!important;gap:32px!important} }`}</style>
    </footer>
  );
}
