import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const SquareCarousel = () => {
  const images = [
    "https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/carrusel/DSC_0092.jpg",
    "https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/carrusel/_DSC7549.jpg", // foto naranja - pendientes fractales dorados
    "https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/carrusel/DSC_0507.jpg",
    "https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/carrusel/_DSC7664.jpg",
    "https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/carrusel/IMG_4087.jpg", // foto naranja - con pendientes puestos
    "https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/carrusel/DSC_0278.jpg",
    "https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/carrusel/_DSC7600.jpg", // foto naranja - vestido naranja
    "https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/carrusel/DSC_0575.jpg"
  ];

  return (
    <section className="py-8 bg-background">
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
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer opacity-95"
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