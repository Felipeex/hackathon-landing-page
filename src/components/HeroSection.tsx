import { Button } from "@/components/ui/button";
import { Clock, MessageSquare, Shield, Users } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-purple-50 flex items-center py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Precisa de <span className="text-green-600">ajuda</span> em
                casa?
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Encontre trabalhadores qualificados na sua região em segundos.
                Faxina, pintura, jardinagem e muito mais - tudo pelo WhatsApp!
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="text-center flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-2 mx-auto lg:mx-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-foreground">2.000+</div>
                <div className="text-sm text-muted-foreground">
                  Trabalhadores ativos
                </div>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-2 mx-auto lg:mx-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-foreground">
                  &lt; 5min
                </div>
                <div className="text-sm text-muted-foreground">
                  Tempo de resposta
                </div>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-2 mx-auto lg:mx-0">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>

            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">
                  Sem cadastro complicado - só pelo WhatsApp
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-muted-foreground">
                  Trabalhadores avaliados
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Encontrar ajuda agora
              </Button>
              <p className="text-sm text-muted-foreground">
                Gratuito para postar • Pagamento apenas após conclusão
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
