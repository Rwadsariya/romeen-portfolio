import { ThemeProvider } from "@/components/ThemeProvider"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Experience } from "@/components/Experience"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { ScrollProgress } from "@/components/ScrollProgress"
import { SectionNavigator } from "@/components/SectionNavigator"
import { useSectionSnap, Section } from "@/hooks/useSectionSnap"

const sections: Section[] = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'experience', name: 'Experience' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' }
];

const Index = () => {
  const {
    activeSection,
    scrollToSection,
    nextSection,
    prevSection
  } = useSectionSnap(sections);

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background snap-y snap-mandatory overflow-y-scroll">
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        
        <SectionNavigator
          sections={sections}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
          onPrevSection={prevSection}
          onNextSection={nextSection}
        />
      </div>
    </ThemeProvider>
  );
};

export default Index;
