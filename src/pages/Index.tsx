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
            <a href="https://wa.me/34625857127" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-elegant">
              <img src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Iconos/0a13d467-6ad9-48b5-82ae-a5481a41885d.png" alt="WhatsApp" className="h-6 w-6" />
              <span className="font-body text-body">WhatsApp</span>
            </a>

            <a href="https://instagram.com/deliavergaras" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-elegant">
              <img src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Iconos/d870cb07-e308-4eb3-817d-68dba260d987.png" alt="Instagram" className="h-6 w-6" />
              <span className="font-body text-body">@deliavergaras</span>
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
