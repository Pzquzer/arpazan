'use client';

import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import TechEvolution from '@/components/TechEvolution';
import VisualTransition from '@/components/VisualTransition';
import Philosophy from '@/components/Philosophy';
import CurrentStack from '@/components/CurrentStack';
import CTA from '@/components/CTA';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import StickyBrand from '@/components/StickyBrand';

export default function Home() {
  return (
    <>
      <LanguageSwitcher />
      <StickyBrand />

      {/* Hero - Full screen outside grid */}
      <Hero />

      {/* Intro - Full screen outside grid */}
      <Intro />

      <main className="bg-off-white min-h-screen overflow-visible">
        <div className="w-full overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-12 overflow-visible">

          {/* Tech Evolution - Asymmetric Bento Grid Timeline */}
          <div className="lg:col-span-12 overflow-visible">
            <TechEvolution />
          </div>

          {/* Visual Transition - Full width */}
          <div className="lg:col-span-12">
            <VisualTransition />
          </div>

          {/* Philosophy & Current Stack - Side by side on desktop */}
          <div className="lg:col-span-6">
            <Philosophy />
          </div>
          <div className="lg:col-span-6">
            <CurrentStack />
          </div>

          {/* CTA - Full width */}
          <div className="lg:col-span-12">
            <CTA />
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
