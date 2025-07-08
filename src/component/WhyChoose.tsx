import FlipCard from "./FlipCard";

export default function WhyChoose() {
  return (
    <section className="bg-gradient-to-br from-[#fff5e1] via-[#fff0e6] to-[#ffe9d6] py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-brown-800 mb-4">Why Choose BrewBox?</h2>
        <p className="mb-12 text-gray-700 max-w-2xl mx-auto">
          We go beyond just coffee. BrewBox is a promise of quality, sustainability, and delightful mornings.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <FlipCard
            image="/images/FreshlyRoasted.jpg"
            title="Freshly Roasted"
            description="Delivered at peak freshness from ethical sources."
          />
          <FlipCard
            image="/images/ConvenientSubscription.jpg"
            title="Easy Delivery"
            description="Get your coffee delivered regularly — fast, fresh, and on time."
          />
          <FlipCard
            image="/images/Farmers.jpg"
            title="Local Community"
            description="Supporting small farms and roasters across Canada."
          />
        </div>
      </div>
    </section>
  );
}
