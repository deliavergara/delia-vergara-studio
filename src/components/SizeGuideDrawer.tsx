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
import { buildGitHubRawUrl } from "@/lib/config";

interface SizeGuideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const sizeData = [
  { diameter: "14.01", size: "4" },
  { diameter: "14.30", size: "5" },
  { diameter: "14.65", size: "6" },
  { diameter: "15.00", size: "7" },
  { diameter: "15.28", size: "8" },
  { diameter: "15.60", size: "9" },
  { diameter: "15.92", size: "10" },
  { diameter: "16.24", size: "11" },
  { diameter: "16.56", size: "12" },
  { diameter: "16.87", size: "13" },
  { diameter: "17.19", size: "14" },
  { diameter: "17.51", size: "15" },
  { diameter: "17.83", size: "16" },
  { diameter: "18.15", size: "17" },
  { diameter: "18.47", size: "18" }
];

export const SizeGuideDrawer = ({ isOpen, onClose }: SizeGuideDrawerProps) => {
  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="h-[80vh] max-w-md mx-auto">
        <DrawerHeader className="border-b pb-4">
          <div className="flex items-center justify-between">
            <DrawerTitle className="font-avenir-medium text-lg text-foreground">
              Guía de tallas de anillos
            </DrawerTitle>
            <DrawerClose asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>
        
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Texto introductorio */}
          <div className="space-y-4">
            <p className="font-avenir-light text-sm text-foreground leading-relaxed">
              Averiguar tu talla es muy fácil:
            </p>
            
            <ol className="space-y-2 text-sm font-avenir-light text-foreground leading-relaxed pl-4">
              <li>1. Busca un anillo que te quede bien en el dedo donde quieras usar el nuevo.</li>
              <li>2. Mide el diámetro interior del anillo (la parte de adentro, de lado a lado, sin contar el grosor).</li>
              <li>3. Ingresa los milímetros que obtengas en la siguiente calculadora, para obtener tu talla.</li>
            </ol>
            
            <div className="flex justify-center my-6">
              <img 
                src={buildGitHubRawUrl("public/lovable-uploads/Material%20de%20Apoyo/Iconos/ilustracion%20guia%20de%20talla%20anillos.PNG")}
                alt="Ilustración de cómo medir el anillo"
                className="w-80 h-auto"
              />
            </div>
            
            <p className="font-avenir-light text-sm text-foreground leading-relaxed italic">
              Por ejemplo: si tu anillo mide 16 mm de diámetro interior, tu talla será la 10.
            </p>
          </div>
          
          {/* Tabla de tallas */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm font-avenir-medium text-muted-foreground uppercase tracking-wide border-b pb-2">
              <div>Diámetro interior (mm)</div>
              <div>Talla</div>
            </div>
            
            <div className="space-y-2">
              {sizeData.map((item, index) => (
                <div key={index} className="grid grid-cols-2 gap-4 py-1.5 text-sm font-avenir-light border-b border-border/20 last:border-b-0">
                  <div className="text-foreground">{item.diameter}</div>
                  <div className="text-foreground">{item.size}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
