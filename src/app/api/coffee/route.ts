import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Coffee from '@/models/Coffee';

export async function GET() {
  await dbConnect();
  const coffees = await Coffee.find({});
  return NextResponse.json(coffees);
}

export async function POST(request: Request) {
  await dbConnect();
  const body = await request.json();
  const user = await Coffee.create(body);
  return NextResponse.json(user, { status: 201 });
}