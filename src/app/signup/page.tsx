import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Logo } from '@/components/logo';

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background py-12">
      <div className="w-full max-w-md mx-4">
          <div className="text-center mb-4">
            <Link href="/" aria-label="Home">
              <Logo />
            </Link>
          </div>
          <Tabs defaultValue="passenger" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="passenger">راكب</TabsTrigger>
              <TabsTrigger value="driver">كابتن</TabsTrigger>
            </TabsList>
            <TabsContent value="passenger">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">إنشاء حساب راكب</CardTitle>
                  <CardDescription>أكمل البيانات التالية للانضمام إلينا.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name-p">الاسم الكامل</Label>
                    <Input id="name-p" placeholder="اسمك الكامل" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-p">البريد الإلكتروني</Label>
                    <Input id="email-p" type="email" placeholder="example@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-p">كلمة المرور</Label>
                    <Input id="password-p" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">
                    إنشاء حساب
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="driver">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">إنشاء حساب كابتن</CardTitle>
                  <CardDescription>انضم إلى أسطول الكباتن لدينا.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div className="space-y-2">
                    <Label htmlFor="name-d">الاسم الكامل</Label>
                    <Input id="name-d" placeholder="اسمك الكامل" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-d">البريد الإلكتروني</Label>
                    <Input id="email-d" type="email" placeholder="example@email.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="car-model">موديل السيارة</Label>
                    <Input id="car-model" placeholder="مثال: تويوتا كامري 2023" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-d">كلمة المرور</Label>
                    <Input id="password-d" type="password" required />
                  </div>
                  <Button type="submit" className="w-full">
                    إنشاء حساب كابتن
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          <div className="mt-4 text-center text-sm">
            لديك حساب بالفعل؟{' '}
            <Link href="/login" className="underline hover:text-primary">
              تسجيل الدخول
            </Link>
          </div>
      </div>
    </div>
  );
}
