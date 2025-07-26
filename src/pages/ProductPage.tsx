import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

export const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedMetal, setSelectedMetal] = useState<'silver' | 'gold'>('silver');
  const [selectedCurrency, setSelectedCurrency] = useState<'EUR' | 'CLP'>('EUR');

  const product = products.find(p => p.id === productId);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const getPrice = () => {
    const basePrice = product.prices[selectedMetal];
    if (selectedCurrency === 'CLP') {
      return `${(basePrice * 1000).toLocaleString()} CLP`;
    }
    return `${basePrice} EUR`;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-6 left-6 z-40">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
        >
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </Button>
      </div>

      <div className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-elegant text-4xl md:text-5xl text-center mb-16 text-foreground">
            {product.name}
          </h1>

          {/* Image Gallery */}
          <div className="space-y-6 mb-12">
            <div className="relative aspect-[4/5] bg-accent rounded-sm overflow-hidden max-w-2xl mx-auto">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {product.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}
            </div>
            
            {/* Thumbnail Navigation */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto justify-center">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={cn(
                      "flex-shrink-0 w-16 h-16 rounded-sm overflow-hidden border-2 transition-quick",
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

          {/* Product Details */}
          <div className="max-w-2xl mx-auto space-y-8">
            <p className="text-muted-foreground leading-relaxed text-center">
              {product.description}
            </p>

            {/* Metal Selection */}
            <div className="space-y-3">
              <h3 className="font-clean font-medium text-foreground text-center">Material</h3>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setSelectedMetal('silver')}
                  className={cn(
                    "px-4 py-2 rounded-sm border transition-quick font-clean",
                    selectedMetal === 'silver'
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-muted-foreground"
                  )}
                >
                  Plata
                </button>
                <button
                  onClick={() => setSelectedMetal('gold')}
                  className={cn(
                    "px-4 py-2 rounded-sm border transition-quick font-clean",
                    selectedMetal === 'gold'
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-muted-foreground"
                  )}
                >
                  Oro
                </button>
              </div>
            </div>

            {/* Currency Selection */}
            <div className="space-y-3">
              <h3 className="font-clean font-medium text-foreground text-center">Moneda</h3>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setSelectedCurrency('EUR')}
                  className={cn(
                    "px-4 py-2 rounded-sm border transition-quick font-clean",
                    selectedCurrency === 'EUR'
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-muted-foreground"
                  )}
                >
                  EUR
                </button>
                <button
                  onClick={() => setSelectedCurrency('CLP')}
                  className={cn(
                    "px-4 py-2 rounded-sm border transition-quick font-clean",
                    selectedCurrency === 'CLP'
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-muted-foreground"
                  )}
                >
                  CLP
                </button>
              </div>
            </div>

            {/* Price */}
            <div className="text-center border-t pt-6">
              <div className="text-3xl font-elegant text-foreground">
                {getPrice()}
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Precio en {selectedMetal === 'silver' ? 'plata' : 'oro'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};