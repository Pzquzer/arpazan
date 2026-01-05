'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

export default function Intro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });
  const t = useTranslations('intro');

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 bg-off-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Line 1 - Fade in only, no distraction */}
        <motion.p
          className="display-text text-3xl md:text-5xl lg:text-6xl text-deep-black leading-tight"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          {t('line1')}
        </motion.p>

        {/* Line 2 - Subtle delayed fade */}
        <motion.p
          className="display-text text-3xl md:text-5xl lg:text-6xl text-zinc-subtle leading-tight mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: 'easeOut' }}
        >
          {t('line2')}
        </motion.p>
      </div>
    </section>
  );
}
