import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingDetails = [
  {
    label: "初期費用",
    price: "50,000",
    unit: "円（税抜）",
    description: "リスト作成・スクリプト設計含む",
  },
  {
    label: "架電単価",
    price: "100",
    unit: "円／件",
    description: "1件あたりの架電コスト",
  },
  {
    label: "成果報酬",
    price: "3,000",
    unit: "円／商談",
    description: "商談獲得時のみ発生",
  },
];

const options = [
  { label: "リスト作成", price: "30円／件" },
  { label: "DM送付", price: "50円／件" },
  { label: "展示会フォロー", price: "別途お見積もり" },
  { label: "入札案件対応", price: "別途お見積もり" },
];

export function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            料金プラン
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            明瞭でわかりやすい料金体系
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingDetails.map((item, index) => (
              <Card
                key={index}
                className="p-8 md:p-10 text-center border-card-border hover:shadow-md transition-shadow duration-200"
                data-testid={`card-pricing-${index}`}
              >
                <h3 className="text-base font-medium text-muted-foreground mb-6">
                  {item.label}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-semibold text-orange font-mono">
                    {item.price}
                  </span>
                  <span className="text-base text-muted-foreground ml-2">
                    {item.unit}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Options */}
          <Card className="p-8 md:p-10 border-card-border">
            <h3 className="text-xl font-semibold text-foreground mb-8">
              オプションサービス
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  data-testid={`option-${index}`}
                >
                  <div className="w-5 h-5 rounded-full bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-orange" strokeWidth={2} />
                  </div>
                  <div className="flex items-center justify-between flex-1">
                    <span className="text-foreground text-sm font-medium">
                      {option.label}
                    </span>
                    <span className="text-muted-foreground font-mono text-sm">
                      {option.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8 border-t border-border">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-orange text-white px-10 py-4"
                data-testid="button-pricing-contact"
              >
                まずはお見積もり相談
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
