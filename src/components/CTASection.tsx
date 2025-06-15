import { ArrowRight, MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CTASection = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Vem com a <span className="text-primary">Gente</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O Trampolim é mais que um projeto. É um movimento. É um salto na
              direção de um Brasil mais justo, mais humano.
            </p>
          </div>

          {/* Main CTA */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/10 rounded-2xl p-8 md:p-12 mb-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Acredita no poder de transformar vidas com tecnologia simples, mas
              com propósito gigante?
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
              >
                Quero Investir
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                Quero Ser Parceiro
              </Button>
            </div>

            <p className="text-muted-foreground">
              Juntos, podemos ser o começo de uma virada.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center bg-card border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                WhatsApp
              </h3>
              <p className="text-muted-foreground mb-4">
                Fale conosco pelo nosso canal principal
              </p>
              <Button variant="outline" className="w-full">
                Conversar
              </Button>
            </Card>

            <Card className="p-6 text-center bg-card border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                E-mail
              </h3>
              <p className="text-muted-foreground mb-4">
                Para propostas e parcerias
              </p>
              <Button variant="outline" className="w-full">
                Enviar E-mail
              </Button>
            </Card>

            <Card className="p-6 text-center bg-card border-border/50 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Telefone
              </h3>
              <p className="text-muted-foreground mb-4">
                Para uma conversa direta
              </p>
              <Button variant="outline" className="w-full">
                Ligar
              </Button>
            </Card>
          </div>

          {/* Mission Reminder */}
          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto">
              <blockquote className="text-lg md:text-xl font-medium text-foreground mb-4 italic">
                "Todo mundo merece ter onde começar. E o Trampolim… é esse
                começo."
              </blockquote>
              <p className="text-muted-foreground">
                Se você acredita nisso, vem transformar o Brasil conosco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
