import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JewelryItem } from "@/types/jewelry";
import { cn } from "@/lib/utils";

interface ProductModalProps {
  item: JewelryItem;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ item, isOpen, onClose }: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedMetal, setSelectedMetal] = useState<'silver' | 'gold'>('silver');

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-white/95 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-sm shadow-elegant max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white/90"
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] bg-accent rounded-sm overflow-hidden">
              <img
                src={item.images[currentImageIndex]}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              
              {item.images.length > 1 && (
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
            {item.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto">
                {item.images.map((image, index) => (
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
                      alt={`${item.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h2 className="font-avenir font-medium text-3xl text-product-name mb-4">
                {item.name}
              </h2>
              <p className="font-avenir-light text-product-description leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Metal Selection */}
            <div className="space-y-3">
              <h3 className="font-clean font-medium text-foreground">Material</h3>
              <div className="flex gap-3">
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

            {/* Price */}
            <div className="border-t pt-6">
              <div className="text-2xl font-elegant text-foreground">
                €{item.prices[selectedMetal]}
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