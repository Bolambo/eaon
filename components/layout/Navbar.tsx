import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "HSE", href: "/hse-sustainability" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between gap-6 py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/eaon-logo.svg"
              alt="EAON Oil and Energy Services Limited logo"
              width={220}
              height={68}
              className="h-auto w-[170px] md:w-[220px]"
              priority
            />
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8 text-sm font-medium text-slate-600">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition hover:text-slate-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href="/contact"
              className="hidden rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 md:inline-flex"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}