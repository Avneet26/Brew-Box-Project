import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Coffee from '@/models/Coffee';

type CoffeeIdParam = {
    params: Promise<{ userid: string }>
}

export async function GET(request: Request, { params }: CoffeeIdParam) {
  await dbConnect();
  const {coffee} = await params
  const user = await Coffee.findById(coffee);
  if (!user) {
    return NextResponse.json({ message: 'Coffee not Found' }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function PUT(request: Request, { params }: CoffeeIdParam) {
  await dbConnect();
  const body = await request.json();
  const {coffee} = await params
  const updatedUser = await Coffee.findByIdAndUpdate(coffee, body, { new: true });
  if (!updatedUser) {
    return NextResponse.json({ message: 'Coffee not found' }, { status: 404 });
  }
  return NextResponse.json(updatedUser);
}

export async function DELETE(request: Request, { params }: CoffeeIdParam)   {
  await dbConnect();
  const {coffee} = await params
  const deletedUser = await Coffee.findByIdAndDelete(coffee);
  if (!deletedUser) {
    return NextResponse.json({ message: 'Coffee not found' }, { status: 404 });
  }
  return NextResponse.json({ message: 'Coffee deleted successfully' });
}