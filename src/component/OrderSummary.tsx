'use client';
import React from 'react';
import { useCart } from '@/context/cartContext';

type CartItem = {
  clientId: string;
  name: string;
  price: number;
  quantity: number;
};

export default function OrderSummary() {
  const { cart } = useCart() as {
    cart: CartItem[];
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxes = subtotal * 0.13;
  const total = subtotal + taxes;

  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 md:sticky md:top-20 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

      <div className="space-y-4 text-gray-700">
        <div className="flex justify-between">
          <span className="font-medium">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Taxes (13%)</span>
          <span>${taxes.toFixed(2)}</span>
        </div>
        <hr className="my-2 border-gray-300" />
        <div className="flex justify-between text-lg font-semibold text-gray-900">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
