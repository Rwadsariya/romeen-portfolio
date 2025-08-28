import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface PowerPointSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  animationType?: 'slideUp' | 'slideLeft' | 'slideRight' | 'fade' | 'scale' | 'flip';
  delay?: number;
}

const animations = {
  slideUp: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  flip: {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0 }
  }
};

export function PowerPointSection({
  children,
  id,
  className = '',
  animationType = 'slideUp',
  delay = 0
}: PowerPointSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: '-10% 0px -10% 0px' 
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`min-h-screen snap-start ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.div
        variants={animations[animationType]}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}