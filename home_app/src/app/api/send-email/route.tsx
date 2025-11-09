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

        const selfMailOptions = {
            from: process.env.MAIL_USER,
            to: process.env.MAIL_USER,
            subject: `${data.topic}`,
            text: `Поступило обращение от ${data.email} (номер телефона: Номер телефона: ${data.phone})\n${data.body}`,
        };

        const userMailOptions = {
            from: process.env.MAIL_USER,
            to: `${data.email}`,
            subject: `${data.topic}`,
            text: `Ваше обращение принято и будет рассмотрено в ближайшее время.`,
        };

        try {
            if (!data.agreed) {
                return new Response(JSON.stringify({ message: 'You need to agree to terms and conditions' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                });
            }
            await transporter.sendMail(selfMailOptions);
            await transporter.sendMail(userMailOptions);
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