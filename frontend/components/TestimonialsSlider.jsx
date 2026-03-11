'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-[#262523] text-[#262523]' : 'text-[#B3B2AE]'}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSlider({ testimonials }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  // Desktop: show 3, mobile: show 1
  const visibleCount = 3;

  return (
    <section className="py-20 bg-[#262523]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-[#E3EBD2]" />
              <span className="text-[#81817D] text-sm font-inter tracking-widest uppercase">
                Client Reviews
              </span>
            </div>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 border border-[#81817D]/40 flex items-center justify-center text-[#B3B2AE] hover:border-[#E3EBD2] hover:text-[#E3EBD2] transition-all rounded-sm"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-[#81817D]/40 flex items-center justify-center text-[#B3B2AE] hover:border-[#E3EBD2] hover:text-[#E3EBD2] transition-all rounded-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonials — desktop 3, mobile 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {Array.from({ length: visibleCount }, (_, i) => {
            const t = testimonials[(current + i) % testimonials.length];
            return (
              <div key={t.id + i} className="bg-[#1a1918] border border-[#81817D]/20 p-7 rounded-sm">
                <Quote size={28} className="text-[#81817D]/40 mb-4" />
                <p className="text-[#B3B2AE] font-inter text-sm leading-relaxed mb-6">
                  "{t.review}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E3EBD2] flex items-center justify-center">
                      <span className="font-poppins font-bold text-[#262523] text-sm">{t.avatar}</span>
                    </div>
                    <div>
                      <p className="font-poppins font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-[#81817D] text-xs font-inter">{t.role}</p>
                    </div>
                  </div>
                  <StarRating rating={t.rating} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? 'w-8 bg-[#E3EBD2]' : 'w-2 bg-[#81817D]/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
