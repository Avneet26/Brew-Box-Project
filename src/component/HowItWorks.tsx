export default function HowItWorks() {
  return (
    <section className="bg-[#fefaf5] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-brown-800 mb-6">
          How BrewBox Works
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-16">
          A step-by-step journey to your perfect cup.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="bg-gradient-to-br from-[#fbeee6] to-[#f5d8b8] p-8 rounded-3xl shadow-lg border border-[#e4c8a0] hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-brown-800 text-2xl font-bold mb-6 mx-auto shadow">
              1
            </div>
            <img
              src="/images/CoffeeBox.jpg"
              alt="Choose Box"
              className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold text-brown-700 mb-2">Choose Your Box</h3>
            <p className="text-sm text-gray-700">
              Pick from our curated selections or customize your own.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-br from-[#f9f0e8] to-[#e8d5c1] p-8 rounded-3xl shadow-lg border border-[#d8bfa2] hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-brown-800 text-2xl font-bold mb-6 mx-auto shadow">
              2
            </div>
            <img
              src="/images/schedule-call.png"
              alt="Set Schedule"
              className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold text-brown-700 mb-2">Set Your Schedule</h3>
            <p className="text-sm text-gray-700">
              Decide how often you want coffee at your doorstep.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-br from-[#f3e7da] to-[#dbc3a7] p-8 rounded-3xl shadow-lg border border-[#c3a987] hover:shadow-2xl transition-all duration-300">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-brown-800 text-2xl font-bold mb-6 mx-auto shadow">
              3
            </div>
            <img
              src="/images/CoffeeCup.png"
              alt="Enjoy Coffee"
              className="w-16 h-16 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-xl font-semibold text-brown-700 mb-2">Sip & Enjoy</h3>
            <p className="text-sm text-gray-700">
              Sit back, relax, and let BrewBox handle your mornings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
