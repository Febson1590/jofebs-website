import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jofebs Global Concept Ltd",
  description:
    "Learn about Jofebs Global Concept Ltd. — a Nigerian marine engineering company with over 20 years delivering vessel construction, dredging and engineering support.",
};

const VALUES = [
  {
    title: "Integrity",
    desc: "We honour every commitment with transparent communication and honest pricing from first meeting to final delivery.",
  },
  {
    title: "Engineering Excellence",
    desc: "Every vessel and project is engineered to international standards with premium materials and proven techniques.",
  },
  {
    title: "Safety First",
    desc: "The safety of our crews, clients and communities is non-negotiable. We embed safety into every phase of work.",
  },
  {
    title: "On-Time Delivery",
    desc: "Disciplined project management and skilled crews that consistently meet agreed milestones and deadlines.",
  },
];

const HIGHLIGHTS = [
  { v: "20+", l: "Years of operation" },
  { v: "50+", l: "Vessels delivered" },
  { v: "100+", l: "Clients served" },
  { v: "24/7", l: "Operational support" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container-site relative z-10">
          <span className="eyebrow">ABOUT THE COMPANY</span>
          <h1 className="h-display mt-5 mb-6 max-w-3xl">
            Building Marine Excellence{" "}
            <span className="text-[#60A5FA]">in Nigeria Since 2005</span>
          </h1>
          <p className="lead max-w-2xl">
            Jofebs Global Concept Ltd. is a fully-registered Nigerian marine
            engineering company (RC 620442) delivering dependable vessel
            construction, dredging services, engineering support and equipment
            leasing across the Niger Delta and West Africa.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-[#071528]">
        <div className="container-site grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="eyebrow">WHO WE ARE</span>
            <h2 className="h-section mt-4 mb-6">
              A Trusted Partner for{" "}
              <span className="text-[#60A5FA]">Industrial Marine Work</span>
            </h2>
            <p className="lead mb-5">
              Headquartered in Effurun, Delta State, Jofebs Global Concept Ltd.
              operates a fully-equipped fabrication yard staffed by experienced
              engineers, welders, marine technicians and project managers.
            </p>
            <p className="lead mb-5">
              Our work spans the full marine lifecycle — from design and
              fabrication of steel vessels to dredging, engine overhauls,
              electrical refits and long-term equipment leasing for oil &amp;
              gas, logistics and construction clients.
            </p>
            <p className="lead">
              Every project we take on is guided by a simple promise: safe,
              durable and professionally engineered work delivered on time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.l} className="card p-6">
                <div className="text-[32px] font-extrabold text-[#60A5FA] leading-none mb-2">
                  {h.v}
                </div>
                <div className="font-mono text-[11px] text-[#a8bcd6] tracking-wider uppercase">
                  {h.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-[#061324] border-y border-white/5">
        <div className="container-site grid lg:grid-cols-2 gap-14">
          <div className="card p-8 lg:p-10">
            <span className="eyebrow">OUR MISSION</span>
            <h3 className="text-[24px] font-bold text-white mt-4 mb-4 leading-snug">
              To engineer and deliver world-class marine vessels and services
              that move commerce across Africa&apos;s waters.
            </h3>
            <p className="text-[14px] text-[#a8bcd6] leading-relaxed">
              We exist to give African shipping, logistics and industrial
              operators reliable, locally-built marine infrastructure that meets
              international standards — combining craftsmanship, modern
              engineering and disciplined project execution.
            </p>
          </div>

          <div className="card p-8 lg:p-10">
            <span className="eyebrow">OUR VISION</span>
            <h3 className="text-[24px] font-bold text-white mt-4 mb-4 leading-snug">
              To become West Africa&apos;s most trusted marine engineering
              partner for industrial and commercial clients.
            </h3>
            <p className="text-[14px] text-[#a8bcd6] leading-relaxed">
              We are growing Jofebs into a regional reference for marine
              construction, dredging and engineering support — building the
              talent, infrastructure and client relationships that set us apart.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#071528]">
        <div className="container-site">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">CORE VALUES</span>
            <h2 className="h-section mt-4 mb-5">
              Principles That <span className="text-[#60A5FA]">Guide Our Work</span>
            </h2>
            <p className="lead">
              Four values shape every decision and every project at Jofebs
              Global Concept Ltd.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <div key={v.title} className="card p-6">
                <div className="font-mono text-[10px] text-[#60A5FA] tracking-wider mb-3">
                  0{i + 1}
                </div>
                <h3 className="text-[17px] font-bold text-white mb-3">{v.title}</h3>
                <p className="text-[13px] text-[#a8bcd6] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations summary */}
      <section className="py-24 bg-[#061324] border-y border-white/5">
        <div className="container-site grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          <div>
            <span className="eyebrow">OUR OPERATIONS</span>
            <h2 className="h-section mt-4 mb-6">
              Built at Our Yard in{" "}
              <span className="text-[#60A5FA]">Effurun, Delta State</span>
            </h2>
            <p className="lead mb-5">
              Our facility combines heavy-lift cranes, fabrication bays,
              welding and cutting stations, and a dedicated project
              management team. This infrastructure lets us handle everything
              from hull fabrication to final outfitting in-house.
            </p>
            <p className="lead mb-8">
              Whether you need a custom-built vessel, dredging mobilisation or
              an equipment lease, our team delivers professional, predictable
              results you can plan around.
            </p>
            <Link href="/contact" className="btn-primary">
              Work With Us
            </Link>
          </div>

          <ul className="flex flex-col gap-3">
            {[
              "Heavy crane, fabrication and welding capacity",
              "Hull, deck and superstructure fabrication in steel",
              "Engine overhauls and electrical refits",
              "Dredging mobilisation and field operations",
              "Short and long-term equipment leasing",
              "Dedicated project management and QA",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 card p-4"
              >
                <div className="w-6 h-6 rounded-md bg-[#3B82F6]/15 border border-[#3B82F6]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
                </div>
                <span className="text-[14px] text-[#e5edf8]">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
