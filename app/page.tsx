import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  {
    icon: "⚓",
    title: "Marine Operations",
    desc: "Vessel construction, fabrication and complete marine fleet operations across the Niger Delta and West Africa.",
  },
  {
    icon: "🛠",
    title: "Dredging Services",
    desc: "River, channel and reclamation dredging using suction and cutter-head dredgers tuned for local waterways.",
  },
  {
    icon: "🚜",
    title: "Equipment Leasing",
    desc: "Cranes, barges, dredgers and heavy marine equipment available for short and long-term industrial leasing.",
  },
  {
    icon: "⚙",
    title: "Engineering Support",
    desc: "Engine overhauls, electrical refits, hull repairs and on-site technical support for commercial fleets.",
  },
];

const PREVIEW_PROJECTS = [
  { title: "Steel Barge — 100ft", category: "Barges", image: "/images/project-barge-1.jpg" },
  { title: "Twin Engine Tugboat", category: "Tugboats", image: "/images/project-tug-1.jpg" },
  { title: "Floating Houseboat", category: "Houseboats", image: "/images/project-houseboat-1.jpg" },
  { title: "Sand Dredger Vessel", category: "Dredgers", image: "/images/project-dredger-1.jpg" },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Jofebs shipyard"
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071528]/98 via-[#071528]/85 to-[#071528]/40" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(96,165,250,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(96,165,250,0.04) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#071528]" />

        <div className="container-site relative z-10 pt-32 pb-20">
          <div className="max-w-3xl fade-up">
            <span className="eyebrow">RC 620442 · Effurun, Delta State Nigeria</span>
            <h1 className="h-display mt-5 mb-6">
              Engineering & Marine
              <br />
              <span className="text-[#60A5FA]">Solutions You Can Trust</span>
            </h1>
            <p className="lead mb-10">
              Jofebs Global Concept Ltd. delivers professional marine engineering,
              dredging, equipment leasing and vessel construction services across
              Nigeria. Twenty years of proven craftsmanship built right here in
              Effurun, Delta State.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/projects" className="btn-primary">
                View Our Projects
              </Link>
              <Link href="/contact" className="btn-outline">
                Get a Quote
              </Link>
            </div>

            <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-3 gap-6 max-w-xl">
              {[
                { v: "20+", l: "Years in business" },
                { v: "50+", l: "Vessels delivered" },
                { v: "100+", l: "Clients served" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-[clamp(26px,3.5vw,38px)] font-extrabold text-[#60A5FA] leading-none">
                    {s.v}
                  </div>
                  <div className="font-mono text-[10px] text-[#a8bcd6] tracking-wider mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="py-24 bg-[#071528]">
        <div className="container-site grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">ABOUT JOFEBS</span>
            <h2 className="h-section mt-4 mb-6">
              Two Decades of Trusted{" "}
              <span className="text-[#60A5FA]">Marine Engineering</span>
            </h2>
            <p className="lead mb-5">
              Jofebs Global Concept Ltd. is a Nigerian marine engineering company
              (RC 620442) based in Effurun, Delta State. For over 20 years we have
              engineered, built and maintained commercial vessels for clients
              across the Niger Delta and West Africa.
            </p>
            <p className="lead mb-8">
              Our fully-equipped yard combines heavy cranes, fabrication bays and
              a skilled team of engineers, welders and marine specialists to
              deliver projects safely, on time and built to last.
            </p>
            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "Safety First", d: "Every vessel is built safe for the crew — no compromises." },
              { k: "Quality Steel", d: "Heavy-duty steel and proven techniques for lasting vessels." },
              { k: "On Schedule", d: "Experienced crews that consistently deliver on time." },
              { k: "Full Support", d: "End-to-end engineering, refit and operations support." },
            ].map((item) => (
              <div key={item.k} className="card p-6">
                <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/15 border border-[#3B82F6]/40 flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#60A5FA]" />
                </div>
                <div className="text-[15px] font-bold text-white mb-2">{item.k}</div>
                <div className="text-[13px] text-[#a8bcd6] leading-relaxed">{item.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="py-24 bg-[#061324] border-y border-white/5">
        <div className="container-site">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">WHAT WE OFFER</span>
            <h2 className="h-section mt-4 mb-5">
              Professional <span className="text-[#60A5FA]">Services</span>
            </h2>
            <p className="lead">
              From vessel construction to dredging and equipment leasing, we
              provide complete marine and engineering solutions under one roof.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="card p-6">
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/15 border border-[#3B82F6]/40 flex items-center justify-center text-[22px] mb-5">
                  {s.icon}
                </div>
                <h3 className="text-[17px] font-bold text-white mb-3">{s.title}</h3>
                <p className="text-[13px] text-[#a8bcd6] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex">
            <Link href="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS PREVIEW ===== */}
      <section className="py-24 bg-[#071528]">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="eyebrow">OUR WORK</span>
              <h2 className="h-section mt-4 mb-5">
                Featured <span className="text-[#60A5FA]">Projects</span>
              </h2>
              <p className="lead">
                A look at some of the vessels and marine projects we have
                delivered across the Niger Delta and West African coast.
              </p>
            </div>
            <Link href="/projects" className="btn-outline">
              View All Projects
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PREVIEW_PROJECTS.map((p) => (
              <div key={p.title} className="card overflow-hidden group">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0B1F3A]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071528] via-transparent to-transparent opacity-70" />
                </div>
                <div className="p-5">
                  <div className="font-mono text-[10px] tracking-wider text-[#60A5FA] uppercase mb-2">
                    {p.category}
                  </div>
                  <div className="text-[15px] font-bold text-white">{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-gradient-to-br from-[#0B1F3A] via-[#102a4d] to-[#071528] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(59,130,246,0.18), transparent 55%), radial-gradient(circle at 80% 70%, rgba(96,165,250,0.12), transparent 55%)",
          }}
        />
        <div className="container-site relative z-10 text-center max-w-3xl mx-auto">
          <span className="eyebrow">READY TO BUILD?</span>
          <h2 className="h-section mt-4 mb-5">
            Let&apos;s Engineer Your Next{" "}
            <span className="text-[#60A5FA]">Marine Project</span>
          </h2>
          <p className="lead mx-auto mb-10">
            Talk to our engineering team about your vessel, dredging or
            equipment leasing needs. We respond within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Start a Project
            </Link>
            <Link href="/services" className="btn-outline">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
