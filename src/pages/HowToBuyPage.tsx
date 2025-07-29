import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
const HowToBuyPage = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-background relative">
      {/* Header con botón volver */}
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
            <img src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Logo/logo%20gris%20medio_Mesa%20de%20trabajo%201.png" alt="Delia Vergara Logo" className="mx-auto h-24 w-auto mb-12" />
          </div>
          
          {/* Título principal */}
          <div className="text-center mb-16">
            <h1 className="font-roboto-medium text-text-dark-gray tracking-title mb-8 font-normal text-3xl">
              Cómo comprar
            </h1>
            <p className="text-body font-light text-muted-foreground tracking-body leading-body max-w-3xl mx-auto">
              Tengo mi taller en Valencia, España, y las joyas que creo son piezas únicas o pequeñas ediciones, diseñadas y hechas a mano, con dedicación. Aquí te explico el detalle de cómo comprar:
            </p>
          </div>

          <div className="space-y-16">
            {/* Tipos de Joyas */}
            <div className="space-y-8">
              
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-roboto-medium text-text-dark-gray tracking-title font-medium text-base">Joyas en Stock</h3>
                  <p className="text-body font-light text-muted-foreground tracking-body leading-body pl-6">Tengo un pequeño y exclusivo stock de piezas listas para ser enviadas. Son joyas de edición limitada que se encuentran físicamente en Valencia, España (zona Ruzafa) y en Santiago, Chile (zona Los Domínicos, Las Condes). Si te interesa alguna, la puedo enviar de inmediato</p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-roboto-medium font-medium text-text-dark-gray tracking-title text-base">Diseños por Encargo</h3>
                  <p className="text-body font-light text-muted-foreground tracking-body leading-body pl-6">
                    La mayoría de mis creaciones se pueden volver a producir especialmente para ti. El tiempo de producción varía según la complejidad: desde unos días para piezas sencillas hasta algunas semanas para las más elaboradas
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-roboto-medium font-medium text-text-dark-gray tracking-title text-base">Proyectos Personalizados</h3>
                  <p className="text-body font-light text-muted-foreground tracking-body leading-body pl-6">
                    Si tienes una idea o un sueño, hablemos. Me gusta colaborar y crear juntos una joya totalmente nueva y personal
                  </p>
                </div>
              </div>
            </div>

            {/* Video antes de especificaciones */}
            <div className="text-center mb-16 bg-transparent rounded-none">
              <video autoPlay muted loop playsInline className="mx-auto w-full max-w-lg h-64 object-cover shadow-elegant rounded-none">
                <source src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Videos/DSC_0330.mov" type="video/mp4" />
              </video>
            </div>

            {/* Especificaciones */}
            <div className="space-y-8">
              <h2 className="font-roboto-medium font-medium text-3xl text-text-dark-gray tracking-title text-center">
                Especificaciones
              </h2>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-roboto-medium font-medium text-text-dark-gray tracking-title text-base">Materiales</h3>
                  <p className="text-body font-light text-muted-foreground tracking-body leading-body pl-6">
                    Trabajo principalmente con plata de ley y plata enchapada en oro. También puedo realizar tu encargo en oro macizo o en algún otro material que prefieras
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-roboto-medium font-medium text-text-dark-gray tracking-title text-base">La Talla</h3>
                  <p className="text-body font-light text-muted-foreground tracking-body leading-body pl-6">
                    La talla es a medida, pídeme la que requieras. Si tienes dudas de la tuya, contáctame y te guiaré con métodos muy simples para encontrar tu medida exacta
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-roboto-medium font-medium text-text-dark-gray tracking-title text-base">Formas de Pago</h3>
                  <p className="text-body font-light text-muted-foreground tracking-body leading-body pl-6">
                    El pago se realiza mediante transferencia bancaria. Dispongo de cuentas en Europa (euros) y en Chile (pesos chilenos), elige la que te acomode
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-roboto-medium font-medium text-text-dark-gray tracking-title text-base">Envíos</h3>
                  <p className="text-body font-light text-muted-foreground tracking-body leading-body pl-6">
                    Realizo envíos a toda Europa y Chile. El coste del envío se calcula según tu ubicación y se suma al valor final de tu joya (para Chile es desde Santiago, para que no te preocupes del envío internacional)
                  </p>
                </div>
              </div>
            </div>

            {/* Sección de contacto */}
            <div className="border-t border-border pt-16 space-y-12">
              <h2 className="font-roboto-medium font-medium text-text-dark-gray tracking-title text-center text-xl">
                Contáctame
              </h2>

              <div className="space-y-6 text-center">
                <p className="text-body font-light text-muted-foreground tracking-body leading-body">
                  Si tienes cualquier duda o quieres empezar a crear tu joya personalizada, no dudes en contactarme. Estaré feliz de escucharte y crear juntos lo que buscas
                </p>
              </div>
              
              {/* Contact options aligned horizontally */}
              <div className="flex flex-col items-center gap-8 max-w-2xl mx-auto">
                {/* Buttons aligned side by side */}
                <div className="flex items-center gap-6">
                  <a href="https://wa.me/34625857127" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="bg-transparent backdrop-blur-sm rounded-full px-4 py-2 border border-muted-foreground/30 group-hover:border-primary/80 group-hover:bg-muted/20 transition-all duration-300">
                      <span className="font-body text-sm text-muted-foreground group-hover:text-foreground group-hover:font-semibold transition-all duration-300">WhatsApp</span>
                    </div>
                  </a>

                  <a href="https://instagram.com/deliavergaras" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="bg-transparent backdrop-blur-sm rounded-full px-4 py-2 border border-muted-foreground/30 group-hover:border-primary/80 group-hover:bg-muted/20 transition-all duration-300">
                      <span className="font-body text-sm text-muted-foreground group-hover:text-foreground group-hover:font-semibold transition-all duration-300">@deliavergaras</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Información de contacto */}
              <div className="pt-8 border-t border-border space-y-4">
                <p className="text-body font-light text-muted-foreground tracking-body leading-body text-center">
                  deliavergara.joyas@gmail.com | +34 625857127
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default HowToBuyPage;