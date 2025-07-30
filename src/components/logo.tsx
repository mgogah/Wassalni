import Link from 'next/link';
import { Car } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <Car className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold text-primary font-headline">وصلني</span>
    </Link>
  );
}
