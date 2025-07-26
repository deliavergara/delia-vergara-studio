import { HamburgerMenu } from "@/components/HamburgerMenu";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="relative">
      <HamburgerMenu />
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default Index;
