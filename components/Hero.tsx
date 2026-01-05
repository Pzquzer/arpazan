'use client';

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';

export default function Hero() {
  const t = useTranslations('hero');
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [isSticky, setIsSticky] = useState(false);

  // Arpazan scroll animation - move up to header position (faster)
  const arpazanY = useTransform(scrollY, [0, 400], [0, -450]);
  const arpazanScale = useTransform(scrollY, [0, 400], [1, 0.3]);
  const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsSticky(latest > 300 && latest < 500);
  });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center grain-overlay overflow-hidden bg-gradient-to-b from-off-white to-zinc-50">
      <motion.div
        className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8"
        style={{ y, opacity }}
      >
        {/* Top: Title/Description (Left) & Tagline (Right) */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12 mb-16 md:mb-20 lg:mb-24">
          {/* Left: Title/Description */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="display-text text-4xl md:text-6xl lg:text-7xl text-deep-black mb-8 font-semibold">
              {t('title')}
            </h1>
            <h2 className="display-text text-2xl md:text-3xl lg:text-4xl text-zinc-600 mb-6">
              {t('subtitle')}
            </h2>
            <p className="body-text text-base md:text-lg text-zinc-500 max-w-xl whitespace-pre-line">
              {t('description')}
            </p>
          </motion.div>

          {/* Right: Tagline */}
          <motion.div
            className="text-right md:text-right self-start md:self-center md:max-w-md"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="body-text text-xl md:text-2xl lg:text-3xl text-zinc-500 italic font-light">
              Exploring <span className="text-electric-crimson font-medium">evolving</span> systems.
            </p>
          </motion.div>
        </div>

        {/* Center: I'm Tan, a developer behind Arpazan */}
        <div className="text-center mt-8">
          <motion.p
            className="body-text text-lg md:text-xl lg:text-2xl text-zinc-600 font-light tracking-wide mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ opacity: textOpacity }}
          >
            I'm <span className="text-electric-crimson font-medium">Tan</span>, a developer behind
          </motion.p>

          <motion.h2
            className="display-text text-7xl md:text-8xl lg:text-9xl font-extrabold text-electric-crimson tracking-tighter leading-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{
              y: arpazanY,
              scale: arpazanScale,
              position: isSticky ? 'fixed' : 'relative',
              top: isSticky ? '24px' : 'auto',
              left: isSticky ? '50%' : 'auto',
              x: isSticky ? '-50%' : 0,
              zIndex: 45,
              width: isSticky ? 'auto' : '100%'
            }}
          >
            Arpazan
          </motion.h2>
        </div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
      >
        <span className="body-text text-xs text-zinc-subtle uppercase tracking-wider">Scroll</span>
        <motion.div
          className="w-[1px] h-16 bg-zinc-subtle"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
