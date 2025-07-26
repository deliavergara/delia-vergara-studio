import { useNavigate } from "react-router-dom";
import { ArrowLeft, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Video de fondo opaco */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-5"
        >
          <source src="/lovable-uploads/Material de Apoyo/Videos/DSC_0330.mov" type="video/mp4" />
        </video>
      </div>

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

      {/* Contenido principal */}
      <div className="relative z-10 pt-24 pb-12">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h1 className="font-elegant font-medium text-4xl text-foreground mb-16 tracking-title">
            Contáctame
          </h1>

          <div className="space-y-12">
            {/* Contact options in two columns */}
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* WhatsApp */}
              <div className="space-y-6 text-center">
                <p className="text-body font-light text-muted-foreground tracking-body leading-body">
                  Escríbeme por WhatsApp para ver el stock, encargar una pieza personalizada o resolver cualquier duda.
                </p>
                <a
                  href="https://wa.me/34625857127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-elegant"
                >
                  <img src="/lovable-uploads/Material de Apoyo/Iconos/0a13d467-6ad9-48b5-82ae-a5481a41885d.png" alt="WhatsApp" className="h-5 w-5" />
                  <span className="font-body text-body">WhatsApp</span>
                </a>
              </div>

              {/* Instagram */}
              <div className="space-y-6 text-center">
                <p className="text-body font-light text-muted-foreground tracking-body leading-body">
                  También puedes seguirme en Instagram para ver procesos y novedades.
                </p>
                <div className="flex flex-col items-center gap-4">
                  <a
                    href="https://instagram.com/deliavergaras"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-elegant"
                  >
                    <img src="/lovable-uploads/Material de Apoyo/Iconos/d870cb07-e308-4eb3-817d-68dba260d987.png" alt="Instagram" className="h-5 w-5" />
                    <span className="font-body text-body">@deliavergaras</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Información de contacto */}
            <div className="pt-8 border-t border-border space-y-4">
              <p className="text-body font-light text-muted-foreground tracking-body leading-body">
                Deliavergara.joyas@gmail.com
              </p>
              <p className="text-body font-light text-muted-foreground tracking-body leading-body">
                +34 625857127
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;