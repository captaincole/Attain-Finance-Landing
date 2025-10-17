import { Resend } from "resend";

export default {
  async fetch(request, env, ctx) {
    // Handle CORS
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers });
    }

    // Only accept POST requests
    if (request.method !== 'POST') {
      return new Response('Method not allowed', {
        status: 405,
        headers
      });
    }

    try {
      const body = await request.json();
      const { email } = body;

      if (!email) {
        return Response.json(
          { error: 'Email is required' },
          { status: 400, headers }
        );
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return Response.json(
          { error: 'Invalid email address' },
          { status: 400, headers }
        );
      }

      // Initialize Resend with API key from environment
      const resend = new Resend(env.RESEND_API_KEY);

      // Send email to yourself
      const emailConfig = {
        from: 'waitlist@attainfinance.io',
        to: 'andrew.thielcole@gmail.com',
        subject: 'New Attain Waitlist Signup',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #10b981;">🎯 New Waitlist Signup!</h1>

            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #1f2937; margin-top: 0;">Contact Details:</h2>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Signup Time:</strong> ${new Date().toLocaleString()}</p>
            </div>

            <p style="color: #6b7280;">
              Someone has joined the Attain waitlist and wants early access when you launch.
            </p>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

            <p style="color: #9ca3af; font-size: 12px;">
              This email was sent from the Attain waitlist system.
            </p>
          </div>
        `,
      };

      // Send email
      const { data, error } = await resend.emails.send(emailConfig);

      if (error) {
        console.error('Resend error:', error);
        return Response.json(
          { error: 'Failed to send email' },
          { status: 500, headers }
        );
      }

      return Response.json(
        { success: true, data },
        { headers }
      );
    } catch (error) {
      console.error('Worker error:', error);
      return Response.json(
        { error: 'Internal server error' },
        { status: 500, headers }
      );
    }
  },
};
