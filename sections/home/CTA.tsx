import Container from "../../components/ui/Container";

export default function CTA() {
  return (
    <section className="relative py-32 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#07131d_0%,#0c2033_45%,#06101a_100%)]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(56,189,248,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Soft green glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,197,94,0.08),transparent_65%)]" />

      <Container>
        <div className="relative text-center max-w-2xl mx-auto">
          
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
            Get in Touch
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-white">
            Let’s support your next energy project with structured delivery
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-300">
            Whether you require engineering support, procurement coordination,
            logistics services, or operational assistance, EAON is positioned to
            deliver with professionalism, responsiveness, and disciplined execution.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              Contact Us
            </a>

            <a
              href="/services"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Services
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
}