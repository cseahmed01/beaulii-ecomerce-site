"use client";

import Image from "next/image";

export default function TriedAndTested() {
  const badges = [
    { title: "Dermatologically Tested", image: "/images/tried&tested/lab-tested.webp" },
    { title: "Stability Tested", image: "/images/tried&tested/stability.webp" },
    { title: "FDA Approved", image: "/images/tried&tested/fda-certified.webp" },
    { title: "GMP Certified", image: "/images/tried&tested/gmd-certified.webp" },
  ];

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center text-[#3b1f0f] mb-10">
        Tried and Tested
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {badges.map((item, index) => (
          <div
            key={index}
            className="bg-[#efe6dc] border-2 border-[#5a2a0f] rounded-xl p-6 flex justify-between items-center hover:shadow-lg transition"
          >
            {/* LEFT CONTENT */}
            <div>
              <h3 className="font-semibold text-[#3b1f0f] mb-4">
                {item.title}
              </h3>

              <button className="bg-[#5a2a0f] text-white text-xs px-4 py-2 rounded-md hover:bg-[#3b1f0f] transition">
                Learn More
              </button>
            </div>

            {/* RIGHT IMAGE (IMPROVED) */}
            <div className="relative w-24 h-24 bg-white rounded-full shadow-md ring-2 ring-[#5a2a0f]/30 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}