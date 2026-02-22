
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductSection from "@/components/ProductSection";
import Reviews from "@/components/Reviews";
import Videos from "@/components/Videos";


export default function Home() {
  return (
    <>

      <Hero />
      <Categories />
      <ProductSection title="bestseller" />


      <Reviews />
      <Videos />
      <ProductSection title="new-arrival" />
      <ProductSection title="combo" />

    </>
  );
}