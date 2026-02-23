import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import TriedAndTested from "@/components/product/TriedAndTested";
import WhatToExpect from "@/components/product/WhatToExpect";
import HowToUse from "@/components/product/HowToUse";
import WhyBeaulii from "@/components/product/WhyBeaulii";
import Reviews from "@/components/Reviews";
import ProductSection from "@/components/ProductSection";

/* ================= REQUIRED FOR STATIC EXPORT ================= */
export function generateStaticParams() {
  return [
    { slug: "dark-patch-reducer-cream" },
    { slug: "flawless-skin-combo" },
    { slug: "foot-care-cream" },
  ];
}

/* ================= MOCK PRODUCT DATA ================= */
const products = {
  "dark-patch-reducer-cream": {
    title: "Dark Patch Reducer Cream",
    price: "3999.00",
    oldPrice: "5449.00",
    discount: 67,
    reviews: 103,
    images: [
      "/images/bestsellers/1.webp",
      "/images/bestsellers/2.webp",
      "/images/bestsellers/3.webp",
      "/images/bestsellers/4.webp",
    ],
  },
  "flawless-skin-combo": {
    title: "Flawless Skin Combo",
    price: "2999.00",
    oldPrice: "3999.00",
    discount: 25,
    reviews: 78,
    images: [
      "/images/bestsellers/1.webp",
      "/images/bestsellers/2.webp",
    ],
  },
  "foot-care-cream": {
    title: "Foot Care Cream",
    price: "1999.00",
    oldPrice: "2999.00",
    discount: 30,
    reviews: 52,
    images: [
      "/images/bestsellers/3.webp",
      "/images/bestsellers/4.webp",
    ],
  },
};

/* ================= PAGE ================= */
export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;

  const productData = products[slug];

  // Safety fallback
  if (!productData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Product not found
      </div>
    );
  }

  return (
    <section className="bg-[#f4f1ee] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== TOP SECTION ===== */}
        <div className="grid md:grid-cols-2 gap-12">
          <ProductGallery
            images={productData.images}
            title={productData.title}
          />
          <ProductInfo product={productData} />
        </div>

        {/* ===== BELOW CONTENT ===== */}
        <TriedAndTested />
        <WhatToExpect />
        <HowToUse />
        <WhyBeaulii />
        <Reviews />
        <ProductSection title="bestseller" />

      </div>
    </section>
  );
}