"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "GROCERY",
    title2: "GRAB",
    subtitle: "GROCERY DELIVERY TO YOUR HOME",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80",
  },
  {
    id: 2,
    title: "FRESH",
    title2: "PRODUCE",
    subtitle: "FARM-FRESH FRUITS & VEGETABLES",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
  },
  {
    id: 3,
    title: "COOL",
    title2: "DRINKS",
    subtitle: "BEVERAGES DELIVERED TO YOUR DOOR",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&q=80",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden bg-[#f7ba82]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-800/30">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
            {[...Array(8)].map((_, i) => (
              <line key={i} x1="50" y1="50" x2={50 + 40 * Math.cos((i * 45 * Math.PI) / 180)} y2={50 + 40 * Math.sin((i * 45 * Math.PI) / 180)} stroke="currentColor" strokeWidth="0.5" />
            ))}
          </svg>
        </div>
        <div className="absolute top-4 right-1/4 w-3 h-3 rounded-full bg-white/40" />
        <div className="absolute top-20 right-1/3 w-2 h-2 rounded-full bg-white/30" />
        <div className="absolute bottom-16 left-1/4 w-4 h-4 rounded-full bg-white/20" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left - Text */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a5f] leading-tight">
              <span className="block">{slide.title}</span>
              <span className="block">{slide.title2}</span>
            </h1>
            <p className="mt-4 text-[#1e3a5f] text-lg md:text-xl">
              {slide.subtitle}
            </p>
          </div>

          {/* Right - Basket/Product image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src={slide.image}
                alt={slide.subtitle}
                fill
                className="object-contain drop-shadow-2xl"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === current ? "bg-white w-6" : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
