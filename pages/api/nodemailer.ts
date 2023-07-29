var nodemailer = require('nodemailer' as any);

export default async function handler(req: any, res: any) {
    const { name, email, message } = req.body;
    const data = { name, email, message };
  
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });
  
    try {
      const mail = await transporter.sendMail({
        from: data.email,
        to: 'pauljohnrdrgz@gmail.com',
        subject: `Email sent by ${data.name}`,
        html: `
          <h1>From: ${data.name}</h1>
          <h1>Email: ${data.email}</h1>
          <h6>${data.message}</h6>
        `,
      });
      res.status(200).json({ message: "Email successfully sent." });
    } catch (error) {
      console.log('Failed to send email.');
      console.log(error);
      res.status(500).json({ message: "Failed to send email." });
    }
}