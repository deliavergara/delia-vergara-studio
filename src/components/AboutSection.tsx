export const AboutSection = () => {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video a la izquierda */}
          <div className="aspect-[4/5] bg-accent rounded-sm overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/lovable-uploads/Videos/DSC_0330.mov" type="video/mp4" />
            </video>
          </div>
          
          {/* Texto a la derecha */}
          <div className="text-center lg:text-left">
            <p className="font-elegant text-2xl md:text-3xl text-foreground leading-relaxed">
              Delia Vergara es una marca de diseño de joyería con esencia orgánica. 
              Piezas únicas, elaboradas a mano en mi taller en Valencia, España.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};