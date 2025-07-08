"use client";
import Link from "next/link";
import Image from "next/image";
import CartButton from "./CartButton";

export default function Header({ showLinks = true, noBackground = true }) {
  return (
    <header className={`w-full py-4 px-8 
     ${noBackground?"bg-transparent":"bg-[#cdb7a1] shadow-md"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex items-center h-12 mt-2.5 mb-2.5">
        <Image
          src="/BrewBoxLogo.png"
          alt="BrewBox Logo"
          width={80}
          height={45}
          className="object-contain"
        />
        </div>

        {/* Navigation Links (conditionally rendered) */}
        {showLinks ? (
          <nav className="flex-1 flex justify-center space-x-6 text-md font-medium font-sans">
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
          <Link href="/cart">
            <CartButton name={"Cart"}/>
          </Link>
          <Link
            href="/login"
            className="bg-orange-950 text-white px-4 py-1 rounded hover:bg-[#9e4b34] text-md"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-orange-950 text-white px-4 py-1 rounded hover:bg-[#9e4b34] text-md"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
