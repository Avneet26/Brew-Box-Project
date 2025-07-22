import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import ContactMessage from '@/models/ContactMessage';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  await dbConnect();
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  try {
    // 1) Save to MongoDB
    const newMessage = await ContactMessage.create({ name, email, message });

    // 2) Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,         // e.g. 'smtp.gmail.com'
      port: Number(process.env.SMTP_PORT), // e.g. 587
      secure: false,                       // true for port 465, false for others
      auth: {
        user: process.env.SMTP_USER,       // your SMTP username
        pass: process.env.SMTP_PASS,       // your SMTP password or app password
      },
    });

    // 3) Build the email
    const mailOptions = {
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,    // recipient of the notification
      subject: `New contact message from ${name}`,
      text: `
You have a new contact message:

Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <h1>New Contact Message</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // 4) Send the email
    await transporter.sendMail(mailOptions);

    // 5) Return the saved message
    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error('Error saving or sending email:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
