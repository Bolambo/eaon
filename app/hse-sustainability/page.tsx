import Container from "../../components/ui/Container";

export const metadata = {
  title: "HSE & Sustainability",
  description:
    "EAON’s disciplined approach to health, safety, and environmental responsibility across all operations.",
};

const hseAreas = [
  {
    title: "Health & Safety Commitment",
    description:
      "We promote disciplined work practices, site awareness, and responsible operational conduct to support safer project execution across energy-sector environments.",
  },
  {
    title: "Compliance-Focused Operations",
    description:
      "Our service approach reflects the importance of procedural discipline, client requirements, and compliance expectations in demanding field and facility settings.",
  },
  {
    title: "Environmental Responsibility",
    description:
      "We recognize the need for environmentally conscious operations and responsible project support within sensitive and regulated operating environments.",
  },
  {
    title: "Operational Accountability",
    description:
      "We emphasize planning, coordination, and execution standards that help strengthen reliability, risk awareness, and service quality.",
  },
];

const priorities = [
  {
    title: "People & Site Awareness",
    description:
      "We value safe work practices, situational awareness, and responsible conduct as important parts of disciplined service execution.",
  },
  {
    title: "Compliance Mindset",
    description:
      "We recognize the importance of adhering to operational procedures, site expectations, and compliance requirements across regulated environments.",
  },
  {
    title: "Responsible Environmental Conduct",
    description:
      "We support environmentally conscious operations by promoting care, responsibility, and awareness in the environments where services are delivered.",
  },
];

export default function HseSustainabilityPage() {
  return (
    <main className="bg-[#0a1726] text-white">

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center">

        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/images/hse-hero.webp')] bg-cover bg-[position:30%_center] md:bg-center" />

          {/* ✅ FIXED OVERLAY */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,23,38,0.98)_0%,rgba(10,23,38,0.90)_35%,rgba(10,23,38,0.75)_55%,rgba(10,23,38,0.35)_75%,transparent_100%)]" />
        </div>

        {/* Content */}
        <Container>
          <div className="relative max-w-3xl py-24">

            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
              HSE & Sustainability
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]">
              A disciplined approach to safe, responsible operations
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
              <span className="font-semibold text-white">
                EAON Oil and Energy Services Limited
              </span>{" "}
              recognizes that safe and responsible execution is a core part of
              service quality in oil and energy operations.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
              Our HSE and sustainability approach is built around operational
              discipline, compliance awareness, environmental responsibility,
              and professional standards that support dependable project delivery.
            </p>

          </div>
        </Container>
      </section>

      {/* REST */}
      <div className="py-20">
        <Container>

          <section className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Responsible Operations
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em]">
              Safety, compliance, and environmental awareness as part of service quality
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              In oil and energy-sector environments, responsible execution goes
              beyond task completion. It reflects planning discipline, site
              awareness, compliance consciousness, and a professional commitment
              to protecting people, operations, and the wider environment.
            </p>
          </section>

          <section className="mt-12 grid gap-6 sm:grid-cols-2">
            {hseAreas.map((item) => (
              <article
                key={item.title}
                className="group rounded-[26px] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:bg-white/[0.06]"
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

          <section className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
                HSE Priorities
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                A professional mindset shaped by safety, responsibility, and operational discipline
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
                We understand that HSE performance is closely tied to how work is
                planned, coordinated, and carried out. Our positioning reflects
                an appreciation for responsible operations, site awareness, and
                the importance of disciplined execution in sensitive and demanding
                environments.
              </p>
            </div>

            <div className="grid gap-5">
              {priorities.map((item) => (
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

        </Container>
      </div>

    </main>
  );
}