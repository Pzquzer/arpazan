'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateVisibility = () => {
      // Hide when sticky header appears (after 500px)
      const scrollPos = window.scrollY;
      setIsVisible(scrollPos <= 500);
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
      className="fixed top-6 right-6 md:top-8 md:right-8 z-50 flex gap-2 px-6 py-3 backdrop-blur-md bg-off-white/80 shadow-sm border border-zinc-subtle/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
    >
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
    </motion.div>
  );
}
