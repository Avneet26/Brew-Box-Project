"use client";
import { useCart } from "@/context/cartContext";
import Header from "@/component/Header";
import Footer from "@/component/TempFooter";
import Image from "next/image";
import { Dispatch, SetStateAction, ChangeEvent } from "react";

// Define the shape of a cart item
interface CartItem {
  imgsrc: string;
  name: string;
  roastLevel: number;
  price: number;
  quantity: number;
}

export default function Cart() {
  // Destructure cart and setCart with proper types
  const { cart, setCart }: { cart: CartItem[]; setCart: Dispatch<SetStateAction<CartItem[]>> } = useCart();

  // Remove an item from the cart
  const removeFromCart = (name: string) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  // Update quantity of an item
  const updateQuantity = (name: string, quantity: number) => {
    setCart(
      cart.map((item) =>
        item.name === name ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Calculate subtotal with explicit types
  const subtotal: number = cart.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header showLinks={true} noBackground={false} />

      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cart Items List */}
            <div>
              {cart.map((item: CartItem) => (
                <div
                  key={item.name}
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
                    <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <label htmlFor={`qty-${item.name}`} className="sr-only">
                        Quantity
                      </label>
                      <input
                        id={`qty-${item.name}`}
                        type="number"
                        min={1}
                        value={item.quantity}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          updateQuantity(item.name, parseInt(e.target.value, 10))
                        }
                        className="w-16 border rounded p-1"
                      />
                    </div>
                    <p className="font-semibold mt-2">
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="ml-4 text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mb-6">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
