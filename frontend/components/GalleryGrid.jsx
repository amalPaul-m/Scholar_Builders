'use client';
import { useState } from 'react';
import Image from 'next/image';
import { X, MapPin, ZoomIn } from 'lucide-react';

const TABS = [
  { label: 'All', value: 'all' },
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
];

export default function GalleryGrid({ projects }) {
  const [filter, setFilter] = useState('all');
  const [modal, setModal] = useState(null);

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-20 bg-[#E3EBD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-[#262523]" />
              <span className="text-[#81817D] text-sm font-inter tracking-widest uppercase">
                Our Work
              </span>
            </div>
            <h2 className="font-poppins font-bold text-[#262523] text-3xl sm:text-4xl">
              Project Gallery
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-5 py-2 rounded-sm text-sm font-poppins font-medium transition-all ${
                  filter === tab.value
                    ? 'bg-[#262523] text-white'
                    : 'bg-white text-[#81817D] hover:bg-[#B3B2AE]/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-sm cursor-pointer bg-[#262523]"
              onClick={() => setModal(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#262523]/0 group-hover:bg-[#262523]/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 border border-white rounded-sm flex items-center justify-center">
                    <ZoomIn size={18} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white border-t border-[#B3B2AE]/30">
                <span className="text-[#81817D] text-xs font-inter uppercase tracking-widest mb-1 block capitalize">
                  {project.category}
                </span>
                <h3 className="font-poppins font-semibold text-[#262523] text-sm">{project.title}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin size={11} className="text-[#B3B2AE]" />
                  <span className="text-[#B3B2AE] text-xs font-inter">{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 bg-[#262523]/90 flex items-center justify-center p-4 modal-overlay"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white rounded-sm max-w-2xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80">
              <Image
                src={modal.image}
                alt={modal.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[#81817D] text-xs font-inter uppercase tracking-widest capitalize">
                    {modal.category}
                  </span>
                  <h3 className="font-poppins font-bold text-[#262523] text-xl mt-1">{modal.title}</h3>
                  <div className="flex items-center gap-1 mt-2">
                    <MapPin size={13} className="text-[#81817D]" />
                    <span className="text-[#81817D] text-sm font-inter">{modal.location}</span>
                  </div>
                  <p className="text-[#81817D] font-inter text-sm mt-3 leading-relaxed">{modal.description}</p>
                </div>
                <button
                  onClick={() => setModal(null)}
                  className="w-8 h-8 border border-[#B3B2AE] rounded-sm flex items-center justify-center hover:bg-[#E3EBD2] ml-4 shrink-0"
                >
                  <X size={14} className="text-[#262523]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
