import { MessageSquare, Search, Handshake, Trophy, Clock } from "lucide-react";

const HowItWorksEmployers = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "1. Conte o que precisa",
      description:
        "Mande uma mensagem no WhatsApp dizendo que tipo de ajuda você precisa e quando.",
      color: "blue",
    },
    {
      icon: Search,
      title: "2. Receba opções",
      description:
        "Nosso bot vai indicar trabalhadores disponíveis na sua região,",
      color: "green",
    },
    {
      icon: Handshake,
      title: "3. Escolha e conecte",
      description:
        "Selecione quem preferir e negocie diretamente com o profissional.",
      color: "purple",
    },
    {
      icon: Trophy,
      title: "4. Avalie os profissionais",
      description:
        "Avalie como foi o atendimento do profissional e recomende, se quiser",
      color: "orange",
    },
  ];

  const colorMap = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
  };

  return (
    <section className="py-20 bg-white" id="howItWorks">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            É fácil de usar!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Em poucos minutos você já tem alguém qualificado para te ajudar. Sem
            stress, sem complicação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  colorMap[step.color as keyof typeof colorMap]
                } group-hover:shadow-lg transition-all duration-300`}
              >
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Por que escolher o Trampolin?
            </h3>
            <p className="text-muted-foreground">
              Um jeito fácil e rápido de contratar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-1">
                Variedade de serviços
              </h4>
              <p className="text-sm text-muted-foreground">
                Diversos profissionais em um só lugar.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">
                Mensagens em tempo
              </h4>
              <p className="text-sm text-muted-foreground">
                Receba rapidamente indicações e, assim que escolher, não será
                mais incomodado.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Handshake className="text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">
                Flexibilidade de negociação
              </h4>
              <p className="text-sm text-muted-foreground">
                Você negocia diretamente como será o serviço com o profissional
                responsável.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksEmployers;
