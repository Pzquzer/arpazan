'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function StickyBrand() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      // Show when scrolled past hero section (after Arpazan animation completes)
      // Hide during the animation (300-500) and show after 500
      const scrollPos = window.scrollY;
      setIsVisible(scrollPos > 500);
    };

    window.addEventListener('scroll', updateVisibility);
    updateVisibility();

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-40"
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -100
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-full px-6 md:px-12 py-4 backdrop-blur-md bg-off-white/80">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="display-text text-2xl md:text-3xl font-bold text-electric-crimson tracking-tight">
            Arpazan
          </h1>
        </div>
      </div>
    </motion.div>
  );
}
