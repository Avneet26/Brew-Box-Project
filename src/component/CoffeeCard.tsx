"use client";
import { useCart } from "@/context/cartContext";

type PropTypes = {
  imgsrc: string;
  name: string;
  roastLevel: number;
  price: number;
  quantity?: number; // ensure quantity is available
};

export default function CoffeeCard({ imgsrc, name, roastLevel, price, quantity = 1 }: PropTypes) {
  const { cart, setCart } = useCart();

  const isAlreadyInCart = cart.some((item: PropTypes) => item.name === name);

  const addToCart = () => {
    if (!isAlreadyInCart) {
      const newItem = { imgsrc, name, roastLevel, price, quantity };
      setCart([...cart, newItem]);
    }
  };

  return (
    <div className="bg-white shadow-gray-400 shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-xl transition flex flex-col items-center mb-7 w-full max-w-sm">
      <img
        src={imgsrc}
        alt={name}
        className="w-full h-48 object-contain rounded-md mb-4"
      />

      <h2 className="text-2xl font-semibold mb-4 text-center min-h-16">{name}</h2>

      <div className="grid grid-cols-2 gap-4 w-full items-center">
        <div className="flex flex-col">
          <p className="text-gray-600 mb-1">Roast Level: {roastLevel}</p>
          <p className="text-lg font-medium text-brown-700">${price.toFixed(2)}</p>
        </div>

        <div className="flex justify-end">
          {!isAlreadyInCart ? (
            <button
              type="button"
              onClick={addToCart}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 inline-flex items-center"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>
              <span className="sr-only">Add to cart</span>
            </button>
          ) : (
            <button
              type="button"
              className="text-white bg-gray-500 cursor-not-allowed font-medium rounded-full text-sm p-2.5 inline-flex items-center"
              disabled
            >
              In Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
