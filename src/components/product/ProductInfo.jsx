"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductInfo({ product }) {
  const [qty, setQty] = useState(1);

  return (
    <div>

      {/* Rating */}
      <div className="flex items-center gap-2 text-sm mb-2">
        <span className="text-yellow-500 text-lg">★★★★★</span>
        <span className="text-gray-600">
          {product.reviews} Reviews
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-[#3b1f0f] mb-4">
        {product.title}
      </h1>

      {/* Small Badges */}
      <div className="flex gap-3 mb-4 flex-wrap">
        <span className="bg-[#e9dfd6] px-3 py-1 rounded-full text-xs font-medium">
          Dermatologically Tested
        </span>
        <span className="bg-[#e9dfd6] px-3 py-1 rounded-full text-xs font-medium">
          SLS & Paraben Free
        </span>
      </div>

      {/* Price */}
      <div className="flex items-center gap-4 mb-2">
        <span className="line-through text-gray-400">
          Tk. {product.oldPrice}
        </span>
        <span className="text-2xl font-bold text-[#3b1f0f]">
          Tk. {product.price}
        </span>
        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
          {product.discount}% OFF
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        MRP (Inclusive of all Taxes)
      </p>

      {/* Variant Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[1, 2, 3].map((pack) => (
          <div
            key={pack}
            className="bg-white border rounded-lg p-3 text-center cursor-pointer hover:border-[#5a2a0f] transition shadow-sm"
          >
            <div className="relative w-full h-16 mb-2">
              <Image
                src={product.images[0]}
                alt="pack"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs font-semibold">Results Pack</p>
            <p className="text-xs text-gray-600">
              Save Tk. 704
            </p>
          </div>
        ))}
      </div>

      {/* Quantity + Add To Cart */}
      <div className="flex gap-4 mb-4 items-center">

        <div className="flex items-center border rounded-md">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="px-4 py-2"
          >
            -
          </button>
          <span className="px-6 font-semibold">{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="px-4 py-2"
          >
            +
          </button>
        </div>

        <button className="flex-1 bg-[#5a2a0f] text-white py-3 rounded-md font-semibold hover:bg-[#3b1f0f] transition">
          ADD TO CART
        </button>

      </div>

      {/* Buy Now */}
      <button className="w-full border border-[#5a2a0f] text-[#5a2a0f] py-3 rounded-md font-semibold hover:bg-[#5a2a0f] hover:text-white transition mb-6">
        BUY IT NOW
      </button>

      {/* Delivery Timeline */}
      <div className="bg-[#efe6dc] rounded-xl p-6 grid grid-cols-3 text-center text-sm">

        <div>
          <div className="text-[#5a2a0f] text-2xl mb-1">📦</div>
          <p className="font-semibold">Feb 19</p>
          <p className="text-gray-600 text-xs">Order Placed</p>
        </div>

        <div>
          <div className="text-[#5a2a0f] text-2xl mb-1">🚚</div>
          <p className="font-semibold">Feb 20</p>
          <p className="text-gray-600 text-xs">Order Shipped</p>
        </div>

        <div>
          <div className="text-[#5a2a0f] text-2xl mb-1">🏠</div>
          <p className="font-semibold">Feb 23-24</p>
          <p className="text-gray-600 text-xs">Estimated Delivery</p>
        </div>

      </div>

    </div>
  );
}