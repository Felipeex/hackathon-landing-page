import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { Services } from "@/components/Services";

export function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <Services />
      <Footer />
    </div>
  );
}
