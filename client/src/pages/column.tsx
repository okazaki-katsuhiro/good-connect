import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ArrowRight } from "lucide-react";
import column1 from "@assets/stock_images/business_sales_call__003513c6.jpg";
import column2 from "@assets/stock_images/business_sales_call__1be3e42f.jpg";
import column3 from "@assets/stock_images/business_sales_call__91193569.jpg";
import column4 from "@assets/stock_images/business_strategy_ma_f11f790e.jpg";
import column5 from "@assets/stock_images/business_strategy_ma_24e1c8c5.jpg";
import column6 from "@assets/stock_images/business_strategy_ma_6247658c.jpg";
import column7 from "@assets/stock_images/business_team_meetin_cf6917e3.jpg";
import column8 from "@assets/stock_images/business_team_meetin_fd9b6cc9.jpg";
import column9 from "@assets/stock_images/business_team_meetin_a451927c.jpg";
import column10 from "@assets/stock_images/business_team_meetin_5df3d52e.jpg";

const columns = [
  {
    id: 1,
    title: "【営業】インサイドセールスとは？代行の必要性やテレアポの重要性について",
    image: column1,
  },
  {
    id: 2,
    title: "インサイドセールス代行の料金相場は？代行での成功戦略と活用ポイント",
    image: column2,
  },
  {
    id: 3,
    title: "インサイドセールス代行を比較する前にチェック！代行サービスの選び方",
    image: column3,
  },
  {
    id: 4,
    title: "インサイドセールス代行における成果報酬型の特徴やメリット・選び方を解説",
    image: column4,
  },
  {
    id: 5,
    title: "【インサイドセールス代行】安い業者を探すコツは？代行効果を最大化する方法",
    image: column5,
  },
  {
    id: 6,
    title: "テレアポ代行とは？メリット・デメリットと注意点への対策を解説",
    image: column6,
  },
  {
    id: 7,
    title: "テレアポ代行を導入！営業成果を上げる業者の選び方と活用のコツ",
    image: column7,
  },
  {
    id: 8,
    title: "テレアポ代行の料金体系は？テレアポ代行別のサービス詳細や料金相場",
    image: column8,
  },
  {
    id: 9,
    title: "テレアポ代行サービスの特徴は？導入のメリット・業者選び・導入の流れ",
    image: column9,
  },
  {
    id: 10,
    title: "テレアポ代行業者の選び方と失敗しないポイントを解説",
    image: column10,
  },
];

export default function Column() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              コラム
            </h1>
            <p className="text-lg md:text-xl text-center text-white/90 max-w-3xl mx-auto">
              インサイドセールス・テレアポ代行に関するお役立ち情報をわかりやすく解説
            </p>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-12 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                お役立ちコラム一覧
              </h2>
              <p className="text-foreground leading-relaxed">
                グッドコネクトは、テレアポ代行・インサイドセールスを提供する業者で、営業活動の効率化をサポートします。
                料金は、相場と比較して安いプランで地域最安値を目指しています。
                初期費用50,000円（税抜）・1コール100円（税抜）・アポ獲得1件3,000円（税抜）のコール課金×成果報酬型のサービスです。
                外部委託するからこそ、メリット・デメリットやコストパフォーマンス、自社商材とのマッチングなどを検討することが大切です。
                そこで、テレアポ代行やインサイドセールスに関するお役立ち情報も掲載していますので、ぜひ参考にご覧ください。
              </p>
            </div>
          </div>
        </section>

        {/* Columns Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {columns.map((column) => (
                <Card
                  key={column.id}
                  className="overflow-hidden hover-elevate cursor-pointer group"
                  data-testid={`card-column-${column.id}`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={column.image}
                      alt={column.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <div className="w-8 h-8 rounded-full bg-orange/90 flex items-center justify-center">
                        <span className="text-sm font-bold text-white">
                          {column.id}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg leading-tight group-hover:text-orange transition-colors">
                      {column.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center text-orange font-medium text-sm">
                      <span>詳しく見る</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
