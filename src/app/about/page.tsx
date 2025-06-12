import Header from "@/component/Header";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header showLinks={true} noBackground={false} />
      
      <div className="flex flex-row  min-h-screen pt-20 px-20">
        <div className="flex-1 pr-10">
          <h1 className="text-5xl mb-6 font-sans">About Us</h1>
          <p className="max-w-xl text-lg font-sans">
            Welcome to BrewBox, your ultimate destination for premium coffee pods and beans crafted for the true coffee lover. Born from a passion for rich, aromatic blends and café-quality convenience, we bring the art of specialty coffee straight to your home. Whether you're starting your day with a bold espresso or winding down with a smooth decaf, our carefully sourced beans and expertly crafted pods are designed to satisfy every palate. At BrewBox, we believe great coffee should be effortless, sustainable, and most importantly—delicious. Join us in redefining your daily brew, one cup at a time.
            <br /><br />
            Every blend we create is a tribute to tradition, yet crafted for the modern lifestyle. We work closely with trusted growers to ensure ethical sourcing and rich, full-bodied flavor in every sip. Our eco-friendly packaging reflects our commitment to a greener planet without compromising on quality. From bean to brew, we obsess over the details so you don’t have to. Because at BrewBox, coffee isn’t just a drink — it’s a daily ritual worth savoring.
          </p>
        </div>

        <div className="relative flex-1 h-[500px]">
          <Image
            src="/images/About.jpg"
            alt="About Page"
            fill
            className="object-cover rounded-lg shadow-lg shadow-gray-400"
          />
        </div>
      </div>
    </>
  );
}
