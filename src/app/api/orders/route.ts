// src/app/api/orders/route.ts

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Order from '@/models/orders'; // Make sure the file name matches the model

// GET: Fetch all orders
export async function GET() {
  await dbConnect();
  const orders = await Order.find({});
  return NextResponse.json(orders);
}

// POST: Create a new order
export async function POST(request: Request) {
  await dbConnect();

  const body = await request.json();
  const { name, item, address, phone } = body;

  try {
    const order = await Order.create({ name, item, address, phone });
    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create order', details: error },
      { status: 500 }
    );
  }
}
