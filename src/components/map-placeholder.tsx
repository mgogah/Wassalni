import Image from 'next/image';

export function MapPlaceholder() {
  return (
    <div className="h-full w-full bg-muted">
      <Image
        src="https://placehold.co/1200x800.png"
        alt="Map view"
        width={1200}
        height={800}
        className="h-full w-full object-cover"
        data-ai-hint="city map satellite"
      />
    </div>
  );
}
