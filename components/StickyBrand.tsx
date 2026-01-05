'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function StickyBrand() {
  const [isVisible, setIsVisible] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const updateVisibility = () => {
      // Show when scrolled past hero section (after Arpazan animation completes)
      // Hide during the animation (300-500) and show after 500
      const scrollPos = window.scrollY;
      setIsVisible(scrollPos > 500);
    };

    window.addEventListener('scroll', updateVisibility);
    updateVisibility();

    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const switchLanguage = (newLocale: string) => {
    // Remove current locale from pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');
    // Build new path with new locale
    const newPath = `/${newLocale}${pathnameWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-40"
      initial={{ opacity: 0, y: -100 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -100
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-full px-6 md:px-12 py-4 backdrop-blur-md bg-off-white/80 border-b border-zinc-subtle/10">
        <div className="max-w-7xl mx-auto relative flex items-center justify-center">
          {/* Arpazan Brand - Center */}
          <h1 className="display-text text-2xl md:text-3xl font-bold text-electric-crimson tracking-tight">
            Arpazan
          </h1>

          {/* Language Switcher - Absolute Right */}
          <div className="absolute right-0 flex gap-2 px-4 py-2">
            <button
              onClick={() => switchLanguage('en')}
              className={`px-3 py-1 text-sm font-medium transition-colors ${
                locale === 'en'
                  ? 'text-deep-black bg-deep-black/5'
                  : 'text-zinc-subtle hover:text-deep-black hover:bg-deep-black/5'
              }`}
            >
              EN
            </button>
            <span className="text-zinc-subtle self-center">|</span>
            <button
              onClick={() => switchLanguage('th')}
              className={`px-3 py-1 text-sm font-medium transition-colors ${
                locale === 'th'
                  ? 'text-deep-black bg-deep-black/5'
                  : 'text-zinc-subtle hover:text-deep-black hover:bg-deep-black/5'
              }`}
            >
              TH
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
