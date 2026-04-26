"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/hero1.jpg",
    title: "Reliable support for oil and energy operations",
    text: "Delivering structured, dependable service support across upstream and downstream environments.",
  },
  {
    image: "/images/hero2.jpg",
    title: "Professional field execution you can trust",
    text: "Our team operates with precision, safety awareness, and industry-standard compliance.",
  },
  {
    image: "/images/hero3.jpg",
    title: "Infrastructure and operational capability",
    text: "Supporting pipeline systems and energy infrastructure with disciplined execution.",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      
      {/* SLIDES */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* IMAGE */}
          <div
            className={`absolute inset-0 bg-cover bg-center brightness-125 transition-transform duration-[7000ms] ${
              i === index ? "scale-105" : "scale-100"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1726]/70 via-[#0a1726]/50 to-[#0a1726]/50" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a1726]/70 to-transparent" />

          {/* CONTENT */}
          <div className="relative z-10 h-full flex items-center pt-10 md:pt-16">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <p className="text-emerald-400 text-sm tracking-widest mb-4">
                OIL & ENERGY SERVICES
              </p>

              <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
                {slide.title}
              </h1>

              <p className="mt-6 text-slate-200 max-w-2xl text-lg">
                {slide.text}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* INDICATORS (SAFE ADDITION) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "bg-emerald-400 w-6" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}