"use client";

import { useState } from 'react';
import { Header } from '@/components/header';
import { MapPlaceholder } from '@/components/map-placeholder';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Car, MapPin } from 'lucide-react';
import { RideStatus } from './components/ride-status';

type RideState = 'idle' | 'selecting_ride' | 'searching' | 'assigned' | 'in_progress' | 'completed';

export default function RidePage() {
  const [rideState, setRideState] = useState<RideState>('idle');
  const [pickup, setPickup] = useState('شارع الملك فهد، الرياض');
  const [destination, setDestination] = useState('برج المملكة، الرياض');

  const handleRequestRide = () => {
    if (pickup && destination) {
      setRideState('selecting_ride');
    }
  };

  const handleConfirmRide = () => {
    setRideState('searching');
    setTimeout(() => setRideState('assigned'), 3000);
    setTimeout(() => setRideState('in_progress'), 8000);
    setTimeout(() => setRideState('completed'), 15000);
  };
  
  const handleNewRide = () => {
    setRideState('idle');
    setPickup('شارع الملك فهد، الرياض');
    setDestination('برج المملكة، الرياض');
  };

  const renderPanelContent = () => {
    switch (rideState) {
      case 'idle':
        return (
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">إلى أين تريد الذهاب؟</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="pickup">نقطة الانطلاق</Label>
                <div className="relative">
                  <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input id="pickup" value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="أدخل موقع الانطلاق" className="pr-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">الوجهة</Label>
                <div className="relative">
                  <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input id="destination" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="أدخل وجهتك" className="pr-10" />
                </div>
              </div>
              <Button onClick={handleRequestRide} className="w-full" disabled={!pickup || !destination}>
                البحث عن رحلة
              </Button>
            </CardContent>
          </Card>
        );
      case 'selecting_ride':
        return (
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">اختر رحلتك</CardTitle>
              <div className="text-sm text-muted-foreground flex items-center gap-2 pt-2">
                <MapPin className="w-4 h-4"/> 
                <span className="truncate">{pickup}</span> 
                <ArrowRight className="w-4 h-4 shrink-0"/> 
                <span className="truncate">{destination}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg border-2 border-primary bg-primary/10 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <Car className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-bold">وصلني اقتصادي</p>
                      <p className="text-sm text-muted-foreground">وصول في 3 دقائق</p>
                    </div>
                  </div>
                  <p className="font-bold text-lg">25 ريال</p>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg border hover:border-primary/50 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <Car className="w-8 h-8" />
                    <div>
                      <p className="font-semibold">وصلني أعمال</p>
                      <p className="text-sm text-muted-foreground">سيارات مريحة</p>
                    </div>
                  </div>
                  <p className="font-semibold text-lg">40 ريال</p>
                </div>
              </div>
              <Button onClick={handleConfirmRide} className="w-full bg-accent hover:bg-accent/90">
                تأكيد رحلة وصلني اقتصادي
              </Button>
            </CardContent>
          </Card>
        );
      case 'searching':
      case 'assigned':
      case 'in_progress':
      case 'completed':
        return <RideStatus status={rideState} onNewRide={handleNewRide} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="h-screen w-full pt-20 grid md:grid-cols-3 lg:grid-cols-4">
        <div className="hidden md:block p-4 lg:p-6 bg-background border-l overflow-y-auto md:col-span-1 lg:col-span-1">
          {renderPanelContent()}
        </div>
        
        <div className="md:col-span-2 lg:col-span-3 relative h-full">
          <MapPlaceholder />
           <div className="md:hidden absolute bottom-0 left-0 right-0 bg-background rounded-t-2xl p-4 shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)]">
            {renderPanelContent()}
           </div>
        </div>
      </div>
    </>
  );
}
