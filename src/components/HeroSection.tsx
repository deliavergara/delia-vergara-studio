export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Foto%20portada/portada_Mesa%20de%20trabajo%201.jpg"
          alt="Delia Vergara - Joyería Artesanal"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Subtle gradient overlay to ensure logo readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />
      
      {/* Logo centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Logo/logo%20gris%20claro_Mesa%20de%20trabajo%201.png" 
          alt="Delia Vergara Logo"
          className="h-20 md:h-24 opacity-90"
        />
      </div>
    </section>
  );
};