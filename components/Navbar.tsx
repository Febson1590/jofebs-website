"use client";
import { useState, useEffect } from "react";

const NAV = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery",  href: "#gallery" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        height: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 6%",
        background: scrolled ? "rgba(5,9,26,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(56,189,248,0.1)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Text logo */}
      <a href="#home" style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
        <span style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: "0.04em" }}>
          JOFEBS
        </span>
        <span style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 9,
          color: "#38bdf8",
          letterSpacing: "0.18em",
          fontWeight: 500,
        }}>
          GLOBAL CONCEPT LTD.
        </span>
      </a>

      {/* Desktop nav */}
      <div className="nav-links" style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {NAV.map((n) => (
          <a
            key={n.label}
            href={n.href}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              fontWeight: 500,
              color: "#8899b0",
              letterSpacing: "0.04em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#38bdf8")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8899b0")}
          >
            {n.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="nav-cta"
        style={{
          background: "linear-gradient(135deg,#38bdf8,#0ea5e9)",
          color: "#05091a",
          fontWeight: 700,
          fontSize: 13,
          padding: "9px 22px",
          borderRadius: 8,
          transition: "opacity 0.2s, transform 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "0.88";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "1";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        Get a Quote
      </a>

      {/* Mobile burger */}
      <button
        onClick={() => setOpen(!open)}
        className="burger"
        style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "none" }}
      >
        <div style={{ width: 22, height: 2, background: "#ccd6f6", marginBottom: 5, borderRadius: 2 }} />
        <div style={{ width: 22, height: 2, background: "#ccd6f6", marginBottom: 5, borderRadius: 2 }} />
        <div style={{ width: 22, height: 2, background: "#ccd6f6", borderRadius: 2 }} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: 70,
            left: 0,
            right: 0,
            background: "rgba(5,9,26,0.98)",
            backdropFilter: "blur(16px)",
            padding: "24px 6%",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            borderBottom: "1px solid rgba(56,189,248,0.1)",
          }}
        >
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 14,
                fontWeight: 500,
                color: "#ccd6f6",
                letterSpacing: "0.06em",
              }}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              background: "linear-gradient(135deg,#38bdf8,#0ea5e9)",
              color: "#05091a",
              fontWeight: 700,
              fontSize: 14,
              padding: "12px 24px",
              borderRadius: 8,
              textAlign: "center",
            }}
          >
            Get a Quote
          </a>
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .nav-links { display: none !important; }
          .nav-cta   { display: none !important; }
          .burger    { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
