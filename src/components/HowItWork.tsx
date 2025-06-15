import { Smartphone, Star, Users } from "lucide-react";
import { Card } from "./ui/card";

export function HowItWork() {
  return (
    <section id="problema" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Como o trampolin funciona?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-card border-border/50">
              <div className="w-12 h-12 bg-[#D0E4F6] text-[#326085] rounded-lg mb-4 flex items-center justify-center">
                <Smartphone />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Sem Aplicativo
              </h3>
              <p className="text-muted-foreground">
                Você não precisa baixar aplicativo ou preencher um cadastro
                complicado. Sem consumo extra de dados.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="w-12 h-12 bg-[#D0E4F6] text-[#326085] rounded-lg mb-4 flex items-center justify-center">
                <Star />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Sistema de Reputação
              </h3>
              <p className="text-muted-foreground">
                Com um sistema de reputação comunitária, onde a confiança se
                constrói entre vizinhos.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="w-12 h-12 bg-[#D0E4F6] text-[#326085] rounded-lg mb-4 flex items-center justify-center">
                <Users />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Comunidade Real
              </h3>
              <p className="text-muted-foreground">
                Entre gente real, com histórias reais, construindo confiança de
                verdade.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
