import Container from "../../components/ui/Container";

export default function AboutPage() {
  return (
    <main className="bg-[#0a1726] text-white">

      {/* HERO (FIXED WITH RIGHT VISUAL SLOT) */}
      <section className="relative pt-20 pb-14 sm:pt-24 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#0a1726_0%,#0f2238_45%,#091521_100%)]" />
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(rgba(56,189,248,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <Container>
          <div className="relative grid gap-10 grid-cols-1 lg:grid-cols-[1fr_0.9fr] lg:items-center">

            {/* LEFT */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
                About EAON
              </div>

              <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl">
                A structured company supporting modern oil and energy operations
              </h1>

              <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
                <span className="font-semibold text-white">
                  EAON Oil and Energy Services Limited
                </span>{" "}
                is positioned to provide professional service support across the oil
                and energy sector, with a focus on structured delivery, operational
                discipline, and dependable execution.
              </p>
            </div>

            {/* RIGHT (IMAGE SLOT) */}
            <div className="relative h-[260px] sm:h-[320px] lg:h-[420px] overflow-hidden rounded-[24px]">

              {/* IMAGE */}
              <div className="absolute inset-0 bg-[url('/images/oil-rig.webp')] bg-cover bg-center scale-105" />

              {/* LIGHT BLEND (FIXED) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1726]/40 via-transparent to-transparent lg:bg-gradient-to-l lg:from-[#0a1726]/50 lg:via-transparent lg:to-transparent" />

            </div>

          </div>
        </Container>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="relative pt-10 pb-10">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Company Overview
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-300">
                EAON operates with a clear focus on supporting engineering,
                procurement, logistics, and operational coordination across energy
                sector environments.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-300">
                Our approach is built around professionalism, responsiveness, and
                structured execution aligned with industry expectations.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-300">
                We are developing a company model that reflects industry alignment,
                service clarity, and dependable support across project and
                operational environments.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-sky-300">
                  Company Status
                </p>
                <h3 className="mt-3 text-lg font-semibold">
                  Formally incorporated
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  EAON Oil and Energy Services Limited is a duly incorporated
                  Nigerian company structured for professional service delivery.
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-sky-300">
                  Positioning
                </p>
                <h3 className="mt-3 text-lg font-semibold">
                  Built for structured delivery
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  The company is positioned to deliver coordinated, reliable,
                  and professional support services across demanding oil and
                  energy project environments.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* OUR APPROACH */}
      <section className="relative pt-10 pb-8">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Our Approach
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-300">
                Our approach is centered on structured execution, operational discipline,
                and clear coordination. We prioritize consistency, responsiveness,
                and alignment with client expectations across all engagements.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-300">
                Rather than fragmented service delivery, we focus on integrated
                support that ensures clarity, efficiency, and dependable outcomes
                across project environments.
              </p>
            </div>

            <div className="flex flex-col gap-5">

              <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-base font-semibold">
                  Structured Execution
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  We operate with clearly defined processes, coordinated planning,
                  and disciplined service delivery aligned with operational requirements.
                </p>
              </div>

              <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-base font-semibold">
                  Operational Reliability
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-300">
                  We prioritize consistency, responsiveness, and dependable support
                  standards that reinforce client confidence.
                </p>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* INDUSTRIES */}
      <section className="relative pt-6 pb-10">
        <Container>
          <h2 className="text-2xl font-semibold mb-3">
            Industries We Serve
          </h2>

          <div className="grid gap-5 sm:grid-cols-3">
            {["Oil & Gas", "Energy Infrastructure", "Industrial Operations"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-base text-slate-300"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </Container>
      </section>

      {/* MISSION */}
      <section className="relative pt-6 pb-16">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold mb-2">
              Our Mission
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-300">
              To deliver structured, reliable, and professional support services
              that enable efficient and responsible operations across the oil and
              energy sector.
            </p>
          </div>
        </Container>
      </section>

    </main>
  );
}