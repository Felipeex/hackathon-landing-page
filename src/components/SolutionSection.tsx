import { MessageCircle, Smartphone, Shield, Users, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SolutionSection = () => {
  return (
    <section id="solucao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              A <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Solução</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Apresentamos o Trampolim: um bot no WhatsApp que conecta quem precisa trabalhar… com quem precisa de ajuda.
            </p>
          </div>

          {/* How it works */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Como funciona?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Conversa Simples</h4>
                    <p className="text-muted-foreground">O trabalhador manda um simples "Oi" no WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Três Perguntas</h4>
                    <p className="text-muted-foreground">Responde apenas três perguntas básicas sobre sua área e localização</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Oportunidades</h4>
                    <p className="text-muted-foreground">Pronto! Já pode receber oportunidades de trabalho na sua região</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Trampolim Bot</div>
                    <div className="text-sm text-muted-foreground">Online agora</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-primary/10 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-foreground">Oi! 👋</p>
                  </div>
                  <div className="bg-primary rounded-lg p-3 max-w-xs ml-auto text-right">
                    <p className="text-sm text-primary-foreground">Olá! Sou o Trampolim. Em que posso te ajudar hoje?</p>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-foreground">Preciso de trabalho</p>
                  </div>
                  <div className="bg-primary rounded-lg p-3 max-w-xs ml-auto text-right">
                    <p className="text-sm text-primary-foreground">Perfeito! Vou te fazer 3 perguntas rápidas...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center bg-card border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Sem Aplicativo</h3>
              <p className="text-muted-foreground">Sem precisar baixar aplicativo. Sem cadastro complicado. Sem consumo extra de dados.</p>
            </Card>

            <Card className="p-6 text-center bg-card border-border/50">
              <div className="w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Sistema de Reputação</h3>
              <p className="text-muted-foreground">Com um sistema de reputação comunitária, onde a confiança se constrói entre vizinhos.</p>
            </Card>

            <Card className="p-6 text-center bg-card border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Comunidade Real</h3>
              <p className="text-muted-foreground">Entre gente real, com histórias reais, construindo confiança de verdade.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;