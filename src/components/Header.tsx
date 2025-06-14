import { MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Trampolim</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('problema')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              O Problema
            </button>
            <button 
              onClick={() => scrollToSection('solucao')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Nossa Solução
            </button>
            <button 
              onClick={() => scrollToSection('numeros')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Mercado
            </button>
            <button 
              onClick={() => scrollToSection('impacto')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Impacto
            </button>
            <Button onClick={() => scrollToSection('contato')} className="bg-primary hover:bg-primary/90">
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('problema')} 
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                O Problema
              </button>
              <button 
                onClick={() => scrollToSection('solucao')} 
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Nossa Solução
              </button>
              <button 
                onClick={() => scrollToSection('numeros')} 
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Mercado
              </button>
              <button 
                onClick={() => scrollToSection('impacto')} 
                className="text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Impacto
              </button>
              <Button onClick={() => scrollToSection('contato')} className="bg-primary hover:bg-primary/90 w-fit">
                Fale Conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;