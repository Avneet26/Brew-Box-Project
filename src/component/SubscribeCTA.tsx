import Link from "next/link";
import Image from "next/image";

export default function SubscribeCTA() {
  return (
    <section className="relative bg-gradient-to-r from-[#4b2e2e] via-[#5c3b30] to-[#4b2e2e] text-white py-24 px-6 overflow-hidden">
      {/* Glowing radial background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-white opacity-5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Image with shadow and glow */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group">
            {/* Glowing background behind image */}
            <div className="absolute -inset-2 rounded-xl bg-white opacity-10 blur-xl group-hover:opacity-20 transition duration-300"></div>

            {/* Image */}
            <Image
              src="/images/SubscribeComponent.jpg"
              alt="Subscribe Coffee Box"
              width={400}
              height={400}
              className="relative z-10 rounded-xl shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-wide">
            Ready to Brew Better?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Join hundreds of happy coffee lovers getting curated blends delivered right to their door.
          </p>
          <Link
            href="/menu"
            className="inline-block bg-white text-amber-950 font-bold py-3 px-8 rounded-full border-2 border-white shadow-lg hover:shadow-xl hover:bg-gray-100 transition duration-300"
          >
            Subscribe Now
          </Link>
        </div>
      </div>
    </section>
  );
}
