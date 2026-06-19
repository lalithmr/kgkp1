import { NextResponse } from "next/server";
import dbConnect from "@/config/db";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const body = await req.json();
    const { fullName, email, phoneNumber, subject, message } = body;

    // Server-side validation
    if (!fullName || !email || !phoneNumber || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const contact = await Contact.create({
      fullName,
      email,
      phoneNumber,
      subject,
      message,
    });

    return NextResponse.json(
      { message: "Enquiry submitted successfully", contact },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
