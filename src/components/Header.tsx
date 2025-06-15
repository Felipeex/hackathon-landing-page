import { Menu, X } from "lucide-react";
import { useState } from "react";
import TrampolinLogo from "@/assets/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={TrampolinLogo} alt="Trampolin Logo" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("howItWorks")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Como usar
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Avaliações
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("howItWorks")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Como usar
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Avaliações
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
