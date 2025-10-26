import { Card } from "@/components/ui/card";
import {
  DollarSign,
  Users,
  TrendingUp,
  Target,
  Building2,
  FileCheck,
  PieChart,
  Award,
} from "lucide-react";

const strengths = [
  {
    icon: DollarSign,
    number: "01",
    title: "高品質 × 低単価の両立",
    description:
      "業界最安値の料金設定ながら、質の高いアポイント獲得を実現。コストパフォーマンスに優れたサービスを提供します。",
  },
  {
    icon: Users,
    number: "02",
    title: "専任チームによる伴走支援",
    description:
      "お客様ごとに専任チームを編成。営業課題を深く理解し、長期的な成果創出をサポートします。",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "データ分析を活用した継続改善",
    description:
      "架電結果を詳細に分析し、PDCAサイクルを回すことで成果を最大化。数字に基づいた改善提案を実施します。",
  },
  {
    icon: Target,
    number: "04",
    title: "成果重視のスクリプト最適化",
    description:
      "単なる台本ではなく、成約につながるトークスクリプトを設計。継続的なブラッシュアップで精度を向上させます。",
  },
  {
    icon: Building2,
    number: "05",
    title: "柔軟な対応体制",
    description:
      "BtoB・公共機関・代理店など、幅広い業種・業態に対応。お客様のニーズに合わせた柔軟なサービス提供が可能です。",
  },
  {
    icon: FileCheck,
    number: "06",
    title: "多様なアプローチに対応",
    description:
      "DM送付・展示会フォロー・入札案件など、テレアポ以外のアプローチにも対応。総合的な営業支援を実現します。",
  },
  {
    icon: PieChart,
    number: "07",
    title: "可視化レポート",
    description:
      "分析ツール連携による詳細なレポート提供。架電状況・成果・改善点を可視化し、次のアクションにつなげます。",
  },
  {
    icon: Award,
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
              className="p-8 md:p-10 hover:shadow-md transition-all duration-200 border-card-border group"
              data-testid={`card-strength-${index}`}
            >
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-11 h-11 rounded-full bg-orange/10 flex items-center justify-center">
                    <strength.icon className="w-5 h-5 text-orange" strokeWidth={1.5} />
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
