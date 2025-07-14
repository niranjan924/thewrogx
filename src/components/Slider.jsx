"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const originalImages = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
];

const Slider = () => {
  const [current, setCurrent] = useState(1); // Start at 1 (first real image)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  const images = useMemo(
    () => [
      originalImages[originalImages.length - 1],
      ...originalImages,
      originalImages[0],
    ],
    []
  );

  const nextSlide = () => {
    if (current >= images.length - 1) return;
    setCurrent((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    if (current <= 0) return;
    setCurrent((prev) => prev - 1);
    setIsTransitioning(true);
  };

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  // Handle looping logic
  useEffect(() => {
    if (!sliderRef.current) return;

    const handleTransitionEnd = () => {
      if (current === images.length - 1) {
        // Moved to fake first image → jump to real first
        setIsTransitioning(false);
        setCurrent(1);
      } else if (current === 0) {
        // Moved to fake last image → jump to real last
        setIsTransitioning(false);
        setCurrent(images.length - 2);
      }
    };

    const slider = sliderRef.current;
    slider.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      slider.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [current]);

  return (
    <div className="mx-4 md:mx-8">
      <div className="relative w-full max-w-7xl my-5 mx-auto overflow-hidden rounded-2xl shadow-lg">
        <div
          ref={sliderRef}
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-1000 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(-${current * (100 / images.length)}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index}`}
              style={{ width: `${100 / images.length}%` }}
              className="flex-shrink-0 object-cover h-[30vh] sm:h-[50vh] md:h-[80vh]"
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {originalImages.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === current - 1 ? "bg-white scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
