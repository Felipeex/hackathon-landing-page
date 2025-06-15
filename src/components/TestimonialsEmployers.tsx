import { Star, Quote } from "lucide-react";

const TestimonialsEmployers = () => {
  const testimonials = [
    {
      name: "Carlos Mendes",
      location: "São Paulo, SP",
      text: "Precisava de uma faxineira urgente e em 10 minutos já tinha 5 opções! A Maria que escolhi foi excelente, super caprichosa.",
      rating: 5,
      service: "Faxina residencial",
      avatar: "CM",
    },
    {
      name: "Patricia Lima",
      location: "Rio de Janeiro, RJ",
      text: "Meu marido tentou consertar o chuveiro e piorou tudo. Pelo Trampolin achei um eletricista que resolveu em 1 hora!",
      rating: 5,
      service: "Reparo elétrico",
      avatar: "PL",
    },
    {
      name: "Roberto Silva",
      location: "Belo Horizonte, MG",
      text: "Uso sempre para ajuda na empresa. O pessoal é trabalhador e pontual. Já salvou nossa pele várias vezes!",
      rating: 5,
      service: "Limpeza comercial",
      avatar: "RS",
    },
    {
      name: "Ana Beatriz",
      location: "Brasília, DF",
      text: "Estava desesperada precisando de babá para um compromisso. Em 30 minutos já tinha alguém qualificada na minha casa!",
      rating: 5,
      service: "Cuidadora",
      avatar: "AB",
    },
    {
      name: "Marcos Torres",
      location: "Salvador, BA",
      text: "O jardim estava um caos. O jardineiro que contratei transformou tudo, ficou lindo! E o preço foi justo.",
      rating: 5,
      service: "Jardinagem",
      avatar: "MT",
    },
    {
      name: "Fernanda Costa",
      location: "Fortaleza, CE",
      text: "Mudança sempre é um stress, mas os ajudantes foram super cuidadosos com tudo. Recomendo demais!",
      rating: 5,
      service: "Mudança",
      avatar: "FC",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quem contratou, recomenda!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milhares de pessoas já resolveram seus problemas pelo Trampolin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 relative"
            >
              <div className="absolute -top-3 left-6">
                <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="flex mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <div className="mb-3">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  {testimonial.service}
                </span>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic text-sm">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Satisfação</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15k+</div>
              <div className="text-blue-100">Serviços realizados</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">&lt; 5min</div>
              <div className="text-blue-100">Tempo de resposta</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Suporte disponível</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsEmployers;
