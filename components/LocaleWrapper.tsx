'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import SmoothScroll from './SmoothScroll';

export default function LocaleWrapper({ children }: { children: React.ReactNode }) {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <>
      <SmoothScroll />
      {children}
    </>
  );
}
