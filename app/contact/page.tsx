import Container from "../../components/ui/Container";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with EAON Oil and Energy Services Limited for inquiries, partnerships, and service requests.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#0a1726] text-white py-20">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
              Contact
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Let’s discuss your operational support requirements
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              <span className="font-semibold text-white">
                EAON Oil and Energy Services Limited
              </span>{" "}
              is available to discuss service needs, project support
              requirements, and business enquiries across oil and energy-sector
              operations.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              We are committed to professional communication, responsive
              engagement, and structured client support.
            </p>

            {/* CONTACT NOTICE */}
            <div className="mt-10 rounded-xl border border-white/10 bg-white/[0.04] p-6 text-slate-300">
              <p className="text-sm leading-7">
                Our contact form is currently being finalized.
                <br />
                For all enquiries, please reach out directly via:
              </p>

              <p className="mt-4 font-semibold text-white">
                sales@eaonenergy.com
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-5">

            <article className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
              <h2 className="text-xl font-semibold tracking-[-0.02em]">
                Contact Information
              </h2>

              <div className="mt-3 h-px w-12 bg-sky-400/40" />

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
                <p>
                  Email: <span className="text-white">sales@eaonenergy.com</span>
                </p>
                <p>
                  Phone: <span className="text-white">+234 701 320 2472</span>
                </p>
                <p>
                  Location: <span className="text-white">Nigeria</span>
                </p>
              </div>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
              <h2 className="text-xl font-semibold tracking-[-0.02em]">
                Business Enquiries
              </h2>

              <div className="mt-3 h-px w-12 bg-sky-400/40" />

              <p className="mt-5 text-sm leading-7 text-slate-300">
                For service enquiries, partnership discussions, and project
                support conversations, please reach out through our official
                contact channels.
              </p>
            </article>

            <article className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
              <h2 className="text-xl font-semibold tracking-[-0.02em]">
                Business Hours
              </h2>

              <div className="mt-3 h-px w-12 bg-sky-400/40" />

              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                <p>
                  Monday – Friday: <span className="text-white">8:00 AM – 5:00 PM</span>
                </p>
                <p>
                  Saturday: <span className="text-white">By appointment</span>
                </p>
              </div>
            </article>

          </div>
        </div>
      </Container>
    </main>
  );
}