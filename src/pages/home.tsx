import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import MarketSection from "@/components/MarketSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ImpactSection from "@/components/ImpactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <MarketSection />
      <DifferentialsSection />
      <ImpactSection />
      <CTASection />
      <Footer />
    </div>
  );
}
