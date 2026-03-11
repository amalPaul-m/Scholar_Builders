'use client';

import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function RecentProjectsSlider({ projects }) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!projects?.length) return null;

  useEffect(() => {
    const updatePerView = () => {
      if (window.innerWidth >= 1024) setPerView(3);
      else if (window.innerWidth >= 640) setPerView(2);
      else setPerView(1);
    };
    updatePerView();
    window.addEventListener('resize', updatePerView);
    return () => window.removeEventListener('resize', updatePerView);
  }, []);

  const maxIndex = Math.max(0, projects.length - perView);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [index, maxIndex]);

  const goPrev = () => setIndex((i) => (i - 1 + (maxIndex + 1)) % (maxIndex + 1));
  const goNext = () => setIndex((i) => (i + 1) % (maxIndex + 1));

  const gallery = useMemo(() => {
    if (!activeProject) return [];
    return activeProject.gallery?.length ? activeProject.gallery : [activeProject.image];
  }, [activeProject]);

  const openProject = (project) => {
    setActiveProject(project);
    setActiveImageIndex(0);
  };

  const closeProject = () => {
    setActiveProject(null);
    setActiveImageIndex(0);
  };

  const prevImage = () => {
    setActiveImageIndex((i) => (i - 1 + gallery.length) % gallery.length);
  };

  const nextImage = () => {
    setActiveImageIndex((i) => (i + 1) % gallery.length);
  };

  return (
    <section className="bg-white pb-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-playfair text-3xl sm:text-4xl">
            Recent <span className="italic">Projects</span>
          </h2>
          <div className="hidden sm:flex items-center gap-2">
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

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
          >
            {projects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => openProject(project)}
                className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] pr-6 text-left"
              >
                <div className="bg-white">
                  <div className="relative h-56 rounded-2xl overflow-hidden shadow-sm">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <p className="text-xs text-[#8b7a69] mt-3">{project.location}</p>
                  <p className="text-sm font-poppins font-semibold text-[#2b241d]">
                    {project.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-5 sm:hidden">
          <button
            type="button"
            onClick={goPrev}
            className="w-9 h-9 rounded-full border border-[#d9d0c5] flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="w-9 h-9 rounded-full border border-[#d9d0c5] flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-400 ease-in-out ${
                i === index ? 'w-8 bg-[#2b241d]' : 'w-2 bg-[#d9d0c5]'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeProject}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeProject}
              className="absolute -top-12 right-0 text-white/80 hover:text-white"
              aria-label="Close"
            >
              <X size={26} />
            </button>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black">
              <Image
                src={gallery[activeImageIndex]}
                alt={activeProject.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="flex items-center justify-between mt-4 text-white/80">
              <div>
                <p className="font-poppins font-semibold text-white">{activeProject.title}</p>
                <p className="text-xs text-white/60">{activeProject.location}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevImage}
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10"
                  aria-label="Next image"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              {gallery.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImageIndex(i)}
                  className={`h-2 rounded-full transition-all duration-400 ease-in-out ${
                    i === activeImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
