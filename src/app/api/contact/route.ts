import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phoneNumber, subject, message } = body;

    // Server-side validation
    if (!fullName || !email || !phoneNumber || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Process the contact form submission here (e.g. send email)
    // For now, simulating success since database is removed
    console.log("Contact form submission received:", { fullName, email, subject });

    return NextResponse.json(
      { message: "Enquiry submitted successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
