'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  ClipboardList, Factory, Map, ShieldCheck, Leaf, Sofa, CheckCircle2, ChevronRight,
} from 'lucide-react';

const iconMap = { ClipboardList, Factory, Map, ShieldCheck, Leaf, Sofa };

export default function ServiceDetails({ services }) {
  const [active, setActive] = useState(services[0]);
  const Icon = iconMap[active.icon] || ClipboardList;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#262523]" />
            <span className="text-[#81817D] text-sm font-inter tracking-widest uppercase">
              Our Expertise
            </span>
          </div>
          <h2 className="font-poppins font-bold text-[#262523] text-3xl sm:text-4xl">
            Explore Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar service list */}
          <div className="space-y-1">
            {services.map((svc) => {
              const SIcon = iconMap[svc.icon] || ClipboardList;
              return (
                <button
                  key={svc.id}
                  onClick={() => setActive(svc)}
                  className={`w-full flex items-center gap-4 px-5 py-4 text-left rounded-sm transition-all duration-200 ${
                    active.id === svc.id
                      ? 'bg-[#262523] text-white'
                      : 'bg-[#E3EBD2] text-[#262523] hover:bg-[#B3B2AE]/40'
                  }`}
                >
                  <SIcon
                    size={18}
                    className={active.id === svc.id ? 'text-[#E3EBD2]' : 'text-[#81817D]'}
                  />
                  <span className="font-poppins font-medium text-sm">{svc.title}</span>
                  <ChevronRight
                    size={14}
                    className={`ml-auto ${active.id === svc.id ? 'text-[#E3EBD2]' : 'text-[#B3B2AE]'}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="relative w-full h-64 lg:h-72 rounded-sm overflow-hidden">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-[#262523]/30" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-[#E3EBD2] rounded-sm flex items-center justify-center">
                  <Icon size={16} className="text-[#262523]" />
                </div>
                <span className="text-white font-poppins font-semibold text-lg">
                  {active.title}
                </span>
              </div>
            </div>

            <p className="text-[#81817D] font-inter leading-relaxed">{active.description}</p>

            <div>
              <h4 className="font-poppins font-semibold text-[#262523] mb-4">Key Benefits</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {active.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#262523] shrink-0" />
                    <span className="text-[#81817D] font-inter text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
