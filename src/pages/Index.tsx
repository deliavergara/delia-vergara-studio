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
          <Link to="/como-comprar">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-elegant mb-6">
              Contáctame
            </Button>
          </Link>
          
          {/* Contact buttons aligned side by side */}
          <div className="flex items-center justify-center gap-6">
            <a href="https://wa.me/34625857127" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-transparent backdrop-blur-sm rounded-full px-4 py-2 border border-muted-foreground/60 group-hover:border-primary/80 transition-all duration-300">
                <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-elegant">WhatsApp</span>
              </div>
            </a>

            <a href="https://instagram.com/deliavergaras" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-transparent backdrop-blur-sm rounded-full px-4 py-2 border border-muted-foreground/60 group-hover:border-primary/80 transition-all duration-300">
                <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-elegant">@deliavergaras</span>
              </div>
            </a>
          </div>
          
          <p className="text-body font-roboto-medium font-medium text-muted-foreground tracking-body leading-body mt-6">
            deliavergara.joyas@gmail.com | +34 625857127
          </p>
        </div>
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
