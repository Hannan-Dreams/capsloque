import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return Response.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Create transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // Use App Password, not your regular password
            },
        });

        // Email to Capsloque (notification of new contact)
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'capsloqueinfo@gmail.com',
            replyTo: email,
            subject: `[Capsloque Contact] ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #e60000; border-bottom: 2px solid #e60000; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Subject:</strong> ${subject}</p>
                    </div>
                    <div style="background: #fff; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
                        <h3 style="margin-top: 0; color: #333;">Message:</h3>
                        <p style="white-space: pre-wrap; color: #555;">${message}</p>
                    </div>
                    <p style="color: #888; font-size: 12px; margin-top: 20px;">
                        This email was sent from the Capsloque website contact form.
                    </p>
                </div>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Optional: Send confirmation email to the user
        const confirmationMail = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for contacting Capsloque!',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #e60000;">Thank You, ${name}!</h2>
                    <p>We've received your message and will get back to you within 24 hours.</p>
                    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="margin-top: 0; color: #333;">Your Message:</h3>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p style="white-space: pre-wrap; color: #555;">${message}</p>
                    </div>
                    <p style="color: #555;">
                        Best regards,<br/>
                        <strong>The Capsloque Team</strong>
                    </p>
                </div>
            `,
        };

        await transporter.sendMail(confirmationMail);

        return Response.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email error:', error);
        return Response.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
