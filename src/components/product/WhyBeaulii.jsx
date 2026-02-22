"use client";

import Image from "next/image";

export default function WhyBeaulii() {
  return (
    <section className="mt-24">

      <div className="bg-[#e8dfc9] rounded-2xl py-16 px-6 md:px-12">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#4a1f0f] mb-14">
          Why BEAULII ?
        </h2>

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* LEFT - BEAULII */}
          <div className="bg-[#d5a37d] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">

            <div className="relative w-40 h-40">
              <Image
                src="/images/bestsellers/1.webp"
                alt="Beaulii Product"
                fill
                className="object-contain"
              />
            </div>

            <ul className="space-y-3 text-sm md:text-base font-medium text-[#3b1f0f]">
              <li className="flex items-center gap-2">
                <span className="text-green-600 text-lg">✔</span>
                Rooted in Ayurveda, Proven by Science
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 text-lg">✔</span>
                Safe For Delicate Areas
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 text-lg">✔</span>
                Rich Cream, Pocket Friendly
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 text-lg">✔</span>
                Reduces Patches, Softens Skin
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 text-lg">✔</span>
                Made with Real Mom Logic
              </li>
            </ul>

          </div>

          {/* RIGHT - OTHERS */}
          <div className="bg-[#d5a37d] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">

            <div className="relative w-40 h-40">
              <Image
                src="/images/bestsellers/2.webp"
                alt="Other Products"
                fill
                className="object-contain"
              />
            </div>

            <ul className="space-y-3 text-sm md:text-base font-medium text-[#3b1f0f]">
              <li className="flex items-center gap-2">
                <span className="text-red-600 text-lg">✘</span>
                Bleach-Based Quick Fix
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600 text-lg">✘</span>
                Harsh On Sensitive Skin
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600 text-lg">✘</span>
                Priced Higher Than Worth
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600 text-lg">✘</span>
                Same Cream For All
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-600 text-lg">✘</span>
                Made To Sell, Not Heal
              </li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}