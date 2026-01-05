'use client';

import { forwardRef, CSSProperties } from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'elevated';
  className?: string;
  minHeight?: string;
  style?: CSSProperties;
}

const BentoCard = forwardRef<HTMLDivElement, BentoCardProps>(
  ({ children, variant = 'light', className = '', minHeight = 'min-h-[400px]', style }, ref) => {
    const variantClasses = {
      light: 'bento-card border border-zinc-subtle/15',
      dark: 'bento-card-dark',
      elevated: 'bento-card-elevated border border-zinc-subtle/15',
    };

    return (
      <div
        ref={ref}
        className={`${variantClasses[variant]} ${minHeight} ${className}`}
        style={style}
      >
        {children}
      </div>
    );
  }
);

BentoCard.displayName = 'BentoCard';

export default BentoCard;
