import Container from "../../components/ui/Container";
import Link from "next/link";

const services = [
  {
    title: "Engineering Support",
    description:
      "Technical and operational support services designed to enhance execution quality, coordination, and efficiency across energy-sector activities.",
  },
  {
    title: "Procurement & Supply",
    description:
      "Reliable sourcing and supply coordination structured to support project requirements, operational continuity, and field needs.",
  },
  {
    title: "Logistics Services",
    description:
      "Organized logistics support for resource movement, field coordination, and service delivery across operational environments.",
  },
  {
    title: "Operations Support",
    description:
      "Practical support services tailored to day-to-day operational demands, responsiveness, and disciplined execution requirements.",
  },
];

const serviceApproach = [
  {
    title: "Structured Coordination",
    description:
      "Clear planning, communication, and alignment to support smoother execution across operational environments.",
  },
  {
    title: "Responsive Support",
    description:
      "Dependable responsiveness to evolving project, field, and operational requirements.",
  },
  {
    title: "Professional Standards",
    description:
      "Strong emphasis on accountability, consistency, and quality-focused execution.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#0a1726] text-white py-20">
      <Container>

        {/* HERO */}
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* IMAGE */}
          <div className="relative h-[220px] sm:h-[260px] lg:h-[340px] rounded-[24px] lg:rounded-[28px] overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/services-hero.webp')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1726]/50 via-[#0a1726]/20 to-transparent" />
          </div>

          {/* TEXT */}
          <div className="max-w-2xl lg:ml-auto">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
              Our Services
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Integrated service support across energy operations
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
              <span className="font-semibold text-white">
                EAON Oil and Energy Services Limited
              </span>{" "}
              provides structured and dependable support services designed to meet
              the practical needs of oil and energy sector operations.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
              Our service approach emphasizes professionalism, coordination,
              responsiveness, and quality-focused delivery across technical,
              operational, and field-support requirements.
            </p>
          </div>

        </section>

        {/* SERVICES GRID */}
        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[26px] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <h2 className="text-lg font-semibold">
                {service.title}
              </h2>

              <div className="mt-3 h-px w-10 bg-sky-400/40 transition group-hover:w-14" />

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {service.description}
              </p>
            </article>
          ))}
        </section>

        {/* APPROACH */}
        <section className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
              Service Approach
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Built around disciplined delivery and dependable support
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
              Service value in the energy sector depends not only on capability,
              but on how consistently and professionally support is delivered.
              Our approach reflects operational discipline, clear coordination,
              and responsive execution.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
              This positions EAON as a reliable support partner for clients
              seeking structured service delivery across demanding operational
              and project environments.
            </p>
          </div>

          <div className="grid gap-5">
            {serviceApproach.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

        </section>

        {/* CTA (NEW) */}
        <section className="mt-20">
          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0f2238] to-[#0a1726] p-10 text-center">

            <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
              Ready to support your operations?
            </h2>

            <p className="mt-4 max-w-xl mx-auto text-sm leading-7 text-slate-300">
              Engage EAON for structured, reliable, and professional service support
              across your operational and project requirements.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
              >
                Get in Touch
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Learn More About Us
              </Link>
            </div>

          </div>
        </section>

      </Container>
    </main>
  );
}