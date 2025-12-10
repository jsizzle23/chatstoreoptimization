import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function AnimatedContainer({
  children,
  className,
  delay = 0,
}: AnimatedContainerProps) {
  return (
    <AnimatePresence>
      <motion.div
        className={cn('w-full', className)}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={stagger}
      >
        <motion.div
          variants={fadeInUp}
          transition={{
            duration: 0.5,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function AnimatedList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn('space-y-4', className)}
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={fadeInUp}>{child}</motion.div>
      ))}
    </motion.div>
  );
} 