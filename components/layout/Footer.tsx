import Container from "../ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050b12]" />

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

      <Container>
        <div className="relative py-8 sm:py-10 grid gap-6 sm:gap-8 md:grid-cols-4">
          
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white leading-snug">
              EAON Oil and Energy Services{" "}
              <span className="text-slate-300 font-semibold">
                Limited
              </span>
            </h3>

            <p className="text-sm text-slate-300 leading-6 max-w-xs">
              Structured service support across engineering, procurement,
              logistics, and operational delivery for the oil and energy sector.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Company
            </h4>
            <ul className="mt-3 space-y-2 text-slate-300 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/capabilities">Capabilities</Link></li>
            </ul>
          </div>

          {/* More */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              More
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><Link href="/hse-sustainability">HSE</Link></li>
              <li><Link href="/certifications">Certifications</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>sales@eaonenergy.com</li>
              <li>+234 701 320 2472</li>
              <li>Nigeria</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="relative flex flex-col items-center justify-between gap-3 border-t border-white/10 py-4 text-sm text-slate-500 md:flex-row">
          <p>© 2026 EAON Oil and Energy Services LTD. All rights reserved.</p>
          <p>Built for structured energy service delivery.</p>
        </div>

      </Container>
    </footer>
  );
}