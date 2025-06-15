import { MessageCircle, Heart } from "lucide-react";
import TrampolinLogo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src={TrampolinLogo} alt="Trampolin Logo" />
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Uma alavanca social. Um impulso real para milhões de brasileiros
                que hoje vivem entre a incerteza e a urgência de trabalhar.
              </p>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Feito com</span>
                <Heart className="w-4 h-4 text-destructive" />
                <span>para o Brasil</span>
              </div>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Produto</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#solucao"
                    className="hover:text-foreground transition-colors"
                  >
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Para Trabalhadores
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Para Contratantes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Segurança
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#impacto"
                    className="hover:text-foreground transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#numeros"
                    className="hover:text-foreground transition-colors"
                  >
                    Investidores
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="hover:text-foreground transition-colors"
                  >
                    Contato
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Imprensa
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-muted-foreground mb-4 md:mb-0">
                © 2024 Trampolim. Todos os direitos reservados.
              </div>
              <div className="flex space-x-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacidade
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Termos
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
