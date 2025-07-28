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
        {/* Contact buttons aligned side by side */}
        <div className="flex items-center justify-center gap-8">
          <a href="https://wa.me/34625857127" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-elegant">
            <img src="/lovable-uploads/Material de Apoyo/Iconos/icono whatssap.png" alt="WhatsApp" className="h-6 w-6" />
            <span className="font-body text-body">WhatsApp</span>
          </a>

          <a href="https://instagram.com/deliavergaras" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-elegant">
            <img src="/lovable-uploads/Material de Apoyo/Iconos/icono instagram-01.png" alt="Instagram" className="h-6 w-6" />
            <span className="font-body text-body">@deliavergaras</span>
          </a>
        </div>
        
        <p className="text-body font-light text-muted-foreground tracking-body leading-body">
          deliavergara.joyas@gmail.com | +34 625857127
        </p>
        <div>
          <a href="/como-comprar">
            <button className="text-muted-foreground hover:text-foreground transition-elegant font-light">
              Contáctame
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
