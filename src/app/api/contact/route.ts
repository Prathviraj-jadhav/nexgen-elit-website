import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().min(1).max(200),
  city: z.string().min(2).max(100),
  service: z.string().min(2).max(100),
  googleSearch: z.string().optional(),
  referral: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const { name, company, city, service, googleSearch, referral } = data;

    // Send email using Resend
    await resend.emails.send({
      from: 'Nexgen Elit Form <contact@nexgenelit.com>',
      to: 'nexgenelit@gmail.com',
      subject: `New Contact Form Submission: ${name} from ${company}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2A3AFF;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Service Interested:</strong> ${service}</p>
          <p><strong>Has Google Searched their Company?</strong> ${googleSearch || 'N/A'}</p>
          <p><strong>How did they hear about us?</strong> ${referral || 'N/A'}</p>
          <p style="margin-top: 20px; font-size: 0.8em; color: #666;">Submitted at ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Message received. We will be in touch.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Invalid form data', errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Could not send message. Please try again later.' },
      { status: 500 }
    );
  }
}
