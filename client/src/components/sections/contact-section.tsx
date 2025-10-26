import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
    },
    onError: () => {
      toast({
        title: "送信に失敗しました",
        description: "もう一度お試しください",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertContactSubmission) => {
    submitMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 md:py-32 bg-primary">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <Card className="p-8 md:p-10 text-center shadow-lg">
            <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-orange" />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              送信完了しました
            </h3>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              お問い合わせありがとうございます。
              <br />
              担当者より2営業日以内にご連絡させていただきます。
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              data-testid="button-submit-another"
            >
              続けて問い合わせる
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            お問い合わせ
          </h2>
          <p className="text-base md:text-lg text-white/90">
            まずはお気軽にご相談ください
          </p>
        </div>

        <Card className="p-8 md:p-10 shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-semibold">
                      会社名 <span className="text-orange">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="株式会社〇〇"
                        {...field}
                        className="border-input focus:border-orange"
                        data-testid="input-company-name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-semibold">
                      担当者名 <span className="text-orange">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="山田 太郎"
                        {...field}
                        className="border-input focus:border-orange"
                        data-testid="input-contact-name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-semibold">
                      電話番号 <span className="text-orange">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="03-1234-5678"
                        {...field}
                        className="border-input focus:border-orange"
                        data-testid="input-phone"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-semibold">
                      メールアドレス <span className="text-orange">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@company.co.jp"
                        {...field}
                        className="border-input focus:border-orange"
                        data-testid="input-email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-semibold">
                      お問い合わせ内容 <span className="text-orange">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="お問い合わせ内容をご記入ください"
                        rows={6}
                        {...field}
                        className="border-input focus:border-orange resize-none"
                        data-testid="input-message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-orange text-white"
                disabled={submitMutation.isPending}
                data-testid="button-submit-form"
              >
                {submitMutation.isPending ? "送信中..." : "無料相談を申し込む"}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}
