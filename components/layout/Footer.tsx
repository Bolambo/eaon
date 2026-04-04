import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              EAON Oil and Energy Services Limited
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Professional service support for modern oil and energy operations,
              delivered with structure, responsibility, and a commitment to
              quality.
            </p>
          </div>

          <div className="text-sm text-slate-500">
            © 2026 EAON. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}