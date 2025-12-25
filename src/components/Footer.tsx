import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const institutionalLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#quem-somos", label: "Quem somos" },
    { href: "#nossos-servicos", label: "Nossos serviços" },
    { href: "#contato", label: "Contato" },
  ];

  const socialLinks = [
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="gradient-dark text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10 xl:gap-12">
          {/* Column 1 - Logo and Description */}
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-7 sm:h-7"
                >
                  <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="4" fill="none" />
                  <circle cx="50" cy="50" r="6" fill="white" />
                  <path d="M50 30 L50 15" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <path d="M50 70 L50 85" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <path d="M30 50 L15 50" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <path d="M70 50 L85 50" stroke="white" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-xl sm:text-2xl font-display font-bold">EmpresaNome</span>
            </div>
            <p className="text-sm sm:text-base text-primary-foreground/70 leading-relaxed max-w-xs">
              Soluções inteligentes em rastreamento veicular e telemetria. Tecnologia avançada para a segurança e gestão eficiente da sua frota.
            </p>
          </div>

          {/* Column 2 - Contacts */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-lg sm:text-xl font-display font-semibold">Contatos</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-3 text-sm sm:text-base text-primary-foreground/70 hover:text-primary transition-colors duration-300">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span>(11) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base text-primary-foreground/70 hover:text-secondary transition-colors duration-300">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>(11) 91234-5678</span>
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base text-primary-foreground/70 hover:text-primary transition-colors duration-300">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span>contato@empresanome.com.br</span>
              </li>
            </ul>
          </div>

          {/* Column 3 - Institutional */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-lg sm:text-xl font-display font-semibold">Institucional</h3>
            <ul className="space-y-3 sm:space-y-4">
              {institutionalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-primary-foreground/70 hover:text-primary transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Location & Hours */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-lg sm:text-xl font-display font-semibold">Onde nos encontrar</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3 text-sm sm:text-base text-primary-foreground/70">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>Seg - Sex: 08h às 18h</p>
                  <p>Sáb: 08h às 12h</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm sm:text-base text-primary-foreground/70">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Rua Exemplo, 123 - Centro, São Paulo - SP, 01000-000</span>
              </li>
            </ul>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs sm:text-sm text-primary-foreground/50">
            © {currentYear} EmpresaNome. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
