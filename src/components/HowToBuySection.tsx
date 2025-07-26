import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HowToBuySection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-accent/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-elegant text-3xl md:text-4xl text-foreground mb-12">
          Cómo comprar
        </h2>
        
        <div className="space-y-8 text-left">
          <p className="text-muted-foreground leading-relaxed">
            Actualmente vivo en España y tengo un pequeño stock disponible en Valencia (Puerto Rico, Ruzafa) y en Chile (Los Domínicos, Las Condes), y hago envíos a todo Europa y Chile.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-elegant text-xl text-foreground mb-4">Mis Diseños:</h3>
              <p className="text-muted-foreground leading-relaxed">
                Puedes consultar el stock disponible o solicitar una pieza por encargo, teniendo en cuenta el tiempo de elaboración y envío.
              </p>
            </div>
            
            <div>
              <h3 className="font-elegant text-xl text-foreground mb-4">A Pedido:</h3>
              <p className="text-muted-foreground leading-relaxed">
                Si tienes algún proyecto especial en mente, hablemos. Así podremos definir el diseño y darte un presupuesto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HowToBuyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          <source src="/lovable-uploads/Videos/DSC_0330.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="fixed top-6 left-6 z-40">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/')}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
        >
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </Button>
      </div>

      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="font-elegant text-4xl md:text-5xl text-foreground mb-12">
            Cómo comprar
          </h1>
          
          <div className="space-y-8 text-left bg-white/80 backdrop-blur-sm p-8 rounded-sm">
            <p className="text-muted-foreground leading-relaxed">
              Actualmente vivo en España y tengo un pequeño stock disponible en Valencia (Puerto Rico, Ruzafa) y en Chile (Los Domínicos, Las Condes), y hago envíos a todo Europa y Chile.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-elegant text-xl text-foreground mb-4">Mis Diseños:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Puedes consultar el stock disponible o solicitar una pieza por encargo, teniendo en cuenta el tiempo de elaboración y envío.
                </p>
              </div>
              
              <div>
                <h3 className="font-elegant text-xl text-foreground mb-4">A Pedido:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Si tienes algún proyecto especial en mente, hablemos. Así podremos definir el diseño y darte un presupuesto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};