import Hero from "../sections/home/Hero";
import HeroSlider from "@/sections/home/HeroSlider";
import ServicesPreview from "../sections/home/ServicesPreview";
import CapabilitiesPreview from "../sections/home/CapabilitiesPreview";
import WhyChooseUs from "../sections/home/WhyChooseUs";
import HsePreview from "../sections/home/HsePreview";
import CTA from "../sections/home/CTA";

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSlider />
      <ServicesPreview />
      <CapabilitiesPreview />
      <WhyChooseUs />
      <HsePreview />
      <CTA />
    </main>
  );
}