'use client';
import React, { useState } from 'react';
import { useCart } from '@/context/cartContext';

export default function CheckoutForm() {
  const { cart } = useCart() as {
    cart: Array<{
      clientId: string;
      name: string;
      price: number;
      quantity: number;
    }>;
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const [showReceipt, setShowReceipt] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const cardRegex = /^[0-9]{16}$/;
    const cvvRegex = /^[0-9]{3}$/;
    const postalRegex = /^[A-Za-z0-9 ]{4,10}$/;

    if (
      !emailRegex.test(formData.email) ||
      !phoneRegex.test(formData.phone) ||
      !cardRegex.test(formData.cardNumber) ||
      !cvvRegex.test(formData.cvv) ||
      !postalRegex.test(formData.postalCode)
    ) {
      alert('Please enter valid information in all fields.');
      return;
    }

    setShowReceipt(true);
  };

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const taxes = subtotal * 0.13;
  const total = subtotal + taxes;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 space-y-8"
      >
        {/* SHIPPING INFO */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">Shipping Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (10 digits)"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>
        </div>

        {/* CARD DETAILS */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">Card Details</h2>

          <input
            type="text"
            name="cardName"
            placeholder="Cardholder Name"
            value={formData.cardName}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2"
          />
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number (16 digits)"
            maxLength={16}
            value={formData.cardNumber}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="expiry"
              placeholder="Expiry (MM/YY)"
              value={formData.expiry}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV (3 digits)"
              maxLength={3}
              value={formData.cvv}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2"
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-lg transition"
        >
          Place Order
        </button>
      </form>

      {/* RECEIPT MODAL */}
      {showReceipt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-xl">
            <h2 className="text-2xl font-bold mb-4 text-green-600">🎉 Order Placed Successfully!</h2>
            <p className="mb-2">Thank you, <strong>{formData.name}</strong>!</p>
            <p className="mb-2">We've received your order to:</p>
            <p className="mb-4 text-sm text-gray-700">
              {formData.address}, {formData.city}, {formData.state}, {formData.country} - {formData.postalCode}
            </p>

            <h3 className="text-xl font-semibold mb-2">Order Summary:</h3>
            <ul className="mb-4 text-sm text-gray-700 space-y-1">
              {cart.map(item => (
                <li key={item.clientId}>
                  {item.name} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
            <div className="text-right font-semibold text-lg">
              Total: ${total.toFixed(2)}
            </div>

            <button
              onClick={() => setShowReceipt(false)}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
            >
              Close Receipt
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
