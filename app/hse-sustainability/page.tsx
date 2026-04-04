import Container from "../../components/ui/Container";

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
    <main className="bg-white py-24">
      <Container>
        <section className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
            HSE & Sustainability
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-900 md:text-5xl">
            A disciplined approach to safe, responsible operations
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            <strong className="font-semibold text-slate-900">
              EAON Oil and Energy Services Limited
            </strong>{" "}
            recognizes that safe and responsible execution is a core part of
            service quality in oil and energy operations.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            Our HSE and sustainability approach is built around operational
            discipline, compliance awareness, environmental responsibility, and
            professional standards that support dependable project delivery.
          </p>
        </section>

        <section className="mt-12 rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Responsible Operations
          </p>

          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-slate-900">
            Safety, compliance, and environmental awareness as part of service quality
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            In oil and energy-sector environments, responsible execution goes
            beyond task completion. It reflects planning discipline, site
            awareness, compliance consciousness, and a professional commitment
            to protecting people, operations, and the wider environment.
          </p>
        </section>

        <section className="mt-14 grid gap-5 md:grid-cols-2">
          {hseAreas.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
            >
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-slate-900">
                {item.title}
              </h2>

              <div className="mt-3 h-px w-12 bg-sky-200" />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-20 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-700">
              HSE Priorities
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-slate-900 md:text-4xl">
              A professional mindset shaped by safety, responsibility, and operational discipline
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              We understand that HSE performance is closely tied to how work is
              planned, coordinated, and carried out. Our positioning reflects an
              appreciation for responsible operations, site awareness, and the
              importance of disciplined execution in sensitive and demanding
              environments.
            </p>
          </div>

          <div className="grid gap-4">
            {priorities.map((item) => (
              <article
                key={item.title}
                className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-6"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}