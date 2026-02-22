"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images, title }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div>
      {/* Main Image */}
      <div className="bg-white rounded-xl overflow-hidden shadow-sm">

        <div className="relative w-full h-[450px]">
          <Image
            src={images[activeImage]}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Bottom Result Strip */}
        <div className="bg-[#a86a46] text-white text-center py-4 text-xl font-semibold">
          See Visible Reduction in 21 Days
        </div>

      </div>

      {/* Thumbnails */}
      <div className="flex items-center gap-3 mt-4 overflow-x-auto">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setActiveImage(i)}
            className={`relative w-24 h-20 rounded-md border cursor-pointer overflow-hidden ${
              activeImage === i
                ? "border-[#5a2a0f] ring-2 ring-[#5a2a0f]"
                : "border-gray-200"
            }`}
          >
            <Image
              src={img}
              alt="thumb"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}