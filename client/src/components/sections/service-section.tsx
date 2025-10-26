import { Card } from "@/components/ui/card";
import listImage from "@assets/stock_images/business_documents_c_40b17afb.jpg";
import scriptImage from "@assets/stock_images/business_writing_pla_2b9ba924.jpg";
import phoneImage from "@assets/stock_images/business_phone_call__62a2c3f0.jpg";
import analyticsImage from "@assets/stock_images/business_analytics_c_96f9a1f4.jpg";

const services = [
  {
    image: listImage,
    title: "リスト作成",
    description: "ターゲット企業の詳細なリスト作成を代行。業種・地域など自由に指定可能です。",
  },
  {
    image: scriptImage,
    title: "スクリプト設計",
    description: "成果につながる攻めのトークスクリプトを設計。継続的な改善も実施します。",
  },
  {
    image: phoneImage,
    title: "架電実施",
    description: "専任チームによる質の高いテレアポ実施。丁寧かつ効果的なアプローチを実現。",
  },
  {
    image: analyticsImage,
    title: "成果報告・改善",
    description: "詳細なレポート提供とデータ分析に基づく継続的な改善提案を行います。",
  },
];

export function ServiceSection() {
  return (
    <section id="service" className="py-20 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-8 tracking-tight">
            テレアポ代行サービスとは
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            グッドコネクトは、単なるアポイント獲得代行ではなく、
            <br className="hidden sm:block" />
            クライアント企業の営業活動を"伴走型"で支援するサービスです。
            <br />
            初期費用5万円（税抜）で、リスト作成・スクリプト設計・架電・商談調整まで一貫対応。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 md:p-10 hover:shadow-md transition-all duration-200 border-card-border overflow-hidden"
              data-testid={`card-service-${index}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-6 ring-2 ring-orange/20 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
