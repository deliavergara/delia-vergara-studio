import { HamburgerMenu } from "@/components/HamburgerMenu";
import { buildGitHubRawUrl } from "@/lib/config";
import { useEffect, useState, useRef } from "react";
const CustomJewelryPage = () => {
  const [elementPositions, setElementPositions] = useState<{
    title?: number;
    openingQuestion?: number;
    step1?: number;
    step2?: number;
    step3?: number;
    step4?: number;
    closing?: number;
  }>({});

  // Referencias para cada elemento de texto que se va a animar
  const titleRef = useRef(null);
  const openingQuestionRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const closingRef = useRef(null);

  // Nueva función para un efecto de fade-out (para el título y pregunta inicial)
  const getFadeOutOpacity = elementTop => {
    if (elementTop === null || elementTop === undefined) return 1;
    const viewportHeight = window.innerHeight;
    const fadeStart = viewportHeight * 0.2; // Comienza a desvanecerse cuando el elemento está al 20% desde arriba
    const fadeEnd = viewportHeight * 0.6; // Desaparece al llegar al 60% desde arriba
    const scrollDistance = fadeEnd - fadeStart;
    if (elementTop > fadeEnd) return 0;
    if (elementTop < fadeStart) return 1;
    return 1 - (elementTop - fadeStart) / scrollDistance;
  };

  // Nueva función para un efecto de fade-in y fade-out (para los 4 pasos)
  const getResponsiveOpacity = elementTop => {
    if (elementTop === null || elementTop === undefined) return 0;
    const viewportHeight = window.innerHeight;
    const centerPoint = viewportHeight / 3;
    const distanceToCenter = Math.abs(elementTop - centerPoint);

    // El efecto empieza a desvanecerse cuando el elemento está a 1/3 de la altura de la ventana del centro
    const fadeRange = viewportHeight / 3;
    const opacity = 1 - Math.min(1, distanceToCenter / fadeRange);
    return Math.max(0, opacity);
  };
  useEffect(() => {
    const handleScroll = () => {
      const positions = {
        title: titleRef.current?.getBoundingClientRect().top,
        openingQuestion: openingQuestionRef.current?.getBoundingClientRect().top,
        step1: step1Ref.current?.getBoundingClientRect().top,
        step2: step2Ref.current?.getBoundingClientRect().top,
        step3: step3Ref.current?.getBoundingClientRect().top,
        step4: step4Ref.current?.getBoundingClientRect().top,
        closing: closingRef.current?.getBoundingClientRect().top
      };
      setElementPositions(positions);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="relative">
      <HamburgerMenu />
      
      {/* Video Background */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover" style={{
        opacity: 0.95
      }}>
          <source src={buildGitHubRawUrl("public/lovable-uploads/Joyas%20a%20medida/video_fondo_joya_medida.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 min-h-[400vh] pt-24">
        <div className="max-w-2xl mx-auto px-6 space-y-8">
          
          {/* Title */}
          <div ref={titleRef} className="text-center py-12" style={{
          opacity: getFadeOutOpacity(elementPositions.title)
        }}>
            <h1 className="font-avenir-medium text-white text-4xl lg:text-6xl text-center md:text-4xl font-medium">
              JOYAS A MEDIDA
            </h1>
          </div>

          {/* Opening Question */}
          <div ref={openingQuestionRef} className="text-center py-6" style={{
          opacity: getFadeOutOpacity(elementPositions.openingQuestion)
        }}>
            <h2 className="font-avenir-medium text-2xl md:text-3xl text-white mb-4">
              ¿Tienes una idea en mente?
            </h2>
            <p className="font-avenir-light text-xl md:text-2xl text-white mb-6">
              Juntos la podemos convertir en una joya única
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-16 py-8">
            {/* 1. Hablemos de tu idea */}
            <div ref={step1Ref} className="space-y-4" style={{
            opacity: getResponsiveOpacity(elementPositions.step1)
          }}>
              <h3 className="font-avenir-book text-lg md:text-xl text-white font-bold">
                1. Hablemos de tu idea
              </h3>
              <p className="font-avenir-light text-lg md:text-xl text-white leading-relaxed">
                Conversemos sobre lo que te imaginas, los materiales que te gustan y el presupuesto. Trabajo principalmente con plata y baños de oro, pero también puedo usar oro macizo u otros materiales, según lo que necesites.
              </p>
            </div>
            
            {/* 2. Diseñamos juntos */}
            <div ref={step2Ref} className="space-y-4" style={{
            opacity: getResponsiveOpacity(elementPositions.step2)
          }}>
              <h3 className="font-avenir-book text-lg md:text-xl text-white font-bold">
                2. Diseñamos juntos
              </h3>
              <p className="font-avenir-light text-lg md:text-xl text-white leading-relaxed">
                Preparo bocetos e iteramos en la propuesta hasta tener el diseño final. Podemos probar con diferentes formas, colores, piedras, lo que haga falta.
              </p>
            </div>
            
            {/* 3. Elaboración de la joya */}
            <div ref={step3Ref} className="space-y-4" style={{
            opacity: getResponsiveOpacity(elementPositions.step3)
          }}>
              <h3 className="font-avenir-book text-lg md:text-xl text-white font-bold">
                3. Elaboración de la joya
              </h3>
              <p className="font-avenir-light text-lg md:text-xl text-white leading-relaxed">
                La pieza la hago a mano en mi taller en Valencia, cada resultado es único. El tiempo de creación suele ser entre 15 y 25 días hábiles, dependiendo de la complejidad de la pieza.
              </p>
            </div>
            
            {/* 4. Envío */}
            <div ref={step4Ref} className="space-y-4" style={{
            opacity: getResponsiveOpacity(elementPositions.step4)
          }}>
              <h3 className="font-avenir-book text-lg md:text-xl text-white font-bold">
                4. Envío
              </h3>
              <p className="font-avenir-light text-lg md:text-xl text-white leading-relaxed">
                Una vez terminada la joya, se prepara para el envío, que puede tomar algunos días o semanas, dependiendo del destino.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div ref={closingRef} className="text-center py-20" style={{
          opacity: getResponsiveOpacity(elementPositions.closing)
        }}>
            <p className="font-avenir-book text-xl md:text-2xl text-white leading-relaxed">
              Si tienes alguna idea, no dudes en contactarme. Hablemos y diseñemos juntos una joya.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default CustomJewelryPage;