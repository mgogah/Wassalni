import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";

type DriverStatusProps = {
  isOnline: boolean;
  onToggle: (isOnline: boolean) => void;
};

export function DriverStatus({ isOnline, onToggle }: DriverStatusProps) {
  return (
    <Card>
      <CardContent className="p-4 flex items-center justify-between">
        <div className="space-y-1">
          <p className="font-semibold text-lg">{isOnline ? 'أنت متصل' : 'أنت غير متصل'}</p>
          <p className="text-sm text-muted-foreground">
            {isOnline ? 'يمكنك استقبال طلبات الرحلات.' : 'لن تتلقى أي طلبات.'}
          </p>
        </div>
        <Switch
          id="online-status"
          checked={isOnline}
          onCheckedChange={onToggle}
          aria-label="Toggle online status"
          className="data-[state=checked]:bg-accent"
        />
      </CardContent>
    </Card>
  );
}
