export const AboutSection = () => {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-[50vh]">
          {/* Video a la izquierda - ocupa espacio completo hasta la mitad */}
          <div className="h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-sm"
            >
              <source src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Videos/DSC_0326.mov" type="video/mp4" />
            </video>
          </div>
          
          {/* Texto a la derecha */}
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <p className="text-body font-avenir-heavy font-heavy text-muted-foreground tracking-body leading-body text-center lg:text-left">
              Delia Vergara es una marca de diseño de joyería con esencia orgánica. 
              Piezas únicas, elaboradas a mano en mi taller en Valencia, España.
            </p>
            <p className="text-body font-avenir-light font-light text-muted-foreground tracking-body leading-body text-center lg:text-left">
              La mayoría de las piezas son producidas en ediciones limitadas y están sujetas a cambios, ya que constantemente busco innovar con nuevos diseños.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};