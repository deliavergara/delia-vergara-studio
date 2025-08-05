import { HamburgerMenu } from "@/components/HamburgerMenu";
import { buildGitHubRawUrl } from "@/lib/config";
import { useEffect, useState } from "react";

const CustomJewelryPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <HamburgerMenu />
      
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-95"
        >
          <source src={buildGitHubRawUrl("public/lovable-uploads/Joyas%20a%20medida/C52E6DC.mov")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 min-h-[500vh]">
        {/* Section 1: Title */}
        <div className="h-screen flex items-center justify-center px-6">
          <div 
            className="text-center transform transition-all duration-700"
            style={{
              opacity: Math.max(0, 1 - scrollY / 400),
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          >
            <h1 className="font-black-mango text-4xl md:text-6xl lg:text-7xl uppercase text-white text-center mb-8">
              JOYAS A MEDIDA
            </h1>
          </div>
        </div>

        {/* Section 2: Opening */}
        <div className="h-screen flex items-center justify-center px-6">
          <div 
            className="max-w-4xl mx-auto text-center space-y-8 transform transition-all duration-700"
            style={{
              opacity: scrollY > 300 ? Math.min(1, (scrollY - 300) / 400) : 0,
              transform: `translateY(${Math.max(0, 50 - (scrollY - 300) * 0.1)}px)`
            }}
          >
            <h2 className="font-avenir-heavy text-2xl md:text-3xl lg:text-4xl text-white">
              ¿Tienes una idea en mente?
            </h2>
            <p className="font-avenir-light text-lg md:text-xl lg:text-2xl text-white">
              Juntos la podemos convertir en una joya única:
            </p>
          </div>
        </div>

        {/* Section 3: Process Step 1-2 */}
        <div className="h-screen flex items-center justify-center px-6">
          <div 
            className="max-w-4xl mx-auto space-y-8 transform transition-all duration-700"
            style={{
              opacity: scrollY > 800 ? Math.min(1, (scrollY - 800) / 400) : 0,
              transform: `translateY(${Math.max(0, 50 - (scrollY - 800) * 0.1)}px)`
            }}
          >
            <div className="space-y-6">
              <p className="font-avenir-light text-base md:text-lg lg:text-xl text-white leading-relaxed">
                <span className="font-bold">1.</span> Hablemos de tu idea: conversemos sobre lo que te imaginas, los materiales que te gustan y el presupuesto. Trabajo principalmente con plata y baños de oro, pero también puedo usar oro macizo u otros materiales, según lo que necesites.
              </p>
              <p className="font-avenir-light text-base md:text-lg lg:text-xl text-white leading-relaxed">
                <span className="font-bold">2.</span> Diseñamos juntos: preparo bocetos e iteramos en la propuesta hasta tener el diseño final. Podemos probar con diferentes formas, colores, piedras, lo que haga falta.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Process Step 3-4 */}
        <div className="h-screen flex items-center justify-center px-6">
          <div 
            className="max-w-4xl mx-auto space-y-8 transform transition-all duration-700"
            style={{
              opacity: scrollY > 1300 ? Math.min(1, (scrollY - 1300) / 400) : 0,
              transform: `translateY(${Math.max(0, 50 - (scrollY - 1300) * 0.1)}px)`
            }}
          >
            <div className="space-y-6">
              <p className="font-avenir-light text-base md:text-lg lg:text-xl text-white leading-relaxed">
                <span className="font-bold">3.</span> Elaboración de la joya: La pieza se hace a mano en mi taller en Valencia, cada resultado es único. El tiempo de creación suele ser entre 15 y 25 días hábiles, dependiendo de la complejidad de la pieza.
              </p>
              <p className="font-avenir-light text-base md:text-lg lg:text-xl text-white leading-relaxed">
                <span className="font-bold">4.</span> Envío: una vez terminada la joya, se prepara para el envío, que puede tomar algunos días o semanas, dependiendo del destino.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: Closing */}
        <div className="h-screen flex items-center justify-center px-6">
          <div 
            className="max-w-4xl mx-auto text-center transform transition-all duration-700"
            style={{
              opacity: scrollY > 1800 ? Math.min(1, (scrollY - 1800) / 400) : 0,
              transform: `translateY(${Math.max(0, 50 - (scrollY - 1800) * 0.1)}px)`
            }}
          >
            <p className="font-avenir-book text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
              Si tienes alguna idea, no dudes en contactarme. Hablemos y diseñemos juntos una joya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomJewelryPage;