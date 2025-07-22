// src/app/api/coffeeCart/[id]/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import CoffeeCart from '@/models/coffeeCart';

type ContextWithParams = {
  params: Promise<{ id: string }>;
};

export async function DELETE(
  request: Request,
  context: ContextWithParams
) {
  const { id } = await context.params;
  await dbConnect();
  await CoffeeCart.findByIdAndDelete(id);
  return new NextResponse(null, { status: 204 });
}

export async function PATCH(
  request: Request,
  context: ContextWithParams
) {
  const { id } = await context.params;
  const data    = await request.json();
  await dbConnect();
  const updated = await CoffeeCart.findByIdAndUpdate(id, data, { new: true });
  if (!updated) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(updated, { status: 200 });
}
