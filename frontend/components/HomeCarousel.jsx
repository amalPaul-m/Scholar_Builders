'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HomeCarousel({ slides }) {
  const items = useMemo(() => slides || [], [slides]);
  const [index, setIndex] = useState(0);

  if (!items.length) return null;

  const goPrev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const goNext = () => setIndex((i) => (i + 1) % items.length);

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#6f5f50]">Carousel</p>
            <h2 className="font-playfair text-3xl sm:text-4xl">
              Featured <span className="italic">Slides</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="w-10 h-10 rounded-full border border-[#d9d0c5] flex items-center justify-center hover:bg-[#f7f2ec]"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="w-10 h-10 rounded-full border border-[#d9d0c5] flex items-center justify-center hover:bg-[#f7f2ec]"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[24px]">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((slide) => (
              <div key={slide.id} className="min-w-full">
                <div className="relative h-72 sm:h-80 md:h-96">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">Scholar Builders</p>
                    <p className="font-playfair text-2xl sm:text-3xl">{slide.title}</p>
                    <p className="text-xs text-white/70 max-w-md">{slide.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? 'w-8 bg-[#2b241d]' : 'w-2 bg-[#d9d0c5]'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
