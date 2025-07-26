import { useState, useRef, useEffect } from "react";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductGrid } from "@/components/ProductGrid";
import { HowToBuySection } from "@/components/HowToBuySection";
import { jewelryData } from "@/data/jewelry";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<string>("hero");
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  const earringsRef = useRef<HTMLDivElement>(null);
  const howToBuyRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    const refs = {
      hero: heroRef,
      about: aboutRef,
      rings: ringsRef,
      earrings: earringsRef,
      'how-to-buy': howToBuyRef,
    };

    const targetRef = refs[section as keyof typeof refs];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(section);
    }
  };

  // Scroll detection for current section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollY < windowHeight * 0.5) {
        setCurrentSection("hero");
      } else if (scrollY < windowHeight * 1.5) {
        setCurrentSection("about");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <HamburgerMenu onNavigate={handleNavigate} />
      
      <div ref={heroRef}>
        <HeroSection />
      </div>
      
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      
      <div ref={ringsRef}>
        <ProductGrid items={jewelryData} category="rings" />
      </div>
      
      <div ref={earringsRef}>
        <ProductGrid items={jewelryData} category="earrings" />
      </div>
      
      <div ref={howToBuyRef}>
        <HowToBuySection />
      </div>
    </div>
  );
};

export default Index;
