import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CategoryGrid } from "@/components/CategoryGrid";
import SquareCarousel from "@/components/SquareCarousel";
import { Footer } from "@/components/Footer";
import { buildGitHubRawUrl } from "@/lib/config";

const Index = () => {
  return (
    <div className="relative">
      <HamburgerMenu />
      
      <HeroSection />
      
      <AboutSection />
      
      {/* Brand intro text */}
      <section aria-label="Presentación de marca" className="bg-background">
        <div className="container mx-auto px-6 max-w-3xl py-6 text-center">
          <p className="font-avenir-light font-light text-muted-foreground tracking-body leading-relaxed">
            Delia Vergara es una marca de diseño de joyería con
            <br />
            esencia orgánica. Piezas únicas, elaboradas a mano
            <br />
            en mi taller en Valencia, España.
          </p>
        </div>
      </section>
      
      <CategoryGrid />
      
      {/* Contact section */}
      <div className="container mx-auto px-6 pb-16">
        <div className="mt-8 pt-8 border-t border-border relative">
          <div className="absolute bottom-0 left-0 z-0 -ml-24 cursor-pointer hover:opacity-30 transition-elegant" onClick={() => window.location.href = '/'}>
            <img 
              src={buildGitHubRawUrl("public/lovable-uploads/Material%20de%20Apoyo/Logo/isologo.png")} 
              alt="Delia Vergara Isologo" 
              className="h-32 w-auto opacity-50"
            />
          </div>
          
          <div className="text-center space-y-8 relative z-10 pb-12">
            <h2 className="font-avenir-black font-black text-2xl uppercase mb-8" style={{color: '#353333'}}>
              CONTÁCTAME
            </h2>
            
            <p className="font-avenir-light font-light tracking-body leading-body" style={{color: '#353333'}}>
              deliavergara.joyas@gmail.com  <br /> +34 625857127
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <Footer />
      </div>


    </div>
  );
};

export default Index;
