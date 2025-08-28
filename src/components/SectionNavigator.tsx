import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Section } from '@/hooks/useSectionSnap';

interface SectionNavigatorProps {
  sections: Section[];
  activeSection: number;
  onSectionClick: (index: number) => void;
  onPrevSection: () => void;
  onNextSection: () => void;
}

export function SectionNavigator({
  sections,
  activeSection,
  onSectionClick,
  onPrevSection,
  onNextSection
}: SectionNavigatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4"
    >
      {/* Previous Section Button */}
      <motion.button
        onClick={onPrevSection}
        disabled={activeSection === 0}
        className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted/80 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronUp className="h-4 w-4" />
      </motion.button>

      {/* Section Dots */}
      <div className="flex flex-col gap-3 py-4">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => onSectionClick(index)}
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                index === activeSection
                  ? 'bg-primary border-primary shadow-lg shadow-primary/25'
                  : 'bg-background border-muted-foreground/30 hover:border-primary/50'
              }`}
              animate={{
                scale: index === activeSection ? 1.2 : 1,
              }}
            />
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-popover border border-border rounded-md text-sm font-medium whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              {section.name}
            </motion.div>
          </motion.button>
        ))}
      </div>

      {/* Next Section Button */}
      <motion.button
        onClick={onNextSection}
        disabled={activeSection === sections.length - 1}
        className="p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted/80 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronDown className="h-4 w-4" />
      </motion.button>
    </motion.div>
  );
}