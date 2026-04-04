"use client";

import { useState } from "react";

const serviceOptions = [
  "Engineering Support",
  "Procurement & Supply",
  "Logistics Services",
  "Operations Support",
  "Technical Coordination",
  "General Enquiry",
];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("submitting");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit the enquiry.");
      }

      setStatus("success");
      setFeedbackMessage(
        result.message || "Enquiry submitted successfully."
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setFeedbackMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting the enquiry."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300"
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="john@company.com"
          value={formData.email}
          onChange={handleChange}
          className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300"
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
        >
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Your Organisation"
          value={formData.company}
          onChange={handleChange}
          className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
        >
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-300"
        >
          <option value="" disabled>
            Select a service...
          </option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us about your project or enquiry..."
          value={formData.message}
          onChange={handleChange}
          className="mt-3 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300"
        />
      </div>

      <div className="flex flex-col items-start gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" ? (
          <p className="text-sm text-sky-700">{feedbackMessage}</p>
        ) : null}

        {status === "error" ? (
          <p className="text-sm text-red-600">{feedbackMessage}</p>
        ) : null}
      </div>
    </form>
  );
}