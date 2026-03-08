"use client";
import { useState } from "react";

const IMAGES = [
  { src: "/images/gallery-1.jpg",  alt: "Houseboat on river" },
  { src: "/images/gallery-2.jpg",  alt: "Houseboat front view" },
  { src: "/images/gallery-3.jpg",  alt: "Crane and tugboat structures" },
  { src: "/images/gallery-4.jpg",  alt: "Barge hull construction" },
  { src: "/images/gallery-5.jpg",  alt: "Crane lifting tugboat hull" },
  { src: "/images/gallery-6.jpg",  alt: "Vessels under construction" },
  { src: "/images/gallery-7.jpg",  alt: "Crane extended on yard" },
  { src: "/images/gallery-8.jpg",  alt: "Workers on barge deck" },
  { src: "/images/gallery-9.jpg",  alt: "Welding sparks on hull" },
  { src: "/images/gallery-10.jpg", alt: "Welding close-up" },
  { src: "/images/gallery-11.jpg", alt: "Workers at dockyard" },
  { src: "/images/gallery-12.jpg", alt: "Barge deck work" },
  { src: "/images/gallery-13.jpg", alt: "Crane and pipes on yard" },
  { src: "/images/gallery-14.jpg", alt: "Completed barge on water" },
  { src: "/images/gallery-15.jpg", alt: "Tugboat hull detail" },
  { src: "/images/gallery-16.jpg", alt: "Barge hull with cranes" },
  { src: "/images/gallery-17.jpg", alt: "Barge construction wide view" },
  { src: "/images/gallery-18.jpg", alt: "Workers and tugboats" },
  { src: "/images/gallery-19.jpg", alt: "Sunset over vessel" },
  { src: "/images/gallery-20.jpg", alt: "Sunset on water" },
  { src: "/images/gallery-21.jpg", alt: "Grove crane in yard" },
  { src: "/images/gallery-22.jpg", alt: "Bronze propeller close-up" },
  { src: "/images/gallery-23.jpg", alt: "Sunset from vessel deck" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      style={{ padding: "100px 8%", background: "#05091a" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
          <span style={{ width: 28, height: 1.5, background: "#38bdf8", display: "inline-block", borderRadius: 2 }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#38bdf8", letterSpacing: "0.18em" }}>
            PHOTO GALLERY
          </span>
        </div>

        <h2 style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 800, lineHeight: 1.12, marginBottom: 14, letterSpacing: "-0.5px", color: "#f0f8ff" }}>
          Our Yard & <span style={{ color: "#38bdf8" }}>Vessels</span>
        </h2>
        <p style={{ color: "#8899b0", fontSize: 15, maxWidth: 500, lineHeight: 1.8, marginBottom: 52 }}>
          Real photos from our yard — vessels at different stages of construction,
          our cranes and equipment, and our team doing what they do best.
        </p>

        {/* Masonry grid */}
        <div style={{ columns: "3 260px", columnGap: 14 }}>
          {IMAGES.map((img, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              style={{
                breakInside: "avoid",
                marginBottom: 14,
                borderRadius: 10,
                overflow: "hidden",
                cursor: "pointer",
                border: "1px solid #1a2f4e",
                transition: "transform 0.2s, border-color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "scale(1.02)";
                el.style.borderColor = "#38bdf8";
                el.style.boxShadow = "0 8px 24px rgba(14,165,233,0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "scale(1)";
                el.style.borderColor = "#1a2f4e";
                el.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "100%",
                  minHeight: i % 3 === 0 ? 250 : 190,
                  backgroundColor: "#0c1f3f",
                  backgroundImage: `url('${img.src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <div style={{ width: "100%", padding: "28px 12px 10px", background: "linear-gradient(transparent,rgba(5,9,26,0.75))" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "rgba(255,255,255,0.6)" }}>{img.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed", top: 20, right: 24,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "50%", width: 40, height: 40,
              color: "#fff", fontSize: 18, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 1001,
            }}
          >✕</button>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + IMAGES.length) % IMAGES.length); }}
            style={{
              position: "fixed", left: 20, top: "50%", transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 8, color: "#fff", fontSize: 22, cursor: "pointer",
              padding: "12px 16px", zIndex: 1001,
            }}
          >‹</button>

          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: "90vw", maxHeight: "85vh", position: "relative" }}>
            <div
              style={{
                width: "min(820px,90vw)", height: "min(560px,75vh)",
                backgroundColor: "#0c1f3f",
                backgroundImage: `url('${IMAGES[lightbox].src}')`,
                backgroundSize: "cover", backgroundPosition: "center",
                borderRadius: 12,
                border: "1px solid rgba(56,189,248,0.25)",
              }}
            />
            <p style={{ textAlign: "center", fontFamily: "'DM Mono', monospace", color: "#8899b0", fontSize: 12, marginTop: 12 }}>
              {IMAGES[lightbox].alt} &nbsp;·&nbsp; {lightbox + 1} / {IMAGES.length}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % IMAGES.length); }}
            style={{
              position: "fixed", right: 20, top: "50%", transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 8, color: "#fff", fontSize: 22, cursor: "pointer",
              padding: "12px 16px", zIndex: 1001,
            }}
          >›</button>
        </div>
      )}
    </section>
  );
}
