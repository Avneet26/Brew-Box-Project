import { NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import User from '@/models/user';

export async function GET() {
    await connectDB();
    const users = await User.find();
    return NextResponse.json(users);
}
