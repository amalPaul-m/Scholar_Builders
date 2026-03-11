import Link from 'next/link';
import { Phone, MessageSquare } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-[#E3EBD2] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B3B2AE]/20 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#B3B2AE]/10 rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-0.5 bg-[#262523]" />
            <span className="text-[#81817D] text-sm font-inter tracking-widest uppercase">
              Get In Touch
            </span>
            <span className="w-8 h-0.5 bg-[#262523]" />
          </div>
          <h2 className="font-poppins font-bold text-[#262523] text-3xl sm:text-4xl lg:text-[40px] leading-tight mb-6">
            Need Construction or Approval Consultancy?
          </h2>
          <p className="text-[#81817D] font-inter text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            From building permits to turnkey construction — our experts are ready to help
            you every step of the way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-3 bg-[#262523] text-white px-8 py-4 font-poppins font-semibold text-base rounded-sm hover:bg-[#81817D] transition-colors"
            >
              <Phone size={18} />
              Call Now
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-3 border-2 border-[#262523] text-[#262523] px-8 py-4 font-poppins font-semibold text-base rounded-sm hover:bg-[#262523] hover:text-white transition-all"
            >
              <MessageSquare size={18} />
              Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
