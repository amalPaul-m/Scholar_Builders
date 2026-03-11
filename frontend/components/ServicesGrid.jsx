'use client';
import {
  ClipboardList,
  Factory,
  Map,
  ShieldCheck,
  Leaf,
  Sofa,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  ClipboardList,
  Factory,
  Map,
  ShieldCheck,
  Leaf,
  Sofa,
};

function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || ClipboardList;
  return (
    <div className="group bg-white border border-[#B3B2AE]/30 p-8 rounded-sm hover:bg-[#262523] transition-all duration-300 cursor-pointer">
      <div className="w-12 h-12 bg-[#E3EBD2] rounded-sm flex items-center justify-center mb-5 group-hover:bg-[#E3EBD2]/20 transition-colors">
        <Icon size={22} className="text-[#262523] group-hover:text-[#E3EBD2]" />
      </div>
      <h3 className="font-poppins font-semibold text-[#262523] group-hover:text-white text-base mb-3">
        {service.title}
      </h3>
      <p className="text-[#81817D] group-hover:text-[#B3B2AE] text-sm font-inter leading-relaxed">
        {service.description}
      </p>
      <div className="flex items-center gap-2 mt-5 text-[#81817D] group-hover:text-[#E3EBD2] text-sm font-poppins font-medium">
        Learn more <ArrowRight size={14} />
      </div>
    </div>
  );
}

export default function ServicesGrid({ services }) {
  return (
    <section className="py-20 bg-[#E3EBD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#262523]" />
            <span className="text-[#81817D] text-sm font-inter tracking-widest uppercase">
              What We Do
            </span>
          </div>
          <h2 className="font-poppins font-bold text-[#262523] text-3xl sm:text-4xl lg:text-[36px] max-w-xl">
            Complete Construction & Approval Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {services.slice(4).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
