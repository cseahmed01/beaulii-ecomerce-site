import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import TriedAndTested from "@/components/product/TriedAndTested";
import WhatToExpect from "@/components/product/WhatToExpect";
import HowToUse from "@/components/product/HowToUse";
import WhyBeaulii from "@/components/product/WhyBeaulii";
import Reviews from "@/components/Reviews";
import ProductSection from "@/components/ProductSection";

/*
  In real production:
  Replace this with DB fetch using slug
*/
const productData = {
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
};

export default async function ProductDetailsPage({ params }) {
  // ✅ Next.js 16 Fix
  const { slug } = await params;

  /*
    In production:
    const product = await getProductBySlug(slug)
  */

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