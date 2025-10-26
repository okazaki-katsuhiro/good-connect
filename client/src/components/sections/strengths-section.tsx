import { Card } from "@/components/ui/card";
import moneyImage from "@assets/stock_images/business_money_savin_ea8a24a2.jpg";
import teamImage from "@assets/stock_images/business_team_collab_002617dc.jpg";
import dataImage from "@assets/stock_images/business_data_analys_fadb5cde.jpg";
import targetImage from "@assets/stock_images/business_target_goal_91bac75e.jpg";
import buildingImage from "@assets/stock_images/business_office_buil_6fc17343.jpg";
import checklistImage from "@assets/stock_images/business_checklist_a_e89a25a6.jpg";
import dashboardImage from "@assets/stock_images/business_dashboard_c_ddef9b9b.jpg";
import awardImage from "@assets/stock_images/business_success_awa_3c6f3df0.jpg";

const strengths = [
  {
    image: moneyImage,
    number: "01",
    title: "高品質 × 低単価の両立",
    description:
      "業界最安値の料金設定ながら、質の高いアポイント獲得を実現。コストパフォーマンスに優れたサービスを提供します。",
  },
  {
    image: teamImage,
    number: "02",
    title: "専任チームによる伴走支援",
    description:
      "お客様ごとに専任チームを編成。営業課題を深く理解し、長期的な成果創出をサポートします。",
  },
  {
    image: dataImage,
    number: "03",
    title: "データ分析を活用した継続改善",
    description:
      "架電結果を詳細に分析し、PDCAサイクルを回すことで成果を最大化。数字に基づいた改善提案を実施します。",
  },
  {
    image: targetImage,
    number: "04",
    title: "成果重視のスクリプト最適化",
    description:
      "単なる台本ではなく、成約につながるトークスクリプトを設計。継続的なブラッシュアップで精度を向上させます。",
  },
  {
    image: buildingImage,
    number: "05",
    title: "柔軟な対応体制",
    description:
      "BtoB・公共機関・代理店など、幅広い業種・業態に対応。お客様のニーズに合わせた柔軟なサービス提供が可能です。",
  },
  {
    image: checklistImage,
    number: "06",
    title: "多様なアプローチに対応",
    description:
      "DM送付・展示会フォロー・入札案件など、テレアポ以外のアプローチにも対応。総合的な営業支援を実現します。",
  },
  {
    image: dashboardImage,
    number: "07",
    title: "可視化レポート",
    description:
      "分析ツール連携による詳細なレポート提供。架電状況・成果・改善点を可視化し、次のアクションにつなげます。",
  },
  {
    image: awardImage,
    number: "08",
    title: "豊富な実績によるノウハウ",
    description:
      "多数の企業支援実績から蓄積したノウハウを活用。業界特有の課題にも的確に対応できます。",
  },
];

export function StrengthsSection() {
  return (
    <section id="strengths" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            選ばれる8つの理由
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {strengths.map((strength, index) => (
            <Card
              key={index}
              className="p-8 md:p-10 hover:shadow-md transition-all duration-200 border-card-border group overflow-hidden"
              data-testid={`card-strength-${index}`}
            >
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-orange/20 flex-shrink-0">
                    <img
                      src={strength.image}
                      alt={strength.title}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="text-3xl font-semibold text-orange/15">
                    {strength.number}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-4">
                  {strength.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
