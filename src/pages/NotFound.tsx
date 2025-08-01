import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-elegant font-medium mb-4 text-muted-foreground tracking-title">404</h1>
        <p className="text-xl text-muted-foreground mb-4 font-light tracking-body leading-body">Página no encontrada</p>
        <a href="/" className="text-muted-foreground hover:text-foreground underline transition-elegant font-light">
          Volver al inicio
        </a>
      </div>
      
      {/* Footer con contacto */}
      <div className="mt-32 pt-12 border-t border-border text-center space-y-8 max-w-lg">
        <div>
          <a href="/como-comprar">
            <button className="text-muted-foreground hover:text-foreground transition-elegant font-light mb-6">
              Contáctame
            </button>
          </a>
        </div>
        
        {/* Contact buttons aligned side by side */}
        <div className="flex items-center justify-center gap-6">
          <a href="https://wa.me/34625857127" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-transparent backdrop-blur-sm rounded-full px-4 py-2 border border-muted-foreground/60 group-hover:border-primary/80 transition-all duration-300">
              <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-elegant">WhatsApp</span>
            </div>
          </a>

          <a href="https://instagram.com/deliavergaras" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-transparent backdrop-blur-sm rounded-full px-4 py-2 border border-muted-foreground/60 group-hover:border-primary/80 transition-all duration-300">
              <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-elegant">@deliavergaras</span>
            </div>
          </a>
        </div>
        
        <p className="text-body font-light text-muted-foreground tracking-body leading-body mt-6">
          deliavergara.joyas@gmail.com | +34 625857127
        </p>
      </div>
    </div>
  );
};

export default NotFound;
