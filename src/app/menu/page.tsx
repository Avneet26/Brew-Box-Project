"use client";
import Head from "next/head";
import Header from "@/component/Header";
import { useEffect, useState } from "react";
import CoffeeCard from "@/component/CoffeeCard";

type CoffeeSchema = {
  name: string;
  roastLevel: number;
  price: number;
  imgsrc: string;
};

export default function Home() {
  const [menuItems, setMenuItems] = useState<CoffeeSchema[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    fetch("/api/coffee")
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((err) => console.error("Failed to fetch menu", err));
  }, []);

  return (
    <div className="relative min-h-screen">
      <Head>
        <title>BrewBox | Menu</title>
      </Head>

      <main className="text-gray-800 font-sans justify-between min-h-screen flex flex-col">
        <Header showLinks={true} noBackground={false} />

        {/* Hero Section */}
        <section className="w-full flex-grow flex flex-col items-center justify-start text-black text-center px-4 pt-16">
          <h1 className="text-3xl font-bold mb-10">Our Coffee Menu</h1>

          {isMounted ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
              {menuItems.map((item, index) => (
                <CoffeeCard 
                    imgsrc={item.imgsrc} 
                    name={item.name} 
                    price={item.price} 
                    roastLevel={item.roastLevel} 
                />
              ))}
            </div>
          ) : (
            <p>Loading menu...</p>
          )}
        </section>
      </main>
    </div>
  );
}
