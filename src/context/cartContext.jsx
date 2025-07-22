/* context/cartContext.jsx */
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart]       = useState([]);
  const [loading, setLoading] = useState(true);

  // On mount: clear MongoDB cart and reset local cart to []
  useEffect(() => {
    (async () => {
      try {
        await fetch('/api/coffeeCart', { method: 'DELETE' });
        setCart([]);                  // ensure local is empty
      } catch (err) {
        console.error('Failed to clear server cart:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function addItem(itemData) {
    const clientId = crypto.randomUUID();
    try {
      const res   = await fetch('/api/coffeeCart', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(itemData),
      });
      const saved = await res.json();
      setCart(prev => [...prev, { ...saved, clientId }]);
    } catch (error) {
      console.error('Failed to add item:', error);
    }
  }

  async function removeItem(clientId) {
    const item = cart.find(i => i.clientId === clientId);
    if (!item) return;
    try {
      await fetch(`/api/coffeeCart/${item._id}`, { method: 'DELETE' });
      setCart(prev => prev.filter(i => i.clientId !== clientId));
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  }

  async function updateQuantity(clientId, newQty) {
    const item = cart.find(i => i.clientId === clientId);
    if (!item) return;
    try {
      const res     = await fetch(`/api/coffeeCart/${item._id}`, {
        method:  'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ quantity: newQty }),
      });
      const updated = await res.json();
      setCart(prev =>
        prev.map(i =>
          i.clientId === clientId ? { ...updated, clientId } : i
        )
      );
    } catch (error) {
      console.error('Failed to update quantity:', error);
    }
  }

  return (
    <CartContext.Provider
      value={{ cart, loading, addItem, removeItem, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
