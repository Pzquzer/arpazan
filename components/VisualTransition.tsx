'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import BentoCard from './BentoCard';

export default function VisualTransition() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-150px" });
  const t = useTranslations('transition');
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <BentoCard variant="dark" minHeight="min-h-[500px]" className="lg:aspect-bento-wide">
      <div ref={containerRef} className="relative h-full flex items-center justify-center overflow-hidden">
        <motion.div
          className="max-w-4xl mx-auto p-8 md:p-12 text-center"
          style={{ scale, opacity }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <p className="display-text text-3xl md:text-5xl lg:text-6xl text-off-white mb-8 md:mb-12">
              <span className="text-electric-crimson">Technology</span> evolved —
            </p>
            <motion.p
              className="display-text text-3xl md:text-5xl lg:text-6xl text-stone-muted"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              so did my <span className="text-electric-crimson font-medium">perspective</span>.
            </motion.p>
          </motion.div>

          {/* Decorative morphing elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-24 h-24 border border-stone-muted/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-20 h-20 border border-stone-muted/20"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
    </BentoCard>
  );
}
