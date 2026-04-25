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
    <section className="relative bg-[#0a1726] pt-8 md:pt-10 pb-16 md:pb-20">
      {/* Dark Background Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#0a1726_0%,#0f2238_45%,#091521_100%)]" />

      <Container>
        <div className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
              Capabilities
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Execution capability aligned with industry demands
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              EAON is positioned to support energy-sector operations through
              structured coordination, technical alignment, and disciplined
              service delivery. Our capabilities are built to ensure consistent
              execution, operational clarity, and dependable support across
              varying project environments.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-24 bg-sky-400/40" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Execution Focus
              </span>
            </div>
          </div>

          {/* Capability Cards */}
          <div className="grid gap-5">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <p className="text-sm font-semibold tracking-[0.2em] text-sky-300">
                  {item.number}
                </p>

                <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-white">
                  {item.title}
                </h3>

                <div className="mt-3 h-px w-12 bg-sky-400/40" />

                <p className="mt-4 text-sm leading-7 text-slate-300">
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