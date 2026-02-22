"use client";

import Image from "next/image";

export default function TriedAndTested() {
  const badges = [
    { title: "Dermatologically Tested", image: "/images/badges/dermatology.png" },
    { title: "Stability Tested", image: "/images/badges/stability.png" },
    { title: "FDA Approved", image: "/images/badges/fda.png" },
    { title: "GMP Certified", image: "/images/badges/gmp.png" },
  ];

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Tried and Tested
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {badges.map((item, index) => (
          <div
            key={index}
            className="bg-[#efe6dc] border-2 border-[#5a2a0f] rounded-xl p-6 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold mb-4">{item.title}</h3>
              <button className="bg-[#5a2a0f] text-white text-xs px-4 py-2 rounded-md">
                Learn More
              </button>
            </div>

            <div className="relative w-20 h-20">
              <Image src={item.image} alt={item.title} fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}