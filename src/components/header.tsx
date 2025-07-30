import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Logo } from './logo';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/ride" className="transition-colors hover:text-primary" prefetch={false}>
            اطلب مشوار
          </Link>
          <Link href="/drive" className="transition-colors hover:text-primary" prefetch={false}>
            كن كابتن
          </Link>
          <Link href="#" className="transition-colors hover:text-primary" prefetch={false}>
            عن وصلني
          </Link>
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/login">تسجيل الدخول</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">إنشاء حساب</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 p-6">
              <Logo />
              <nav className="flex flex-col gap-4 text-lg font-medium">
                <Link href="/ride" className="transition-colors hover:text-primary" prefetch={false}>
                  اطلب مشوار
                </Link>
                <Link href="/drive" className="transition-colors hover:text-primary" prefetch={false}>
                  كن كابتن
                </Link>
                <Link href="#" className="transition-colors hover:text-primary" prefetch={false}>
                  عن وصلني
                </Link>
              </nav>
              <div className="mt-auto flex flex-col gap-4">
                <Button variant="ghost" asChild>
                  <Link href="/login">تسجيل الدخول</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">إنشاء حساب</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
