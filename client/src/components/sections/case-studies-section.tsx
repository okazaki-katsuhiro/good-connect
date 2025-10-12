import { Card } from "@/components/ui/card";
import { TrendingUp, Award, Users } from "lucide-react";

const caseStudies = [
  {
    icon: TrendingUp,
    company: "A社",
    industry: "IT・Web業界",
    result: "商談率120％UP",
    description: "展示会後フォローで従来の2.2倍の商談獲得に成功",
    metrics: "架電1,200件 → 商談84件獲得",
  },
  {
    icon: Award,
    company: "B社",
    industry: "コンサルティング業界",
    result: "新規契約5件獲得",
    description: "公共機関開拓で難易度の高い案件を連続受注",
    metrics: "架電800件 → 新規契約5件（契約率0.6%）",
  },
  {
    icon: Users,
    company: "C社",
    industry: "製造業",
    result: "反応率2倍",
    description: "DMフォロー架電で従来手法の2倍の反応率を実現",
    metrics: "フォロー架電500件 → 商談50件（反応率10%）",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="cases" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            導入実績・成果事例
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            様々な業界のお客様に成果を提供しています
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-card-border"
              data-testid={`card-case-${index}`}
            >
              <div className="flex flex-col h-full">
                <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mb-6">
                  <study.icon className="w-8 h-8 text-orange" />
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {study.company}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {study.industry}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-orange mb-4">
                    {study.result}
                  </div>
                </div>

                <p className="text-foreground mb-4 leading-relaxed flex-grow">
                  {study.description}
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground font-mono">
                    {study.metrics}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
