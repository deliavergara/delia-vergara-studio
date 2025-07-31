import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const HowToBuyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header con botón volver - ahora con estilo translúcido */}
      <div className="fixed top-6 left-6 z-50">
        <div onClick={() => navigate("/")} className="group cursor-pointer">
          <div className="bg-transparent backdrop-blur-sm rounded-full p-3 border border-muted-foreground/60 group-hover:border-primary/80 transition-all duration-300">
            <ArrowLeft className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-elegant" />
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Logo en la parte superior */}
          <div className="text-center mb-16">
            <img 
              src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Logo/logo%20gris%20muy%20oscuro.png" 
              alt="Delia Vergara Logo" 
              className="mx-auto w-72 h-auto mb-12" 
            />
          </div>
          
          {/* Título principal */}
          <div className="mb-16">
            <h1 className="font-avenir-heavy font-black text-xl uppercase tracking-title mb-8 text-left" style={{color: '#353333'}}>
              Cómo comprar
            </h1>
            <p className="font-avenir-light font-light tracking-body leading-body" style={{color: '#353333'}}>
              Tengo mi taller en Valencia, España, y las joyas que creo son piezas únicas o pequeñas ediciones, diseñadas y hechas a mano, con dedicación. Aquí te explico el detalle de cómo comprar:
            </p>
          </div>

          <div className="space-y-16">
            {/* Tipos de Joyas */}
            <div className="space-y-8">
              <div className="space-y-8">
                <div>
                  <p className="font-avenir-light font-light tracking-body leading-body" style={{color: '#353333'}}>
                    <span className="font-avenir-book font-normal uppercase" style={{color: '#353333'}}>Joyas en Stock:</span> Tengo un pequeño y exclusivo stock de piezas listas para ser enviadas. Son joyas de edición limitada que se encuentran físicamente en Valencia, España (zona Ruzafa) y en Santiago, Chile (zona Los Domínicos, Las Condes). Si te interesa alguna, la puedo enviar de inmediato
                  </p>
                </div>

                <div>
                  <p className="font-avenir-light font-light tracking-body leading-body" style={{color: '#353333'}}>
                    <span className="font-avenir-book font-normal uppercase" style={{color: '#353333'}}>Diseños por Encargo:</span> La mayoría de mis creaciones se pueden volver a producir especialmente para ti. El tiempo de producción varía según la complejidad: desde unos días para piezas sencillas hasta algunas semanas para las más elaboradas
                  </p>
                </div>

                <div>
                  <p className="font-avenir-light font-light tracking-body leading-body" style={{color: '#353333'}}>
                    <span className="font-avenir-book font-normal uppercase" style={{color: '#353333'}}>Proyectos Personalizados:</span> Si tienes una idea o un sueño, hablemos. Me gusta colaborar y crear juntos una joya totalmente nueva y personal
                  </p>
                </div>
              </div>
            </div>

            {/* Imagen del packaging */}
            <div className="mx-auto max-w-5xl px-4">
              <img 
                src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Foto%20portada/Foto%20categoria%20comprar.jpg" 
                alt="Packaging Delia Vergara" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Especificaciones */}
            <div className="space-y-8">
              <h2 className="font-avenir-heavy font-black text-xl uppercase tracking-title text-left" style={{color: '#353333'}}>
                Especificaciones
              </h2>
              
              <div className="space-y-8">
                <div>
                  <p className="font-avenir-light font-light tracking-body leading-body" style={{color: '#353333'}}>
                    <span className="font-avenir-book font-normal uppercase" style={{color: '#353333'}}>Materiales y Talla:</span> Trabajo principalmente con plata de ley y plata enchapada en oro. También puedo realizar tu encargo en oro macizo o en algún otro material que prefieras. La talla es a medida, pídeme la que requieras. Si tienes dudas de la tuya, contáctame y te guiaré con métodos muy simples para encontrar tu medida exacta
                  </p>
                </div>

                <div>
                  <p className="font-avenir-light font-light tracking-body leading-body" style={{color: '#353333'}}>
                    <span className="font-avenir-book font-normal uppercase" style={{color: '#353333'}}>Formas de Pago:</span> El pago se realiza mediante transferencia bancaria. Dispongo de cuentas en Europa (euros) y en Chile (pesos chilenos), elige la que te acomode
                  </p>
                </div>

                <div>
                  <p className="font-avenir-light font-light tracking-body leading-body" style={{color: '#353333'}}>
                    <span className="font-avenir-book font-normal uppercase" style={{color: '#353333'}}>Envíos:</span> Realizo envíos a toda Europa y Chile. El coste del envío se calcula según tu ubicación y se suma al valor final de tu joya (para Chile es desde Santiago, para que no te preocupes del envío internacional)
                  </p>
                </div>
              </div>
            </div>

            {/* Sección de contacto */}
            <div className="border-t border-border pt-16 relative">
              <div className="absolute bottom-0 left-0 z-0 -ml-8">
                <img 
                  src="/lovable-uploads/Material%20de%20Apoyo/Logo/isologo.png" 
                  alt="Delia Vergara Isologo" 
                  className="h-32 w-auto opacity-50"
                />
              </div>
              
              <div className="text-center space-y-8 relative z-10 pb-12">
                <h2 className="font-avenir-black font-black text-2xl uppercase mb-8" style={{color: '#353333'}}>
                  CONTÁCTAME
                </h2>
                
                <p className="font-avenir-light font-light tracking-body leading-body" style={{color: '#353333'}}>
                  deliavergara.joyas@gmail.com | +34 625857127
                </p>
              </div>

              {/* Contact buttons - ahora fixed */}
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
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HowToBuyPage;