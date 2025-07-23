// src/app/api/coffeeCart/route.ts

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import CoffeeCart from '@/models/coffeeCart';

export async function GET() {
  await dbConnect();
  const items = await CoffeeCart.find();
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const data = await request.json();
  await dbConnect();
  const item = await CoffeeCart.create(data);
  return NextResponse.json(item, { status: 201 });
}

// ← Add this DELETE to clear the entire cart
export async function DELETE() {
  await dbConnect();
  await CoffeeCart.deleteMany({});
  return NextResponse.json({ cleared: true }, { status: 200 });
}
