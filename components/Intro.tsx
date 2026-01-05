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
          className="display-text text-3xl md:text-5xl lg:text-6xl text-deep-black"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          I don't believe <span className="text-electric-crimson">growth</span> is measured by the number of tools I've used.
        </motion.p>

        {/* Line 2 - Subtle delayed fade */}
        <motion.p
          className="display-text text-3xl md:text-5xl lg:text-6xl text-zinc-subtle mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: 'easeOut' }}
        >
          It's measured by how my <span className="text-electric-crimson font-medium">thinking evolved</span> alongside them.
        </motion.p>
      </div>
    </section>
  );
}
