import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Coffee from '@/models/Coffee';

type CoffeeNameParam = {
  params: Promise<{ coffee: string }>; // 'coffee' here will be the name
};

export async function GET(request: Request, { params }: CoffeeNameParam) {
  await dbConnect();
  const { coffee } = await params;

  const foundCoffee = await Coffee.findOne({ name: coffee });
  if (!foundCoffee) {
    return NextResponse.json({ message: 'Coffee not found' }, { status: 404 });
  }

  return NextResponse.json(foundCoffee);
}

export async function PUT(request: Request, { params }: CoffeeNameParam) {
  await dbConnect();
  const body = await request.json();
  const { coffee } = await params;

  const updatedCoffee = await Coffee.findOneAndUpdate({ name: coffee }, body, { new: true });
  if (!updatedCoffee) {
    return NextResponse.json({ message: 'Coffee not found' }, { status: 404 });
  }

  return NextResponse.json(updatedCoffee);
}

export async function DELETE(request: Request, { params }: CoffeeNameParam) {
  await dbConnect();
  const { coffee } = await params;

  const deletedCoffee = await Coffee.findOneAndDelete({ name: coffee });
  if (!deletedCoffee) {
    return NextResponse.json({ message: 'Coffee not found' }, { status: 404 });
  }

  return NextResponse.json({ message: 'Coffee deleted successfully' });
}
