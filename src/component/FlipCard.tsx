'use client';
import { useState } from 'react';

type FlipCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function FlipCard({ image, title, description }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-64 h-80 cursor-pointer relative mx-auto"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-white rounded-xl shadow-xl overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={image}
            alt={title}
            className="h-3/4 w-full object-cover"
          />
          <div className="p-3 text-center">
            <h3 className="font-bold text-brown-700 text-lg">{title}</h3>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-[#fefaf5] rounded-xl shadow-xl flex items-center justify-center p-4 text-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}
