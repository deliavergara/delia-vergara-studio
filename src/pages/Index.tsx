import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CategoryGrid } from "@/components/CategoryGrid";
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
        <Footer />
      </div>
      
      {/* Contact section */}
      <div className="container mx-auto px-6 pb-24">
        <div className="mt-32 pt-12 border-t border-border relative">
          <div className="absolute bottom-0 left-0 z-0">
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

      {/* Fixed contact buttons y isologo */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a href="https://wa.me/34625857127" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105" style={{backgroundColor: '#EDEDED'}}>
            <img 
              src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Iconos/ICONO%20WHATSAP.png" 
              alt="WhatsApp" 
              className="h-5 w-5"
            />
            <span className="font-avenir-light font-light" style={{color: '#353333'}}>WhatsApp</span>
          </div>
        </a>

        <a href="https://instagram.com/deliavergaras" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105" style={{backgroundColor: '#EDEDED'}}>
            <img 
              src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Iconos/ICONO%20INSTAGRAM.png" 
              alt="Instagram" 
              className="h-5 w-5"
            />
            <span className="font-avenir-light font-light" style={{color: '#353333'}}>@deliavergaras</span>
          </div>
        </a>
      </div>

    </div>
  );
};

export default Index;
