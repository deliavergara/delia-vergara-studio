export const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Foto%20portada/DSC_0124.jpg"
          alt="Delia Vergara Studio"
          className="w-full h-full object-cover opacity-75"
        />
      </div>
      
      {/* Subtle gradient overlay to ensure logo readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />
      
      {/* Logo overlay */}
      <div className="absolute inset-0 flex items-start justify-center pt-20">
        <button 
          onClick={() => window.location.href = '/'}
          className="hover:opacity-70 transition-elegant cursor-pointer"
        >
          <img
            src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Logo/logo%20gcasi%20blanco_Mesa%20de%20trabajo%201.png"
            alt="Delia Vergara Logo"
            className="w-72 h-auto opacity-80"
          />
        </button>
      </div>
    </section>
  );
};