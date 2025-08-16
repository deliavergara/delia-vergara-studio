import { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jewelryItems } from "@/data/products";
import { cn } from "@/lib/utils";
import { buildGitHubRawUrl } from "@/lib/config";
import { SizeGuideDrawer } from "@/components/SizeGuideDrawer";
const ProductPage = () => {
  const {
    productId
  } = useParams();
  const navigate = useNavigate();
  const [selectedMetal, setSelectedMetal] = useState<'silver' | 'gold'>('silver');
  const [selectedCurrency, setSelectedCurrency] = useState<'EUR' | 'CLP'>('EUR');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const product = jewelryItems.find(item => item.id === productId);
  if (!product) {
    return <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-elegant text-2xl text-foreground mb-4">Producto no encontrado</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Volver al inicio
          </Button>
        </div>
      </div>;
  }
  const currentPrice = selectedMetal === 'silver' ? selectedCurrency === 'EUR' ? product.prices.silverEUR : product.prices.silverCLP : selectedCurrency === 'EUR' ? product.prices.goldEUR : product.prices.goldCLP;
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
  return <div className="min-h-screen bg-background">
      {/* Header con botón volver */}
      <div className="fixed top-6 left-6 z-50">
        <div onClick={() => navigate(`/categoria/${product.category}`)} className="group cursor-pointer">
          <div className="bg-transparent backdrop-blur-sm rounded-full p-3 border border-muted-foreground/60 group-hover:border-primary/80 transition-all duration-300">
            <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-elegant" />
          </div>
        </div>
      </div>

      <div className="pt-12 pb-12">

        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Galería de imágenes */}
            <div className="space-y-6">
              {/* Imagen principal con arrastre */}
              <div ref={dragRef} className="aspect-[4/5] bg-accent rounded-sm overflow-hidden max-w-md mx-auto cursor-grab active:cursor-grabbing" onMouseDown={handleDragStart} onMouseUp={handleDragEnd} onTouchStart={handleDragStart} onTouchEnd={handleDragEnd}>
                {(() => {
                const media = product.images[currentImageIndex];
                const isVideo = /\.(mp4|mov)$/i.test(media);
                return isVideo ? <video src={media} className="w-full h-full object-cover" autoPlay muted playsInline loop disablePictureInPicture controlsList="nodownload noplaybackrate nofullscreen noremoteplayback" /> : <img src={media} alt={product.name} className="w-full h-full object-cover select-none" style={{
                  opacity: '0.93'
                }} draggable={false} />;
              })()}
              </div>
              
              {/* Galería de miniaturas */}
              {product.images.length > 1 && <div className="flex gap-3 justify-center overflow-x-auto pb-2">
                  {product.images.map((image, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={cn("flex-shrink-0 w-16 h-16 rounded-sm overflow-hidden border-2 transition-all duration-200", currentImageIndex === index ? "border-muted-foreground scale-105" : "border-border hover:border-muted-foreground/50")}>
                      {/\.(mp4|mov)$/i.test(image) ? <video src={image} className="w-full h-full object-cover" autoPlay muted playsInline loop disablePictureInPicture controlsList="nodownload noplaybackrate nofullscreen noremoteplayback" /> : <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />}
                    </button>)}
                </div>}
            </div>

            {/* Detalles del producto */}
            <div className="space-y-6">
              {/* Título del producto */}
              <h1 className="font-avenir font-medium text-lg text-product-name tracking-title mb-0.5">
                {product.name}
              </h1>
              
              {/* Guía de tallas para anillos */}
              {product.category === 'anillos' && <button onClick={() => setShowSizeGuide(true)} className="font-avenir-medium text-sm text-muted-foreground hover:text-foreground transition-colors underline decoration-1 underline-offset-4 hover:decoration-2">
                  Guía de tallas
                </button>}
              
              {/* Descripción */}
              <div className="-mt-6 space-y-4">
                {(() => {
                // Separar la descripción principal de los detalles técnicos
                const lines = product.description.split('\n');
                const descriptionLines = [];
                const technicalLines = [];
                let foundTechnical = false;
                for (const line of lines) {
                  const trimmedLine = line.trim();
                  if (!trimmedLine) continue;

                  // Detectar frases técnicas dentro de la misma línea y separar
                  const technicalPattern = /(hech[oa]s?|disponibles?|disponible|incluye cadena)/i;
                  const match = trimmedLine.match(technicalPattern);
                  if (match) {
                    const idx = trimmedLine.toLowerCase().indexOf(match[0].toLowerCase());
                    const before = trimmedLine.slice(0, idx).trim();
                    const after = trimmedLine.slice(idx).trim();
                    if (before) descriptionLines.push(before);
                    if (after) technicalLines.push(after);
                    foundTechnical = true;
                  } else if (foundTechnical) {
                    technicalLines.push(trimmedLine);
                  } else {
                    descriptionLines.push(trimmedLine);
                  }
                }
                return <>
                      {/* Descripción principal */}
                      <p className="font-avenir-light tracking-body leading-body text-product-description text-sm">
                        {descriptionLines.join(' ')}
                      </p>
                      
                      {/* Detalles técnicos */}
                      {technicalLines.length > 0 && <div className="space-y-0 pt-2">
                          {technicalLines.filter(line => !/(contáctame|contactame)/i.test(line)).map((line, index) => <p key={index} className="font-thin tracking-body leading-body text-product-description text-sm italic">
                              {line}
                            </p>)}
                        </div>}
                    </>;
              })()}
              </div>

              {/* Selectores solo si tiene precios */}
              {currentPrice > 0 && <>
                  {/* Selector de material */}
                  <div className="space-y-3">
                    <h3 className="font-avenir-book text-sm text-product-description">Material</h3>
                    <div className="flex gap-3">
                      <button type="button" onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedMetal('silver');
                  }} className={cn("px-4 py-2 rounded-full border transition-quick font-elegant font-light text-muted-foreground text-sm", selectedMetal === 'silver' ? "border-muted-foreground bg-muted-foreground/10 text-foreground" : "border-border hover:border-muted-foreground/50")}>
                        Plata
                      </button>
                      <button type="button" onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedMetal('gold');
                  }} className={cn("px-4 py-2 rounded-full border transition-quick font-elegant font-light text-muted-foreground text-sm", selectedMetal === 'gold' ? "border-muted-foreground bg-muted-foreground/10 text-foreground" : "border-border hover:border-muted-foreground/50")}>
                        Oro
                      </button>
                    </div>
                  </div>

                  {/* Selector de moneda */}
                  <div className="space-y-3">
                    <h3 className="font-avenir-book text-sm text-product-description">Moneda</h3>
                    <div className="flex gap-3">
                      <button onClick={() => setSelectedCurrency('EUR')} className={cn("px-4 py-2 rounded-full border transition-quick font-elegant font-light text-muted-foreground text-sm", selectedCurrency === 'EUR' ? "border-muted-foreground bg-muted-foreground/10 text-foreground" : "border-border hover:border-muted-foreground/50")}>
                        EUR (€)
                      </button>
                      <button onClick={() => setSelectedCurrency('CLP')} className={cn("px-4 py-2 rounded-full border transition-quick font-elegant font-light text-muted-foreground text-sm", selectedCurrency === 'CLP' ? "border-muted-foreground bg-muted-foreground/10 text-foreground" : "border-border hover:border-muted-foreground/50")}>
                        CLP ($)
                      </button>
                    </div>
                  </div>
                </>}

              {/* Precio */}
              <div className="border-t pt-6">
                <div className="font-avenir font-medium text-lg text-product-name tracking-title">
                  {currentPrice === 0 ? 'Por encargo' : `${selectedCurrency === 'EUR' ? '€' : '$'}${currentPrice?.toLocaleString() || '0'}`}
                </div>
                <p className="text-body font-light text-muted-foreground mt-2 tracking-body leading-body">
                  {currentPrice === 0 ? 'Contacta para presupuesto' : `Precio en ${selectedMetal === 'silver' ? 'plata' : 'oro'} - ${selectedCurrency}`}
                </p>
              </div>
            </div>
          </div>
          
          {/* Footer con contacto */}
          <div className="mt-32 pt-12 border-t border-border relative">
            <div className="absolute bottom-0 left-0 z-0 -ml-8 cursor-pointer hover:opacity-30 transition-elegant" onClick={() => navigate("/")}>
              <img src={buildGitHubRawUrl("public/lovable-uploads/Material%20de%20Apoyo/Logo/isologo.png")} alt="Delia Vergara Isologo" className="h-32 w-auto opacity-50" />
            </div>
            
            <div className="text-center space-y-8 relative z-10 pb-12">
              <h2 style={{
              color: '#353333'
            }} className="font-avenir-black font-black uppercase mb-8 text-xl">
                CONTÁCTAME
              </h2>
              
              <p className="font-avenir-light font-light tracking-body leading-body" style={{
              color: '#353333'
            }}>
                deliavergara.joyas@gmail.com  <br /> +34 625857127
              </p>
            </div>
          </div>
        </div>

      </div>
      
      {/* Size Guide Drawer */}
      <SizeGuideDrawer isOpen={showSizeGuide} onClose={() => setShowSizeGuide(false)} />
    </div>;
};
export default ProductPage;