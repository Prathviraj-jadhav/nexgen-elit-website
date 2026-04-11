'use client';
import { motion, type Variants, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

/* ============================================
   FADE IN  Bidirectional scroll animation
   Fades in when scrolling DOWN into view,
   fades out when scrolling UP away from view.
   ============================================ */

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean; // if true, stays visible after first appearance
}

export function FadeIn({ children, className, delay = 0, y = 24, once = false }: FadeInProps) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.61, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   SCROLL REVEAL  Rich micro-animation wrapper
   Supports multiple animation styles:
   - fadeUp (default)
   - fadeLeft
   - fadeRight
   - scaleUp
   - blurIn
   All bidirectional: fade in on scroll down,
   fade out on scroll up.
   ============================================ */

type AnimationStyle = 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleUp' | 'blurIn';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  style?: AnimationStyle;
  once?: boolean;
  distance?: number;
}

const animationVariants: Record<AnimationStyle, { hidden: Record<string, number | string>; visible: Record<string, number | string> }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 30, filter: 'blur(0px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -30, filter: 'blur(0px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 30, filter: 'blur(0px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.92, filter: 'blur(0px)' },
    visible: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  },
  blurIn: {
    hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.6,
  style = 'fadeUp',
  once = false,
}: ScrollRevealProps) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return <div className={className}>{children}</div>;

  const variants = animationVariants[style];

  return (
    <motion.div
      initial={variants.hidden}
      whileInView={variants.visible}
      exit={variants.hidden}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   STAGGER CONTAINER  For child list animations
   ============================================ */

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.08,
  once = false,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 20,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   LINE REVEAL  For borders / dividers
   ============================================ */

export function LineReveal({
  className,
  direction = 'left',
  delay = 0,
}: {
  className?: string;
  direction?: 'left' | 'right' | 'center';
  delay?: number;
}) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const controls = useAnimation();

  useEffect(() => {
    if (!prefersReduced) {
      if (isInView) {
        controls.start('visible');
      }
    }
  }, [isInView, controls, prefersReduced]);

  const scaleXMap = {
    left: { hidden: { scaleX: 0, originX: 0 }, visible: { scaleX: 1, originX: 0 } },
    right: { hidden: { scaleX: 0, originX: 1 }, visible: { scaleX: 1, originX: 1 } },
    center: { hidden: { scaleX: 0, originX: 0.5 }, visible: { scaleX: 1, originX: 0.5 } },
  };

  if (prefersReduced) return <div className={className} />;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={scaleXMap[direction]}
      transition={{ duration: 0.8, delay, ease: [0.22, 0.61, 0.36, 1] }}
    />
  );
}

/* ============================================
   LEGACY VARIANTS (kept for backward compat)
   ============================================ */

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};
