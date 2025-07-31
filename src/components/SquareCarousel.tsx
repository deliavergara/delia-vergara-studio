import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const SquareCarousel = () => {
  // Imágenes de muestra - puedes reemplazar con las fotos reales
  const images = [
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <AspectRatio ratio={1} className="overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`Joyería ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/80 border-gray-200 hover:bg-white" />
            <CarouselNext className="right-4 bg-white/80 border-gray-200 hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SquareCarousel;