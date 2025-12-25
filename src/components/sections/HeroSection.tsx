import { Button } from "@/components/ui/button";
import { Shield, MapPin, Satellite } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-accent/80 via-accent/70 to-accent/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-80 sm:h-80 rounded-full bg-secondary/10 blur-3xl animate-float-delayed" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0ms', animationFillMode: 'both' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 sm:mb-8">
              <Satellite className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary-foreground">
                Tecnologia de Ponta em Rastreamento
              </span>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight mb-4 sm:mb-6">
              Rastreamento Veicular{" "}
              <span className="text-gradient">Inteligente</span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Monitoramento em tempo real, segurança avançada e telemetria completa para sua frota. 
              Proteja seu patrimônio com quem entende do assunto.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" asChild>
                <a href="#nossos-servicos">
                  Conheça nossos serviços
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#contato">
                  Fale conosco
                </a>
              </Button>
            </div>
          </div>

          {/* Feature Pills */}
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
            <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                <span className="text-xs sm:text-sm font-medium text-primary-foreground">100% Seguro</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-primary-foreground">Tempo Real</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm">
                <Satellite className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                <span className="text-xs sm:text-sm font-medium text-primary-foreground">GPS Avançado</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
