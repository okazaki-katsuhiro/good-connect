import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

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

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    if (location === "/") {
      scrollToSection("contact");
    } else {
      setLocation("/");
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const isHomePage = location === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-xl md:text-2xl font-bold text-primary cursor-pointer">
                GOOD CONNECT
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {isHomePage ? (
              <>
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
              </>
            ) : (
              <Link href="/" data-testid="nav-home">
                <span className="text-foreground hover:text-orange transition-colors font-medium cursor-pointer">
                  ホーム
                </span>
              </Link>
            )}
            <Link href="/staff" data-testid="nav-staff">
              <span className="text-foreground hover:text-orange transition-colors font-medium cursor-pointer">
                スタッフ紹介
              </span>
            </Link>
            <Link href="/testimonials" data-testid="nav-testimonials">
              <span className="text-foreground hover:text-orange transition-colors font-medium cursor-pointer">
                お客様の声
              </span>
            </Link>
            <Link href="/column" data-testid="nav-column">
              <span className="text-foreground hover:text-orange transition-colors font-medium cursor-pointer">
                コラム
              </span>
            </Link>
            <Link href="/company" data-testid="nav-company">
              <span className="text-foreground hover:text-orange transition-colors font-medium cursor-pointer">
                会社概要
              </span>
            </Link>
            <Button
              onClick={handleContactClick}
              className="bg-orange text-white"
              data-testid="button-header-contact"
            >
              無料相談
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
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
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {isHomePage ? (
                <>
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
                </>
              ) : (
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} data-testid="nav-mobile-home">
                  <span className="block text-foreground hover:text-orange transition-colors font-medium">
                    ホーム
                  </span>
                </Link>
              )}
              <Link href="/staff" onClick={() => setIsMobileMenuOpen(false)} data-testid="nav-mobile-staff">
                <span className="block text-foreground hover:text-orange transition-colors font-medium">
                  スタッフ紹介
                </span>
              </Link>
              <Link href="/testimonials" onClick={() => setIsMobileMenuOpen(false)} data-testid="nav-mobile-testimonials">
                <span className="block text-foreground hover:text-orange transition-colors font-medium">
                  お客様の声
                </span>
              </Link>
              <Link href="/column" onClick={() => setIsMobileMenuOpen(false)} data-testid="nav-mobile-column">
                <span className="block text-foreground hover:text-orange transition-colors font-medium">
                  コラム
                </span>
              </Link>
              <Link href="/company" onClick={() => setIsMobileMenuOpen(false)} data-testid="nav-mobile-company">
                <span className="block text-foreground hover:text-orange transition-colors font-medium">
                  会社概要
                </span>
              </Link>
              <Button
                onClick={handleContactClick}
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
