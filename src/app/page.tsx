import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ProcessSection from "@/components/sections/ProcessSection";
// import FeaturedWork from "@/components/sections/FeaturedWork";
import AboutPreview from "@/components/sections/AboutPreview";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-white">
        <AboutPreview />
        <ServicesPreview />
        <ProcessSection />
        {/* <FeaturedWork /> */}
        <FAQ />
        <ContactCTA />
      </div>
    </>
  );
}

