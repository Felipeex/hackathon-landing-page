import {
  Home,
  Paintbrush,
  Wrench,
  Truck,
  Baby,
  Utensils,
  Scissors,
  Zap,
  MessageSquare,
} from "lucide-react";
import { Button } from "./ui/button";

const MockServices = [
  {
    icon: Home,
    title: "Limpeza e Faxina",
    description:
      "Faxineiras experientes para limpeza residencial, comercial e pós-obra",
    popular: true,
  },
  {
    icon: Paintbrush,
    title: "Pintura",
    description:
      "Pintores qualificados para reformas, retoques e pinturas completas",
    popular: false,
  },
  {
    icon: Wrench,
    title: "Reparos Gerais",
    description:
      "Eletricistas, encanadores e técnicos para manutenção doméstica",
    popular: true,
  },
  {
    icon: Truck,
    title: "Mudanças e Fretes",
    description: "Ajudantes para mudanças, carretos e transporte de móveis",
    popular: false,
  },
  {
    icon: Baby,
    title: "Cuidadores",
    description: "Babás, cuidadores de idosos e acompanhantes especializados",
    popular: true,
  },
  {
    icon: Utensils,
    title: "Cozinha",
    description: "Cozinheiras, copeiras e ajudantes para eventos e residências",
    popular: false,
  },
  {
    icon: Scissors,
    title: "Jardinagem",
    description: "Jardineiros para poda, plantio e manutenção de jardins",
    popular: false,
  },
  {
    icon: Zap,
    title: "Serviços Rápidos",
    description: "Montagem de móveis, organização e outros serviços expressos",
    popular: false,
  },
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Que tipo de ajuda você precisa?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Temos profissionais qualificados para praticamente qualquer serviço
            que você precise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MockServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 relative group border-2 border-transparent"
            >
              {service.popular && (
                <div className="absolute -top-3 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Mais procurado
                </div>
              )}

              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                  <service.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mt-10 max-w-[280px] mx-auto"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Encontrar ajuda agora
        </Button>

        <div className="mt-10 text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Não encontrou o que precisa?
          </h3>
          <p className="text-muted-foreground mb-6">
            Nosso bot pode ajudar você a encontrar qualquer tipo de serviço. É
            só perguntar!
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              Organização
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              Pet sitting
            </span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Eventos</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Entrega</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">
              E muito mais...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
