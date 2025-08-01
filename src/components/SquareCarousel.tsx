
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buildGitHubRawUrl } from "@/lib/config";

const SquareCarousel = () => {
  const images = [
    buildGitHubRawUrl("public/lovable-uploads/Material de Apoyo/carrusel/1.jpg"),
    buildGitHubRawUrl("public/lovable-uploads/Material de Apoyo/carrusel/2.jpg"),
    buildGitHubRawUrl("public/lovable-uploads/Material de Apoyo/carrusel/4.jpg"),
    buildGitHubRawUrl("public/lovable-uploads/Material de Apoyo/carrusel/5.jpg"),
    buildGitHubRawUrl("public/lovable-uploads/Material de Apoyo/carrusel/3.jpg"),
    buildGitHubRawUrl("public/lovable-uploads/Material de Apoyo/carrusel/6.jpg"),
    buildGitHubRawUrl("public/lovable-uploads/Material de Apoyo/carrusel/7.jpg"),
    buildGitHubRawUrl("public/lovable-uploads/Material de Apoyo/carrusel/8.jpg"),
    buildGitHubRawUrl("public/lovable-uploads/Material de Apoyo/carrusel/9.jpg")
  ];

  return (
    <section className="py-4 bg-background">
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
                      alt={`Joyería artesanal ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                      loading="lazy"
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 w-8 h-8 bg-white/50 border-gray-200 hover:bg-white/70" />
            <CarouselNext className="right-4 w-8 h-8 bg-white/50 border-gray-200 hover:bg-white/70" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SquareCarousel;
