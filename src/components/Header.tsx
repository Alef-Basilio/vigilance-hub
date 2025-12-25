import { useState, useEffect } from "react";
import { Menu, X, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
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

  const handleLogoClick = () => {
    window.location.reload();
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-effect shadow-md py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1"
            aria-label="Recarregar página"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-primary rounded-xl flex items-center justify-center shadow-lg animate-pulse-glow">
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
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm xl:text-base font-medium transition-all duration-300 hover:text-primary relative group ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-effect rounded-xl p-4 sm:p-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="block text-base sm:text-lg font-medium text-foreground hover:text-primary transition-colors duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-4 pt-4 border-t border-border">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
