import Container from "../../components/ui/Container";

const services = [
  {
    title: "Engineering Support",
    description:
      "Technical support services designed to improve operational efficiency, execution quality, and project delivery alignment.",
  },
  {
    title: "Procurement & Supply",
    description:
      "Reliable sourcing and supply coordination structured around the practical needs of energy-sector operations and project support.",
  },
  {
    title: "Logistics Services",
    description:
      "Organized logistics support for field activities, resource movement, and coordinated service delivery across operational environments.",
  },
  {
    title: "Operations Support",
    description:
      "Practical support services tailored to day-to-day operational demands, service continuity, and disciplined execution requirements.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative bg-[#0a1726] py-16 md:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#0a1726_0%,#0f2238_45%,#091521_100%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-50 bg-[linear-gradient(rgba(56,189,248,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(56,189,248,0.04),transparent_65%)]" />

      <Container>
        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          
          {/* Left */}
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
              Core Services
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-white">
              Structured service delivery across oil & energy operations
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-300">
              EAON provides coordinated service solutions supporting engineering,
              procurement, logistics, and operational execution. Our services are
              structured to align with industry requirements, ensuring consistency,
              reliability, and disciplined delivery across all engagements.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-20 bg-sky-400/40" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Operational Scope
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-6 sm:grid-cols-2 max-w-[600px] ml-auto">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-[26px] border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <h3 className="text-lg font-semibold text-white">
                  {service.title}
                </h3>

                <div className="mt-3 h-px w-10 bg-sky-400/40 transition duration-300 group-hover:w-14" />

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}