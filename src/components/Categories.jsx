"use client";

import Image from "next/image";

const categories = [
  { name: "Hair Loss", image: "/images/categories/1.webp" },
  { name: "Glowing Skin", image: "/images/categories/2.webp" },
  { name: "Radiant Skin", image: "/images/categories/3.webp" },
  { name: "Stretch Marks", image: "/images/categories/4.webp" },
  { name: "Acne Clear Skin", image: "/images/categories/5.webp" },
];

export default function Categories() {
  return (
    <section className="bg-[#f4f1ee] py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* GRID Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">

          {categories.map((cat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
            >
              {/* Circular Image */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden transition duration-300 group-hover:scale-105 shadow-md">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Category Name */}
              <h3 className="mt-4 text-sm sm:text-base md:text-lg font-medium text-gray-800">
                {cat.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}