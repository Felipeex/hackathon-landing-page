import { useState, useEffect, useRef } from "react";
import { Bot } from "lucide-react";
import { Trampolin } from "./svg/Trampolin";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: string;
}

export function PhoneMockup() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [inputValue, setInputValue] = useState(""); // Novo: controla a "digitação"
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const conversationFlow: Omit<Message, "id" | "timestamp">[] = [
    { text: "Oi! Preciso de uma faxineira", isBot: false },
    {
      text: "Olá! Perfeito! 🏠 Vou te ajudar a encontrar uma faxineira.\n\n📍 Qual sua localização e quando você precisa?",
      isBot: true,
    },
    { text: "São Paulo, Vila Olimpia. Para amanhã de manhã", isBot: false },
    {
      text: "Ótimo! 👍 Encontrei 3 faxineiras disponíveis para amanhã na Vila Olimpia:\n\n👩 Maria - ⭐ 4.9\n💰 R$ 80,00 (4h)\n✅ Disponível 8h às 12h\n\n👩 Ana - ⭐ 4.8\n💰 R$ 75,00 (4h)\n✅ Disponível 9h às 13h\n\n👩 Carla - ⭐ 5.0\n💰 R$ 90,00 (4h)\n✅ Disponível 7h às 11h\n\nQual você gostaria de contratar?",
      isBot: true,
    },
    { text: "A Maria parece boa. Como funciona?", isBot: false },
    {
      text: "Perfeita escolha! ✨ A Maria tem ótimas avaliações.\n\n📋 Próximos passos:\n1. Confirmo com a Maria\n2. Ela entra em contato contigo\n3. Vocês acertam os detalhes\n4. Pagamento só após o serviço\n\n💬 Posso confirmar para você?",
      isBot: true,
    },
    { text: "Sim, pode confirmar!", isBot: false },
    {
      text: "🎉 Confirmado!\n\n✅ Maria será sua faxineira amanhã\n📱 Ela vai te ligar em 5 minutos\n💰 R$ 80,00 (pagamento após serviço)\n\n📞 Qualquer dúvida, é só chamar!\n\nObrigado por usar o Trampolin! 😊",
      isBot: true,
    },
  ];

  useEffect(() => {
    if (scrollContainerRef.current && endOfMessagesRef.current) {
      scrollContainerRef.current.scrollTop =
        scrollContainerRef.current.scrollHeight;
    }
  }, [messages, inputValue]);

  useEffect(() => {
    if (currentMessageIndex < conversationFlow.length) {
      const current = conversationFlow[currentMessageIndex];

      if (current.isBot) {
        // Mensagem do BOT: delay padrão
        const timer = setTimeout(
          () => {
            const newMessage: Message = {
              id: currentMessageIndex,
              ...current,
              timestamp: new Date().toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              }),
            };
            setMessages((prev) => [...prev, newMessage]);
            setCurrentMessageIndex((prev) => prev + 1);
          },
          currentMessageIndex === 0 ? 1000 : 2800
        );

        return () => clearTimeout(timer);
      } else {
        // Mensagem do USER: digita no input primeiro
        let i = -1;
        setInputValue(""); // limpa

        const type = () => {
          if (i < current.text.length) {
            setInputValue((prev) => prev + current.text.charAt(i));
            i++;
            typingTimeoutRef.current = setTimeout(type, 50);
          } else {
            // Terminou de digitar: adiciona à lista
            const newMessage: Message = {
              id: currentMessageIndex,
              ...current,
              timestamp: new Date().toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              }),
            };
            setMessages((prev) => [...prev, newMessage]);
            setInputValue(""); // limpa depois
            setCurrentMessageIndex((prev) => prev + 1);
          }
        };

        type();

        return () => {
          if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
        };
      }
    } else {
      // Resetar tudo depois de terminar
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setCurrentMessageIndex(0);
      }, 6000);

      return () => clearTimeout(resetTimer);
    }
  }, [currentMessageIndex]);

  return (
    <div className="relative mx-auto">
      <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl transition-transform animate-rotate">
        <div
          id="phone-scroll"
          className="bg-white rounded-[2.5rem] overflow-hidden w-80 h-[640px] relative"
        >
          <div className="bg-green-600 px-4 py-3 flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Trampolin fill="white" className="size-6" />
            </div>
            <div className="flex-1">
              <div className="text-white font-semibold">Trampolin</div>
              <div className="text-green-200 text-xs flex items-center">
                <div className="w-2 h-2 bg-green-300 rounded-full mr-1"></div>
                online
              </div>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex-1 p-4 space-y-4 bg-gray-50 h-[500px] overflow-y-auto"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isBot ? "justify-start" : "justify-end"
                } animate-fade-in`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl relative ${
                    message.isBot
                      ? "bg-white text-gray-800 shadow-sm"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {message.isBot && (
                    <div className="flex items-center mb-1">
                      <Trampolin fill="#16a34a" className="w-4 h-4 mr-1" />
                      <span className="text-xs text-green-600 font-medium">
                        Trampolin
                      </span>
                    </div>
                  )}
                  <div className="text-sm whitespace-pre-line">
                    {message.text}
                  </div>
                  <div
                    className={`text-xs mt-1 ${
                      message.isBot ? "text-gray-500" : "text-green-100"
                    }`}
                  >
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}

            <div ref={endOfMessagesRef} />

            {currentMessageIndex < conversationFlow.length &&
              conversationFlow[currentMessageIndex].isBot && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-white px-4 py-2 rounded-2xl shadow-sm">
                    <div className="flex items-center space-x-1">
                      <Bot className="w-4 h-4 text-green-600" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>

          <div className="border-t bg-white p-4">
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                <div className="text-gray-500 text-sm">
                  {inputValue || "Digite uma mensagem..."}
                </div>
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-bounce">
        Verificado!
      </div>
      <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-pulse">
        Rápido
      </div>
    </div>
  );
}
