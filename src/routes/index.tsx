import { createFileRoute } from "@tanstack/react-router";
import SiteShell from "@/components/site/SiteShell";
import Hero from "@/components/site/Hero";
import FeaturedCategories from "@/components/site/FeaturedCategories";
import BestSellers from "@/components/site/BestSellers";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import FlavourJourney from "@/components/site/FlavourJourney";
import FlavourWall from "@/components/site/FlavourWall";
import Celebrate from "@/components/site/Celebrate";
import FunFacts from "@/components/site/FunFacts";
import GalleryPreview from "@/components/site/GalleryPreview";
import InstagramShowcase from "@/components/site/InstagramShowcase";
import Reviews from "@/components/site/Reviews";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kulfi Lounge — Premium Kulfi, Ice Cream & Falooda in Mumbai" },
      { name: "description", content: "Hand-crafted kulfi, towering faloodas, premium ice cream and signature milkshakes. Three generations of dessert-making, served fresh in Mumbai." },
      { property: "og:title", content: "Kulfi Lounge — Premium Kulfi & Ice Cream" },
      { property: "og:description", content: "Three generations of dessert-making. Real ingredients. Unforgettable flavours." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <WhyChooseUs />
      <FlavourJourney />
      <FlavourWall />
      <Celebrate />
      <FunFacts />
      <GalleryPreview />
      <InstagramShowcase />
      <Reviews />
    </SiteShell>
  );
}
