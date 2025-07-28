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
      
      {/* Contact section */}
      <div className="container mx-auto px-6 pb-24">
        <div className="mt-32 pt-12 border-t border-border text-center space-y-8">
          {/* Contact buttons aligned side by side */}
          <div className="flex items-center justify-center gap-8">
            <a href="https://wa.me/34625857127" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-transparent backdrop-blur-sm rounded-full px-6 py-3 border-2 border-muted-foreground/60 group-hover:border-primary/80 transition-all duration-300 inline-flex items-center gap-3">
                <img src="/lovable-uploads/Material de Apoyo/Iconos/icono whatssap.png" alt="WhatsApp" className="h-5 w-5" />
                <span className="font-body text-body text-muted-foreground group-hover:text-foreground transition-elegant">WhatsApp</span>
              </div>
            </a>

            <a href="https://instagram.com/deliavergaras" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-transparent backdrop-blur-sm rounded-full px-6 py-3 border-2 border-muted-foreground/60 group-hover:border-primary/80 transition-all duration-300 inline-flex items-center gap-3">
                <img src="/lovable-uploads/Material de Apoyo/Iconos/icono instagram-01.png" alt="Instagram" className="h-5 w-5" />
                <span className="font-body text-body text-muted-foreground group-hover:text-foreground transition-elegant">@deliavergaras</span>
              </div>
            </a>
          </div>
          
          <p className="text-body font-roboto-medium font-medium text-muted-foreground tracking-body leading-body">
            deliavergara.joyas@gmail.com | +34 625857127
          </p>
          <Link to="/como-comprar">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-elegant">
              Contáctame
            </Button>
          </Link>
        </div>
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
