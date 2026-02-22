import ProductCard from "./ProductCard";
import Link from "next/link";
const products = [
  {
    image: "/images/bestsellers/1.webp",
    title: "Pokonut Stretch Mark Cream",
    subtitle: "90% saw visible results in 28 Days",
    oldPrice: "5449.00",
    newPrice: "3999.00",
    discount: 32,
  },
  {
    image: "/images/bestsellers/2.webp",
    title: "Flawless Skin Combo",
    subtitle: "90% saw visible results in 28 Days",
    oldPrice: "1148.00",
    newPrice: "539.00",
    discount: 53,
  },
  {
    image: "/images/bestsellers/3.webp",
    title: "Foot Care Cream",
    subtitle: "See Visible Reduction in 14 Days",
    oldPrice: "399.00",
    newPrice: "299.00",
    discount: 25,
  },
  {
    image: "/images/bestsellers/4.webp",
    title: "Dark Patch Reducer Cream",
    subtitle: "See Visible Reduction in 21 Days",
    oldPrice: "599.00",
    newPrice: "299.00",
    discount: 50,
  },
];

export default function ProductSection({ title }) {
  return (
    <section className="bg-[#f4f1ee] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#5a2a0f] mb-5">
            {title}
          </h2>

          <Link
            href={`/products/${title
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className="border border-[#5a2a0f] text-[#5a2a0f] px-8 py-2 rounded-full hover:bg-[#5a2a0f] hover:text-white transition inline-block"
          >
            Explore All
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

      </div>
    </section>
  );
}