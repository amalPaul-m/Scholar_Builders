'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, HardHat } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/75 backdrop-blur-md border-b border-black/10 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-[#2b241d]">
            <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/60">
              <HardHat size={20} className="text-[#2b241d]" />
            </div>
            <div className="leading-none">
              <span className="font-playfair text-lg tracking-wide">Scholar</span>
              <span className="font-poppins text-[11px] tracking-[0.35em] uppercase text-[#5a4b3f] block">
                Builders
              </span>
            </div>
          </Link>

          {/* Desktop Nav Pill */}
          <div className="hidden lg:flex items-center gap-4 bg-white/90 backdrop-blur rounded-full px-6 py-3 shadow-lg">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[#3b332a] hover:text-[#6b5745] text-sm font-inter font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="bg-[#3b332a] text-white px-4 py-1.5 text-xs font-poppins font-semibold rounded-full hover:bg-[#2a241e] transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white bg-white/20 backdrop-blur rounded-full p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-[#2c251f] z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col px-6 py-8 gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-[#B3B2AE] hover:text-white text-lg font-poppins font-medium border-b border-[#81817D]/30 pb-4 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-[#E3EBD2] text-[#262523] px-6 py-3 text-base font-poppins font-semibold rounded-sm text-center mt-4"
          >
            Get Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
