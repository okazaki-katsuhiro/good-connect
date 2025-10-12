import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin, Phone, Globe, User } from "lucide-react";
import officeImage from "@assets/stock_images/modern_japanese_offi_60b97d4f.jpg";

const companyInfo = [
  {
    icon: Building2,
    label: "会社名",
    value: "株式会社GOLVOYA",
  },
  {
    icon: User,
    label: "代表者",
    value: "代表取締役　小谷 陽一",
  },
  {
    icon: MapPin,
    label: "所在地",
    value: "〒141-0022 東京都品川区東五反田4-10-9 シャトレー五反田8F",
  },
  {
    icon: Phone,
    label: "電話番号",
    value: "03-6823-4827（代表）",
  },
  {
    icon: Globe,
    label: "URL",
    value: "https://goodconnect-sales.jp/",
    isLink: true,
  },
];

export default function Company() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              会社概要
            </h1>
            <p className="text-lg md:text-xl text-center text-white/90 max-w-3xl mx-auto">
              株式会社GOLVOYAについて
            </p>
          </div>
        </section>

        {/* Office Image Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative h-96 rounded-lg overflow-hidden mb-16">
              <img
                src={officeImage}
                alt="GOLVOYA オフィス"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h2 className="text-3xl font-bold mb-2">株式会社GOLVOYA</h2>
                  <p className="text-lg text-white/90">
                    テレアポ代行・営業支援のプロフェッショナル集団
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-8">
                  {companyInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 pb-8 border-b last:border-b-0 last:pb-0"
                      data-testid={`company-info-${index}`}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-orange/10 flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-orange" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground mb-2 font-medium">
                          {info.label}
                        </p>
                        {info.isLink ? (
                          <a
                            href={info.value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-orange hover:underline break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg text-foreground leading-relaxed">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              アクセス
            </h2>
            <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.5347891234!2d139.72324!3d35.62583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b0e0e0e0e0e%3A0x0!2zMzXCsDM3JzMzLjAiTiAxMznCsDQzJzIzLjYiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="会社所在地マップ"
              />
            </div>
            <p className="text-center text-muted-foreground mt-6">
              JR山手線・東急池上線「五反田駅」より徒歩5分
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
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
