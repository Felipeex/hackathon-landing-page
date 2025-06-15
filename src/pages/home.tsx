import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { HowToUseSection } from "@/components/HowToUseSection";
import { HowItWork } from "@/components/HowItWork";

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <HowItWork />
      <HowToUseSection />
      <Footer />
    </div>
  );
}
