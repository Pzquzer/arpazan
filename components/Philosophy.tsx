'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import BentoCard from './BentoCard';

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations('philosophy');
  const points = t.raw('points') as string[];

  return (
    <BentoCard variant="elevated" minHeight="min-h-[600px]">
      <div ref={ref} className="h-full flex items-center justify-center p-8 md:p-12">
        <div className="max-w-xl">
          <motion.h2
            className="display-text text-xl md:text-2xl text-zinc-subtle mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            {t('title')}
          </motion.h2>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="display-text text-2xl md:text-4xl lg:text-5xl text-deep-black">
                I choose tools for <span className="text-electric-crimson font-medium">clarity</span>, not trends.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <p className="display-text text-2xl md:text-4xl lg:text-5xl text-deep-black">
                I design interfaces to feel <span className="text-electric-crimson font-medium">effortless</span>.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="display-text text-2xl md:text-4xl lg:text-5xl text-deep-black">
                I value <span className="text-electric-crimson font-medium">maintainability</span> more than cleverness.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
