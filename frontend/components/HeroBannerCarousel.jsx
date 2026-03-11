'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroBannerCarousel({ slides }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goPrev = () => setCurrent((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((i) => (i + 1) % slides.length);

  return (
    <section className="relative pt-6 sm:pt-8">
      <div className="relative mx-4 sm:mx-6 lg:mx-10 rounded-[28px] overflow-hidden h-[76vh] min-h-[560px]">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out transform ${
              i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#2b1c12]/70 via-[#1b1b1b]/25 to-[#ffffff]/10" />
          </div>
        ))}

        <div className="absolute inset-0 p-8 sm:p-12 lg:p-16 flex">
          <div className="max-w-xl text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-6">
              Scholar Builders
            </p>
            <p className="text-xs text-white/70 max-w-sm mb-6">
              According to Vitruvius, the architect should strive to fulfil each of these three
              attributes as well as possible.
            </p>
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl leading-[0.9]">
              Building <span className="italic">Beyond</span>
            </h1>
            <p className="text-sm text-white/70 mt-4 max-w-md">{slides[current].subtitle}</p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white/90 text-[#1f1a15] px-5 py-2 rounded-full text-sm font-poppins font-semibold"
              >
                Contact us
                <span className="w-6 h-6 rounded-full bg-[#1f1a15] text-white flex items-center justify-center text-xs">
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="ml-auto hidden lg:flex flex-col justify-end text-white/90 max-w-[220px]">
            <p className="font-playfair italic text-lg leading-tight">Architecture</p>
            <p className="text-xs text-white/70 mt-2">
              can mean a general term to describe buildings and other physical structures.
            </p>
          </div>
        </div>

        <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
          <div className="flex gap-2">
            {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-400 ease-in-out ${
                i === current ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="w-10 h-10 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="w-10 h-10 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/10"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
