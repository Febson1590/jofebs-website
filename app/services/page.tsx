import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Jofebs Global Concept Ltd",
  description:
    "Marine operations, dredging, equipment leasing and engineering support services delivered by Jofebs Global Concept Ltd. in Nigeria.",
};

const SERVICES = [
  {
    icon: "⚓",
    title: "Marine Operations",
    short: "End-to-end vessel construction and marine fleet operations.",
    detail:
      "From design through fabrication to sea trials, we deliver tugboats, barges, houseboats and specialised vessels engineered for Nigerian and West African waters. Our operations team also supports fleet management and coordinated on-water deployments.",
    points: [
      "Steel vessel fabrication",
      "Hull, deck and superstructure work",
      "Sea trials & delivery",
      "Fleet operations support",
    ],
  },
  {
    icon: "🛠",
    title: "Dredging Services",
    short: "Professional river, channel and reclamation dredging.",
    detail:
      "We mobilise suction and cutter-head dredgers to execute channel deepening, sand recovery, land reclamation and jetty maintenance projects. Our crews are experienced with Niger Delta waterway conditions and environmental requirements.",
    points: [
      "Suction & cutter-head dredging",
      "Channel deepening",
      "Sand reclamation",
      "Jetty maintenance",
    ],
  },
  {
    icon: "🚜",
    title: "Equipment Leasing",
    short: "Heavy marine and construction equipment for hire.",
    detail:
      "Lease cranes, barges, dredgers, generators and marine support equipment on short or long-term contracts. All units are maintained to operational standards and available with or without certified operators.",
    points: [
      "Cranes & heavy lifting gear",
      "Barges & flat-top pontoons",
      "Dredgers & support vessels",
      "Operator-assisted or dry lease",
    ],
  },
  {
    icon: "⚙",
    title: "Engineering Support",
    short: "Engine overhauls, refits, repairs and technical support.",
    detail:
      "Our engineering team provides full engine overhauls, electrical rewiring, hull repairs and structural reinforcement for existing vessels. We also offer on-site troubleshooting and preventive maintenance for commercial fleets.",
    points: [
      "Engine overhauls & refits",
      "Electrical rewiring",
      "Hull & structural repairs",
      "On-site technical support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site relative z-10">
          <span className="eyebrow">WHAT WE OFFER</span>
          <h1 className="h-display mt-5 mb-6 max-w-3xl">
            Full-Service Marine &{" "}
            <span className="text-[#60A5FA]">Engineering Solutions</span>
          </h1>
          <p className="lead max-w-2xl">
            Jofebs Global Concept Ltd. brings marine construction, dredging,
            equipment leasing and engineering support together under one roof —
            delivering dependable results for industrial and commercial clients.
          </p>
        </div>
      </section>

      <section className="py-24 bg-[#071528]">
        <div className="container-site grid md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="card p-8 flex flex-col">
              <div className="flex items-start gap-5 mb-5">
                <div className="w-14 h-14 rounded-xl bg-[#3B82F6]/15 border border-[#3B82F6]/40 flex items-center justify-center text-[26px] shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#60A5FA] tracking-wider mb-1">
                    0{i + 1}
                  </div>
                  <h2 className="text-[22px] font-bold text-white leading-tight">
                    {s.title}
                  </h2>
                </div>
              </div>
              <p className="text-[14px] text-[#a8bcd6] leading-relaxed mb-5">
                {s.detail}
              </p>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-[13px] text-[#c8d6e8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="font-mono text-[11px] tracking-wider uppercase text-[#60A5FA] hover:text-white inline-flex items-center gap-2 transition-colors"
                >
                  Request a Quote →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0B1F3A] via-[#102a4d] to-[#071528]">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h2 className="h-section mb-4">
            Need a Custom{" "}
            <span className="text-[#60A5FA]">Marine Solution?</span>
          </h2>
          <p className="lead mx-auto mb-8">
            Every project is different. Tell us about your scope and timelines
            and our engineering team will come back within 24 hours.
          </p>
          <Link href="/contact" className="btn-primary">
            Talk to Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
