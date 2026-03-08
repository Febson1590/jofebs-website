"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const send = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xpqjnedo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4500);
  };

  const btnLabel = { idle: "Send Message", sending: "Sending…", success: "✓ Sent!", error: "Failed — Try Again" }[status];
  const btnBg = {
    idle:    "linear-gradient(135deg,#38bdf8,#0ea5e9)",
    sending: "#334155",
    success: "linear-gradient(135deg,#22c55e,#16a34a)",
    error:   "linear-gradient(135deg,#ef4444,#dc2626)",
  }[status];

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(10,18,42,0.9)",
    border: "1px solid #1a2f4e",
    borderRadius: 8,
    color: "#ccd6f6",
    padding: "12px 14px",
    fontSize: 14,
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  };

  return (
    <section
      id="contact"
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

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <span style={{ width: 28, height: 1.5, background: "#38bdf8", display: "inline-block", borderRadius: 2 }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#38bdf8", letterSpacing: "0.18em" }}>
            GET IN TOUCH
          </span>
        </div>

        <h2 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 800, lineHeight: 1.12, marginBottom: 14, letterSpacing: "-0.5px", color: "#f0f8ff" }}>
          Talk to <span style={{ color: "#38bdf8" }}>Our Team</span>
        </h2>
        <p style={{ color: "#8899b0", fontSize: 15, maxWidth: 500, lineHeight: 1.8, marginBottom: 56 }}>
          Tell us what you need and we will get back to you within 24 hours.
          No long process, just your details and what you are looking for.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }} className="contact-grid">
          {/* Form */}
          <div
            style={{
              background: "rgba(10,18,42,0.9)",
              border: "1px solid #1a2f4e",
              borderRadius: 16,
              padding: "32px",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }} className="form-row">
              <div>
                <label style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#38bdf8", letterSpacing: "0.14em", display: "block", marginBottom: 6 }}>YOUR NAME</label>
                <input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="John Doe" style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#38bdf8")}
                  onBlur={(e) => (e.target.style.borderColor = "#1a2f4e")} />
              </div>
              <div>
                <label style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#38bdf8", letterSpacing: "0.14em", display: "block", marginBottom: 6 }}>EMAIL</label>
                <input value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="john@example.com" style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#38bdf8")}
                  onBlur={(e) => (e.target.style.borderColor = "#1a2f4e")} />
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <label style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#38bdf8", letterSpacing: "0.14em", display: "block", marginBottom: 6 }}>PHONE (OPTIONAL)</label>
              <input value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} placeholder="+234 800 000 0000" style={inputStyle}
                onFocus={(e) => (e.target.style.borderColor = "#38bdf8")}
                onBlur={(e) => (e.target.style.borderColor = "#1a2f4e")} />
            </div>

            <div style={{ marginBottom: 22 }}>
              <label style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#38bdf8", letterSpacing: "0.14em", display: "block", marginBottom: 6 }}>MESSAGE</label>
              <textarea value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} rows={5} placeholder="Tell us about your project — vessel type, size, timeline…" style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => (e.target.style.borderColor = "#38bdf8")}
                onBlur={(e) => (e.target.style.borderColor = "#1a2f4e")} />
            </div>

            <button
              onClick={send}
              disabled={status === "sending"}
              style={{
                width: "100%",
                background: btnBg,
                color: status === "idle" ? "#05091a" : "#fff",
                fontWeight: 700,
                fontSize: 14,
                padding: "13px",
                borderRadius: 8,
                border: "none",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                transition: "opacity 0.2s, transform 0.2s",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
              onMouseEnter={(e) => { if (status === "idle") { (e.currentTarget as HTMLElement).style.opacity = "0.88"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; } }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              {btnLabel}
            </button>
          </div>

          {/* Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { icon: "📞", label: "Phone", lines: ["08055940735", "08132666244"] },
              { icon: "📧", label: "Email", lines: ["jofebsglobal@yahoo.com"] },
              { icon: "📍", label: "Address", lines: ["Ken Complex, #229, Jakpa Road,", "Effurun, Delta State, Nigeria"] },
            ].map((c) => (
              <div
                key={c.label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  padding: "18px 20px",
                  background: "rgba(10,18,42,0.9)",
                  border: "1px solid #1a2f4e",
                  borderRadius: 12,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#38bdf8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#1a2f4e")}
              >
                <span style={{ fontSize: 22, flexShrink: 0 }}>{c.icon}</span>
                <div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "#38bdf8", letterSpacing: "0.14em", marginBottom: 5 }}>{c.label.toUpperCase()}</div>
                  {c.lines.map((l) => <div key={l} style={{ fontSize: 13, color: "#ccd6f6", lineHeight: 1.7 }}>{l}</div>)}
                </div>
              </div>
            ))}

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348055940735"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "15px 20px",
                background: "linear-gradient(135deg,#25D366,#1aab50)",
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 14,
                color: "#fff",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "0.9";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>

            {/* Map */}
            <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #1a2f4e" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6!2d5.7!3d5.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzAnMDAuMCJOIDXCsDQyJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1"
                width="100%" height="165"
                style={{ border: 0, display: "block" }}
                allowFullScreen loading="lazy"
                title="Jofebs Global Concept Location"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .contact-grid{grid-template-columns:1fr!important}
          .form-row{grid-template-columns:1fr!important}
        }
      `}</style>
    </section>
  );
}
