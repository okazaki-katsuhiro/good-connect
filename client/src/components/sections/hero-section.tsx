import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/stock_images/modern_skyscrapers_b_470b5462.jpg";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="ビジネス街の高層ビル群"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-primary/65" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-8 leading-tight tracking-tight">
            「業界最安値」で受注につながる
            <br />
            商談を獲得！
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            成果につながる"攻めのスクリプト設計"と
            <br className="hidden sm:block" />
            継続改善の伴走支援
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-orange text-white px-10 py-4"
            data-testid="button-hero-contact"
          >
            無料相談はこちら
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
