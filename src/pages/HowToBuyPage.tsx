import { useNavigate } from "react-router-dom";
import { buildGitHubRawUrl } from "@/lib/config";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { SizeGuideDrawer } from "@/components/SizeGuideDrawer";


const HowToBuyPage = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

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
        {/* Paso 1 - Elige tu tipo de pieza con título principal */}
        <div className="relative h-screen">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(https://github.com/deliavergara/delia-vergara-studio/raw/feature/como_comprar/public/lovable-uploads/Como%20comprar/1.%20como%20comprar.JPG)`,
            }}
          />
          
          <div className="relative z-10 h-full flex flex-col">
            {/* Título principal en la parte superior */}
            <div className="flex-none pt-20 pb-8 text-center">
              <h1 
                className="font-black-mango text-2xl md:text-3xl text-white tracking-wide"
              >
                CÓMO COMPRAR
              </h1>
            </div>

            {/* Espaciador flexible */}
            <div className="flex-1"></div>

            {/* Caja de opacidad en la parte inferior */}
            <div 
              className="flex-none w-full"
              style={{
                backgroundColor: '#353845',
                opacity: 0.9
              }}
            >
              <div className="px-6 md:px-12 py-8">
                <div 
                  className="mb-6"
                  style={{
                    opacity: getOpacity(0, 150),
                    transform: `translateY(${getTranslateY(0, 150, 30)}px)`
                  }}
                >
                  <h2 className="font-avenir-heavy text-xl md:text-2xl mb-2" style={{ color: '#353333' }}>
                    1 Elige tu tipo de pieza
                  </h2>
                </div>

                <div 
                  className="space-y-4 text-left max-w-none"
                  style={{
                    opacity: getOpacity(50, 200),
                    transform: `translateY(${getTranslateY(50, 200, 30)}px)`
                  }}
                >
                  <div>
                    <h3 className="font-avenir-medium text-base mb-1" style={{ color: '#353333' }}>En Stock:</h3>
                    <p className="font-avenir-light text-sm leading-relaxed" style={{ color: '#353333' }}>
                      Piezas listas para envío inmediato desde Valencia (España) o Santiago (Chile).
                    </p>
                  </div>
                  <div>
                    <h3 className="font-avenir-medium text-base mb-1" style={{ color: '#353333' }}>Por Encargo:</h3>
                    <p className="font-avenir-light text-sm leading-relaxed" style={{ color: '#353333' }}>
                      La mayoría de mis diseños se pueden volver a producir especialmente para ti.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-avenir-medium text-base mb-1" style={{ color: '#353333' }}>Personalizada:</h3>
                    <p className="font-avenir-light text-sm leading-relaxed" style={{ color: '#353333' }}>
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
              <h2 className="font-avenir-heavy text-xl md:text-2xl mb-4" style={{ color: '#353333' }}>
                2 Contacto y Confirmación
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
              backgroundImage: `url(https://github.com/deliavergara/delia-vergara-studio/raw/feature/como_comprar/public/lovable-uploads/Como%20comprar/2.%20como%20comprar.jpg)`, 
            }}
          />
          
          <div className="relative z-10 h-full flex flex-col justify-start items-start px-6 md:px-16 pt-32">
            <div 
              className="mb-2"
              style={{
                opacity: getOpacity(1000, 1200),
                transform: `translateY(${getTranslateY(1000, 1200)}px)`
              }}
            >
              <h2 className="font-avenir-heavy text-xl md:text-2xl" style={{ color: '#353333' }}>
                3 Pago y Envío
              </h2>
            </div>

            <div 
              className="max-w-xl space-y-1"
              style={{
                opacity: getOpacity(1050, 1250),
                transform: `translateY(${getTranslateY(1050, 1250)}px)`
              }}
            >
              <p className="font-avenir-heavy text-base leading-tight" style={{ color: '#353333' }}>
                El pago se realiza por transferencia bancaria.
              </p>
              <p className="font-avenir-heavy text-base leading-tight" style={{ color: '#353333' }}>
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
              answer={
                <>
                  La talla es siempre a medida; si no conoces la tuya, verifica la sección
                  {' '}
                  <span 
                    onClick={() => setShowSizeGuide(true)} 
                    className="cursor-pointer font-avenir-medium text-base text-blue-600 underline hover:no-underline"
                  >
                    cómo saber mi talla,
                  </span>
                  {' '}
                    y si todavía quedas con dudas, contáctame y te guiaré para determinarla.
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
  answer: string | JSX.Element;
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
