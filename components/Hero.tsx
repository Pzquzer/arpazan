'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

export default function Hero() {
  const t = useTranslations('hero');
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center grain-overlay overflow-hidden">
      <motion.div
        className="w-full max-w-7xl mx-auto px-6 md:px-12"
        style={{ y, opacity }}
      >
        {/* Left: Title/Description */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="display-text text-4xl md:text-6xl lg:text-7xl text-deep-black mb-6 leading-tight">
            {t('title')}
          </h1>
          <h2 className="display-text text-2xl md:text-3xl lg:text-4xl text-zinc-subtle mb-8">
            {t('subtitle')}
          </h2>
          <p className="body-text text-base md:text-lg text-zinc-subtle max-w-xl whitespace-pre-line">
            {t('description')}
          </p>
        </motion.div>

        {/* Right: Tagline */}
        <motion.div
          className="text-right mb-8 md:mb-12"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="body-text text-xl md:text-2xl lg:text-3xl text-zinc-subtle italic">
            Exploring evolving systems.
          </p>
        </motion.div>

        {/* Center: I'm Tan, a developer behind Arpazan */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="body-text text-lg md:text-xl lg:text-2xl text-zinc-subtle mb-4">
            I'm Tan, a developer behind
          </p>
          <h2 className="display-text text-7xl md:text-8xl lg:text-9xl font-bold text-deep-black tracking-tight">
            Arpazan
          </h2>
        </motion.div>
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
