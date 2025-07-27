import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface HamburgerMenuProps {
  onNavigate?: (section: string) => void;
}
export const HamburgerMenu = ({
  onNavigate
}: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const menuItems = [{
    label: "Anillos",
    path: "/categoria/anillos"
  }, {
    label: "Collares",
    path: "/categoria/collares"
  }, {
    label: "Pendientes",
    path: "/categoria/pendientes"
  }, {
    label: "Pulseras",
    path: "/categoria/pulseras"
  }, {
    label: "Cómo comprar",
    path: "/como-comprar"
  }, {
    label: "Contáctame",
    path: "/contacto"
  }];
  const handleItemClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };
  return <>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="fixed top-6 left-6 z-50 hover:bg-transparent transition-elegant h-20 w-20 flex flex-col items-center justify-center gap-2">
        <div className="w-8 h-1 bg-muted-foreground rounded-full"></div>
        <div className="w-8 h-1 bg-muted-foreground rounded-full"></div>
      </Button>

      {/* Menu Panel */}
      <div className={cn("fixed top-0 left-0 h-full w-48 bg-white/70 backdrop-blur-sm z-50 shadow-elegant transition-elegant", isOpen ? "translate-x-0" : "-translate-x-full")}>
        <div className="p-6">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="ml-auto block hover:bg-accent">
            <X className="h-5 w-5" />
          </Button>

          <nav className="mt-12 space-y-8">
            {menuItems.map(item => <button key={item.path} onClick={() => handleItemClick(item.path)} className="block w-full font-elegant transition-quick text-base text-left bg-transparent text-slate-700 font-normal">
                {item.label}
              </button>)}
          </nav>
        </div>
      </div>
    </>;
};