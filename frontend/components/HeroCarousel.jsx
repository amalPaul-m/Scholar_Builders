'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroCarousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((index + slides.length) % slides.length);
        setIsTransitioning(false);
      }, 100);
    },
    [isTransitioning, slides.length]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#262523]">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#262523]/60 via-[#262523]/40 to-[#262523]/80" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-0.5 bg-[#E3EBD2]" />
              <span className="text-[#E3EBD2] text-sm font-inter tracking-widest uppercase">
                Scholar Builders
              </span>
            </div>

            <h1 className="font-poppins font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              {slides[current].title}
            </h1>

            <p className="text-[#B3B2AE] font-inter text-lg mb-10 max-w-xl">
              {slides[current].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="bg-[#E3EBD2] text-[#262523] px-8 py-4 font-poppins font-semibold text-base rounded-sm hover:bg-white transition-colors text-center"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="border border-[#E3EBD2] text-[#E3EBD2] px-8 py-4 font-poppins font-semibold text-base rounded-sm hover:bg-[#E3EBD2] hover:text-[#262523] transition-all text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Nav arrows */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors rounded-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors rounded-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-8 h-2 bg-[#E3EBD2]'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
