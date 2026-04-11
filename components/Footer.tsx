import Link from "next/link";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const CONTACT = [
  { icon: "📞", text: "08055940735" },
  { icon: "📞", text: "08132666244" },
  { icon: "📧", text: "jofebsglobal@yahoo.com" },
  { icon: "📍", text: "Ken Complex, #229, Jakpa Road, Effurun, Delta State" },
];

export default function Footer() {
  return (
    <footer className="bg-[#040e1b] border-t border-white/10 pt-16 pb-8">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="text-[18px] font-extrabold text-white tracking-wide">JOFEBS</div>
              <div className="font-mono text-[9px] text-[#60A5FA] tracking-[0.18em] mt-1">
                GLOBAL CONCEPT LTD.
              </div>
            </div>
            <p className="text-[14px] text-[#a8bcd6] leading-relaxed max-w-sm mb-5">
              A Nigerian marine engineering company delivering reliable tugboats,
              barges, houseboats, dredgers and industrial marine services across
              the Niger Delta and beyond.
            </p>
            <div className="flex flex-wrap gap-2">
              {["RC 620442", "Delta State, NG"].map((b) => (
                <span
                  key={b}
                  className="font-mono text-[10px] text-[#a8bcd6] bg-white/5 border border-white/10 rounded-full px-3 py-1 tracking-wider"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-mono text-[10px] text-[#60A5FA] tracking-[0.18em] mb-4">
              QUICK LINKS
            </div>
            <ul className="flex flex-col gap-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-[14px] text-[#a8bcd6] hover:text-[#60A5FA] transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-[10px] text-[#60A5FA] tracking-[0.18em] mb-4">
              CONTACT US
            </div>
            <ul className="flex flex-col gap-3">
              {CONTACT.map((c) => (
                <li key={c.text} className="flex gap-3 items-start">
                  <span className="text-[13px] shrink-0">{c.icon}</span>
                  <span className="text-[13px] text-[#a8bcd6] leading-relaxed">{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between items-center gap-3">
          <p className="font-mono text-[12px] text-[#6b87ad]">
            © {new Date().getFullYear()} Jofebs Global Concept Ltd. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-[#6b87ad]">
            Built by{" "}
            <a
              href="https://febson.dev"
              target="_blank"
              rel="noreferrer"
              className="text-[#60A5FA] font-semibold hover:underline"
            >
              Febson.Dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
