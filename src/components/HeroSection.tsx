import { ArrowRight, MessageCircle, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl font-bold text-[#172C3D]">
              Tudo começa com <br /> uma conversa no <br />
              WhatsApp.
            </h1>

            <p className="text-[#2A4D69] text-xl font-normal">
              O trampolin oferece conexão entre quem precisa <br />
              trabalhar e quem precisa de ajuda.
            </p>

            <section className="flex gap-3">
              <Button className="bg-[#E6EE54] text-black shadow-md hover:bg-[#E6EE54]/80 px-6 py-[14px]">
                Entrar como profissional
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#CBD5E1] hover:bg-[#CBD5E1] px-6 py-[14px]"
              >
                Buscar profissional
              </Button>
            </section>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;
