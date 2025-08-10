import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  const [diameter, setDiameter] = useState<string>("");
  const [calculatedSize, setCalculatedSize] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    const value = parseFloat(diameter.replace(",", "."));
    if (isNaN(value) || value <= 0) {
      setError("Ingresa un número válido en mm.");
      setCalculatedSize(null);
      return;
    }
    setError(null);
    const candidate = sizeData.find((item) => parseFloat(item.diameter) >= value);
    const size = candidate ? candidate.size : sizeData[sizeData.length - 1].size;
    setCalculatedSize(size);
  };

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
              <li>1. Busca un anillo que te quede bien en el dedo donde quieras usar la nueva joya.</li>
              <li>2. Mide el diámetro interior del anillo (la parte de adentro, de lado a lado, sin contar el grosor).</li>
              <li>3. Con los milímetros que obtengas, revisa en esta tabla cuál es tu talla correspondiente.</li>
            </ol>
            
            <div className="flex justify-center my-6">
              <img 
                src={buildGitHubRawUrl("public/lovable-uploads/Material%20de%20Apoyo/Iconos/ilustracion%20guia%20de%20talla%20anillos.PNG")}
                alt="Ilustración de cómo medir el anillo"
                className="w-80 h-auto"
              />
            </div>
            
            {/* Calculadora de talla */}
            <div className="space-y-4">
              <p className="font-avenir-light text-sm text-foreground leading-relaxed">
                Calcula tu talla ingresando el diámetro interior de tu anillo (mm).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
                <div className="sm:col-span-2 space-y-2">
                  <Label htmlFor="ring-diameter" className="font-avenir-medium text-xs uppercase tracking-wide text-muted-foreground">Diámetro interior (mm)</Label>
                  <div className="relative">
                    <Input
                      id="ring-diameter"
                      inputMode="decimal"
                      type="text"
                      placeholder="Ej: 16.0"
                      value={diameter}
                      onChange={(e) => setDiameter(e.target.value)}
                      aria-label="Diámetro interior en milímetros"
                      className="pr-12"
                    />
                    <span className="absolute inset-y-0 right-3 flex items-center text-muted-foreground text-xs">mm</span>
                  </div>
                </div>
                <Button onClick={handleCalculate} className="w-full">
                  Calcular talla
                </Button>
              </div>
              {error && <p className="text-xs text-destructive">{error}</p>}
              {calculatedSize && !error && (
                <div className="rounded-md border border-border/50 bg-muted/20 p-3">
                  <p className="font-avenir-medium text-foreground text-sm">
                    Tu talla aproximada es la {calculatedSize}
                  </p>
                  <p className="font-avenir-light text-muted-foreground text-xs mt-1">
                    Si estás entre dos medidas, se redondea hacia arriba.
                  </p>
                </div>
              )}
            </div>
            </div>
          </div>
      </DrawerContent>
    </Drawer>
  );
};
