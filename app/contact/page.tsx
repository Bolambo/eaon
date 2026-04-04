import Container from "../../components/ui/Container";
import ContactForm from "../../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-white py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="inline-flex items-center rounded-full border border-sky-100 bg-sky-50/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
              Contact
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-slate-900 md:text-5xl">
              Let’s discuss your operational support requirements
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              <strong className="font-semibold text-slate-900">
                EAON Oil and Energy Services Limited
              </strong>{" "}
              is available to discuss service needs, project support
              requirements, and business enquiries across oil and energy-sector
              operations.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              We are committed to professional communication, responsive
              engagement, and structured client support.
            </p>

            <ContactForm />
          </div>

          <div className="space-y-5">
            <article className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-slate-900">
                Contact Information
              </h2>

              <div className="mt-3 h-px w-12 bg-sky-200" />

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                <p>
                  Email: <span className="text-slate-900">info@eaon.com</span>
                </p>
                <p>
                  Phone: <span className="text-slate-900">+234 xxx xxx xxxx</span>
                </p>
                <p>
                  Location: <span className="text-slate-900">Nigeria</span>
                </p>
              </div>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-slate-900">
                Business Enquiries
              </h2>

              <div className="mt-3 h-px w-12 bg-sky-200" />

              <p className="mt-5 text-sm leading-7 text-slate-600">
                For service enquiries, partnership discussions, and project
                support conversations, please reach out through our official
                contact channels.
              </p>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-slate-50 p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-slate-900">
                Office Location
              </h2>

              <div className="mt-3 h-px w-12 bg-sky-200" />

              <div className="mt-5 rounded-[24px] border border-slate-200 bg-white p-8 text-sm leading-7 text-slate-500">
                Map or office address block can be placed here once the company
                confirms its official location details.
              </div>
            </article>

            <article className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-slate-900">
                Business Hours
              </h2>

              <div className="mt-3 h-px w-12 bg-sky-200" />

              <div className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
                <p>
                  Monday – Friday: <span className="text-slate-900">8:00 AM – 5:00 PM</span>
                </p>
                <p>
                  Saturday: <span className="text-slate-900">By appointment</span>
                </p>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </main>
  );
}