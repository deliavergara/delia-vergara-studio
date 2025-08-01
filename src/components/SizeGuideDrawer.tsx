import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";

interface SizeGuideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const sizeData = [
  { diameter: "14.0", size: "3" },
  { diameter: "14.8", size: "4" },
  { diameter: "15.6", size: "5" },
  { diameter: "16.5", size: "6" },
  { diameter: "17.3", size: "7" },
  { diameter: "18.1", size: "8" },
  { diameter: "18.9", size: "9" },
  { diameter: "19.8", size: "10" },
  { diameter: "20.6", size: "11" },
  { diameter: "21.4", size: "12" },
  { diameter: "22.2", size: "13" },
  { diameter: "23.0", size: "14" },
  { diameter: "23.8", size: "15" },
  { diameter: "24.6", size: "16" },
  { diameter: "25.4", size: "17" },
  { diameter: "26.2", size: "18" },
  { diameter: "27.0", size: "19" },
  { diameter: "27.8", size: "20" }
];

export const SizeGuideDrawer = ({ isOpen, onClose }: SizeGuideDrawerProps) => {
  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="h-[80vh] max-w-md mx-auto">
        <DrawerHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <DrawerTitle className="font-avenir-medium text-lg text-foreground">
              Guía de Tallas
            </DrawerTitle>
            <DrawerClose asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Tabla de tallas */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm font-avenir-medium text-muted-foreground uppercase tracking-wide border-b pb-2">
              <div>Diámetro interior (mm)</div>
              <div>Talla</div>
            </div>
            
            <div className="space-y-2">
              {sizeData.map((item, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 py-2 text-sm font-avenir-light border-b border-border/30 last:border-b-0">
                  <div className="text-foreground">{item.diameter}</div>
                  <div className="text-foreground">{item.size}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mensaje de contacto */}
          <div className="bg-accent/20 rounded-lg p-4 mt-8">
            <p className="font-avenir-light text-sm text-foreground leading-relaxed">
              👉 <span className="font-avenir-medium">Si tienes dudas, escríbeme por WhatsApp y te guío para encontrar tu talla exacta.</span>
            </p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};