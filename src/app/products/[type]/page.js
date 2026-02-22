import ProductCard from "@/components/ProductCard";

const allProducts = [
  // ================= BESTSELLER =================
  ...Array.from({ length: 15 }, (_, i) => ({
    image: `/images/bestsellers/${(i % 4) + 1}.webp`,
    title: `Bestseller Product ${i + 1}`,
    subtitle: "90% saw visible results in 28 Days",
    oldPrice: "5449.00",
    newPrice: "3999.00",
    discount: 32,
    category: "bestseller",
  })),

  // ================= NEW ARRIVAL =================
  ...Array.from({ length: 15 }, (_, i) => ({
    image: `/images/bestsellers/${(i % 4) + 1}.webp`,
    title: `New Arrival Product ${i + 1}`,
    subtitle: "Newly Launched Premium Formula",
    oldPrice: "2999.00",
    newPrice: "1999.00",
    discount: 25,
    category: "new-arrival",
  })),

  // ================= COMBO =================
  ...Array.from({ length: 15 }, (_, i) => ({
    image: `/images/bestsellers/${(i % 4) + 1}.webp`,
    title: `Combo Deal Product ${i + 1}`,
    subtitle: "Best Value Combo Offer",
    oldPrice: "4999.00",
    newPrice: "2999.00",
    discount: 40,
    category: "combo",
  })),
];

export default async function ProductPage({ params }) {
  const { type } = await params;

  const filteredProducts = allProducts.filter(
    (product) => product.category === type
  );

  return (
    <section className="bg-[#f4f1ee] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* PAGE TITLE */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5a2a0f]">
            {type.replace("-", " ").toUpperCase()}
          </h2>
        </div>

        {/* FILTER + SORT BAR */}
        <div className="bg-white rounded-xl shadow-sm border border-[#e5ddd5] p-4 mb-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            {/* LEFT FILTER */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#3b1f0f]">

              <span className="font-semibold">Filter:</span>

              <button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 transition">
                Availability ▾
              </button>

              <button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 transition">
                Price ▾
              </button>
            </div>

            {/* RIGHT SORT */}
            <div className="flex items-center justify-between md:justify-end gap-6 text-sm text-[#3b1f0f]">

              <div className="text-gray-500">
                {filteredProducts.length} Products
              </div>

              <button className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 transition">
                Sort by: Featured ▾
              </button>

            </div>

          </div>

        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

      </div>
    </section>
  );
}