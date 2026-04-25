import Container from "../../components/ui/Container";
import Link from "next/link";

export const metadata = {
  title: "Capabilities",
  description:
    "Discover EAON’s operational capabilities including technical coordination, structured execution, and service reliability.",
};

const capabilities = [
  {
    title: "Operational Coordination",
    description:
      "Structured coordination across project activities, ensuring alignment, clarity, and efficient execution in dynamic environments.",
  },
  {
    title: "Resource Management",
    description:
      "Effective planning and management of materials, personnel, and logistics to support consistent operational delivery.",
  },
  {
    title: "Project Support Readiness",
    description:
      "Preparedness to support a range of operational and project requirements with disciplined and responsive execution.",
  },
  {
    title: "Quality-Focused Execution",
    description:
      "Strong emphasis on maintaining professional standards, consistency, and accountability across all service engagements.",
  },
];

const strengths = [
  {
    title: "Structured Processes",
    description:
      "Clearly defined workflows and operational structure guiding all service delivery activities.",
  },
  {
    title: "Responsive Delivery",
    description:
      "Ability to adapt and respond efficiently to evolving operational and project demands.",
  },
  {
    title: "Professional Discipline",
    description:
      "Commitment to maintaining high standards of conduct, coordination, and execution.",
  },
];

export default function CapabilitiesPage() {
  return (
    <main className="bg-[#0a1726] text-white py-20">
      <Container>

        {/* HERO */}
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          <div className="relative h-[220px] sm:h-[260px] lg:h-[340px] rounded-[24px] lg:rounded-[28px] overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/capabilities-hero.webp')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1726]/45 via-[#0a1726]/15 to-transparent" />
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
              Our Capabilities
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Strong operational capability supporting energy sector delivery
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
              EAON operates with a structured approach to supporting operational,
              technical, and project-based activities across the oil and energy
              sector.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
              Our capabilities are built around coordination, responsiveness,
              disciplined execution, and a strong commitment to delivering
              dependable support services.
            </p>
          </div>

        </section>

        {/* CAPABILITIES GRID */}
        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="group rounded-[26px] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <h2 className="text-lg font-semibold">
                {item.title}
              </h2>

              <div className="mt-3 h-px w-10 bg-sky-400/40 transition group-hover:w-14" />

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        {/* STRENGTHS */}
        <section className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
              Operational Strengths
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Built on structure, responsiveness, and professional discipline
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
              Our operational strength lies in the ability to maintain structure
              while adapting to the evolving demands of project and operational
              environments.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
              This enables EAON to deliver consistent, dependable, and professional
              support across a wide range of energy-sector requirements.
            </p>
          </div>

          <div className="grid gap-5">
            {strengths.map((item) => (
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

        {/* CTA */}
        <section className="mt-20">
          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0f2238] to-[#0a1726] p-10 text-center">

            <h2 className="text-2xl font-semibold sm:text-3xl">
              Looking for a reliable operational partner?
            </h2>

            <p className="mt-4 max-w-xl mx-auto text-sm leading-7 text-slate-300">
              EAON delivers structured, dependable, and professional support
              tailored to meet complex operational and project demands.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-500"
              >
                Contact Us
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                View Services
              </Link>
            </div>

          </div>
        </section>

      </Container>
    </main>
  );
}