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

  const getOpacity = (startY: number, range: number = 300) => {
    if (scrollY < startY - 100) return 0;
    if (scrollY > startY + range) return 1;
    return Math.min(1, Math.max(0, (scrollY - startY + 100) / range));
  };

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
          className="w-full h-full object-cover"
          style={{ opacity: 0.90 }}
        >
          {/* CAMBIO CLAVE: Usa un solo source con formato MP4, más universal. */}
          {/* DEBES ASEGURARTE DE QUE LA RUTA APUNTE A UN ARCHIVO .mp4 EXISTENTE */}
          <source 
            src={buildGitHubRawUrl("public/lovable-uploads/Joyas%20a%20medida/video_fondo_joya_medida.mp4")} 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

            {/* Scrollable Content */}
      <div className="relative z-10 min-h-[400vh] pt-24">
        <div className="max-w-2xl mx-auto px-6 space-y-8">
          
          {/* Title */}
          <div 
            className="text-center py-12"
            style={{ opacity: getOpacity(-100) }}
          >
            <h1 className="font-black-mango text-4xl md:text-5xl lg:text-6xl uppercase text-white mb-6">
              JOYAS A MEDIDA
            </h1>
          </div>

          {/* Opening Question */}
          <div 
            className="text-center py-6"
            style={{ opacity: getOpacity(100) }}
          >
            <h2 className="font-avenir-heavy text-2xl md:text-3xl text-white mb-4">
              ¿Tienes una idea en mente?
            </h2>
            <p className="font-avenir-light text-xl md:text-2xl text-white mb-6">
              Juntos la podemos convertir en una joya única
            </p>
          </div>

          {/* Process Steps */}
          <div 
            className="space-y-16 py-8"
          >
            {/* 1. Hablemos de tu idea */}
            <div 
              className="space-y-4"
              style={{ opacity: getOpacity(300) }}
            >
              <h3 className="font-avenir-book text-lg md:text-xl text-white font-bold">
                1. Hablemos de tu idea
              </h3>
              <p className="font-avenir-light text-lg md:text-xl text-white leading-relaxed">
                Conversemos sobre lo que te imaginas, los materiales que te gustan y el presupuesto. Trabajo principalmente con plata y baños de oro, pero también puedo usar oro macizo u otros materiales, según lo que necesites.
              </p>
            </div>
            
            {/* 2. Diseñamos juntos */}
            <div 
              className="space-y-4"
              style={{ opacity: getOpacity(400) }}
            >
              <h3 className="font-avenir-book text-lg md:text-xl text-white font-bold">
                2. Diseñamos juntos
              </h3>
              <p className="font-avenir-light text-lg md:text-xl text-white leading-relaxed">
                Preparo bocetos e iteramos en la propuesta hasta tener el diseño final. Podemos probar con diferentes formas, colores, piedras, lo que haga falta.
              </p>
            </div>
            
            {/* 3. Elaboración de la joya */}
            <div 
              className="space-y-4"
              style={{ opacity: getOpacity(500) }}
            >
              <h3 className="font-avenir-book text-lg md:text-xl text-white font-bold">
                3. Elaboración de la joya
              </h3>
              <p className="font-avenir-light text-lg md:text-xl text-white leading-relaxed">
                La pieza la hago a mano en mi taller en Valencia, cada resultado es único. El tiempo de creación suele ser entre 15 y 25 días hábiles, dependiendo de la complejidad de la pieza.
              </p>
            </div>
            
            {/* 4. Envío */}
            <div 
              className="space-y-4"
              style={{ opacity: getOpacity(600) }}
            >
              <h3 className="font-avenir-book text-lg md:text-xl text-white font-bold">
                4. Envío
              </h3>
              <p className="font-avenir-light text-lg md:text-xl text-white leading-relaxed">
                Una vez terminada la joya, se prepara para el envío, que puede tomar algunos días o semanas, dependiendo del destino.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div 
            className="text-center py-20"
            style={{ opacity: getOpacity(800) }}
          >
            <p className="font-avenir-book text-xl md:text-2xl text-white leading-relaxed">
              Si tienes alguna idea, no dudes en contactarme. Hablemos y diseñemos juntos una joya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomJewelryPage;
