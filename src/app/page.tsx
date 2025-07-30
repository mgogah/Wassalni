import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Clock, Smartphone } from 'lucide-react';
import { Header } from '@/components/header';
import { Logo } from '@/components/logo';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
              وصلني. مشوارك أسهل.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
              تطبيقك الأول للتنقل بأمان وسرعة في جميع أنحاء المدينة. اطلب رحلتك الآن أو انضم إلينا ككابتن.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/ride">أطلب مشوار</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/drive">كن كابتن</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">لماذا تختار وصلني؟</h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                نقدم لك تجربة تنقل فريدة وموثوقة.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                    <ShieldCheck className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="mt-4 font-headline">أمان وموثوقية</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    جميع الكباتن معتمدون ومركباتنا تخضع للفحص لضمان رحلة آمنة لك ولعائلتك.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                    <Clock className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="mt-4 font-headline">وصول سريع</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    شبكتنا الواسعة من الكباتن تضمن لك وصول سيارتك في دقائق معدودة أينما كنت.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                    <Smartphone className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="mt-4 font-headline">سهولة الاستخدام</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    واجهة بسيطة وتجربة مستخدم سلسة تجعل طلب رحلتك أسهل من أي وقت مضى.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-primary/5 py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl">انضم إلى أسطول كباتن وصلني</h2>
                <p className="text-muted-foreground">
                  حقق دخلاً إضافياً وكن مدير نفسك. استمتع بمرونة ساعات العمل والمكافآت الحصرية.
                </p>
                <Button size="lg" asChild>
                  <Link href="/signup?role=driver">سجل الآن ككابتن</Link>
                </Button>
              </div>
              <div>
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Driver"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                  data-ai-hint="happy driver"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted border-t">
        <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <Logo />
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            © {new Date().getFullYear()} وصلني. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">سياسة الخصوصية</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">شروط الاستخدام</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
