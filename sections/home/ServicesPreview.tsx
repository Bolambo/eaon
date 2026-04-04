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
    <section className="bg-[#fcfcfd] py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-xl">
            <div className="inline-flex items-center rounded-full border border-sky-100 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700 shadow-sm">
              Our Services
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-slate-900 sm:text-4xl">
              Integrated support across energy operations
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              We provide dependable service solutions designed to support energy
              infrastructure, field operations, logistics coordination, and
              technical delivery requirements.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-24 bg-sky-200" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                Service Scope
              </span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-900">
                  {service.title}
                </h3>

                <div className="mt-3 h-px w-12 bg-sky-200" />

                <p className="mt-4 text-sm leading-7 text-slate-600">
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