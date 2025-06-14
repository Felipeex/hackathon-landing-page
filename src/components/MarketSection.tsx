import { TrendingUp, Target, MapPin, DollarSign } from 'lucide-react';
import { Card } from '@/components/ui/card';

const MarketSection = () => {
  return (
    <section id="numeros" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Oportunidade de <span className="text-primary">Mercado</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Agora… vamos falar de números. O mercado é gigante e está esperando por uma solução real.
            </p>
          </div>

          {/* Main Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">40 milhões</h3>
                  <p className="text-muted-foreground">Mercado total de trabalhadores informais</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nosso público-alvo inicial:</span>
                  <span className="font-semibold text-foreground">18 milhões</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fazem bicos em serviços manuais</span>
                  <span className="text-primary font-semibold">45% do total</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">R$ 4,32 bilhões</h3>
                  <p className="text-muted-foreground">Potencial de mercado anual</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Só em serviços locais:</span>
                  <span className="font-semibold text-foreground">R$ 4,32 bi/ano</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ROI projetado:</span>
                  <span className="text-accent font-semibold">432.000%</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Strategy & Goals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Nossa Meta</h3>
              <div className="space-y-6">
                <Card className="p-6 bg-card border-border/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">900 mil usuários</h4>
                      <p className="text-sm text-muted-foreground">nos próximos dois anos</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-card border-border/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Regiões metropolitanas</h4>
                      <p className="text-sm text-muted-foreground">começando pelas grandes cidades</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Nosso Canal</h3>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">100 milhões</div>
                  <p className="text-muted-foreground">usuários do WhatsApp no Brasil</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Penetração no público-alvo:</span>
                    <span className="font-bold text-foreground">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Custo de aquisição:</span>
                    <span className="font-bold text-primary">R$ 0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Barreira de entrada:</span>
                    <span className="font-bold text-primary">Nenhuma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;