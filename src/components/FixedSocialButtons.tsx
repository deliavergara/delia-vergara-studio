const FixedSocialButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-[1000]">
      {/* Botón WhatsApp */}
      <a 
        href="https://wa.me/34625857127" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group"
      >
        <div className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl" style={{backgroundColor: '#25D366'}}>
          <img 
            src="/lovable-uploads/Material de Apoyo/Iconos/ICONO WHATSAP.png" 
            alt="WhatsApp" 
            className="h-7 w-7 filter brightness-0 invert"
          />
        </div>
      </a>

      {/* Botón Instagram */}
      <a 
        href="https://instagram.com/deliavergaras" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group"
      >
        <div className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl" style={{backgroundColor: '#E4405F'}}>
          <img 
            src="/lovable-uploads/Material de Apoyo/Iconos/ICONO INSTAGRAM.png" 
            alt="Instagram" 
            className="h-7 w-7 filter brightness-0 invert"
          />
        </div>
      </a>
    </div>
  );
};

export default FixedSocialButtons;