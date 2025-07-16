import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import User from '@/models/user';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  await connectDB();
  const { name, email, password } = await req.json();

  // Validate fields
  if (!name || !email || !password) {
    return NextResponse.json({ message: "All fields are required." }, { status: 400 });
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ message: "Invalid email format." }, { status: 400 });
  }

  // Password strength check
  if (password.length < 6) {
    return NextResponse.json({ message: "Password must be at least 6 characters." }, { status: 400 });
  }

  const existing = await User.findOne({ email });
  if (existing) {
    return NextResponse.json({ message: "Email already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return NextResponse.json({ message: "User registered", user: {
    _id: user._id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt
  }}, { status: 201 });
}
