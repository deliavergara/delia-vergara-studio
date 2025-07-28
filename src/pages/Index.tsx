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
        <div className="mt-16 pt-8 border-t border-border text-center space-y-4">
          <p className="text-body font-light text-muted-foreground tracking-body leading-body">
            deliavergara.joyas@gmail.com | +34 625857127
          </p>
          <Link to="/contacto">
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
