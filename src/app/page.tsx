"use client";
import Head from "next/head";
import Header from "@/component/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Head>
        <title>BrewBox | Home</title>
      </Head>

      {/* Background Image positioned behind everything */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/Landing.jpg"
          alt="Landing background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main content */}
      <main className="text-gray-800 font-sans justify-between h-screen flex flex-col">
        <Header showLinks={true} noBackground={true}/>

        {/* Hero Section */}
        <section className="w-full flex-grow-1 flex justify-center items-center text-black text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to BrewBox</h1>
            <p className="text-lg md:text-2xl">Your daily dose of handcrafted coffee</p>
            <Link href="/menu" className="mt-4 inline-block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Check Menu
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
