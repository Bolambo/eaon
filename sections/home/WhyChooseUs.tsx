import Container from "../../components/ui/Container";

const reasons = [
  {
    title: "Professional Execution",
    description:
      "We approach every engagement with planning discipline, structured coordination, and careful attention to service quality.",
  },
  {
    title: "Responsive Support",
    description:
      "We are positioned to respond with clarity, professionalism, and dependable service support across operational requirements.",
  },
  {
    title: "Industry Alignment",
    description:
      "Our service approach is shaped around the practical expectations, operating standards, and demands of the oil and energy sector.",
  },
  {
    title: "Quality & Reliability",
    description:
      "We value consistency, responsible execution, and dependable service standards that help build long-term client confidence.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f8fafc] py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-sky-100 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700 shadow-sm">
              Why Choose EAON
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl">
              A focused and professional approach to energy service delivery
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              We combine responsiveness, structured execution, and a commitment
              to service quality to support clients with professionalism,
              operational discipline, and dependable delivery standards.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-24 bg-sky-200" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Client Confidence
              </span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-900">
                  {reason.title}
                </h3>

                <div className="mt-3 h-px w-12 bg-sky-200" />

                <p className="mt-4 text-sm leading-7 text-slate-600">
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