import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Heart } from "lucide-react";

const staffMembers = [
  {
    id: "kotani",
    name: "小谷 陽一",
    position: "株式会社GOLVOYA 代表取締役",
    title: "「ビジネスの可能性を切り拓く」低コスト×高品質のテレアポ代行で企業の売上拡大を支援",
    icon: User,
  },
  {
    id: "kido",
    name: "木戸 那名見",
    position: "株式会社GOLVOYA オペレーション管理責任者",
    title: "「成果につながる」テレアポ代行の秘訣とは？アポイント獲得率を高める仕組みと戦略",
    icon: Target,
  },
  {
    id: "ogawa",
    name: "小川",
    position: "GOLVOYA 架電スタッフ",
    title: "スタッフの働きやすさが成果を生み出す！テレアポ営業代行『グッドコネクト』が高アポ率を誇る理由とは？",
    icon: Heart,
  },
];

export default function Staff() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              スタッフ紹介
            </h1>
            <p className="text-lg md:text-xl text-center text-white/90 max-w-3xl mx-auto">
              お客様の成果を最大化するため、経験豊富なプロフェッショナルチームが一丸となってサポートいたします
            </p>
          </div>
        </section>

        {/* Staff Cards Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {staffMembers.map((staff, index) => (
                <Card
                  key={staff.id}
                  className="overflow-hidden hover-elevate"
                  data-testid={`card-staff-${staff.id}`}
                >
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-orange/10 flex items-center justify-center">
                          <staff.icon className="w-10 h-10 md:w-12 md:h-12 text-orange" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="mb-4">
                          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                            {staff.name}
                          </h2>
                          <p className="text-muted-foreground font-medium">
                            {staff.position}
                          </p>
                        </div>
                        <p className="text-lg leading-relaxed text-foreground">
                          {staff.title}
                        </p>
                      </div>

                      {/* Number Badge */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              グッドコネクトのテレアポ代行により新規顧客を発掘し、
              <br className="hidden md:block" />
              クオリティの高いアポイントをご提供することで
              <br className="hidden md:block" />
              新規顧客獲得を支援いたします
            </h2>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
