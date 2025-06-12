type propTypes = {
  imgsrc: string;
  name: string;
  roastLevel: number;
  price: number;
};

export default function CoffeeCard({ imgsrc, name, roastLevel, price }: propTypes) {
  return (
    <div className="bg-white shadow-gray-400 shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-xl transition flex flex-col items-center mb-7 w-full max-w-sm">
      <img src={imgsrc} alt="error" className="w-full h-48 object-cover rounded-md mb-4" />
      
      <h2 className="text-2xl font-semibold mb-4 text-center">{name}</h2>

      {/* Grid layout for roast level, price, and button */}
      <div className="grid grid-cols-2 gap-4 w-full items-center">
        {/* Left column: Roast level + Price */}
        <div className="flex flex-col ">
          <p className="text-gray-600 mb-1">Roast Level: {roastLevel}</p>
          <p className="text-lg font-medium text-brown-700">${price.toFixed(2)}</p>
        </div>

        {/* Right column: Button */}
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-amber-700 text-3xl">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
