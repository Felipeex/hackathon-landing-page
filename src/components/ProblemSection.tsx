import { AlertCircle, Clock, MapPin, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ProblemSection = () => {
  return (
    <section id="problema" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              O Problema que <span className="text-destructive">Enfrentamos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O Brasil tem 40 milhões de trabalhadores informais. Nosso foco: os 18 milhões que vivem de bicos em serviços manuais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-card border-border/50">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Incerteza Diária</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Gente que acorda sem saber se vai ter renda amanhã. Que depende do boca a boca, de indicações de última hora, ou de um anúncio mal escrito num poste.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border/50">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Exclusão Digital</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Eles não estão no LinkedIn. Não estão nas grandes plataformas de empregos como Getninja ou OlxServiços. Estão no WhatsApp.
              </p>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Eles estão no WhatsApp
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              E é ali… que vamos encontrá-los. Onde eles já estão, onde se sentem confortáveis, onde não precisam aprender nada novo.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">18 milhões</div>
                <div className="text-sm text-muted-foreground">fazem bicos manuais</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">usam WhatsApp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">0%</div>
                <div className="text-sm text-muted-foreground">têm acesso a plataformas tradicionais</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;