import Container from "../../components/ui/Container";

const hsePoints = [
  {
    title: "Workforce Safety & Site Discipline",
    description:
      "We promote structured work practices, site awareness, and disciplined execution standards that support safer operations across field and facility environments.",
  },
  {
    title: "Compliance-Focused Delivery",
    description:
      "Our operating approach is guided by professional procedures, client expectations, and the compliance requirements that shape responsible oil and energy project execution.",
  },
  {
    title: "Environmental Responsibility",
    description:
      "We recognize the importance of responsible operational conduct, resource awareness, and environmentally conscious practices within sensitive and regulated project settings.",
  },
];

function HseIcon() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 text-sky-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3 5 6v5c0 5 3.4 8.5 7 10 3.6-1.5 7-5 7-10V6l-7-3Z" />
        <path d="m9.5 12 1.7 1.7 3.3-3.8" />
      </svg>
    </div>
  );
}

export default function HsePreview() {
  return (
    <section className="relative bg-[#0a1726] pt-8 md:pt-12 pb-16 md:pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#0a1726_0%,#0f2238_45%,#091521_100%)]" />

      {/* Grid (subtle) */}
      <div className="absolute inset-0 opacity-50 bg-[linear-gradient(rgba(56,189,248,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glow (very soft) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(34,197,94,0.08),transparent_65%)]" />

      <Container>
        <div className="relative grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">
          
          {/* Left */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Health, Safety & Environment
            </div>

            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.03em] text-white">
              A disciplined HSE mindset built into every stage of delivery
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-300">
              In oil and energy environments, safe execution is not a support
              function. It is a core part of operational quality. Our HSE approach
              reflects structured planning, responsible site conduct, and a
              clear commitment to protecting people, assets, and the operating
              environment.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-24 bg-emerald-400/40" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Responsible Operations
              </span>
            </div>

            <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-md p-8">
              <div className="flex items-start gap-4">
                <HseIcon />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Structured execution with safety at the forefront
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    We approach every engagement with planning discipline,
                    operational accountability, and strict attention to safety,
                    compliance, and environmental expectations across project
                    environments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="grid gap-6 max-w-[520px] ml-auto">
            {hsePoints.map((point) => (
              <article
                key={point.title}
                className="group rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-md p-8 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0">
                    <HseIcon />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {point.title}
                    </h3>

                    <div className="mt-3 h-px w-12 bg-emerald-400/40 transition duration-300 group-hover:w-20" />

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {point.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}