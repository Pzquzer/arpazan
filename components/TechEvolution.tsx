'use client';

import { motion, useInView, useScroll } from 'framer-motion';
import { useRef, useState, useEffect, forwardRef } from 'react';
import { techEras } from '@/data/techEras';
import { useTranslations } from 'next-intl';
import Icon from './Icon';

export default function TechEvolution() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const containerRef = useRef(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Scroll progress for the entire TechEvolution section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Check if Tech Evolution section is in view
  const containerInView = useInView(containerRef, {
    margin: "-20% 0px -20% 0px"
  });

  useEffect(() => {
    setShowProgress(containerInView);
  }, [containerInView]);

  // Function to scroll to specific section
  const scrollToSection = (index: number) => {
    const targetSection = sectionRefs.current[index];
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <section ref={containerRef} className="relative">
      {/* Scroll Progress Indicator - Fixed on left side */}
      <motion.div
        className="hidden lg:block fixed left-8 z-50"
        style={{ top: '50vh' }}
        initial={{ opacity: 0, x: -20, y: '-50%' }}
        animate={{
          opacity: showProgress ? 1 : 0,
          x: showProgress ? 0 : -20,
          y: '-50%'
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Background line */}
        <div className="relative w-px h-[400px] bg-zinc-subtle/20">
          {/* Progress line */}
          <motion.div
            className="absolute top-0 left-0 w-full bg-deep-black origin-top"
            style={{
              scaleY: scrollYProgress
            }}
          />

          {/* Year dots and labels */}
          <div className="absolute inset-0">
            {techEras.map((era, index) => {
              const position = (index / (techEras.length - 1)) * 100;
              const isActive = activeIndex === index;

              return (
                <div
                  key={era.id}
                  className="absolute left-0 -translate-x-1/2 cursor-pointer group"
                  style={{ top: `${position}%` }}
                  onClick={() => scrollToSection(index)}
                >
                  {/* Dot */}
                  <motion.div
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-deep-black border-deep-black scale-125'
                        : 'bg-off-white border-zinc-subtle/40 group-hover:border-deep-black/60 group-hover:scale-110'
                    }`}
                  />

                  {/* Year label */}
                  <motion.span
                    className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm font-medium select-none"
                    animate={{
                      opacity: isActive ? 1 : 0.3,
                      x: isActive ? 0 : -10,
                      scale: isActive ? 1 : 0.95
                    }}
                    whileHover={{
                      opacity: 0.8,
                      x: 2
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {era.id}
                  </motion.span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Era Sections */}
      {techEras.map((era, index) => (
        <EraSection
          key={era.id}
          era={era}
          index={index}
          isActive={activeIndex === index}
          onInView={() => setActiveIndex(index)}
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
        />
      ))}
    </section>
  );
}

interface EraSectionProps {
  era: {
    id: number;
    title: string;
    caption: string;
    technologies: { name: string; description?: string }[];
    theme: string;
  };
  index: number;
  isActive: boolean;
  onInView: () => void;
}

const EraSection = forwardRef<HTMLElement, EraSectionProps>(
  ({ era, index, onInView }, forwardedRef) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '-40% 0px -40% 0px' });
    const t = useTranslations();

    useEffect(() => {
      if (isInView) {
        onInView();
      }
    }, [isInView, onInView]);

    // Determine if this is the hero (2025)
    const isHero = era.id === 2025;

    // Get translated era data
    const eras = t.raw('eras') as any[];
    const eraData = eras.find((e) => e.year === era.id) || { title: era.title, caption: era.caption };

    return (
      <motion.section
        ref={(el) => {
          // Set both refs
          if (typeof forwardedRef === 'function') {
            forwardedRef(el);
          } else if (forwardedRef) {
            forwardedRef.current = el;
          }
          (ref as any).current = el;
        }}
        className={`sticky h-[100vh] flex items-center top-20 md:top-24`}
        style={{
          zIndex: index,
          backgroundColor: 'var(--bg-primary)'
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
      <div className="w-full h-full mx-auto px-6 md:px-24 py-12 flex flex-col" style={{ backgroundColor: era.theme }}>
        {/* Section Header - Year and Title on Right */}
        <motion.div
          className="mb-12 md:mb-16 flex flex-col gap-3 items-end text-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Year */}
          <motion.div>
            <span
              className={`
                display-text font-medium text-deep-black
                ${isHero ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl lg:text-5xl'}
              `}
            >
              {era.id}
            </span>
          </motion.div>

          {/* Title */}
          <h3
            className={`
              display-text text-deep-black leading-tight
              ${isHero ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl md:text-2xl lg:text-3xl'}
            `}
          >
            {eraData.title}
          </h3>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 mb-12">
          {era.technologies.map((tech, techIndex) => {
            // Cascade delay
            const cascadeDelay = techIndex * 0.08;

            return (
              <motion.div
                key={`${tech.name}-${techIndex}`}
                className="
                  bento-card
                  p-3 md:p-4
                  min-h-[140px] md:min-h-[160px]
                  flex flex-col items-center justify-center gap-2
                "
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: cascadeDelay,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                {/* Tech Icon */}
                <Icon
                  name={tech.name}
                  className="w-10 h-10 md:w-11 md:h-11 opacity-80"
                />

                {/* Tech Name */}
                <span className="text-center font-semibold text-deep-black text-sm md:text-base">
                  {tech.name}
                </span>

                {/* Tech Description */}
                {tech.description && (
                  <span className="text-xs md:text-sm text-zinc-subtle font-light text-center leading-relaxed">
                    {tech.description}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Caption */}
        <motion.p
          className={`
            body-text italic font-light leading-relaxed text-zinc-subtle text-right
            ${isHero ? 'text-lg md:text-xl' : 'text-base md:text-lg'}
          `}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          "{eraData.caption}"
        </motion.p>
      </div>
      </motion.section>
    );
  }
);

EraSection.displayName = 'EraSection';
