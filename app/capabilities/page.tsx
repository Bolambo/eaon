import Container from "../../components/ui/Container";

const capabilities = [
  {
    title: "Operational Readiness",
    description:
      "Structured support for field execution, service coordination, and responsive operational delivery across energy-sector environments.",
  },
  {
    title: "Technical Coordination",
    description:
      "A disciplined approach to aligning technical requirements, resources, and delivery expectations with professionalism and clarity.",
  },
  {
    title: "Service Reliability",
    description:
      "Focused on dependable execution, strong communication, and consistent support standards that reinforce client confidence.",
  },
  {
    title: "Professional Responsiveness",
    description:
      "A service mindset built around timely coordination, practical support, and clear communication across project and operational needs.",
  },
];

export default function CapabilitiesPage() {
  return (
    <main className="bg-white py-24">
      <Container>
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
            Capabilities
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-900 md:text-5xl">
            Built to support evolving energy-sector demands
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            <strong className="font-semibold text-slate-900">
              EAON Oil and Energy Services Limited
            </strong>{" "}
            is positioned to support energy-focused operations through practical
            coordination, structured service delivery, and a quality-driven
            operating approach.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            Our capabilities reflect operational discipline, technical
            alignment, and dependable support standards suited to demanding
            project and field environments.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {capabilities.map((item) => (
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