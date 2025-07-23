// context/cartContext.tsx
'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

export interface CartItem {
  _id?: string; // from server
  clientId: string; // generated locally
  imgsrc: string;
  name: string;
  roastLevel: number;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  loading: boolean;
  addItem: (item: Omit<CartItem, 'clientId' | '_id'>) => Promise<void>;
  removeItem: (clientId: string) => Promise<void>;
  updateQuantity: (clientId: string, newQty: number) => Promise<void>;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        await fetch('/api/coffeeCart', { method: 'DELETE' });
        setCart([]);
      } catch (err) {
        console.error('Failed to clear server cart:', err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function addItem(itemData: Omit<CartItem, 'clientId' | '_id'>) {
    const clientId = crypto.randomUUID();
    try {
      const res = await fetch('/api/coffeeCart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemData),
      });
      const saved = await res.json();
      setCart(prev => [...prev, { ...saved, clientId }]);
    } catch (error) {
      console.error('Failed to add item:', error);
    }
  }

  async function removeItem(clientId: string) {
    const item = cart.find(i => i.clientId === clientId);
    if (!item) return;
    try {
      await fetch(`/api/coffeeCart/${item._id}`, { method: 'DELETE' });
      setCart(prev => prev.filter(i => i.clientId !== clientId));
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  }

  async function updateQuantity(clientId: string, newQty: number) {
    const item = cart.find(i => i.clientId === clientId);
    if (!item) return;
    try {
      const res = await fetch(`/api/coffeeCart/${item._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: newQty }),
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

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
