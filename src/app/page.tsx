"use client";
import Head from "next/head";
import Header from "@/component/Header";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/component/TempFooter"; 
import WhyChoose from "@/component/WhyChoose";
import HowItWorks from "@/component/HowItWorks";
import SubscribeCTA from "@/component/SubscribeCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>BrewBox | Home</title>
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/Landing.jpg"
            alt="Landing background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Header showLinks={true} noBackground={true} />
        <div className="flex h-full items-center justify-center text-center text-[#603F26] px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Welcome to BrewBox
            </h1>
            <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
              Your daily dose of handcrafted coffee
            </p>
            <Link
              href="/menu"
              className="inline-block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Check Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Scrollable Sections */}
      <WhyChoose />
      <HowItWorks />
      <SubscribeCTA />
      <Footer />
    </div>
  );
}
