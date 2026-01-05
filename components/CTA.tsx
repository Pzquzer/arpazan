'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import BentoCard from './BentoCard';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations('cta');

  return (
    <BentoCard variant="dark" minHeight="min-h-[500px]">
      <div ref={ref} className="h-full flex flex-col items-center justify-center p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1 }}
          >
            <p className="display-text text-3xl md:text-5xl lg:text-6xl text-off-white mb-4 md:mb-6">
              The <span className="text-electric-crimson">tools</span> will change.
            </p>
            <motion.p
              className="display-text text-3xl md:text-5xl lg:text-6xl text-stone-muted mb-12 md:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              The <span className="text-electric-crimson font-medium">thinking</span> will keep evolving.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button
              className="group relative px-10 py-5 border-2 border-electric-crimson text-electric-crimson text-base md:text-lg overflow-hidden font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-off-white">
                {t('button')}
              </span>
              <motion.div
                className="absolute inset-0 bg-electric-crimson"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </motion.button>
          </motion.div>

          <motion.p
            className="body-text text-stone-muted mt-16 text-xs md:text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {t('footer')}
          </motion.p>
        </div>
      </div>
    </BentoCard>
  );
}
