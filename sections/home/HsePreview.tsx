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
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 ring-1 ring-sky-100">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 text-sky-700"
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
    <section className="bg-white py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
              Health, Safety & Environment
            </div>

            <h2 className="mt-7 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl">
              A disciplined HSE mindset built into every stage of delivery
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">
              In oil and energy environments, safe execution is not a support
              function. It is part of operational quality. Our HSE approach
              reflects structured planning, responsible site conduct, and a
              strong commitment to protecting people, assets, and the wider
              operating environment.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-24 bg-sky-200" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Responsible Operations
              </span>
            </div>

            <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
              <div className="flex items-start gap-4">
                <HseIcon />
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-900">
                    Structured execution with safety at the forefront
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    We approach every engagement with planning discipline,
                    operational accountability, and careful attention to the
                    safety, compliance, and environmental expectations of
                    energy-sector project environments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {hsePoints.map((point) => (
              <article
                key={point.title}
                className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.10)]"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0">
                    <HseIcon />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-900">
                      {point.title}
                    </h3>

                    <div className="mt-3 h-px w-12 bg-sky-200 transition duration-300 group-hover:w-20" />

                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
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