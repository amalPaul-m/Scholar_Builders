'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed right-6 bottom-6 z-50 w-11 h-11 rounded-full bg-[#2b241d] text-white flex items-center justify-center shadow-lg hover:bg-black transition-all duration-300 ease-in-out hover:-translate-y-0.5"
      aria-label="Move to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
