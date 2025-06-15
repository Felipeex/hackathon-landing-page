import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksEmployers from "@/components/HowItWorksEmployers";
import { Services } from "@/components/Services";
import TestimonialsEmployers from "@/components/TestimonialsEmployers";

export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Services />
      <HowItWorksEmployers />
      <TestimonialsEmployers />
      <Footer />
    </div>
  );
}
