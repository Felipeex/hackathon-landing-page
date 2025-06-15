import { Home } from "lucide-react";
import { Card } from "./ui/card";

export function HowToUseSection() {
  return (
    <section id="problema" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              É fácil de usar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Com passos simples quem procura encontra um prestador de serviços
              e o profissional encontra um cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-card border-border/50">
              <div className="w-12 h-12 bg-[#D0E4F6] text-[#326085] rounded-lg mb-4 flex items-center justify-center">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Inicie uma conversa
              </h3>
              <p className="text-muted-foreground">
                Basta dar um “Oi” no WhatsApp e começar a conversar.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="w-12 h-12 bg-[#D0E4F6] text-[#326085] rounded-lg mb-4 flex items-center justify-center">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Diga o que procura
              </h3>
              <p className="text-muted-foreground">
                Você procura por um profissional ou por clientes? Conte pra
                gente.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="w-12 h-12 bg-[#D0E4F6] text-[#326085] rounded-lg mb-4 flex items-center justify-center">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Encontre o quer
              </h3>
              <p className="text-muted-foreground">
                Clientes recebem indicação de prestadores de serviço e
                profissionais encontram clientes.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
