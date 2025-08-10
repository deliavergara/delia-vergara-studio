import { HamburgerMenu } from "@/components/HamburgerMenu";
import { buildGitHubRawUrl } from "@/lib/config";
import { useEffect, useState, useRef } from "react"; // <-- Se ha añadido useRef

const CustomJewelryPage = () => {
  // Estado para guardar la posición de cada elemento
  const [elementPositions, setElementPositions] = useState({});

  // Referencias para cada elemento de texto que se va a animar
  const titleRef = useRef(null);
  const openingQuestionRef = useRef(null);
  const processStepsRef = useRef(null);
  const closingRef = useRef(null);

  // Nueva función de opacidad responsiva
  const getResponsiveOpacity = (elementTop) => {
    if (elementTop === null || elementTop === undefined) return 0;
    
    const viewportHeight = window.innerHeight;
    const centerPoint = viewportHeight / 2;
    const distanceToCenter = Math.abs(elementTop - centerPoint);
    
    // Define el rango de fade-in/out (1/3 de la altura de la ventana)
    const fadeRange = viewportHeight / 3;
    
    const opacity = 1 - Math.min(1, distanceToCenter / fadeRange);
    return Math.max(0, opacity);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Calcula la posición de cada elemento
      const positions = {
        title: titleRef.current?.getBoundingClientRect().top,
        openingQuestion: openingQuestionRef.current?.getBoundingClientRect().top,
        processSteps: processStepsRef.current?.getBoundingClientRect().top,
        closing: closingRef.current?.getBoundingClientRect().top,
      };
      setElementPositions(positions);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llama a la función al inicio para posicionar los elementos

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
          className="w-full h-full object-cover"
          style={{ opacity: 0.90 }}
        >
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
            ref={titleRef} // <-- Referencia al elemento
            className="text-center py-12"
            style={{ opacity: getResponsiveOpacity(elementPositions.title) }} // <-- Llamada a la nueva función
          >
            <h1 className="font-black-mango text-4xl md:text-5xl lg:text-6xl uppercase text-white mb-6">
              JOYAS A MEDIDA
            </h1>
          </div>

          {/* Opening Question */}
          <div 
            ref={openingQuestionRef} // <-- Referencia al elemento
            className="text-center py-6"
            style={{ opacity: getResponsiveOpacity(elementPositions.openingQuestion) }} // <-- Llamada a la nueva función
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
            ref={processStepsRef} // <-- Referencia al contenedor de los pasos
            className="space-y-16 py-8"
            style={{ opacity: getResponsiveOpacity(elementPositions.processSteps) }} // <-- Llamada a la nueva función
          >
            {/* 1. Hablemos de tu idea */}
            <div className="space-y-4">
              <h3 className="font-avenir-book text-lg md:text-xl text-white font-bold">
                1. Hablemos de tu idea
              </h3>
              <p className="font-avenir-light text-lg md:text-xl text-white leading-relaxed">
                Conversemos sobre lo que te imaginas, los materiales que te gustan y el presupuesto. Trabajo principalmente con plata y baños de oro, pero también puedo usar oro macizo u otros materiales, según lo que necesites.
              </p>
            </div>
            
            {/* 2. Diseñamos juntos */}
            <div className="space-y-4">
              <h3 className="font-avenir-book text-lg md:text-xl text-white font-bold">
                2. Diseñamos juntos
              </h3>
              <p className="font-avenir-light text-lg md:text-xl text-white leading-relaxed">
                Preparo bocetos e iteramos en la propuesta hasta tener el diseño final. Podemos probar con diferentes formas, colores, piedras, lo que haga falta.
              </p>
            </div>
            
            {/* 3. Elaboración de la joya */}
            <div className="space-y-4">
              <h3 className="font-avenir-book text-lg md:text-xl text-white font-bold">
                3. Elaboración de la joya
              </h3>
              <p className="font-avenir-light text-lg md:text-xl text-white leading-relaxed">
                La pieza la hago a mano en mi taller en Valencia, cada resultado es único. El tiempo de creación suele ser entre 15 y 25 días hábiles, dependiendo de la complejidad de la pieza.
              </p>
            </div>
            
            {/* 4. Envío */}
            <div className="space-y-4">
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
            ref={closingRef} // <-- Referencia al elemento
            className="text-center py-20"
            style={{ opacity: getResponsiveOpacity(elementPositions.closing) }} // <-- Llamada a la nueva función
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
