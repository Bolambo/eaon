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

export default function HseSustainabilityPage() {
  return (
    <main className="bg-white py-24">
      <Container>
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
            HSE & Sustainability
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-900 md:text-5xl">
            A disciplined approach to health, safety, environment, and responsible operations
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
        </div>

        <div className="mt-12 rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
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
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
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
        </div>
      </Container>
    </main>
  );
}