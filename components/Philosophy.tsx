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
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              >
                <p className="display-text text-2xl md:text-4xl lg:text-5xl text-deep-black leading-tight">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </BentoCard>
  );
}
