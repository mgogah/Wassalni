import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Clock, MapPin, X } from "lucide-react";

type RideRequestCardProps = {
  distance: string;
  duration: string;
  pickup: string;
  destination: string;
  fare: string;
  onAccept: () => void;
  onDecline: () => void;
};

export function RideRequestCard({
  distance,
  duration,
  pickup,
  destination,
  fare,
  onAccept,
  onDecline,
}: RideRequestCardProps) {
  return (
    <Card className="border-accent border-2 shadow-lg shadow-accent/20 animate-pulse">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">طلب رحلة جديد!</CardTitle>
        <CardDescription>
          لديك طلب رحلة جديد. الرجاء الرد في غضون 60 ثانية.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-around text-center">
            <div>
                <p className="text-muted-foreground">المسافة</p>
                <p className="font-bold text-lg">{distance}</p>
            </div>
            <div>
                <p className="text-muted-foreground">المدة</p>
                <p className="font-bold text-lg">{duration}</p>
            </div>
            <div>
                <p className="text-muted-foreground">الأجرة</p>
                <p className="font-bold text-lg text-accent">{fare}</p>
            </div>
        </div>
        <div className="space-y-2">
            <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 text-primary"/>
                <div>
                    <p className="text-sm text-muted-foreground">من</p>
                    <p>{pickup}</p>
                </div>
            </div>
            <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-1 text-accent"/>
                <div>
                    <p className="text-sm text-muted-foreground">إلى</p>
                    <p>{destination}</p>
                </div>
            </div>
        </div>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-4">
        <Button size="lg" variant="destructive" onClick={onDecline}>
          <X className="ml-2 h-5 w-5" />
          رفض
        </Button>
        <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={onAccept}>
          <Check className="ml-2 h-5 w-5" />
          قبول
        </Button>
      </CardFooter>
    </Card>
  );
}
