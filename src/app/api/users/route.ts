<<<<<<< HEAD
import { NextResponse } from "next/server";
import connectDB from "@/utils/db";
import User from "@/models/user";
=======
import { NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import User from '@/models/user';
>>>>>>> d35ea3c2dcec69ef69d14156a7cedf03ab750cae

export async function GET() {
    await connectDB();
    const users = await User.find();
    return NextResponse.json(users);
}
