"use client";
import Link from "next/link";

export default function Header({ showLinks = true }) {
  return (
    <header className="w-full shadow-md py-4 px-8 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <div className="text-2xl font-bold text-brown-800">BrewBox</div>
        </div>

        {/* Navigation Links (conditionally rendered) */}
        {showLinks ? (
          <nav className="flex-1 flex justify-center space-x-6 text-md font-medium">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        ) : (
          <div className="flex-1" /> // keeps spacing consistent
        )}

        {/* Auth Buttons (optional: make these conditional too) */}
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
  );
}
