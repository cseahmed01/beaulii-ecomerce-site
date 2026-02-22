
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  "/images/hero/1_1.webp",
  "/images/hero/1_2.webp",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f4f1ee] py-6">
      <div className="max-w-7xl mx-auto px-4 w-full overflow-hidden">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">

          {/* Slides */}
          <div
            className="flex w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full relative">
                <Image
                  src={slide}
                  alt={`Hero ${index}`}
                  width={1400}
                  height={500}
                  className="w-full h-[420px] object-cover"
                  priority
                />
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full border border-gray-400 transition ${
                  current === index
                    ? "bg-black scale-110"
                    : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}