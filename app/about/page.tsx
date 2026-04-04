import Container from "../../components/ui/Container";

const aboutPoints = [
  {
    title: "Professional Positioning",
    description:
      "EAON is structured to support oil and energy-sector operations with professionalism, coordination, and a service-focused operating approach.",
  },
  {
    title: "Operational Discipline",
    description:
      "Our company approach emphasizes responsiveness, quality standards, responsible execution, and dependable support across demanding environments.",
  },
  {
    title: "Credibility & Structure",
    description:
      "We are building EAON around clear service positioning, formal business structure, and trust-focused presentation that reflects corporate seriousness.",
  },
  {
    title: "Client-Focused Delivery",
    description:
      "We aim to support clients with clarity, professionalism, and practical service readiness across operational and project requirements.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white py-24">
      <Container>
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
            About EAON
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-900 md:text-5xl">
            A professional company positioned to support oil and energy operations
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            <strong className="font-semibold text-slate-900">
              EAON Oil and Energy Services Limited
            </strong>{" "}
            is focused on providing structured, dependable, and professional
            support services across the oil and energy sector. Our approach
            emphasizes service quality, operational discipline, responsiveness,
            and responsible execution.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            We are building our company around clear service positioning, strong
            operational standards, and a commitment to supporting clients with
            professionalism and confidence in demanding project environments.
          </p>
        </div>

        <div className="mt-12 rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            Company Status
          </p>

          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-slate-900">
            Formally incorporated and professionally positioned
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            EAON Oil and Energy Services Limited is a duly incorporated Nigerian
            company, registered as a private company limited by shares. This
            formal structure supports the company’s operating identity,
            professionalism, and credibility in the market.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {aboutPoints.map((item) => (
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