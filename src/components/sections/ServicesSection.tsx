import { 
  MapPin, 
  Shield, 
  Gauge, 
  Bell, 
  BarChart3, 
  Smartphone,
  Wifi,
  Lock,
  CheckCircle2
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import trackingDevice from "@/assets/tracking-device.jpg";

const ServicesSection = () => {
  const mainServices = [
    {
      icon: MapPin,
      title: "Rastreamento em Tempo Real",
      description: "Acompanhe a localização exata dos seus veículos 24 horas por dia, 7 dias por semana, com precisão de metros.",
      features: ["Localização GPS precisa", "Histórico de rotas", "Alertas personalizados"]
    },
    {
      icon: Shield,
      title: "Bloqueio Remoto",
      description: "Em caso de roubo ou furto, bloqueie o veículo remotamente com apenas um clique, impedindo a movimentação.",
      features: ["Bloqueio instantâneo", "Desbloqueio seguro", "Central 24h"]
    },
    {
      icon: Gauge,
      title: "Telemetria Avançada",
      description: "Monitore velocidade, consumo de combustível, tempo de ignição e comportamento do motorista.",
      features: ["Análise de velocidade", "Consumo de combustível", "Relatórios detalhados"]
    },
    {
      icon: Bell,
      title: "Alertas Inteligentes",
      description: "Receba notificações instantâneas sobre eventos importantes como entrada/saída de áreas, excesso de velocidade.",
      features: ["Cerca eletrônica", "Alerta de movimento", "Notificações push"]
    },
    {
      icon: BarChart3,
      title: "Gestão de Frota",
      description: "Dashboard completo para gerenciar toda sua frota, com relatórios e indicadores de performance.",
      features: ["Painel centralizado", "Múltiplos veículos", "Exportação de dados"]
    },
    {
      icon: Smartphone,
      title: "App Mobile",
      description: "Tenha o controle da sua frota na palma da mão com nosso aplicativo para iOS e Android.",
      features: ["Interface intuitiva", "Acesso offline", "Multiplataforma"]
    },
  ];

  const additionalFeatures = [
    { icon: Wifi, text: "Conexão 4G/5G" },
    { icon: Lock, text: "Criptografia de dados" },
    { icon: CheckCircle2, text: "Instalação inclusa" },
  ];

  return (
    <section id="nossos-servicos" className="py-16 sm:py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-semibold mb-4">
              Nossos Serviços
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Soluções completas em <span className="text-gradient">rastreamento</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Tecnologia de ponta para monitorar, proteger e otimizar sua frota com eficiência e segurança.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {mainServices.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 100}>
              <article className="group h-full bg-card rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border/50 relative overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl gradient-primary flex items-center justify-center mb-5 sm:mb-6 shadow-lg group-hover:shadow-glow transition-shadow duration-500">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-5 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden gradient-dark p-8 sm:p-12 lg:p-16">
            <div className="absolute inset-0 opacity-30">
              <img 
                src={trackingDevice}
                alt="Dispositivo de rastreamento"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 gradient-dark opacity-80" />
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
                  Tecnologia que você pode confiar
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-primary-foreground/80 mb-6">
                  Nossos equipamentos utilizam a mais avançada tecnologia disponível no mercado, 
                  garantindo precisão e confiabilidade 24/7.
                </p>
                <div className="flex flex-wrap gap-4">
                  {additionalFeatures.map((feature) => (
                    <div 
                      key={feature.text}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm"
                    >
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      <span className="text-xs sm:text-sm font-medium text-primary-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <a 
                  href="#contato"
                  className="inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold rounded-xl gradient-primary text-primary-foreground shadow-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  Solicite uma demonstração
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;
