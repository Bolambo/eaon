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
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/92 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between gap-5 py-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/eaon-logo.svg"
              alt="EAON Oil and Energy Services Limited logo"
              width={145}
              height={46}
              className="h-auto w-[105px] md:w-[145px]"
              priority
            />
          </Link>

          <div className="flex items-center gap-5">
            <nav className="hidden md:block">
              <ul className="flex items-center gap-8 text-[15px] font-medium text-slate-600">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group relative inline-flex items-center py-2 transition duration-200 hover:text-slate-900"
                    >
                      <span>{item.label}</span>
                      <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded-full bg-emerald-500 transition-transform duration-200 group-hover:scale-x-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href="/contact"
              className="hidden items-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-sky-900 md:inline-flex"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}