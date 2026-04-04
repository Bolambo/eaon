import Container from "../../components/ui/Container";

const capabilities = [
  {
    number: "01",
    title: "Operational Readiness",
    description:
      "Structured support for field execution, service coordination, and responsive operational delivery across energy-sector environments.",
  },
  {
    number: "02",
    title: "Technical Coordination",
    description:
      "A disciplined approach to aligning technical requirements, resources, and delivery expectations with professionalism and clarity.",
  },
  {
    number: "03",
    title: "Service Reliability",
    description:
      "Focused on dependable execution, strong communication, and consistent support standards that reinforce client confidence.",
  },
];

export default function CapabilitiesPreview() {
  return (
    <section className="bg-[#f8fafc] py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-sky-100 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700 shadow-sm">
              Capabilities
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl">
              Built to support evolving energy-sector demands
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              We are positioned to support energy-focused operations with a
              practical, responsive, and quality-driven approach across service
              delivery, technical coordination, and field support requirements.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-24 bg-sky-200" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Delivery Capability
              </span>
            </div>
          </div>

          <div className="grid gap-5">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
              >
                <p className="text-sm font-semibold tracking-[0.2em] text-sky-700">
                  {item.number}
                </p>

                <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-slate-900">
                  {item.title}
                </h3>

                <div className="mt-3 h-px w-12 bg-sky-200" />

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}