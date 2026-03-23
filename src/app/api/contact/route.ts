import { NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactEmail from "@/emails/ContactEmail";

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL;
const fromEmail = process.env.CONTACT_FROM_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

const MAX_NAME_LENGTH = 80;
const MAX_EMAIL_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 4000;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function asTrimmedString(value: unknown) {
  if (typeof value === "string") {
    return value.trim();
  }

  if (value == null) {
    return "";
  }

  return String(value).trim();
}

function getErrorMessage(err: unknown) {
  if (err instanceof Error) {
    return err.message;
  }

  return String(err);
}

export async function POST(req: Request) {
  if (!resend || !toEmail || !fromEmail) {
    return NextResponse.json(
      {
        error:
          "Mail service is not configured yet. Please set server environment variables.",
      },
      { status: 500 },
    );
  }

  let body: Partial<{
    name: unknown;
    email: unknown;
    message: unknown;
    company: unknown;
  }>;

  try {
    body = (await req.json()) as Partial<{
      name: unknown;
      email: unknown;
      message: unknown;
      company: unknown;
    }>;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email);
  const message = asTrimmedString(body.message);
  const company = asTrimmedString(body.company);

  // Hidden field trap for bots.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return NextResponse.json(
      { error: "Input is too long. Please shorten your message." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const subject = `Portfolio inquiry from ${name}`;
  const isDev = process.env.NODE_ENV !== "production";

  try {
    const emailHtml = await render(
      ContactEmail({
        name,
        email,
        message,
      }),
    );

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject,
      text: `New message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: emailHtml,
    });

    if (error) {
      const resendErrorText =
        typeof error === "object" && error !== null && "message" in error
          ? String((error as { message?: unknown }).message ?? "")
          : "";

      console.error("Resend send error:", error);

      return NextResponse.json(
        {
          error: isDev && resendErrorText
            ? `Failed to send email: ${resendErrorText}`
            : "Failed to send email. Check sender/recipient setup in Resend dashboard.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const errorMessage = getErrorMessage(err);
    console.error("Unexpected mail service error:", err);

    return NextResponse.json(
      {
        error: isDev
          ? `Unexpected mail service error: ${errorMessage}`
          : "Unexpected mail service error. Verify RESEND_API_KEY and sender configuration.",
      },
      { status: 502 },
    );
  }
}
