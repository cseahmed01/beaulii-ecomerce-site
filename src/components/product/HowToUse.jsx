"use client";

import Image from "next/image";

export default function HowToUse() {
  return (
    <section className="mt-24">

      <div className="bg-[#e9bfc6] rounded-2xl py-16 px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#6a2c2c] mb-12">
          How to Use
        </h2>

        {/* Single Image */}
        <div className="max-w-4xl mx-auto">

          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">

            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <Image
                src="/images/howtouse/3.webp"
                alt="How to Use"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}