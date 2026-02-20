"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/hero/hero-1.jpeg",
    alt: "Super Market - Order Online",
  },
  {
    id: 2,
    image: "/hero/hero-2.jpeg",
    alt: "Grocery Shopping Super Sale",
  },
  {
    id: 3,
    image: "/hero/hero-3.jpeg",
    alt: "Superstore aisles - wide selection",
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
    <section className="relative w-full overflow-hidden">
      {/* Hero image - compact size */}
      <div className="relative w-full aspect-[3/1] min-h-[140px] md:min-h-[180px] lg:min-h-[220px]">
        <Image
          src={slide.image}
          alt={slide.alt}
          fill
          className="object-cover"
          priority
          unoptimized
          sizes="100vw"
        />
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
