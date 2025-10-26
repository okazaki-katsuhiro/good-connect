import footerBg from "@assets/stock_images/modern_office_buildi_9a422421.jpg";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="relative bg-primary text-white py-12 md:py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={footerBg}
          alt="City skyline"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/85 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">GOOD CONNECT</h3>
            <p className="text-white/80 leading-relaxed">
              テレアポ代行・営業支援サービス
              <br />
              成果につながる伴走型支援を提供します
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">ページリンク</h4>
            <nav className="space-y-2">
              <Link href="/" data-testid="footer-link-home">
                <span className="block text-white/80 hover:text-orange transition-colors cursor-pointer">
                  ホーム
                </span>
              </Link>
              <Link href="/staff" data-testid="footer-link-staff">
                <span className="block text-white/80 hover:text-orange transition-colors cursor-pointer">
                  スタッフ紹介
                </span>
              </Link>
              <Link href="/testimonials" data-testid="footer-link-testimonials">
                <span className="block text-white/80 hover:text-orange transition-colors cursor-pointer">
                  お客様の声
                </span>
              </Link>
              <Link href="/column" data-testid="footer-link-column">
                <span className="block text-white/80 hover:text-orange transition-colors cursor-pointer">
                  コラム
                </span>
              </Link>
              <Link href="/company" data-testid="footer-link-company">
                <span className="block text-white/80 hover:text-orange transition-colors cursor-pointer">
                  会社概要
                </span>
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">会社情報</h4>
            <div className="space-y-2 text-white/80">
              <p>株式会社GOLVOYA</p>
              <p>〒141-0022</p>
              <p>東京都品川区東五反田4-10-9 シャトレー五反田8F</p>
              <p>
                TEL:{" "}
                <a
                  href="tel:03-6823-4827"
                  className="hover:text-orange transition-colors"
                  data-testid="link-phone"
                >
                  03-6823-4827
                </a>
                （代表）
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 GOOD CONNECT All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
