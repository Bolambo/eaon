import Container from "../../components/ui/Container";

const certificationAreas = [
  {
    title: "Certificate of Incorporation",
    description:
      "EAON Oil and Energy Services Limited is duly incorporated in Nigeria as a private company limited by shares, supporting its formal operating identity and corporate credibility.",
  },
  {
    title: "Corporate Registration",
    description:
      "The company is registered with the Corporate Affairs Commission and operates with a recognized legal business structure under Nigerian corporate law.",
  },
  {
    title: "Professional Documentation",
    description:
      "This section is intended to present verified company records, certifications, and supporting documentation in a clear and professional format.",
  },
  {
    title: "Credibility & Assurance",
    description:
      "Formal registration and supporting documentation help reinforce confidence in the company’s seriousness, structure, and readiness for professional engagement.",
  },
];

export default function CertificationsPage() {
  return (
    <main className="bg-white py-24">
      <Container>
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
            Certifications
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-900 md:text-5xl">
            Certifications, company records, and supporting proof points
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            <strong className="font-semibold text-slate-900">
              EAON Oil and Energy Services Limited
            </strong>{" "}
            is supported by formal company documentation and credibility-focused
            records presented in a clear and professional manner.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            This page highlights verified proof points that strengthen trust,
            reinforce the company’s formal operating status, and support its
            professional positioning in the oil and energy services sector.
          </p>
        </div>

        <div className="mt-14 rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
              Verified Company Record
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-slate-900 md:text-3xl">
              Certificate of Incorporation
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              EAON Oil and Energy Services Limited is duly incorporated in
              Nigeria as a private company limited by shares, with formal
              registration through the Corporate Affairs Commission.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-[24px] border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Company Name
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-900">
                EAON Oil and Energy Services Limited
              </p>
            </article>

            <article className="rounded-[24px] border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Registration Number
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-900">
                9451376
              </p>
            </article>

            <article className="rounded-[24px] border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Issuing Authority
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-900">
                Corporate Affairs Commission
              </p>
            </article>

            <article className="rounded-[24px] border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Incorporation Date
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-900">
                30 March 2026
              </p>
            </article>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {certificationAreas.map((item) => (
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