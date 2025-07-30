import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Car, CheckCircle, Loader, Star } from 'lucide-react';
import Image from 'next/image';

type RideStatusProps = {
  status: 'searching' | 'assigned' | 'in_progress' | 'completed';
  onNewRide: () => void;
};

const statusConfig = {
    searching: {
        title: 'جاري البحث عن كابتن...',
        description: 'نبحث لك عن أقرب كابتن. الرجاء الانتظار.',
        icon: <Loader className="w-10 h-10 animate-spin text-primary" />,
        progress: 25,
    },
    assigned: {
        title: 'تم العثور على كابتن!',
        description: 'الكابتن أحمد في طريقه إليك.',
        icon: <Car className="w-10 h-10 text-primary" />,
        progress: 50,
    },
    in_progress: {
        title: 'الرحلة جارية',
        description: 'استمتع برحلتك مع الكابتن أحمد.',
        icon: <Car className="w-10 h-10 text-accent" />,
        progress: 75,
    },
    completed: {
        title: 'اكتملت الرحلة!',
        description: 'شكراً لاستخدامك وصلني. نتمنى أن نراك قريباً.',
        icon: <CheckCircle className="w-10 h-10 text-accent" />,
        progress: 100,
    }
}

export function RideStatus({ status, onNewRide }: RideStatusProps) {
  const config = statusConfig[status];

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-center pt-4">{config.icon}</div>
        <CardTitle className="font-headline text-center pt-4">{config.title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <p className="text-muted-foreground">{config.description}</p>
        
        <div className="space-y-2">
            <Progress value={config.progress} className="w-full" />
        </div>

        {(status === 'assigned' || status === 'in_progress') && (
            <div className="text-right border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-4">
                    <Avatar className="w-16 h-16">
                        <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="person photo" />
                        <AvatarFallback>أ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <p className="font-bold">الكابتن أحمد</p>
                        <div className="flex items-center gap-1 text-muted-foreground">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9
                        </div>
                    </div>
                    <div className="text-left">
                        <p className="font-bold text-sm">تويوتا كامري</p>
                        <p className="text-muted-foreground text-sm">أ ب ج ١٢٣٤</p>
                    </div>
                </div>
                <Separator />
                <div className="flex justify-between">
                    <Button variant="outline">مراسلة</Button>
                    <Button variant="destructive">إلغاء الرحلة</Button>
                </div>
            </div>
        )}

        {status === 'completed' && (
            <div className="text-right border rounded-lg p-4 space-y-4">
                <h3 className="font-bold">قيم رحلتك</h3>
                <div className="flex justify-center gap-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 text-gray-300 hover:text-yellow-400 cursor-pointer" />)}
                </div>
                <Separator />
                <h3 className="font-bold">ملخص الرحلة</h3>
                <div className="flex justify-between">
                    <p>التكلفة الإجمالية:</p>
                    <p className="font-bold">25.00 ريال</p>
                </div>
                <Button onClick={onNewRide} className="w-full">طلب رحلة جديدة</Button>
            </div>
        )}

      </CardContent>
    </Card>
  );
}
