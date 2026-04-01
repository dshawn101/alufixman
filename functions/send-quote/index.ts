import { createClient } from "npm:@blinkdotnew/sdk";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, content-type",
};

async function handler(req: Request): Promise<Response> {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    const projectId = Deno.env.get("BLINK_PROJECT_ID");
    const secretKey = Deno.env.get("BLINK_SECRET_KEY");

    if (!projectId || !secretKey) {
      return new Response(
        JSON.stringify({ error: "Missing config" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const blink = createClient({ projectId, secretKey });

    const body = await req.json();
    const { name, address, service, date, phone, message } = body;

    if (!name || !service) {
      return new Response(
        JSON.stringify({ error: "Name and service are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f8ff; padding: 0;">
        <div style="background: #14509F; padding: 24px 32px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">ALU-FIX-MAN</h1>
          <p style="color: #b3cff0; margin: 4px 0 0; font-size: 14px;">New Quote Request Received</p>
        </div>
        <div style="padding: 32px; background: #ffffff;">
          <h2 style="color: #14509F; font-size: 20px; margin: 0 0 20px;">Quote Request Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #e8eef5;">
              <td style="padding: 12px 0; color: #666; font-size: 14px; width: 140px;">Customer Name</td>
              <td style="padding: 12px 0; color: #1a1a1a; font-weight: 600;">${name}</td>
            </tr>
            ${phone ? `<tr style="border-bottom: 1px solid #e8eef5;">
              <td style="padding: 12px 0; color: #666; font-size: 14px;">Phone Number</td>
              <td style="padding: 12px 0; color: #1a1a1a; font-weight: 600;">${phone}</td>
            </tr>` : ''}
            <tr style="border-bottom: 1px solid #e8eef5;">
              <td style="padding: 12px 0; color: #666; font-size: 14px;">Address</td>
              <td style="padding: 12px 0; color: #1a1a1a; font-weight: 600;">${address || 'Not provided'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8eef5;">
              <td style="padding: 12px 0; color: #666; font-size: 14px;">Service Required</td>
              <td style="padding: 12px 0; color: #1967CC; font-weight: 700; font-size: 16px;">${service}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e8eef5;">
              <td style="padding: 12px 0; color: #666; font-size: 14px;">Preferred Date</td>
              <td style="padding: 12px 0; color: #1a1a1a; font-weight: 600;">${date || 'Not specified'}</td>
            </tr>
            ${message ? `<tr>
              <td style="padding: 12px 0; color: #666; font-size: 14px; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #1a1a1a;">${message}</td>
            </tr>` : ''}
          </table>
        </div>
        <div style="background: #14509F; padding: 20px 32px; text-align: center;">
          <p style="color: #b3cff0; font-size: 13px; margin: 0;">This quote request was submitted via your Alu-Fix-Man website</p>
          <p style="color: #ffffff; font-size: 14px; margin: 8px 0 0;"><strong>Call back: ${phone || 'No phone provided'}</strong></p>
        </div>
      </div>
    `;

    await blink.notifications.email({
      to: "alufixman@gmail.com",
      subject: `New Quote Request from ${name} – ${service}`,
      html: emailHtml,
      text: `New Quote Request\n\nName: ${name}\nPhone: ${phone || 'N/A'}\nAddress: ${address || 'N/A'}\nService: ${service}\nDate: ${date || 'N/A'}\nMessage: ${message || 'N/A'}`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending quote email:", error);
    return new Response(JSON.stringify({ error: "Failed to send quote" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
}

Deno.serve(handler);
