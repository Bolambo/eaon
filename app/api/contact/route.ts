import { NextResponse } from "next/server";
import { Resend } from "resend";

// 🔥 TEMPORARY TEST ONLY — USE YOUR REAL FULL KEY
const resend = new Resend("re_TpkV4fXN_MrBedHpbGnJw6UHyWK5mHLaT");

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "company",
      "service",
      "message",
    ] as const;

    for (const field of requiredFields) {
      if (!body[field] || String(body[field]).trim() === "") {
        return NextResponse.json(
          { error: `${field} is required.` },
          { status: 400 }
        );
      }
    }

    await resend.emails.send({
      from: "EAON Website <onboarding@resend.dev>",
      to: ["gregmore4real@gmail.com"],
      subject: "New Contact Enquiry",
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Company:</strong> ${body.company}</p>
        <p><strong>Service:</strong> ${body.service}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Enquiry sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);

    return NextResponse.json(
      { error: "Something went wrong while submitting the enquiry." },
      { status: 500 }
    );
  }
}