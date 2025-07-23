'use client';
import React from 'react';
import Header from '@/component/Header';
import Footer from '@/component/TempFooter';
import { useCart } from '@/context/cartContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // <-- ✅ Import router

export default function CartPage() {
  const router = useRouter(); // <-- ✅ Initialize router

  const { cart, loading, removeItem, updateQuantity } = useCart() as {
    cart: Array<{
      clientId: string;
      imgsrc: string;
      name: string;
      roastLevel: string;
      price: number;
      quantity: number;
    }>;
    loading: boolean;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
  };

  if (loading) return <p>Loading cart...</p>;
  if (!cart.length) return <p>Your cart is empty.</p>;

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const taxes = subtotal * 0.13;
  const total = subtotal + taxes;

  return (
    <div className="min-h-screen flex flex-col">
      <Header showLinks noBackground />
      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Items List */}
          <div>
            {cart.map(item => (
              <div
                key={item.clientId}
                className="flex items-center bg-white shadow rounded-lg p-4 mb-4"
              >
                <div className="w-24 h-24 relative">
                  <Image
                    src={item.imgsrc}
                    alt={item.name}
                    fill
                    className="object-contain rounded"
                  />
                </div>
                <div className="flex-1 ml-4">
                  <h2 className="text-xl font-medium">{item.name}</h2>
                  <p className="text-gray-600">Roast Level: {item.roastLevel}</p>
                  <p className="text-gray-600">
                    Price: ${item.price.toFixed(2)}
                  </p>
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={e =>
                      updateQuantity(item.clientId, +e.target.value)
                    }
                    className="w-16 border rounded p-1 mt-2"
                  />
                  <p className="font-semibold mt-2">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.clientId)}
                  className="ml-4 text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Taxes (13%)</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mb-6">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/*Checkout Button */}
            <button
              onClick={() => router.push('/checkout')}
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg"
            >
              Checkout
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
