export const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-elegant text-2xl md:text-3xl text-foreground leading-relaxed">
            Delia Vergara es una marca de diseño de joyería con esencia orgánica. 
            Piezas únicas, elaboradas a mano en mi taller en Valencia, España.
          </p>
        </div>
        
        <div className="aspect-video bg-accent rounded-sm overflow-hidden">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/lovable-uploads/Videos/DSC_0326.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};