import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowToBuyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Video de fondo opaco */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          <source src="/lovable-uploads/Videos/DSC_0326.mov" type="video/mp4" />
        </video>
      </div>

      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-white/60 z-10" />

      {/* Header con botón volver */}
      <div className="fixed top-6 left-6 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90 border border-border shadow-minimal transition-elegant"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>

      {/* Contenido */}
      <div className="relative z-20 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="font-elegant text-5xl text-foreground mb-16">
            Cómo Comprar
          </h1>
          
          <div className="space-y-12 text-lg leading-relaxed text-foreground">
            <p>
              Actualmente vivo en España y tengo un pequeño stock
              disponible en Valencia (Puerto Rico, Ruzafa) y en Chile
              (Los Domínicos, Las Condes), y hago envíos a todo
              Europa y Chile.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="text-center">
                <h2 className="font-elegant text-2xl text-foreground mb-6">
                  Mis Diseños
                </h2>
                <p>
                  Puedes consultar el stock
                  disponible o solicitar una
                  pieza por encargo, teniendo
                  en cuenta el tiempo de
                  elaboración y envío.
                </p>
              </div>
              
              <div className="text-center">
                <h2 className="font-elegant text-2xl text-foreground mb-6">
                  A Pedido
                </h2>
                <p>
                  Si tienes algún proyecto
                  especial en mente,
                  hablemos. Así podremos
                  definir el diseño y darte
                  un presupuesto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToBuyPage;