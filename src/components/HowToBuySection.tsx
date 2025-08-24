import { buildSupabaseUrl } from "@/lib/supabase-config";

export const HowToBuySection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url(${buildSupabaseUrl("productos/material-de-apoyo/foto-portada/99240e15-8897-4a7b-b1b0-ca5b38f33f8f.png")})`
        }}
      />
      
      {/* Content */}
      <div className="relative max-w-3xl mx-auto">
        <h2 className="font-elegant text-4xl md:text-5xl text-center mb-16 text-foreground">
          Cómo comprar
        </h2>
        
        <div className="space-y-12 text-center">
          <div className="space-y-6">
            <p className="font-clean text-lg leading-relaxed text-foreground">
              Actualmente vivo en España y tengo un pequeño stock
              disponible en Valencia (Puerto Rico, Ruzafa) y en Chile
              (Los Domínicos, Las Condes), y hago envíos a todo
              Europa y Chile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-4">
              <h3 className="font-elegant text-2xl text-foreground">
                Mis Diseños:
              </h3>
              <p className="font-clean leading-relaxed text-muted-foreground">
                Puedes consultar el stock
                disponible o solicitar una
                pieza por encargo, teniendo
                en cuenta el tiempo de
                elaboración y envío.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-elegant text-2xl text-foreground">
                A Pedido:
              </h3>
              <p className="font-clean leading-relaxed text-muted-foreground">
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
    </section>
  );
};