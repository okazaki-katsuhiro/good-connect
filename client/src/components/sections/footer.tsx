export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">GOOD CONNECT</h3>
            <p className="text-white/80 leading-relaxed">
              テレアポ代行・営業支援サービス
              <br />
              成果につながる伴走型支援を提供します
            </p>
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
