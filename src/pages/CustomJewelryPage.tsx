import { HamburgerMenu } from "@/components/HamburgerMenu";
import { buildGitHubRawUrl } from "@/lib/config";

const CustomJewelryPage = () => {
  return (
    <div className="relative">
      <HamburgerMenu />
      
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0" style={{ backgroundColor: '#353845' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0.9 }}
        >
          <source 
            src={buildGitHubRawUrl("public/lovable-uploads/Joyas%20a%20medida/C52E6DC.mp4")} 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 min-h-screen pt-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          
          {/* Title */}
          <div className="py-12">
            <h1 className="font-black-mango text-4xl md:text-5xl lg:text-6xl uppercase mb-8" style={{ color: '#FFFFFF' }}>
              JOYAS A MEDIDA
            </h1>
          </div>

          {/* Opening Question */}
          <div className="mb-8">
            <h2 className="font-avenir-heavy text-2xl md:text-3xl mb-4" style={{ color: '#FFFFFF' }}>
              ¿Tienes una idea en mente?
            </h2>
            <p className="font-avenir-light text-xl md:text-2xl mb-6" style={{ color: '#FFFFFF' }}>
              Juntos la podemos convertir en una joya única:
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-6 text-left">
            <div>
              <h3 className="font-avenir-book text-lg md:text-xl mb-2" style={{ color: '#FFFFFF' }}>
                1. Hablemos de tu idea:
              </h3>
              <p className="font-avenir-light text-lg md:text-xl leading-relaxed" style={{ color: '#FFFFFF' }}>
                conversemos sobre lo que te imaginas, los materiales que te gustan y el presupuesto. Trabajo principalmente con plata y baños de oro, pero también puedo usar oro macizo u otros materiales, según lo que necesites.
              </p>
            </div>
            
            <div>
              <h3 className="font-avenir-book text-lg md:text-xl mb-2" style={{ color: '#FFFFFF' }}>
                2. Diseñamos juntos:
              </h3>
              <p className="font-avenir-light text-lg md:text-xl leading-relaxed" style={{ color: '#FFFFFF' }}>
                preparo bocetos e iteramos en la propuesta hasta tener el diseño final. Podemos probar con diferentes formas, colores, piedras, lo que haga falta.
              </p>
            </div>
            
            <div>
              <h3 className="font-avenir-book text-lg md:text-xl mb-2" style={{ color: '#FFFFFF' }}>
                3. Elaboración de la joya:
              </h3>
              <p className="font-avenir-light text-lg md:text-xl leading-relaxed" style={{ color: '#FFFFFF' }}>
                la pieza se hace a mano en mi taller en Valencia, cada resultado es único. El tiempo de creación suele ser entre 15 y 25 días hábiles, dependiendo de la complejidad de la pieza.
              </p>
            </div>
            
            <div>
              <h3 className="font-avenir-book text-lg md:text-xl mb-2" style={{ color: '#FFFFFF' }}>
                4. Envío:
              </h3>
              <p className="font-avenir-light text-lg md:text-xl leading-relaxed" style={{ color: '#FFFFFF' }}>
                una vez terminada la joya, se prepara para el envío, que puede tomar algunos días o semanas, dependiendo del destino.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="py-12 mt-8">
            <p className="font-avenir-book text-xl md:text-2xl leading-relaxed" style={{ color: '#FFFFFF' }}>
              Si tienes alguna idea, no dudes en contactarme. Hablemos y diseñemos juntos una joya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomJewelryPage;