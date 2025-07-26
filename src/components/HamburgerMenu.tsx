import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HamburgerMenuProps {
  onNavigate: (section: string) => void;
}

export const HamburgerMenu = ({ onNavigate }: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Anillos", section: "rings" },
    { label: "Pendientes", section: "earrings" },
    { label: "Cómo comprar", section: "how-to-buy" },
  ];

  const handleItemClick = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-sm hover:bg-white/90 border border-border shadow-minimal transition-elegant"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-md z-40 transition-elegant",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-elegant transition-elegant",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="ml-auto block hover:bg-accent"
          >
            <X className="h-5 w-5" />
          </Button>

          <nav className="mt-12 space-y-8">
            {menuItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleItemClick(item.section)}
                className="block text-left w-full font-elegant text-2xl text-foreground hover:text-muted-foreground transition-quick"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};