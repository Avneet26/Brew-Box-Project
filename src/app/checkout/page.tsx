'use client';
import React from 'react';
import Header from '@/component/Header';
import Footer from '@/component/TempFooter';
import CheckoutForm from '@/component/CheckoutForm';
import OrderSummary from '@/component/OrderSummary';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header showLinks={true} noBackground={false} />
      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl text-center font-bold mb-6">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CheckoutForm />
          <OrderSummary />
        </div>
      </main>
      <Footer />
    </div>
  );
}
