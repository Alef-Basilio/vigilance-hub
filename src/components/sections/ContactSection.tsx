import { Phone, Mail, Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const ContactSection = () => {
  const contacts = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(11) 1234-5678",
      href: "tel:+551112345678",
      color: "primary"
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "contato@empresanome.com.br",
      href: "mailto:contato@empresanome.com.br",
      color: "primary"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@empresanome",
      href: "https://instagram.com/empresanome",
      isExternal: true,
      color: "primary"
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "/empresanome",
      href: "https://facebook.com/empresanome",
      isExternal: true,
      color: "primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/company/empresanome",
      href: "https://linkedin.com/company/empresanome",
      isExternal: true,
      color: "primary"
    },
  ];

  const whatsappNumber = "5511912345678";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-4">
              Contato
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4 sm:mb-6">
              Entre em <span className="text-gradient">contato</span> conosco
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para atender você e apresentar as melhores soluções em rastreamento veicular.
            </p>
          </div>
        </ScrollReveal>

        {/* WhatsApp Highlight */}
        <ScrollReveal>
          <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="relative gradient-dark rounded-3xl p-8 sm:p-10 lg:p-12 text-center overflow-hidden group">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg animate-pulse-glow">
                  <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-3">
                  Fale diretamente pelo WhatsApp
                </h3>
                <p className="text-sm sm:text-base text-primary-foreground/70 mb-6 max-w-md mx-auto">
                  Nosso canal de atendimento mais rápido. Tire suas dúvidas e solicite um orçamento.
                </p>
                
                <Button variant="whatsapp" size="lg" asChild>
                  <a 
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    (11) 91234-5678
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Other Contacts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {contacts.map((contact, index) => (
            <ScrollReveal key={contact.label} delay={index * 100}>
              <a
                href={contact.href}
                target={contact.isExternal ? "_blank" : undefined}
                rel={contact.isExternal ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                  <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-muted-foreground mb-1">
                  {contact.label}
                </span>
                <span className="text-xs sm:text-sm text-foreground text-center font-medium">
                  {contact.value}
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
