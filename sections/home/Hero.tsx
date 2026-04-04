import Container from "../../components/ui/Container";

const highlights = [
  {
    label: "Focus",
    title: "Service Excellence",
    description:
      "Structured delivery with professionalism, responsiveness, and disciplined execution standards.",
  },
  {
    label: "Approach",
    title: "Industry Alignment",
    description:
      "Support services shaped around the practical needs of energy operations and field execution.",
  },
  {
    label: "Commitment",
    title: "Responsible Operations",
    description:
      "A clear emphasis on coordination, quality, and dependable support across demanding project environments.",
  },
];

export default function Hero() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
              EAON Oil and Energy Services Limited
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-slate-900 md:text-5xl lg:text-6xl">
              Reliable support for modern oil and energy operations
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              We provide structured service support across engineering,
              logistics, procurement, and operational coordination for the
              energy sector, with a strong focus on professionalism,
              responsiveness, and responsible delivery.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-24 bg-sky-200" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Professional Energy Support
              </span>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Explore Services
              </a>

              <a
                href="#"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-[#f8fafc] p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-slate-500">
                  {highlights[0].label}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-slate-900">
                  {highlights[0].title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {highlights[0].description}
                </p>
              </article>

              <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-slate-500">
                  {highlights[1].label}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-slate-900">
                  {highlights[1].title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {highlights[1].description}
                </p>
              </article>

              <article className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2">
                <p className="text-sm font-medium text-slate-500">
                  {highlights[2].label}
                </p>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-slate-900">
                  {highlights[2].title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {highlights[2].description}
                </p>
              </article>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}