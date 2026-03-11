'use client';

import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, X, Play, Pause, Filter } from 'lucide-react';

function buildCategories(projects) {
  const unique = Array.from(new Set(projects.map((p) => p.category)));
  return ['all', ...unique];
}

export default function GalleryShowcase({ projects }) {
  const categories = useMemo(() => buildCategories(projects), [projects]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [projects, activeFilter]);

  useEffect(() => {
    if (!isPlaying || lightboxIndex === null) return undefined;
    const timer = setInterval(() => {
      setLightboxIndex((i) => (i + 1) % filtered.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPlaying, lightboxIndex, filtered.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((i) => (i + 1) % Math.min(projects.length, 5));
    }, 4500);
    return () => clearInterval(timer);
  }, [projects.length]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsPlaying(false);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setIsPlaying(false);
  };

  const goPrev = () => {
    setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length);
  };

  const goNext = () => {
    setLightboxIndex((i) => (i + 1) % filtered.length);
  };

  const heroProjects = projects.slice(0, 5);

  return (
    <main className="bg-[#efe8de] text-[#1f1a15] min-h-screen">
      {/* Top intro */}
      <section className="pt-8 sm:pt-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#6f5f50]">Gallery</p>
              <h1 className="font-playfair text-3xl sm:text-4xl">Architectural Works</h1>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-poppins font-semibold border border-[#2b241d] px-3 py-2 rounded-full"
            >
              Home Page
              <span className="w-5 h-5 rounded-full bg-[#2b241d] text-white flex items-center justify-center text-[10px]">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero slideshow */}
      <section className="pt-6">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-[28px] overflow-hidden h-[50vh] min-h-[380px]">
            {heroProjects.map((p, i) => (
              <div
                key={p.id}
                className={`absolute inset-0 transition-opacity duration-900 ease-in-out ${
                  i === heroIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={i === 0}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                Featured
              </p>
              <p className="font-playfair text-2xl sm:text-3xl">
                {heroProjects[heroIndex]?.title}
              </p>
              <p className="text-xs text-white/70">
                {heroProjects[heroIndex]?.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pt-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-[#6f5f50] uppercase tracking-[0.2em] mr-2">
              <Filter size={14} />
              Filters
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-poppins font-semibold border transition-colors duration-300 ease-in-out ${
                  activeFilter === cat
                    ? 'bg-[#2b241d] text-white border-[#2b241d]'
                    : 'bg-white text-[#2b241d] border-[#d9d0c5] hover:bg-[#f7f2ec]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
            {filtered.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative mb-6 w-full break-inside-avoid rounded-2xl overflow-hidden bg-white shadow-sm"
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <div className="text-left">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                        {project.category}
                      </p>
                      <p className="font-poppins font-semibold text-white">
                        {project.title}
                      </p>
                      <p className="text-xs text-white/70">{project.location}</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/80 hover:text-white"
              aria-label="Close"
            >
              <X size={26} />
            </button>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black">
              <Image
                src={filtered[lightboxIndex].image}
                alt={filtered[lightboxIndex].title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="flex items-center justify-between mt-4 text-white/80">
              <div>
                <p className="font-poppins font-semibold text-white">
                  {filtered[lightboxIndex].title}
                </p>
                <p className="text-xs text-white/60">{filtered[lightboxIndex].location}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlaying((p) => !p)}
                  className="inline-flex items-center gap-2 text-xs px-3 py-2 rounded-full border border-white/40"
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button
                  type="button"
                  onClick={goPrev}
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
