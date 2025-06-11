"use client";
import Head from "next/head";
// import Link from "next/link";
import Header from "@/component/Header"

export default function Home() {
  return (
    <>
      <Head>
        <title>BrewBox | Home</title>
      </Head>

      <main className="min-h-screen bg-white text-gray-800 font-sans">
        <Header showLinks={true} />

        {/* Hero Section */}
        <section className="text-center mt-24 px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to BrewBox</h1>
          <p className="text-lg text-gray-600">
            Discover the finest brews crafted with love.
          </p>
        </section>
      </main>
    </>
  );
}
