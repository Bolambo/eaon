import Container from "../../components/ui/Container";

const services = [
  {
    title: "Engineering Support",
    description:
      "Technical and operational support services designed to enhance execution quality, coordination, and efficiency across energy-sector activities.",
  },
  {
    title: "Procurement & Supply",
    description:
      "Reliable sourcing and supply coordination structured to support project requirements, operational continuity, and field needs.",
  },
  {
    title: "Logistics Services",
    description:
      "Organized logistics support for resource movement, field coordination, and service delivery across operational environments.",
  },
  {
    title: "Operations Support",
    description:
      "Practical support services tailored to day-to-day operational demands, responsiveness, and disciplined execution requirements.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white py-24">
      <Container>
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
            Our Services
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-900 md:text-5xl">
            Integrated service support across energy operations
          </h1>

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            <strong className="font-semibold text-slate-900">
              EAON Oil and Energy Services Limited
            </strong>{" "}
            provides structured and dependable support services designed to meet
            the practical needs of oil and energy sector operations.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
            Our service approach emphasizes professionalism, coordination,
            responsiveness, and quality-focused delivery across technical,
            operational, and field-support requirements.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)]"
            >
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-slate-900">
                {service.title}
              </h2>

              <div className="mt-3 h-px w-12 bg-sky-200" />

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}