const FixedSocialButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a href="https://wa.me/34625857127" target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105" style={{backgroundColor: '#EDEDED'}}>
          <img 
            src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Iconos/ICONO%20WHATSAP.png" 
            alt="WhatsApp" 
            className="h-5 w-5"
          />
          <span className="font-avenir-light font-light" style={{color: '#353333'}}>WhatsApp</span>
        </div>
      </a>

      <a href="https://instagram.com/deliavergaras" target="_blank" rel="noopener noreferrer">
        <div className="flex items-center justify-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105" style={{backgroundColor: '#EDEDED'}}>
          <img 
            src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Iconos/ICONO%20INSTAGRAM.png" 
            alt="Instagram" 
            className="h-5 w-5"
          />
          <span className="font-avenir-light font-light" style={{color: '#353333'}}>@deliavergaras</span>
        </div>
      </a>
    </div>
  );
};

export default FixedSocialButtons;