import Container from "../../components/ui/Container";

const highlights = [
  {
    label: "01",
    title: "Service Excellence",
    description:
      "Structured delivery with professionalism, responsiveness, and disciplined execution standards.",
  },
  {
    label: "02",
    title: "Industry Alignment",
    description:
      "Support services shaped around the practical needs of energy operations and field execution.",
  },
  {
    label: "03",
    title: "Responsible Operations",
    description:
      "A clear emphasis on coordination, quality, and dependable support across demanding project environments.",
  },
];

const metrics = [
  { value: "Engineering", label: "Support" },
  { value: "Logistics", label: "Coordination" },
  { value: "Procurement", label: "Operations" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1726] py-10 text-white sm:py-12 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_78%_15%,rgba(37,99,235,0.26),transparent_60%),radial-gradient(ellipse_42%_36%_at_16%_84%,rgba(34,197,94,0.16),transparent_58%),linear-gradient(160deg,#0a1726_0%,#0f2238_42%,#091521_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_56%,rgba(34,197,94,0.05)_56.2%,transparent_66%),linear-gradient(125deg,transparent_64%,rgba(14,165,233,0.05)_64.2%,transparent_74%)]" />

      <Container>
        <div className="relative grid min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] gap-0 overflow-hidden rounded-[36px] border border-sky-400/15 bg-[#0b1a2b]/80 shadow-[0_30px_90px_rgba(2,8,23,0.28)] lg:grid-cols-[1fr_400px]">
          <div className="relative flex flex-col justify-center border-b border-white/8 px-5 py-10 sm:px-8 sm:py-12 md:px-12 lg:border-b-0 lg:border-r lg:border-r-white/8 lg:px-14 lg:py-14">
            <div className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 select-none text-[140px] font-semibold uppercase leading-none tracking-[-0.08em] text-sky-300/8 lg:block xl:text-[180px]">
              EAON
            </div>

            <div className="relative flex items-center gap-3">
              <div className="h-[2px] w-8 bg-gradient-to-r from-emerald-400 to-emerald-300" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-emerald-300">
                Oil &amp; Energy Services
              </span>
            </div>

            <h1 className="relative mt-6 max-w-[620px] text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-slate-50 sm:text-4xl md:text-5xl lg:text-6xl">
              Reliable support for
              <span className="block text-sky-300">
                modern oil and energy
              </span>
              <span className="block text-white">operations</span>
            </h1>

            <p className="relative mt-5 max-w-[500px] text-sm leading-7 text-slate-200/90 sm:text-base">
              We provide structured service support across engineering,
              logistics, procurement, and operational coordination for the
              energy sector, with a strong focus on professionalism,
              responsiveness, and responsible delivery.
            </p>

            <div className="relative mt-8 grid grid-cols-1 sm:grid-cols-3 max-w-[520px] overflow-hidden rounded-2xl border border-sky-400/15 bg-[#081523]/70 backdrop-blur-sm">
              {metrics.map((item, index) => (
                <div
                  key={item.value}
                  className={`px-4 py-5 ${
                    index !== metrics.length - 1
                      ? "sm:border-r sm:border-sky-400/10"
                      : ""
                  }`}
                >
                  <p className="font-semibold tracking-[-0.02em] text-sky-300 md:text-lg">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-6 flex flex-wrap items-center gap-4">
              <a
                href="/services"
                className="inline-flex items-center rounded-full border border-sky-300/30 bg-gradient-to-r from-sky-700 to-sky-600 px-6 py-3 text-sm font-semibold text-sky-50 transition hover:border-sky-200/50 hover:from-sky-600 hover:to-sky-500"
              >
                Explore Services
              </a>

              <a
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/40 hover:bg-emerald-500/10"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative flex flex-col bg-[#0d1d2f]/72">
            <div className="relative min-h-[230px] overflow-hidden border-b border-white/8 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(34,197,94,0.14)_0%,transparent_60%),linear-gradient(180deg,rgba(13,29,47,0.18)_0%,rgba(10,23,38,0.78)_100%),#0d1d2f]">
              <div className="absolute inset-0 opacity-80">
                <svg
                  viewBox="0 0 400 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                >
                  <line
                    x1="200"
                    y1="24"
                    x2="181"
                    y2="230"
                    stroke="rgba(125,211,252,0.62)"
                    strokeWidth="2"
                  />
                  <line
                    x1="200"
                    y1="24"
                    x2="219"
                    y2="230"
                    stroke="rgba(125,211,252,0.62)"
                    strokeWidth="2"
                  />
                  <line
                    x1="184"
                    y1="74"
                    x2="216"
                    y2="74"
                    stroke="rgba(125,211,252,0.34)"
                    strokeWidth="1"
                  />
                  <line
                    x1="187"
                    y1="114"
                    x2="213"
                    y2="114"
                    stroke="rgba(125,211,252,0.32)"
                    strokeWidth="1"
                  />
                  <line
                    x1="190"
                    y1="154"
                    x2="210"
                    y2="154"
                    stroke="rgba(125,211,252,0.28)"
                    strokeWidth="1"
                  />
                  <line
                    x1="193"
                    y1="194"
                    x2="207"
                    y2="194"
                    stroke="rgba(125,211,252,0.22)"
                    strokeWidth="1"
                  />
                  <polygon
                    points="200,20 188,43 212,43"
                    fill="rgba(37,99,235,0.34)"
                    stroke="rgba(125,211,252,0.48)"
                    strokeWidth="1"
                  />
                  <circle cx="200" cy="16" r="4" fill="rgba(74,222,128,0.85)" />
                  <circle cx="200" cy="16" r="10" fill="rgba(74,222,128,0.16)" />
                  <circle cx="200" cy="16" r="16" fill="rgba(74,222,128,0.06)" />

                  <rect
                    x="168"
                    y="226"
                    width="64"
                    height="8"
                    fill="rgba(37,99,235,0.3)"
                    stroke="rgba(125,211,252,0.26)"
                    strokeWidth="0.6"
                  />

                  <rect
                    x="100"
                    y="196"
                    width="64"
                    height="7"
                    fill="rgba(22,163,74,0.2)"
                    stroke="rgba(74,222,128,0.2)"
                    strokeWidth="0.6"
                  />
                  <rect
                    x="100"
                    y="208"
                    width="64"
                    height="7"
                    fill="rgba(22,163,74,0.14)"
                    stroke="rgba(74,222,128,0.16)"
                    strokeWidth="0.6"
                  />
                  <rect
                    x="72"
                    y="194"
                    width="30"
                    height="21"
                    fill="rgba(22,163,74,0.12)"
                    stroke="rgba(74,222,128,0.18)"
                    strokeWidth="0.6"
                  />

                  <ellipse
                    cx="310"
                    cy="210"
                    rx="38"
                    ry="12"
                    fill="rgba(37,99,235,0.14)"
                    stroke="rgba(125,211,252,0.2)"
                    strokeWidth="0.6"
                  />
                  <rect
                    x="272"
                    y="198"
                    width="76"
                    height="30"
                    fill="rgba(37,99,235,0.12)"
                    stroke="rgba(125,211,252,0.18)"
                    strokeWidth="0.6"
                  />
                  <ellipse
                    cx="310"
                    cy="198"
                    rx="38"
                    ry="12"
                    fill="rgba(37,99,235,0.18)"
                    stroke="rgba(125,211,252,0.24)"
                    strokeWidth="0.6"
                  />

                  <line
                    x1="220"
                    y1="215"
                    x2="272"
                    y2="210"
                    stroke="rgba(125,211,252,0.22)"
                    strokeWidth="3"
                  />

                  <rect
                    x="0"
                    y="230"
                    width="400"
                    height="30"
                    fill="rgba(3,10,20,0.36)"
                  />
                  <line
                    x1="0"
                    y1="230"
                    x2="400"
                    y2="230"
                    stroke="rgba(125,211,252,0.18)"
                    strokeWidth="0.7"
                  />

                  <circle cx="56" cy="42" r="1" fill="rgba(255,255,255,0.16)" />
                  <circle cx="140" cy="26" r="0.8" fill="rgba(255,255,255,0.1)" />
                  <circle cx="332" cy="50" r="1" fill="rgba(255,255,255,0.14)" />
                  <circle cx="370" cy="26" r="0.6" fill="rgba(255,255,255,0.09)" />
                </svg>
              </div>

              <div className="absolute left-6 top-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-sky-300">
                  Operational Highlights
                </p>
              </div>
            </div>

            <div className="divide-y divide-white/8">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="flex items-start gap-4 px-6 py-6 transition hover:bg-sky-900/8"
                >
                  <span className="min-w-6 pt-1 text-xs font-semibold tracking-[0.2em] text-sky-400/75">
                    {item.label}
                  </span>

                  <div className="flex-1">
                    <h3 className="text-sm font-semibold tracking-[0.01em] text-slate-100 md:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300/90">
                      {item.description}
                    </p>
                  </div>

                  <span className="pt-1 text-lg text-sky-300/35">›</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}