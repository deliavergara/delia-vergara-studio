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
        <div className="mt-32 pt-12 border-t border-border text-center space-y-8">
          <Link to="/como-comprar">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-elegant mb-2">
              Contáctame
            </Button>
          </Link>
          
          <p className="text-body font-roboto-medium font-medium text-muted-foreground tracking-body leading-body mt-6">
            deliavergara.joyas@gmail.com | +34 625857127
          </p>
        </div>
      </div>

      {/* Fixed contact buttons y isologo */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <a href="https://wa.me/34625857127" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105" style={{backgroundColor: '#EDEDED'}}>
            <img 
              src="/lovable-uploads/Material de Apoyo/Iconos/ICONO WHATSAP.png" 
              alt="WhatsApp" 
              className="h-5 w-5"
            />
            <span className="font-avenir-light font-light" style={{color: '#353333'}}>WhatsApp</span>
          </div>
        </a>

        <a href="https://instagram.com/deliavergaras" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105" style={{backgroundColor: '#EDEDED'}}>
            <img 
              src="/lovable-uploads/Material de Apoyo/Iconos/ICONO INSTAGRAM.png" 
              alt="Instagram" 
              className="h-5 w-5"
            />
            <span className="font-avenir-light font-light" style={{color: '#353333'}}>@deliavergaras</span>
          </div>
        </a>
      </div>

      {/* Isologo en la parte inferior izquierda */}
      <div className="fixed bottom-6 left-6 z-50">
        <img 
          src="/lovable-uploads/Material de Apoyo/Logo/ISOLOGO_Mesa de trabajo 1.png" 
          alt="Delia Vergara Isologo" 
          className="h-24 w-auto opacity-60"
        />
      </div>
    </div>
  );
};

export default Index;
