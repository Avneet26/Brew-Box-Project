"use client";
import Head from "next/head";
import Link from "next/link";
import SignupPage from "./signup/page";

export default function Home() {
  return (
    <>
      <Head>
        <title>BrewBox | Home</title>
      </Head>

      <main className="min-h-screen bg-white text-gray-800 font-sans">
        {/* Header */}
        <header className="w-full shadow-md py-4 px-8 bg-white">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex-1">
              <div className="text-2xl font-bold text-brown-800">BrewBox</div>
            </div>

            {/* Center: Navigation */}
            <nav className="flex-1 flex justify-center space-x-6 text-md font-medium">
              <Link href="/">Home</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            {/* Right: Auth Buttons */}
            <div className="flex-1 flex justify-end space-x-4">
              <Link
                href="/login"
                className="bg-brown-700 text-black px-4 py-1 rounded hover:bg-brown-800 text-sm"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-brown-700 text-black px-4 py-1 rounded hover:bg-brown-800 text-sm"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </header>

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
