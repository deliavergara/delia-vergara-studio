
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState, useEffect } from "react";
import { buildSupabaseUrl } from "@/lib/supabase-config";

const images = [
  buildSupabaseUrl("productos/material-de-apoyo/carrusel/1.jpg"),
  buildSupabaseUrl("productos/material-de-apoyo/carrusel/2.jpg"),
  buildSupabaseUrl("productos/material-de-apoyo/carrusel/4.jpg"),
  buildSupabaseUrl("productos/material-de-apoyo/carrusel/5.jpg"),
  buildSupabaseUrl("productos/material-de-apoyo/carrusel/3.jpg"),
  buildSupabaseUrl("productos/material-de-apoyo/carrusel/6.jpg"),
  buildSupabaseUrl("productos/material-de-apoyo/carrusel/7.jpg"),
  buildSupabaseUrl("productos/material-de-apoyo/carrusel/8.jpg"),
  buildSupabaseUrl("productos/material-de-apoyo/carrusel/9.jpg")
];

const SquareCarousel = () => {
  return (
    <section className="py-4 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
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
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer opacity-90"
                      loading="lazy"
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="right-4 w-8 h-8 bg-white/30 border border-gray-200/40 hover:bg-white/50" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SquareCarousel;
