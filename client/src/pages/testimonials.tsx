import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Building2, Calendar, Package } from "lucide-react";
import sCompanyImage from "@assets/stock_images/business_people_hand_3af9cce1.jpg";
import cCompanyImage from "@assets/stock_images/business_people_hand_89171b58.jpg";
import bCompanyImage from "@assets/stock_images/business_people_hand_0b275456.jpg";
import oCompanyImage from "@assets/stock_images/business_people_hand_ff2d176d.jpg";

const testimonials = [
  {
    id: "s-company",
    company: "IT業　株式会社S社",
    callsPerMonth: "2,500件",
    beforeRate: "0.6%",
    afterRate: "1.7%",
    product: "店舗向け予約サービス",
    period: "2022年5月～",
    comment: "東京都23区へ地域を絞り、見込み客のアポ獲得を依頼しています。架電数での課金のため予算設定も行い易く助かっています。リスト準備をしてもらえるのはリソース不足の弊社に助かっています。初回ヒアリング時に補助金を利用したスキームの提案を行って貰いました。架電開始前に何度か打ち合わせをしていただき、安心でした。ありがとうございます。",
    image: sCompanyImage,
  },
  {
    id: "c-company",
    company: "不動産業　一般社団法人C",
    callsPerMonth: "1,500件",
    beforeRate: "新規事業",
    afterRate: "2.1%",
    product: "リフォーム業向けサービス",
    period: "2024年7月～",
    comment: "郵送物の送付先となる住所獲得＋提案のアポを依頼しました。新規取引先への資料請求を獲得して、その後資料送付先企業に対してアポ獲得まで一気通貫で行っていただきました。 何社か見積を取りましたが、1番リーズナブルな価格だったため契約をしました。スクリプトのクオリティーも大満足でした。月1回の打ち合わせで状況共有頂けるのも高評価です。",
    image: cCompanyImage,
  },
  {
    id: "b-company",
    company: "人材派遣業　株式会社B",
    callsPerMonth: "1,000件",
    beforeRate: "1.5%",
    afterRate: "3.8%",
    product: "ホテル業向けサービス",
    period: "2024年8月～",
    comment: "インバウンドが増えているエリアのホテル業に向けて、アウトソーシング(清掃業務)の提案を架電していただきました。アポの確度が高く、アポからの受注は50％を超えましたので費用対効果抜群でした。また架電している状況がリアルタイムで分かる部分が良いと思います。これからもホテル業の繁忙期を外して、利用させて頂きます。",
    image: bCompanyImage,
  },
  {
    id: "o-company",
    company: "SaaS開発業　株式会社O",
    callsPerMonth: "3,000件",
    beforeRate: "0.7%",
    afterRate: "1.6%",
    product: "中小企業向け業務効率化ツール",
    period: "2024年9月～",
    comment: "ITリテラシーにばらつきのある中小企業への架電は難易度が高いと感じていましたが、トーク設計から丁寧に対応していただき、質の高いアポイントを安定して獲得できました。商談化率も高く、営業チームの動きが格段に効率化されました。日々の進捗も共有してもらえるので、安心して任せられる点も大きな魅力です。",
    image: oCompanyImage,
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              お客様の声
            </h1>
            <p className="text-lg md:text-xl text-center text-white/90 max-w-3xl mx-auto">
              多くの企業様にご利用いただき、高い成果を実現しています
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="overflow-hidden hover-elevate"
                  data-testid={`card-testimonial-${testimonial.id}`}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <CardContent className="p-8">
                    {/* Company Name */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-primary mb-4">
                        {testimonial.company}
                      </h3>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">月間架電数</p>
                          <p className="text-2xl font-bold text-orange">{testimonial.callsPerMonth}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">依頼前→依頼後</p>
                          <p className="text-lg font-bold text-foreground">
                            {testimonial.beforeRate} → <span className="text-orange">{testimonial.afterRate}</span>
                          </p>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="gap-1">
                          <Package className="w-3 h-3" />
                          {testimonial.product}
                        </Badge>
                        <Badge variant="secondary" className="gap-1">
                          <Calendar className="w-3 h-3" />
                          {testimonial.period}
                        </Badge>
                      </div>
                    </div>

                    {/* Comment */}
                    <div className="bg-muted p-4 rounded-md">
                      <p className="text-foreground leading-relaxed">
                        {testimonial.comment}
                      </p>
                    </div>

                    {/* Note */}
                    {testimonial.id === "s-company" && (
                      <p className="text-sm text-muted-foreground mt-4">
                        ※業界平均アポ率1%
                      </p>
                    )}
                    {testimonial.id === "b-company" && (
                      <p className="text-sm text-muted-foreground mt-4">
                        ※業界平均アポ率1.5%
                      </p>
                    )}
                    {testimonial.id === "o-company" && (
                      <p className="text-sm text-muted-foreground mt-4">
                        ※業界平均アポ率1.1%
                      </p>
                    )}
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
