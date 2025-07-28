export const AboutSection = () => {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center py-24">
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
          <div className="flex items-center justify-center h-full">
            <p className="text-body font-roboto-medium font-medium text-muted-foreground tracking-body leading-body text-center lg:text-left">
              Delia Vergara es una marca de diseño de joyería con esencia orgánica. 
              Piezas únicas, elaboradas a mano en mi taller en Valencia, España.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};