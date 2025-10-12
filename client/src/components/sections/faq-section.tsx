import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "最短利用期間はどのくらいですか？",
    answer:
      "1ヶ月からご利用可能です。短期間での成果創出にも対応しておりますので、お気軽にご相談ください。",
  },
  {
    question: "業種や地域を指定できますか？",
    answer:
      "はい、可能です。リスト作成時に業種・地域・企業規模など、様々な条件を自由に指定いただけます。ターゲットを明確にすることで、より効果的なアプローチが実現できます。",
  },
  {
    question: "スクリプトの内容は確認できますか？",
    answer:
      "もちろんです。スクリプト設計後、必ずお客様に内容をご確認いただき、フィードバックをもとに調整を行います。ご納得いただいた上で架電を開始いたします。",
  },
  {
    question: "成果報酬はいつ発生しますか？",
    answer:
      "商談が確定した時点で成果報酬が発生します。単なるアポイント取得ではなく、実際に商談につながった場合のみ報酬をいただく仕組みです。",
  },
  {
    question: "どのような業界に対応していますか？",
    answer:
      "IT・Web、製造業、コンサルティング、不動産、人材サービスなど、幅広い業界に対応しております。また、BtoB・公共機関・代理店など、様々な形態にも柔軟に対応可能です。",
  },
  {
    question: "レポートはどのような形式で提供されますか？",
    answer:
      "架電結果を集計した詳細レポートを定期的に提供いたします。架電件数・商談獲得数・反応率などの数値データに加え、改善提案も含めてご報告いたします。",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            よくある質問
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            お客様からよくいただくご質問にお答えします
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-orange transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4 pl-4 border-l-2 border-orange/30">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
