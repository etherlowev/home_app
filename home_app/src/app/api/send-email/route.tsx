import nodemailer from "nodemailer";

export async function POST(req: Request) {
    if (req.method === 'POST') {
        const data = await req.json();
        const transporter = nodemailer.createTransport({
            service: 'Mail.ru',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.MAIL_USER,
            to: process.env.MAIL_USER,
            subject: `${data.topic} от ${data.email} (номер телефона ${data.phone})`,
            text: `${data.body}`,
        };

        try {
            if (!data.agreed) {
                return new Response(JSON.stringify({ message: 'You need to agree to terms and conditions' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                });
            }
            await transporter.sendMail(mailOptions);
            return new Response(JSON.stringify({ message: 'Message sent successfully' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        catch (error) {
            console.error(error);
            return new Response(JSON.stringify({ message: 'Failed to send email' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    }
    else {
        return new Response(JSON.stringify({ message: `Method ${req.method} Not Allowed` }), {
            status: 405,
            headers: { 'Content-Type': 'application/json', 'Allow': 'POST' },
        });
    }
}