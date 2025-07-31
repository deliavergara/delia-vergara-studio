import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CategoryGrid } from "@/components/CategoryGrid";
import SquareCarousel from "@/components/SquareCarousel";
import { Footer } from "@/components/Footer";

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
      
      <div>
        <CategoryGrid />
      </div>
      
      <div>
        <SquareCarousel />
      </div>
      
      <div>
        <Footer />
      </div>
      
      {/* Contact section */}
      <div className="container mx-auto px-6 pb-24">
        <div className="mt-32 pt-12 border-t border-border relative">
          <div className="absolute bottom-0 left-0 z-0 -ml-16">
            <img 
              src="/lovable-uploads/Material%20de%20Apoyo/Logo/isologo.png" 
              alt="Delia Vergara Isologo" 
              className="h-32 w-auto opacity-50"
            />
          </div>
          
          <div className="text-center space-y-8 relative z-10 pb-12">
            <h2 className="font-avenir-black font-black text-2xl uppercase mb-8" style={{color: '#353333'}}>
              CONTÁCTAME
            </h2>
            
            <p className="font-avenir-light font-light tracking-body leading-body" style={{color: '#353333'}}>
              deliavergara.joyas@gmail.com | +34 625857127
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Index;
