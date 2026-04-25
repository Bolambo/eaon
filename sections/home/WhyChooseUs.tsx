import Container from "../../components/ui/Container";

const reasons = [
  {
    title: "Structured Execution",
    description:
      "We deliver services through clearly defined processes, coordinated planning, and disciplined execution aligned with operational requirements.",
  },
  {
    title: "Operational Responsiveness",
    description:
      "We maintain a responsive and adaptive approach, ensuring timely support and clear communication across all service engagements.",
  },
  {
    title: "Industry-Focused Approach",
    description:
      "Our service model is shaped around the practical expectations, operating standards, and demands of the oil and energy sector.",
  },
  {
    title: "Consistency & Reliability",
    description:
      "We prioritize dependable delivery, consistent service standards, and responsible execution to support long-term client confidence.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-[#0a1726] py-12 md:py-16">

    {/* Background */}
    <div className="absolute inset-0 bg-[linear-gradient(160deg,#0a1726_0%,#0f2238_45%,#091521_100%)]" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-60 bg-[linear-gradient(rgba(56,189,248,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glow Accent (THIS IS THE KEY ADDITION) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(56,189,248,0.06),transparent_65%)]" />

      <Container>
        <div className="relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          
          {/* Left */}
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
              Why Choose EAON
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.03em] text-white">
              A disciplined and dependable approach to energy service delivery
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              EAON combines structured execution, operational responsiveness, and
              industry-focused service delivery to support clients with clarity,
              professionalism, and reliable outcomes across demanding project environments.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-24 bg-sky-400/40" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Client Assurance
              </span>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="group rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.06]"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-white">
                  {reason.title}
                </h3>

                <div className="mt-3 h-px w-12 bg-sky-400/40 transition-all duration-300 group-hover:w-16" />

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}