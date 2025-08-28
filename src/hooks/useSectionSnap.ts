import { useEffect, useRef, useState } from 'react';

export interface Section {
  id: string;
  name: string;
}

export const useSectionSnap = (sections: Section[]) => {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sectionElements = sections.map(section => 
      document.getElementById(section.id)
    ).filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionIndex = sections.findIndex(
              section => section.id === entry.target.id
            );
            if (sectionIndex !== -1) {
              setActiveSection(sectionIndex);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    sectionElements.forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sections]);

  const scrollToSection = (index: number) => {
    const section = document.getElementById(sections[index]?.id);
    if (section && !isScrolling) {
      setIsScrolling(true);
      section.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  const nextSection = () => {
    if (activeSection < sections.length - 1) {
      scrollToSection(activeSection + 1);
    }
  };

  const prevSection = () => {
    if (activeSection > 0) {
      scrollToSection(activeSection - 1);
    }
  };

  return {
    activeSection,
    scrollToSection,
    nextSection,
    prevSection,
    isScrolling
  };
};