import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const newsletterSchema = z.object({
  email: z.string().email().max(200),
  metadata: z.object({
    page: z.string().optional(),
    device: z.string().optional(),
    isReturning: z.boolean().optional(),
    timestamp: z.string().optional(),
    country: z.string().optional(),
  }).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = newsletterSchema.parse(body);
    const { email, metadata } = data;

    // Send email using Resend
    await resend.emails.send({
      from: 'Nexgen Elit Newsletter <newsletter@nexgenelit.com>',
      to: 'nexgenelit@gmail.com',
      subject: 'Got a newsletter subscriber',
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px;">
          <h2 style="color: #2A3AFF; border-bottom: 2px solid #2A3AFF; padding-bottom: 10px;">New Website Subscriber</h2>
          <p>You have a new subscriber from the <strong>Nexgen Elit</strong> website.</p>
          
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Email Address:</strong> <span style="color: #2A3AFF; font-weight: bold;">${email}</span></p>
          </div>

          <h3 style="font-size: 16px; color: #666; margin-top: 30px;">Visitor Metadata</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #888;">Source Page</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 500;">${metadata?.page || 'Unknown'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #888;">Device Type</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 500;">${metadata?.device || 'Unknown'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #888;">Visitor Status</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 500;">${metadata?.visitorType || 'New'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #888;">Visit Number</td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: 500;">${metadata?.visitCount || '1'}</td>
            </tr>
          </table>

          <p style="font-size: 12px; color: #aaa; margin-top: 40px; text-align: center;">
            Sent automatically by Nexgen Elit Lead Systems • ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Subscribed successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
