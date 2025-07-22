/* components/CoffeeCard.tsx */
'use client';
import React from 'react';
import { useCart } from '@/context/cartContext';

type Props = {
  imgsrc: string;
  name: string;
  roastLevel: number;
  price: number;
};

export default function CoffeeCard({
  imgsrc,
  name,
  roastLevel,
  price,
}: Props) {
  const { cart, addItem, updateQuantity } = useCart();

  // look for existing item
  const existing = cart.find(item => item.name === name);

  const handleAdd = () => {
    if (existing) {
      // if it’s already in the cart, increment its quantity
      updateQuantity(existing.clientId, existing.quantity + 1);
    } else {
      // otherwise add it with quantity = 1
      addItem({ imgsrc, name, roastLevel, price, quantity: 1 });
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg border hover:shadow-xl flex flex-col items-center mb-7 w-full max-w-sm">
      <img
        src={imgsrc}
        alt={name}
        className="w-full h-48 object-contain rounded-md mb-4"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl mb-2">{name}</h2>
        <p className="text-gray-600">Roast Level: {roastLevel}</p>
        <p className="text-lg font-medium mt-1">${price.toFixed(2)}</p>
        <button
          onClick={handleAdd}
          className="mt-4 px-4 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
