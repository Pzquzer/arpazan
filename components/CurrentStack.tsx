'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import BentoCard from './BentoCard';

export default function CurrentStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations('currentStack');
  const principles = t.raw('principles') as any[];

  return (
    <BentoCard variant="elevated" minHeight="min-h-[600px]">
      <div ref={ref} className="h-full p-8 md:p-12">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="display-text text-xl md:text-2xl text-zinc-subtle mb-3">
            {t('title')}
          </h2>
          <p className="body-text text-sm md:text-base text-zinc-subtle">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {principles.map((item, index) => (
            <motion.div
              key={item.principle}
              className="bento-card border border-zinc-subtle/15 p-6 min-h-[200px] hover:border-electric-crimson/30 transition-all"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-semibold text-electric-crimson mb-2">
                  {item.principle}
                </h3>
                <p className="text-deep-black font-mono text-xs md:text-sm font-medium">
                  → {item.tech}
                </p>
              </div>

              <p className="body-text text-xs md:text-sm text-zinc-subtle">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
