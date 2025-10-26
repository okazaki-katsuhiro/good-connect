import { Card } from "@/components/ui/card";
import growthImage from "@assets/stock_images/business_growth_upwa_568e2e14.jpg";
import handshakeImage from "@assets/stock_images/business_handshake_d_bed686d8.jpg";
import collaborationImage from "@assets/stock_images/business_people_work_974db034.jpg";

const caseStudies = [
  {
    image: growthImage,
    company: "A社",
    industry: "IT・Web業界",
    result: "商談率120％UP",
    description: "展示会後フォローで従来の2.2倍の商談獲得に成功",
    metrics: "架電1,200件 → 商談84件獲得",
  },
  {
    image: handshakeImage,
    company: "B社",
    industry: "コンサルティング業界",
    result: "新規契約5件獲得",
    description: "公共機関開拓で難易度の高い案件を連続受注",
    metrics: "架電800件 → 新規契約5件（契約率0.6%）",
  },
  {
    image: collaborationImage,
    company: "C社",
    industry: "製造業",
    result: "反応率2倍",
    description: "DMフォロー架電で従来手法の2倍の反応率を実現",
    metrics: "フォロー架電500件 → 商談50件（反応率10%）",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="cases" className="py-20 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            導入実績・成果事例
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            様々な業界のお客様に成果を提供しています
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="p-8 md:p-10 hover:shadow-md transition-all duration-200 border-card-border overflow-hidden"
              data-testid={`card-case-${index}`}
            >
              <div className="flex flex-col h-full">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 ring-2 ring-orange/20 flex-shrink-0">
                  <img
                    src={study.image}
                    alt={`${study.company}の事例`}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {study.company}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {study.industry}
                    </span>
                  </div>
                  <div className="text-2xl font-semibold text-orange mb-4">
                    {study.result}
                  </div>
                </div>

                <p className="text-sm text-foreground mb-6 leading-relaxed flex-grow">
                  {study.description}
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground font-mono">
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
