import Link from 'next/link';
import { MapPin, Phone, Mail, HardHat } from 'lucide-react';

const footerServices = [
  'Plan & Estimate',
  'Industrial Construction',
  'Town Planning Approval',
  'Fire & Rescue NOC',
  'Pollution Control Approval',
  'Interior Works',
];

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#262523] text-[#B3B2AE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top: Logo & tagline */}
        <div className="mb-12 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#E3EBD2] rounded-sm flex items-center justify-center">
            <HardHat size={22} className="text-[#262523]" />
          </div>
          <div>
            <span className="font-poppins font-bold text-white text-xl leading-none block">
              Scholar Builders & Interiors
            </span>
            <span className="text-[#81817D] text-xs tracking-widest uppercase font-inter">
              Construction & Consultancy
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Services */}
          <div>
            <h4 className="text-white font-poppins font-semibold text-sm uppercase tracking-widest mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {footerServices.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-[#81817D] hover:text-[#E3EBD2] text-sm font-inter transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#81817D] rounded-full inline-block" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Know More */}
          <div>
            <h4 className="text-white font-poppins font-semibold text-sm uppercase tracking-widest mb-5">
              Know More
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[#81817D] hover:text-[#E3EBD2] text-sm font-inter transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#81817D] rounded-full inline-block" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-white font-poppins font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#E3EBD2] mt-0.5 shrink-0" />
                <span className="text-sm font-inter text-[#81817D]">
                  SCHOLAR BUILDERS & INTERIORS<br />
                  Sriram Tower, First Floor,<br />
                  Near KSEB, Pooppani Road, Perumbavoor
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#E3EBD2] shrink-0" />
                <a href="tel:+919961244001" className="text-sm font-inter text-[#81817D] hover:text-[#E3EBD2] transition-colors">
                  +91 99612 44001
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#E3EBD2] shrink-0" />
                <a href="mailto:scholarbuilderspbvr@gmail.com" className="text-sm font-inter text-[#81817D] hover:text-[#E3EBD2] transition-colors">
                  scholarbuilderspbvr@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#81817D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[#81817D] text-xs font-inter">
            © {new Date().getFullYear()} Scholar Builders. All Rights Reserved.
          </p>
          <p className="text-[#81817D]/50 text-xs font-inter">
            Perumbavoor · Ernakulam · Kerala
          </p>
        </div>
      </div>
    </footer>
  );
}
