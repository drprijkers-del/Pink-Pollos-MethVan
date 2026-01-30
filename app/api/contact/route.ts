import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Naam, email en bericht zijn verplicht" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Ongeldig e-mailadres" },
        { status: 400 }
      );
    }

    // Initialize Resend at runtime
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: "Pink Pollos <noreply@pinkpollos.com>",
      to: "info@pinkpollos.com",
      replyTo: email,
      subject: `Nieuw contactbericht van ${name}`,
      text: `Naam: ${name}\nEmail: ${email}\n\nBericht:\n${message}`,
      html: `
        <h2>Nieuw contactbericht</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Er ging iets mis bij het verzenden." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Bericht succesvol verzonden" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het later opnieuw." },
      { status: 500 }
    );
  }
}
