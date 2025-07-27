import { useState } from "react";
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header con botón volver */}
      <div className="fixed top-6 left-6 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90 border border-border shadow-minimal transition-elegant"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="pt-24 pb-12">
        {/* Título del producto */}
        {/* Logo */}
        <div className="text-center mb-8">
          <img 
            src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Logo/logo%20gris_Mesa%20de%20trabajo%201.png" 
            alt="Logo"
            className="h-12 mx-auto mb-8"
          />
          <h1 className="font-elegant font-medium text-4xl text-slate-600 tracking-title">
            {product.name}
          </h1>
        </div>

        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Galería de imágenes */}
            <div className="space-y-6">
              {/* Imagen principal */}
              <div className="aspect-[4/5] bg-accent rounded-sm overflow-hidden">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Miniaturas deslizables */}
              {product.images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        "flex-shrink-0 w-20 h-20 rounded-sm overflow-hidden border-2 transition-quick",
                        currentImageIndex === index
                          ? "border-primary"
                          : "border-border hover:border-muted-foreground"
                      )}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Detalles del producto */}
            <div className="space-y-8">
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