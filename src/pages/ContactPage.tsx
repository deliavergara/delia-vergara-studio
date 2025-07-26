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
            {/* WhatsApp */}
            <div className="space-y-6">
              <p className="text-body font-light text-muted-foreground tracking-body leading-body">
                Escríbeme por WhatsApp para ver el stock, encargar una pieza personalizada o resolver cualquier duda.
              </p>
              <a
                href="https://wa.me/34625857127"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-sm transition-elegant"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>

            {/* Instagram */}
            <div className="space-y-6">
              <p className="text-body font-light text-muted-foreground tracking-body leading-body">
                También puedes seguirme en Instagram para ver procesos y novedades.
              </p>
              <div className="flex flex-col items-center gap-4">
                <a
                  href="https://instagram.com/deliavergaras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-sm transition-elegant"
                >
                  <Instagram className="h-5 w-5" />
                  @deliavergaras
                </a>
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