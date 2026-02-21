import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import CategoryCards from "@/components/home/CategoryCards";
import ProductGrid from "@/components/home/ProductGrid";
import WhyChooseRhyl from "@/components/home/WhyChooseRhyl";
import TopRatedFavorites from "@/components/home/TopRatedFavorites";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <FeaturedCollections />
      <CategoryCards />
      <ProductGrid />
      <WhyChooseRhyl />
      <TopRatedFavorites />
      <CTABanner />
    </>
  );
}
