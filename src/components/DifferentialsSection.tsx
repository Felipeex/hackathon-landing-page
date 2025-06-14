import { Smartphone, Heart, Users, Zap, Shield, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';

const DifferentialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Diferenciais do <span className="text-primary">Trampolim</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Somos a primeira solução pensada de verdade para a base da pirâmide. Humano, comunitário, inclusivo.
            </p>
          </div>

          {/* Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Outras Plataformas</h3>
              <div className="space-y-4">
                <Card className="p-6 bg-destructive/5 border-destructive/20">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-destructive" />
                    <span className="text-muted-foreground">Exigem aplicativo próprio</span>
                  </div>
                </Card>
                <Card className="p-6 bg-destructive/5 border-destructive/20">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-destructive" />
                    <span className="text-muted-foreground">Precisam de internet de qualidade</span>
                  </div>
                </Card>
                <Card className="p-6 bg-destructive/5 border-destructive/20">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-destructive" />
                    <span className="text-muted-foreground">Cadastro extenso e complicado</span>
                  </div>
                </Card>
                <Card className="p-6 bg-destructive/5 border-destructive/20">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-destructive" />
                    <span className="text-muted-foreground">Frias e distantes</span>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Trampolim</h3>
              <div className="space-y-4">
                <Card className="p-6 bg-primary/10 border-primary/20">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">Só precisa de um "Bom dia" no WhatsApp</span>
                  </div>
                </Card>
                <Card className="p-6 bg-primary/10 border-primary/20">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">Funciona até com internet lenta</span>
                  </div>
                </Card>
                <Card className="p-6 bg-primary/10 border-primary/20">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">Três perguntas simples e pronto</span>
                  </div>
                </Card>
                <Card className="p-6 bg-primary/10 border-primary/20">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-primary" />
                    <span className="text-foreground font-medium">Humano, comunitário, inclusivo</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Trust System */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Confiança de Vizinho para Vizinho
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A confiança aqui é construída… de vizinho pra vizinho. Nosso algoritmo é simples: quem entrega bem… ganha reputação. Quem respeita… cresce.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Comunidade Local</h4>
                <p className="text-sm text-muted-foreground">Reputação construída na sua região, com pessoas que você pode encontrar na rua</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Relacionamento Real</h4>
                <p className="text-sm text-muted-foreground">Não é só uma plataforma, é uma rede de pessoas que se ajudam</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Segurança Comunitária</h4>
                <p className="text-sm text-muted-foreground">Sistema de avaliação mútua que protege todos os envolvidos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;