import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import User from '@/models/user';

export async function POST(req: NextRequest) {
  await connectDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email, password });
  if (!user) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
  }

  return NextResponse.json({ message: 'Login successful', user });
}
