import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ImpactSection } from "@/components/ImpactSection";
import { Navbar } from "@/components/Navbar";
import { ProcessSection } from "@/components/ProcessSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-b from-white via-emerald-50/25 to-slate-50">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <ImpactSection />
        <TestimonialsSection />
        <ResourcesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
