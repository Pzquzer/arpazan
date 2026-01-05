'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import BentoCard from './BentoCard';
import Icon from './Icon';

interface Technology {
  name: string;
  description?: string;
}

interface EraData {
  year: number;
  title: string;
  caption: string;
  technologies: Technology[];
}

interface EraSectionProps {
  era: EraData;
  isActive?: boolean;
}

// Background colors for alternating cards
const bgColors = ['var(--card-bg-1)', 'var(--card-bg-2)', 'var(--card-bg-3)'];

export default function EraSection({ era, isActive = true }: EraSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Get background color based on year
  const yearIndex = [2017, 2021, 2022, 2023, 2024, 2025].indexOf(era.year);
  const bgColor = bgColors[yearIndex % 3];

  return (
    <motion.div
      animate={{
        opacity: isActive ? 1 : 0.4,
        scale: isActive ? 1 : 0.98,
      }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="group"
    >
      <BentoCard
        variant="elevated"
        minHeight="min-h-[600px]"
        className="transition-all duration-500 hover:shadow-lg"
        style={{ backgroundColor: bgColor }}
      >
      <div ref={ref} className="h-full p-10 md:p-16 flex flex-col items-center justify-center text-center">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Year - Large, centered */}
          <div className="mb-8">
            <span className="display-text text-6xl md:text-7xl lg:text-8xl font-medium text-deep-black">
              {era.year}
            </span>
          </div>

          {/* Title - Centered */}
          <h2 className="display-text text-3xl md:text-4xl lg:text-5xl text-deep-black mb-12 leading-tight">
            {era.title}
          </h2>

          {/* Tech Stack - Bento Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {era.technologies.map((tech, index) => {
              // Create varied sizes for bento effect
              const isLarge = index % 5 === 0;
              const isMedium = index % 3 === 0 && !isLarge;

              return (
                <motion.div
                  key={tech.name}
                  className={`
                    ${isLarge ? 'col-span-2 row-span-2' : isMedium ? 'col-span-2' : 'col-span-1'}
                    bento-card border border-zinc-subtle/15 p-6 md:p-8
                    hover:border-deep-black/30 hover:shadow-md hover:scale-105
                    transition-all duration-300
                    flex flex-col items-center justify-center gap-3
                    min-h-[120px] md:min-h-[140px]
                    ${isLarge ? 'md:min-h-[280px]' : ''}
                  `}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Icon
                    name={tech.name}
                    className={`
                      ${isLarge ? 'w-20 h-20 md:w-32 md:h-32' : 'w-14 h-14 md:w-20 md:h-20'}
                      text-deep-black opacity-80 hover:opacity-100 transition-opacity
                    `}
                  />
                  {tech.description && (
                    <span className="text-xs md:text-sm text-zinc-subtle text-center font-light">
                      {tech.description}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Caption - Appears on hover/active */}
          <motion.p
            className="body-text text-base md:text-lg lg:text-xl text-zinc-subtle italic font-light leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.6 }}
          >
            "{era.caption}"
          </motion.p>
        </motion.div>
      </div>
    </BentoCard>
    </motion.div>
  );
}
