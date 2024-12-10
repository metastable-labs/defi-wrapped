'use client';

import { motion } from 'framer-motion';

interface StepProps {
  enter: 'ltr' | 'rtl';
  exit: 'ltr' | 'rtl';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Step({ enter, exit, variant = 'primary', children }: StepProps) {
  const animations = {
    primary: {
      initial: (direction: 'ltr' | 'rtl') => ({
        x: direction === 'ltr' ? '-100%' : '100%',
        opacity: 0,
      }),
      animate: {
        x: '0%',
        opacity: 1,
        transition: { type: 'spring', stiffness: 50 },
      },
      exit: (direction: 'ltr' | 'rtl') => ({
        x: direction === 'ltr' ? '100%' : '-100%',
        opacity: 0,
        transition: { type: 'spring', stiffness: 50 },
      }),
    },
    secondary: {
      initial: (direction: 'ltr' | 'rtl') => ({
        x: direction === 'ltr' ? '-100%' : '100%',
        opacity: 0,
      }),
      animate: {
        x: '0%',
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut' },
      },
      exit: (direction: 'ltr' | 'rtl') => ({
        x: direction === 'ltr' ? '100%' : '-100%',
        opacity: 0,
        transition: { duration: 0.5, ease: 'easeInOut' },
      }),
    },
  };

  const selectedVariant = animations[variant];

  return (
    <motion.div
      initial={selectedVariant.initial(enter)}
      animate={selectedVariant.animate}
      exit={selectedVariant.exit(exit)}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
