"use client";

export default function AnnouncementBar() {
  const text = "🚚 Free Home Delivery on All Orders";
  return (
    <div className="h-10 bg-emerald-700 text-white overflow-hidden flex items-center">
      <div className="animate-marquee whitespace-nowrap flex [width:max-content]">
        <span className="inline-block px-8 text-sm font-medium">{text}</span>
        <span className="inline-block px-8 text-sm font-medium">{text}</span>
        <span className="inline-block px-8 text-sm font-medium">{text}</span>
        <span className="inline-block px-8 text-sm font-medium">{text}</span>
      </div>
    </div>
  );
}
