import { useNavigate } from "react-router-dom";
import { buildGitHubRawUrl } from "@/lib/config";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
// Importar SizeGuideDrawer
import { SizeGuideDrawer } from "@/components/SizeGuideDrawer"; // ASEGÚRATE DE QUE LA RUTA SEA CORRECTA


const HowToBuyPage = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  // Añadir estado para el SizeGuideDrawer
  const [showSizeGuide, setShowSizeGuide] = useState(false); // ESTADO PARA EL DRAWER

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getOpacity = (start: number, end: number) => {
    const progress = Math.max(0, Math.min(1, (scrollY - start) / (end - start)));
    return progress;
  };

  const getTranslateY = (start: number, end: number, distance: number = 50) => {
    const progress = Math.max(0, Math.min(1, (scrollY - start) / (end - start)));
    return distance * (1 - progress);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <HamburgerMenu />

      {/* Proceso de Compra - Scrollytelling */}
      <div className="relative">
        {/* Título principal */}
        <div className="relative z-10 pt-32 pb-16 text-center">
          <h1 
            className="font-avenir-heavy font-black text-4xl md:text-5xl" 
            style={{ color: '#353333' }}
          >
            Cómo comprar tu joya en tres pasos
          </h1>
        </div>

        {/* Paso 1 - Elige tu tipo de pieza */}
        <div className="relative h-screen">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${buildGitHubRawUrl("public/lovable-uploads/Como%20comprar/arbol.jpg")})`,
            }}
          />
          <div className="absolute inset-0 bg-black/20" /> 
          
          <div className="relative z-10 h-full flex flex-col justify-center items-center px-6">
            <div 
              className="text-center mb-8"
              style={{
                opacity: getOpacity(0, 150),
                transform: `translateY(${getTranslateY(0, 150)}px)`
              }}
            >
              <span className="font-avenir-medium text-8xl md:text-9xl text-white block mb-4">1</span>
              <h2 className="font-avenir-medium text-2xl md:text-3xl text-white">
                Elige tu tipo de pieza
              </h2>
            </div>

            <div 
              className="w-full max-w-4xl mx-auto"
              style={{
                opacity: getOpacity(100, 250),
                transform: `translateY(${getTranslateY(100, 250)}px)`
              }}
            >
              <div 
                className="bg-black/55 backdrop-blur-sm p-8 rounded-lg w-full"
              >
                <div className="space-y-4 text-white text-left">
                  <div>
                    <h3 className="font-avenir-medium text-lg mb-1">En Stock</h3>
                    <p className="font-avenir-book text-sm">
                      Piezas listas para envío inmediato desde Valencia (España) o Santiago (Chile).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-avenir-medium text-lg mb-1">Por Encargo</h3>
                    <p className="font-avenir-book text-sm">
                      La mayoría de mis diseños se pueden volver a producir especialmente para ti.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-avenir-medium text-lg mb-1">Personalizada</h3>
                    <p className="font-avenir-book text-sm">
                      Si tienes una idea, hablemos para crear juntos una joya completamente nueva.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Paso 2 - Contacto y Confirmación */}
        <div className="relative h-screen">
          <div className="absolute inset-0 bg-white" /> 
          
          <div className="relative z-10 h-full flex flex-col justify-start items-start px-6 md:px-16 pt-32">
            <div 
              className="mb-8"
              style={{
                opacity: getOpacity(600, 750),
                transform: `translateY(${getTranslateY(600, 750)}px)`
              }}
            >
              <span className="font-avenir-medium text-8xl md:text-9xl block mb-4" style={{ color: '#353333' }}>2</span>
              <h2 className="font-avenir-medium text-2xl md:text-3xl" style={{ color: '#353333' }}>
                Contacto y Confirmación
              </h2>
            </div>

            <div 
              className="max-w-xl space-y-4"
              style={{
                opacity: getOpacity(700, 850),
                transform: `translateY(${getTranslateY(700, 850)}px)`
              }}
            >
              <p className="font-avenir-book text-base leading-relaxed" style={{ color: '#353333' }}>
                Escríbeme para que conversemos sobre la pieza que te interesa.
              </p>
              <p className="font-avenir-book text-base leading-relaxed" style={{ color: '#353333' }}>
                Confirmaremos juntos los detalles, la talla, el precio final y los tiempos de creación o envío.
              </p>
            </div>
          </div>
        </div>

        {/* Paso 3 - Pago y Envío */}
        <div className="relative h-screen">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${buildGitHubRawUrl("public/lovable-uploads/Como%20comprar/caja.jpg")})`, 
            }}
          />
          <div className="absolute inset-0 bg-black/40" /> 
          
          <div className="relative z-10 h-full flex flex-col justify-start items-start px-6 md:px-16 pt-32">
            <div 
              className="mb-1 flex items-start justify-between w-full max-w-4xl"
              style={{
                opacity: getOpacity(1300, 1450),
                transform: `translateY(${getTranslateY(1300, 1450)}px)`
              }}
            >
              <h2 className="font-avenir-medium text-2xl md:text-3xl text-white">
                Pago y Envío
              </h2>
              <span className="font-avenir-medium text-8xl md:text-9xl text-white">3</span>
            </div>

            <div 
              className="max-w-xl space-y-2"
              style={{
                opacity: getOpacity(1400, 1550),
                transform: `translateY(${getTranslateY(1400, 1550)}px)`
              }}
            >
              <p className="font-avenir-book text-base leading-snug text-white">
                El pago se realiza por transferencia bancaria.
              </p>
              <p className="font-avenir-book text-base leading-snug text-white">
                Una vez lista, preparo y envío tu joya a tu domicilio.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Preguntas Frecuentes */}
      <div className="relative z-10 py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 
            className="font-avenir-medium text-3xl md:text-4xl mb-16 text-left" 
            style={{ color: '#353333' }}
          >
            Preguntas Frecuentes
          </h2>

          <div className="space-y-0">
            <FAQItem 
              question="¿De qué materiales son las joyas?"
              answer="Trabajo principalmente con plata de ley y plata enchapada en oro, aunque puedo realizar tu encargo en oro macizo u otros materiales que prefieras."
            />
            <FAQItem 
              question="¿Cómo sé mi talla?"
              // RESPUESTA MODIFICADA PARA ABRIR EL DRAWER
              answer={
                <>
                  La talla es siempre a medida; si no conoces la tuya, verifica la sección de cómo saber mi talla, y si todavía quedas con dudas, contáctame y te guiaré para determinarla. Puedes
                  {' '} {/* Espacio para separar el texto del botón */}
                  <span 
                    onClick={() => setShowSizeGuide(true)} 
                    className="cursor-pointer font-avenir-medium text-base text-blue-600 underline hover:no-underline"
                  >
                    hacer clic aquí
                  </span>
                  {' '} {/* Espacio después del botón */}
                  para ver la guía de tallas.
                </>
              }
            />
            <FAQItem 
              question="¿Qué formas de pago aceptas?"
              answer="El pago se realiza mediante transferencia bancaria. Dispongo de cuentas en Europa (para pagos en euros) y en Chile (para pagos en pesos chilenos), según te acomode."
            />
            <FAQItem 
              question="¿A dónde realizas envíos y cuál es el costo?"
              answer="Realizo envíos a toda Europa y Chile. El coste se calcula según tu ubicación y se suma al valor final. Para los pedidos a Chile, el envío se realiza desde Santiago, evitando costos internacionales."
            />
            <FAQItem 
              question="¿Cuánto tarda la producción de una joya por encargo?"
              answer="El tiempo de producción varía según la complejidad de la pieza, desde unos pocos días hasta algunas semanas. Este plazo te lo confirmaré siempre antes de iniciar el trabajo."
            />
          </div>
        </div>
      </div>

      {/* Sección de contacto */}
      <div className="border-t border-border pt-16 relative px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="absolute bottom-0 left-0 z-0 -ml-8 cursor-pointer hover:opacity-30 transition-elegant" onClick={() => navigate("/")}>
            <img 
              src={buildGitHubRawUrl("public/lovable-uploads/Material%20de%20Apoyo/Logo/isologo.png")} 
              alt="Delia Vergara Isologo" 
              className="h-32 w-auto opacity-50"
            />
          </div>
          
          <div className="text-center space-y-8 relative z-10 pb-12">
            <h2 className="font-avenir-black font-black text-2xl uppercase mb-8" style={{ color: '#353333' }}>
              CONTÁCTAME
            </h2>
            
            <p className="font-avenir-light font-light tracking-body leading-body" style={{ color: '#353333' }}>
              deliavergara.joyas@gmail.com | +34 625857127
            </p>
          </div>
        </div>
      </div>

      {/* COMPONENTE SIZEGUIDEDRAWER AÑADIDO A LA PÁGINA */}
      <SizeGuideDrawer
        isOpen={showSizeGuide}
        onClose={() => setShowSizeGuide(false)}
      />
    </div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string | JSX.Element; // Permitir que la respuesta sea JSX para el botón
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors duration-200"
      >
        <span className="font-avenir-book text-lg pr-8" style={{ color: '#353333' }}>
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          style={{ color: '#353333' }}
        />
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
      }`}>
        <p className="font-avenir-light text-base leading-relaxed" style={{ color: '#353333' }}>
          {answer}
        </p>
      </div>
    </div>
  );
};

export default HowToBuyPage;
