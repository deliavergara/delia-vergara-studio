export const HowToBuySection = () => {
  return (
    <section className="relative min-h-screen py-24 px-6">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/99240e15-8897-4a7b-b1b0-ca5b38f33f8f.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
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