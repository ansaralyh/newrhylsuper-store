"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1920&q=80",
    alt: "Grocery superstore - fresh produce and vegetables",
    title: "Fresh Produce & Vegetables",
    subtitle: "Farm-fresh fruits and vegetables for your family",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1920&q=80",
    alt: "Supermarket beverages - soft drinks, juices",
    title: "Beverages & Soft Drinks",
    subtitle: "Pepsi, juices, and refreshing drinks",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80",
    alt: "Grocery store snacks - chips, biscuits, Lays",
    title: "Snacks & Biscuits",
    subtitle: "Lays, biscuits, and your favourite treats",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1584568694245-f89c04c8a8f9?w=1920&q=80",
    alt: "Household products - Surf detergent, cleaning",
    title: "Household & Cleaning",
    subtitle: "Surf detergent, soaps, and home essentials",
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

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 animate-fadeIn">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/90">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white w-8"
                : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
