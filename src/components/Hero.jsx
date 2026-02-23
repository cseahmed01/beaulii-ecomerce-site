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
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f4f1ee] py-4 sm:py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 w-full overflow-hidden">
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg">

          {/* Slides */}
          <div
            className="flex w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full relative">

                {/* Responsive Height */}
                <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px]">
                  <Image
                    src={slide}
                    alt={`Hero ${index}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border transition ${
                  current === index
                    ? "bg-[#5a2a0f] border-[#5a2a0f] scale-110"
                    : "bg-white border-gray-400"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}