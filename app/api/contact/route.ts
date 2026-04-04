import { NextResponse } from "next/server";

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

    console.log("New contact enquiry received:", {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      company: body.company,
      service: body.service,
      message: body.message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Enquiry received successfully. Delivery integration will be added when the official company email is ready.",
      },
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