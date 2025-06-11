import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import coffeeCart from '@/models/coffeeCart'; // Make sure the model file name and export are correct

// GET: Fetch all cart items
export async function GET() {
  await dbConnect();
  const cartItems = await coffeeCart.find({});
  return NextResponse.json(cartItems);
}

// POST: Create a new cart item
export async function POST(request: Request) {
  await dbConnect();

  const body = await request.json();
  const { name, item, id, quantity, price, total } = body;

  try {
    const newCartItem = await coffeeCart.create({ name, item, id, quantity, price, total });
    return NextResponse.json(newCartItem, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create cart item', details: error },
      { status: 500 }
    );
  }
}
