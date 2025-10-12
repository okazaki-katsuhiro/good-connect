import { FileText, Edit, Phone, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "リスト作成",
    description: "ターゲット企業の詳細なリスト作成を代行。業種・地域など自由に指定可能です。",
  },
  {
    icon: Edit,
    title: "スクリプト設計",
    description: "成果につながる攻めのトークスクリプトを設計。継続的な改善も実施します。",
  },
  {
    icon: Phone,
    title: "架電実施",
    description: "専任チームによる質の高いテレアポ実施。丁寧かつ効果的なアプローチを実現。",
  },
  {
    icon: BarChart3,
    title: "成果報告・改善",
    description: "詳細なレポート提供とデータ分析に基づく継続的な改善提案を行います。",
  },
];

export function ServiceSection() {
  return (
    <section id="service" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            テレアポ代行サービスとは
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            グッドコネクトは、単なるアポイント獲得代行ではなく、
            <br className="hidden sm:block" />
            クライアント企業の営業活動を"伴走型"で支援するサービスです。
            <br />
            初期費用5万円（税抜）で、リスト作成・スクリプト設計・架電・商談調整まで一貫対応。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-card-border"
              data-testid={`card-service-${index}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange/10 flex items-center justify-center mb-4 md:mb-6">
                  <service.icon className="w-8 h-8 md:w-10 md:h-10 text-orange" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
