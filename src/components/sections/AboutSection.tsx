import { Target, Award, Users, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Counter from "@/components/Counter";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const AboutSection = () => {
  const stats = [
    { value: 5000, suffix: "+", label: "Veículos Rastreados" },
    { value: 15, suffix: "+", label: "Anos de Experiência" },
    { value: 99, suffix: "%", label: "Satisfação dos Clientes" },
    { value: 24, suffix: "/7", label: "Suporte Disponível" },
  ];

  const features = [
    {
      icon: Target,
      title: "Missão",
      description: "Oferecer soluções tecnológicas de rastreamento que garantam segurança, controle e tranquilidade para nossos clientes."
    },
    {
      icon: Award,
      title: "Visão",
      description: "Ser referência nacional em rastreamento veicular, reconhecida pela excelência em tecnologia e atendimento."
    },
    {
      icon: Users,
      title: "Valores",
      description: "Confiança, inovação, transparência e compromisso com a segurança do patrimônio de nossos clientes."
    },
  ];

  return (
    <section id="quem-somos" className="py-16 sm:py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-4">
              Quem Somos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Sua segurança é nossa <span className="text-gradient">prioridade</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Com mais de 15 anos de experiência no mercado de rastreamento veicular, 
              combinamos tecnologia de ponta com atendimento humanizado.
            </p>
          </div>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center mb-16 sm:mb-20">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -inset-4 gradient-primary rounded-2xl opacity-20 blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={dashboardMockup} 
                  alt="Dashboard de rastreamento veicular" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 sm:-right-10 glass-effect rounded-xl p-4 sm:p-6 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full gradient-primary flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-display font-bold text-foreground">+98%</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Recuperação</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Features */}
          <div className="space-y-6 sm:space-y-8">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100} direction="right">
                <div className="flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl hover:bg-muted/50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="text-center p-6 sm:p-8 rounded-2xl bg-card shadow-md hover:shadow-xl transition-shadow duration-300">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="flex justify-center items-center min-h-[48px] text-xs sm:text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
