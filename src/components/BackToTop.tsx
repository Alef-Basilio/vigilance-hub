import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const scrollY = window.scrollY;
      const windowWidth = window.innerWidth;
      
      // Only show for screens < 1024px and when scrolled down
      if (windowWidth < 1024 && scrollY > 300) {
        setShouldRender(true);
        setTimeout(() => setIsVisible(true), 10);
      } else {
        setIsVisible(false);
        setTimeout(() => setShouldRender(false), 300);
      }
    };

    checkVisibility();
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!shouldRender) return null;

  return (
    <Button
      onClick={scrollToTop}
      variant="hero"
      size="icon"
      className={`fixed bottom-6 right-6 z-40 rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5" />
    </Button>
  );
};

export default BackToTop;
