import { MapPin, Zap, Truck } from "lucide-react";

const promoItems = [
  { icon: MapPin, text: "£10 OVER 3 MILE ON EVERY EXTRA MILES" },
  { icon: Zap, text: "DELIVERY WITHIN 12 HOURS" },
  { icon: Truck, text: "FREE HOME DELIVERY OVER £60 WITHIN 3 MILES" },
  { icon: MapPin, text: "£10 OVER 3 MILE ON EVERY EXTRA MILES" },
];

export default function PromoBar() {
  return (
    <div className="bg-[#196336] text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 text-xs md:text-sm">
          {promoItems.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 shrink-0" />
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
