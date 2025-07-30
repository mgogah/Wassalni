"use client";

import { useState } from 'react';
import { Header } from '@/components/header';
import { MapPlaceholder } from '@/components/map-placeholder';
import { DriverStatus } from './components/driver-status';
import { RideRequestCard } from './components/ride-request-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Navigation, Star } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

type DriverState = 'offline' | 'online' | 'incoming_request' | 'on_trip';

export default function DrivePage() {
  const [driverState, setDriverState] = useState<DriverState>('offline');

  const handleToggleOnline = (isOnline: boolean) => {
    setDriverState(isOnline ? 'online' : 'offline');
    if (isOnline) {
      setTimeout(() => setDriverState('incoming_request'), 5000);
    }
  };

  const handleAcceptRide = () => {
    setDriverState('on_trip');
  };

  const handleDeclineRide = () => {
    setDriverState('online');
  };
  
  const handleEndTrip = () => {
    setDriverState('online');
  };

  const renderPanelContent = () => {
    switch (driverState) {
      case 'offline':
      case 'online':
        return (
          <>
            <DriverStatus isOnline={driverState === 'online'} onToggle={handleToggleOnline} />
            {driverState === 'online' && (
              <Card className="mt-4">
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">في انتظار الطلبات...</p>
                </CardContent>
              </Card>
            )}
            {driverState === 'offline' && (
               <Card className="mt-4">
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground">أنت غير متصل حالياً.</p>
                </CardContent>
              </Card>
            )}
          </>
        );
      case 'incoming_request':
        return (
          <RideRequestCard
            distance="3 كم"
            duration="5 دقائق"
            pickup="شارع الملك فهد"
            destination="برج المملكة"
            fare="25 ريال"
            onAccept={handleAcceptRide}
            onDecline={handleDeclineRide}
          />
        );
      case 'on_trip':
        return (
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">الرحلة الحالية</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="person photo" />
                  <AvatarFallback>س</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">الراكب: سارة</p>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.8
                  </div>
                </div>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground">من</p>
                <p className="font-semibold">شارع الملك فهد</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">إلى</p>
                <p className="font-semibold">برج المملكة</p>
              </div>
              <Separator />
              <div className="flex flex-col gap-2">
                <Button size="lg" className="w-full">
                  <Navigation className="ml-2 h-4 w-4" />
                  ابدأ الملاحة
                </Button>
                <Button size="lg" variant="destructive" className="w-full" onClick={handleEndTrip}>
                  إنهاء الرحلة
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };
  
  return (
    <>
      <Header />
      <div className="h-screen w-full pt-20 grid md:grid-cols-3 lg:grid-cols-4">
        <div className="hidden md:block p-4 lg:p-6 bg-background border-l overflow-y-auto">
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
