import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              GOOD CONNECT
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("service")}
              className="text-foreground hover:text-orange transition-colors font-medium"
              data-testid="nav-service"
            >
              サービス紹介
            </button>
            <button
              onClick={() => scrollToSection("strengths")}
              className="text-foreground hover:text-orange transition-colors font-medium"
              data-testid="nav-strengths"
            >
              選ばれる理由
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground hover:text-orange transition-colors font-medium"
              data-testid="nav-pricing"
            >
              料金プラン
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-orange text-white"
              data-testid="button-header-contact"
            >
              無料相談
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("service")}
                className="text-left text-foreground hover:text-orange transition-colors font-medium"
                data-testid="nav-mobile-service"
              >
                サービス紹介
              </button>
              <button
                onClick={() => scrollToSection("strengths")}
                className="text-left text-foreground hover:text-orange transition-colors font-medium"
                data-testid="nav-mobile-strengths"
              >
                選ばれる理由
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left text-foreground hover:text-orange transition-colors font-medium"
                data-testid="nav-mobile-pricing"
              >
                料金プラン
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-orange text-white w-full"
                data-testid="button-mobile-contact"
              >
                無料相談
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
