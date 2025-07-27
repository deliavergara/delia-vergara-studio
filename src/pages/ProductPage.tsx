import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jewelryItems } from "@/data/products";
import { cn } from "@/lib/utils";

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedMetal, setSelectedMetal] = useState<'silver' | 'gold'>('silver');
  const [selectedCurrency, setSelectedCurrency] = useState<'EUR' | 'CLP'>('EUR');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const dragRef = useRef<HTMLDivElement>(null);
  
  const product = jewelryItems.find(item => item.id === productId);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-elegant text-2xl text-foreground mb-4">Producto no encontrado</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  const currentPrice = selectedMetal === 'silver' 
    ? (selectedCurrency === 'EUR' ? product.prices.silverEUR : product.prices.silverCLP)
    : (selectedCurrency === 'EUR' ? product.prices.goldEUR : product.prices.goldCLP);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const deltaX = startX - clientX;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0 && currentImageIndex < product.images.length - 1) {
        // Deslizar hacia la izquierda - siguiente imagen
        setCurrentImageIndex(currentImageIndex + 1);
      } else if (deltaX < 0 && currentImageIndex > 0) {
        // Deslizar hacia la derecha - imagen anterior
        setCurrentImageIndex(currentImageIndex - 1);
      }
    }
    
    setIsDragging(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header con botón volver */}
      <div className="fixed top-6 left-6 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
          className="hover:bg-white/20 transition-elegant"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="pt-20 pb-12">
        {/* Logo */}
        <div className="text-center mb-6">
          <img 
            src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Logo/logo%20gris%20medio_Mesa%20de%20trabajo%201.png" 
            alt="Logo"
            className="h-14 mx-auto"
          />
        </div>

        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Galería de imágenes */}
            <div className="space-y-6">
              {/* Imagen principal con arrastre */}
              <div 
                ref={dragRef}
                className="aspect-[4/5] bg-accent rounded-sm overflow-hidden max-w-md mx-auto cursor-grab active:cursor-grabbing"
                onMouseDown={handleDragStart}
                onMouseUp={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchEnd={handleDragEnd}
              >
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover select-none"
                  style={{opacity: '0.93'}}
                  draggable={false}
                />
              </div>
              
              {/* Puntos indicadores */}
              {product.images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-200",
                        currentImageIndex === index
                          ? "bg-muted-foreground scale-125"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      )}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Detalles del producto */}
            <div className="space-y-8">
              {/* Título del producto */}
              <h1 className="text-lg text-gray-500 tracking-title mb-2" style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: '500'
              }}>
                {product.name}
              </h1>
              
              {/* Descripción */}
              <div>
                <p className="text-body font-light text-muted-foreground tracking-body leading-body">
                  {product.description}
                </p>
              </div>

              {/* Selectores solo si tiene precios */}
              {currentPrice > 0 && (
                <>
                  {/* Selector de material */}
                  <div className="space-y-4">
                    <h3 className="font-clean font-medium text-muted-foreground text-lg tracking-title">Material</h3>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedMetal('silver')}
                        className={cn(
                          "px-6 py-3 rounded-sm border transition-quick font-clean text-muted-foreground",
                          selectedMetal === 'silver'
                            ? "border-muted-foreground bg-muted-foreground/10 text-foreground"
                            : "border-border hover:border-muted-foreground/50"
                        )}
                      >
                        Plata
                      </button>
                      <button
                        onClick={() => setSelectedMetal('gold')}
                        className={cn(
                          "px-6 py-3 rounded-sm border transition-quick font-clean text-muted-foreground",
                          selectedMetal === 'gold'
                            ? "border-muted-foreground bg-muted-foreground/10 text-foreground"
                            : "border-border hover:border-muted-foreground/50"
                        )}
                      >
                        Oro
                      </button>
                    </div>
                  </div>

                  {/* Selector de moneda */}
                  <div className="space-y-4">
                    <h3 className="font-clean font-medium text-muted-foreground text-lg tracking-title">Moneda</h3>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedCurrency('EUR')}
                        className={cn(
                          "px-6 py-3 rounded-sm border transition-quick font-clean text-muted-foreground",
                          selectedCurrency === 'EUR'
                            ? "border-muted-foreground bg-muted-foreground/10 text-foreground"
                            : "border-border hover:border-muted-foreground/50"
                        )}
                      >
                        EUR (€)
                      </button>
                      <button
                        onClick={() => setSelectedCurrency('CLP')}
                        className={cn(
                          "px-6 py-3 rounded-sm border transition-quick font-clean text-muted-foreground",
                          selectedCurrency === 'CLP'
                            ? "border-muted-foreground bg-muted-foreground/10 text-foreground"
                            : "border-border hover:border-muted-foreground/50"
                        )}
                      >
                        CLP ($)
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Precio */}
              <div className="border-t pt-8">
                <div className="text-3xl font-elegant font-medium text-muted-foreground tracking-title">
                  {currentPrice === 0 ? 'Por encargo' : `${selectedCurrency === 'EUR' ? '€' : '$'}${currentPrice.toLocaleString()}`}
                </div>
                <p className="text-body font-light text-muted-foreground mt-2 tracking-body leading-body">
                  {currentPrice === 0 ? 'Contacta para presupuesto' : `Precio en ${selectedMetal === 'silver' ? 'plata' : 'oro'} - ${selectedCurrency}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;