"use client";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { val: 20, suffix: "+", label: "Years in Business" },
  { val: 50, suffix: "+", label: "Vessels Built" },
  { val: 100, suffix: "+", label: "Projects Done" },
  { val: 30, suffix: "+", label: "Happy Clients" },
];

function useCounter(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatItem({ val, suffix, label, active }: { val: number; suffix: string; label: string; active: boolean }) {
  const count = useCounter(val, 1800, active);
  return (
    <div style={{ textAlign: "center", padding: "0 20px" }}>
      <div style={{ fontSize: "clamp(36px,5vw,58px)", fontWeight: 800, color: "#38bdf8", lineHeight: 1, marginBottom: 8 }}>
        {count}{suffix}
      </div>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#8899b0", letterSpacing: "0.06em" }}>
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        padding: "70px 8%",
        background: "rgba(10,18,42,0.7)",
        borderTop: "1px solid #1a2f4e",
        borderBottom: "1px solid #1a2f4e",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(14,165,233,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }} className="stats-grid">
          {STATS.map((s, i) => (
            <div key={s.label} style={{ position: "relative" }}>
              {i < STATS.length - 1 && (
                <div style={{ position: "absolute", right: 0, top: "20%", height: "60%", width: 1, background: "rgba(56,189,248,0.15)" }} />
              )}
              <StatItem {...s} active={active} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:768px){ .stats-grid{grid-template-columns:repeat(2,1fr)!important;gap:32px!important} }
        @media(max-width:480px){ .stats-grid{grid-template-columns:1fr 1fr!important} }
      `}</style>
    </section>
  );
}
