export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <video
          src="/lovable-uploads/Material de Apoyo/Foto portada/DSC_0035.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      
      {/* Subtle gradient overlay to ensure logo readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />
      
      {/* Logo overlay */}
      <div className="absolute inset-0 flex items-start justify-center pt-20">
        <img
          src="/lovable-uploads/Material de Apoyo/Logo/Logo gris claro_Mesa de trabajo 1.png"
          alt="Delia Vergara Logo"
          className="w-72 h-auto opacity-80"
        />
      </div>
    </section>
  );
};