"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close mobile menu whenever route changes
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
        scrolled || open
          ? "bg-[#071528]/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between h-[72px]">
        {/* Brand */}
        <Link href="/" className="flex flex-col leading-tight shrink-0">
          <span className="text-[18px] font-extrabold text-white tracking-wide">
            JOFEBS
          </span>
          <span className="font-mono text-[9px] text-[#60A5FA] tracking-[0.18em] mt-0.5">
            GLOBAL CONCEPT LTD.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`font-mono text-[12px] tracking-wider transition-colors ${
                isActive(n.href)
                  ? "text-[#60A5FA]"
                  : "text-[#a8bcd6] hover:text-white"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center justify-center bg-[#3B82F6] hover:bg-[#60A5FA] text-white font-bold text-[13px] px-5 py-2.5 rounded-lg transition-colors"
        >
          Get a Quote
        </Link>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden p-2 -mr-2 text-white"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="5" y1="5" x2="19" y2="19" />
              <line x1="19" y1="5" x2="5" y2="19" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#071528] border-t border-white/10">
          <nav className="container-site py-6 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`font-mono text-[14px] tracking-wider py-3 border-b border-white/5 ${
                  isActive(n.href) ? "text-[#60A5FA]" : "text-white"
                }`}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-[#3B82F6] text-white font-bold text-[14px] px-5 py-3 rounded-lg"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
