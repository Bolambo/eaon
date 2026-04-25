import Container from "../../components/ui/Container";
import Image from "next/image";

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
      "This section presents verified company records, certifications, and supporting documentation in a structured and professional format.",
  },
  {
    title: "Credibility & Assurance",
    description:
      "Formal registration and supporting documentation reinforce confidence in the company’s structure, seriousness, and readiness for professional engagement.",
  },
];

export default function CertificationsPage() {
  return (
    <main className="bg-[#0a1726] text-white pt-16 pb-24">
      <Container>

        {/* HERO */}
        <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

          {/* LEFT */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
              Certifications & Compliance
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Verified company records and structured compliance
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
              <span className="font-semibold text-white">
                EAON Oil and Energy Services Limited
              </span>{" "}
              is supported by formal company documentation and credibility-focused
              records that reinforce its professional positioning within the oil and energy sector.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
              This section presents verified proof points that strengthen trust,
              confirm legal standing, and demonstrate the company’s structured approach to operations.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="rounded-[28px] overflow-hidden border border-white/10">
              <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[420px]">
              <Image
                src="/images/certifications-hero.webp"
                alt="Industrial professionals handshake representing trust and partnership"
                fill
                className="object-cover object-[40%_center]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            </div>
          </div>

        </section>

        {/* CERTIFICATE BLOCK */}
        <section className="mt-14 rounded-[32px] border border-white/10 bg-white/[0.05] shadow-[0_10px_40px_rgba(0,0,0,0.3)] p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Verified Company Record
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
              Certificate of Incorporation
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              EAON Oil and Energy Services Limited is duly incorporated in
              Nigeria as a private company limited by shares, with formal
              registration through the Corporate Affairs Commission.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              ["Company Name", "EAON Oil and Energy Services Limited"],
              ["Registration Number", "9451376"],
              ["Issuing Authority", "Corporate Affairs Commission"],
              ["Incorporation Date", "30 March 2026"],
            ].map(([label, value]) => (
              <article
                key={label}
                className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {label}
                </p>
                <p className="mt-3 text-xl font-semibold tracking-wide text-white">
                  {value}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ADDITIONAL BLOCKS */}
        <section className="mt-14 grid gap-5 md:grid-cols-2">
          {certificationAreas.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:bg-white/[0.05]"
            >
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-white">
                {item.title}
              </h2>

              <div className="mt-3 h-px w-12 bg-sky-400/40" />

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </section>

      </Container>
    </main>
  );
}