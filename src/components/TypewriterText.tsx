import { motion } from 'framer-motion';
import { useTypewriter } from '@/hooks/useTypewriter';

interface TypewriterTextProps {
  words: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  delay?: number;
  showCursor?: boolean;
}

export function TypewriterText({
  words,
  className = '',
  speed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  delay = 0,
  showCursor = true
}: TypewriterTextProps) {
  const text = useTypewriter({
    words,
    speed,
    deleteSpeed,
    pauseTime,
    delay
  });

  return (
    <span className={className}>
      {text}
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="text-primary"
        >
          |
        </motion.span>
      )}
    </span>
  );
}