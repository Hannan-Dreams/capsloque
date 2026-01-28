import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import ProductPreview from "@/components/ProductPreview";
import Roadmap from "@/components/Roadmap";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProductPreview />
        <ServiceGrid />
        {/* <Roadmap /> */}
        <About />
        <Contact />
      </main>
    </>
  );
}
