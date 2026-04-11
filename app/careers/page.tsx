import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Jofebs Global Concept Ltd",
  description:
    "Join the Jofebs Global Concept Ltd. team. Marine engineering, welding, project management and field operations careers in Delta State, Nigeria.",
};

const OPENINGS = [
  {
    title: "Marine Welder",
    type: "Full-time",
    location: "Effurun, Delta State",
    desc: "Experienced welder for hull, deck and superstructure fabrication on commercial vessels.",
    tags: ["SMAW / MIG", "2+ years", "Shipyard"],
  },
  {
    title: "Marine Engineer",
    type: "Full-time",
    location: "Effurun, Delta State",
    desc: "Support vessel design, engine overhauls and field engineering on active projects.",
    tags: ["HND / B.Eng", "Marine", "3+ years"],
  },
  {
    title: "Project Supervisor",
    type: "Full-time",
    location: "Delta State / On-site",
    desc: "Plan and run day-to-day site operations for vessel construction and dredging projects.",
    tags: ["Planning", "Site Safety", "Team Lead"],
  },
  {
    title: "Dredger Operator",
    type: "Contract",
    location: "Niger Delta",
    desc: "Operate cutter and suction dredgers for channel, reclamation and sand recovery jobs.",
    tags: ["Dredging", "Certified", "Mobile"],
  },
  {
    title: "HSE Officer",
    type: "Full-time",
    location: "Effurun, Delta State",
    desc: "Drive safety culture across the yard and field operations. Audits, training and incident response.",
    tags: ["HSE Cert", "Marine", "2+ years"],
  },
  {
    title: "Administrative Officer",
    type: "Full-time",
    location: "Effurun, Delta State",
    desc: "Front-office operations, document control and client coordination at our head office.",
    tags: ["Admin", "Office", "Coordination"],
  },
];

const BENEFITS = [
  {
    title: "Skilled Team",
    desc: "Work alongside experienced marine engineers, welders and project leads on real industrial projects.",
  },
  {
    title: "Growth Path",
    desc: "Clear routes to progress into senior technical, supervisory and project management roles.",
  },
  {
    title: "Training",
    desc: "On-the-job training, safety certification support and structured mentorship for new hires.",
  },
  {
    title: "Safe Workplace",
    desc: "Modern yard, proper PPE and disciplined HSE culture so every crew goes home safe.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site relative z-10">
          <span className="eyebrow">CAREERS</span>
          <h1 className="h-display mt-5 mb-6 max-w-3xl">Join Our Team</h1>
          <p className="lead max-w-2xl">
            Help us build world-class marine engineering in Nigeria. We&apos;re
            always looking for skilled, safety-conscious professionals who
            take pride in their craft.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#071528]">
        <div className="container-site grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((b) => (
            <div key={b.title} className="card p-6">
              <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/15 border border-[#3B82F6]/40 flex items-center justify-center mb-4">
                <div className="w-2 h-2 rounded-full bg-[#60A5FA]" />
              </div>
              <h3 className="text-[16px] font-bold text-white mb-2">{b.title}</h3>
              <p className="text-[13px] text-[#a8bcd6] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#061324] border-y border-white/5">
        <div className="container-site">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow">OPEN POSITIONS</span>
            <h2 className="h-section mt-4 mb-4">
              Current <span className="text-[#60A5FA]">Openings</span>
            </h2>
            <p className="lead">
              Review our current openings and apply through the form on our
              contact page. Mention the role you&apos;re interested in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {OPENINGS.map((job) => (
              <article key={job.title} className="card p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-[18px] font-bold text-white leading-tight">
                      {job.title}
                    </h3>
                    <div className="font-mono text-[10px] text-[#60A5FA] tracking-wider uppercase mt-1">
                      {job.location}
                    </div>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] text-[#60A5FA] bg-[#3B82F6]/10 border border-[#3B82F6]/40 rounded-full px-3 py-1 tracking-wider uppercase">
                    {job.type}
                  </span>
                </div>
                <p className="text-[13px] text-[#a8bcd6] leading-relaxed mb-4">
                  {job.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] text-[#c8d6e8] bg-white/5 border border-white/10 rounded-full px-2.5 py-1 tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/contact?role=${encodeURIComponent(job.title)}`}
                  className="font-mono text-[11px] tracking-wider uppercase text-[#60A5FA] hover:text-white transition-colors"
                >
                  Apply Now →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0B1F3A] via-[#102a4d] to-[#071528]">
        <div className="container-site text-center max-w-2xl mx-auto">
          <h2 className="h-section mb-4">
            Don&apos;t See Your <span className="text-[#60A5FA]">Role?</span>
          </h2>
          <p className="lead mx-auto mb-8">
            We still want to hear from you. Send us your CV and a short note
            on how you can contribute and we&apos;ll keep it on file.
          </p>
          <Link href="/contact" className="btn-primary">
            Send Us Your CV
          </Link>
        </div>
      </section>
    </>
  );
}
