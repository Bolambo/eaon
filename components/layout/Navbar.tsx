"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "HSE", href: "/hse-sustainability" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a1726] h-[72px] flex items-center">
      <div className="mx-auto max-w-7xl px-6 w-full flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/eaon-logo.png"
            alt="EAON Logo"
            width={120}
            height={40}
            priority
            className="object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          {navLinks.map((item) => (
            <Link key={item.name} href={item.href} className="relative group">
              <span className="group-hover:text-white transition">
                {item.name}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex rounded-full bg-white text-[#0a1726] px-5 py-2 text-sm font-semibold hover:bg-slate-200 transition"
        >
          Get in Touch
        </Link>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl text-white"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-[#0a1726] z-50 flex flex-col">

          {/* TOP BAR */}
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-white/10">
            <Image
              src="/eaon-logo.png"
              alt="EAON Logo"
              width={110}
              height={36}
            />
            <button
              onClick={() => setOpen(false)}
              className="text-white text-2xl"
            >
              ✕
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex-1 flex flex-col justify-center px-6 space-y-4 text-lg text-white">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 hover:text-emerald-400 transition"
              >
                {item.name}
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-10 block text-center rounded-full bg-white text-[#0a1726] py-3 font-semibold"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}