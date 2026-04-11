import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Jofebs Global Concept Ltd",
  description:
    "Get in touch with Jofebs Global Concept Ltd. for marine engineering, dredging, equipment leasing and vessel construction services in Nigeria.",
};

const CONTACT = [
  {
    label: "Phone",
    lines: ["08055940735", "08132666244"],
    icon: "📞",
  },
  {
    label: "Email",
    lines: ["jofebsglobal@yahoo.com"],
    icon: "📧",
  },
  {
    label: "Head Office",
    lines: ["Ken Complex, #229, Jakpa Road", "Effurun, Delta State, Nigeria"],
    icon: "📍",
  },
  {
    label: "Hours",
    lines: ["Mon – Fri: 8am – 6pm", "Sat: 9am – 2pm"],
    icon: "🕘",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-site relative z-10">
          <span className="eyebrow">GET IN TOUCH</span>
          <h1 className="h-display mt-5 mb-6 max-w-3xl">
            Talk to Our <span className="text-[#60A5FA]">Engineering Team</span>
          </h1>
          <p className="lead max-w-2xl">
            Tell us about your project — vessel construction, dredging,
            engineering support or equipment leasing — and we&apos;ll respond
            within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#071528]">
        <div className="container-site grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <ContactForm />

          <div className="flex flex-col gap-4">
            {CONTACT.map((c) => (
              <div key={c.label} className="card p-5 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#3B82F6]/15 border border-[#3B82F6]/40 flex items-center justify-center text-[20px] shrink-0">
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] text-[#60A5FA] tracking-[0.14em] uppercase mb-1">
                    {c.label}
                  </div>
                  {c.lines.map((line) => (
                    <div key={line} className="text-[14px] text-white leading-relaxed break-words">
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/2348055940735"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1fb855] transition-colors rounded-xl px-5 py-4 text-white font-bold"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
