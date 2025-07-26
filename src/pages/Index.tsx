import { useState, useRef, useEffect } from "react";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="relative">
      <HamburgerMenu />
      
      <div>
        <HeroSection />
      </div>
      
      <div>
        <AboutSection />
      </div>
    </div>
  );
};

export default Index;
