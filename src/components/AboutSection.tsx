export const AboutSection = () => {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video a la izquierda */}
          <div className="aspect-video rounded-sm overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/lovable-uploads/Material de Apoyo/Videos/DSC_0326.mov" type="video/mp4" />
            </video>
          </div>
          
          {/* Texto a la derecha */}
          <div className="text-center lg:text-left">
            <p className="text-body font-light text-muted-foreground tracking-body leading-body">
              Delia Vergara es una marca de diseño de joyería con esencia orgánica. 
              Piezas únicas, elaboradas a mano en mi taller en Valencia, España.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};