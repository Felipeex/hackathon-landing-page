import { Heart, TrendingUp, Users, Home, Banknote, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ImpactSection = () => {
  return (
    <section id="impacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="text-primary">Impacto</span> Social
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              No final… o Trampolim não é só uma startup. É uma ponte. Uma ponte entre o invisível e o visível. Entre a incerteza e a dignidade.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 mb-16 text-center">
            <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-8 flex items-center justify-center">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-foreground">
              Nossa Missão
            </h3>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Reduzir a desigualdade econômica e digital do Brasil.
            </p>
            <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-lg font-medium text-foreground">
                "Porque todo mundo merece ter onde começar. E o Trampolim… é esse começo."
              </p>
            </div>
          </div>

          {/* Impact Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 bg-card border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <Banknote className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Renda Garantida</h3>
              <p className="text-muted-foreground">Transformar a incerteza diária em oportunidades concretas de trabalho e renda.</p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="w-12 h-12 bg-accent/10 rounded-lg mb-4 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Inclusão Digital</h3>
              <p className="text-muted-foreground">Levar tecnologia para quem mais precisa, sem barreiras ou complicações.</p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">Fortalecimento Comunitário</h3>
              <p className="text-muted-foreground">Criar redes de apoio local onde vizinhos se ajudam mutuamente.</p>
            </Card>
          </div>

          {/* ROI Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">ROI Financeiro</h3>
              <div className="space-y-6">
                <Card className="p-6 bg-card border-border/50">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-muted-foreground">Investimento inicial:</span>
                    <span className="text-2xl font-bold text-foreground">R$ 1 milhão</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-muted-foreground">Potencial de movimentação:</span>
                    <span className="text-2xl font-bold text-primary">R$ 4,32 bilhões</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">ROI projetado:</span>
                      <span className="text-3xl font-bold text-accent">432.000%</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">ROI Social</h3>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Star className="w-6 h-6 text-primary" />
                    <span className="text-foreground">"Obrigado, consegui meu trampo"</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Heart className="w-6 h-6 text-accent" />
                    <span className="text-foreground">A criança que vai dormir com comida na mesa</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Home className="w-6 h-6 text-primary" />
                    <span className="text-foreground">Famílias com dignidade e esperança</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Users className="w-6 h-6 text-accent" />
                    <span className="text-foreground">Comunidades mais fortes e unidas</span>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-card/60 backdrop-blur-sm rounded-xl">
                  <p className="text-lg font-medium text-center text-foreground">
                    Isso… é o verdadeiro ROI do Trampolim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;