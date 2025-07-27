export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/Material de Apoyo/Foto portada/portada_Mesa de trabajo 1.jpg"
          alt="Delia Vergara - Joyería Artesanal"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Subtle gradient overlay to ensure logo readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />
    </section>
  );
};