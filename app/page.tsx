import Hero from "../sections/home/Hero";
import ServicesPreview from "../sections/home/ServicesPreview";
import CapabilitiesPreview from "../sections/home/CapabilitiesPreview";
import WhyChooseUs from "../sections/home/WhyChooseUs";
import HsePreview from "../sections/home/HsePreview";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <ServicesPreview />
      <CapabilitiesPreview />
      <WhyChooseUs />
      <HsePreview />
    </main>
  );
}