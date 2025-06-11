import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import User from '@/app/models/user';

export async function POST(req: NextRequest) {
  await connectDB();
  const { name, email, password } = await req.json();

  const existing = await User.findOne({ email });
  if (existing) {
    return NextResponse.json({ message: 'Email already exists' }, { status: 400 });
  }

  const user = await User.create({ name, email, password });
  return NextResponse.json({ message: 'User registered', user }, { status: 201 });
}
