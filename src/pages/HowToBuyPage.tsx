import { useNavigate } from "react-router-dom";
import { buildGitHubRawUrl } from "@/lib/config";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SizeGuideDrawer } from "@/components/SizeGuideDrawer";
import { motion } from "framer-motion";

const HowToBuyPage = () => {
  const navigate = useNavigate();
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-y-scroll scrollbar-hide">
      <HamburgerMenu />

      <div className="snap-y snap-mandatory">
        {/* Sección de fotos con scroll-snap */}
        <section className="snap-start bg-cover bg-center relative h-screen flex justify-center items-center"
          style={{
            backgroundImage: `url(${buildGitHubRawUrl("public/lovable-uploads/Como%20comprar/Arbol.jpg")})`,
          }}>
          <div className="screen-content">
            <h1 className="font-avenir-book text-white text-4xl md:text-5xl lg:text-6xl text-center">
              Cómo comprar tu joya
              <br />
              <span className="block">en 3 pasos</span>
            </h1>
          </div>
        </section>

        <section className="snap-start bg-cover bg-center relative h-screen flex justify-center items-center"
          style={{
            backgroundImage: `url(${buildGitHubRawUrl("public/lovable-uploads/Como%20comprar/Persona.jpg")})`,
          }}>
          <div className="screen-content justify-start items-center p-8 md:p-16 lg:p-24">
            <div className="max-w-2xl">
              <h2 className="font-avenir-medium text-white text-xl md:text-2xl mb-8">
                1 Elige tu tipo de joya
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-avenir-medium text-white text-base md:text-lg mb-2">En stock:</h3>
                  <p className="font-avenir-light text-white text-sm md:text-base leading-relaxed">
                    Piezas listas para envío inmediato desde Valencia (España) o Santiago (Chile).
                  </p>
                </div>
                <div>
                  <h3 className="font-avenir-medium text-white text-base md:text-lg mb-2">Por encargo:</h3>
                  <p className="font-avenir-light text-white text-sm md:text-base leading-relaxed">
                    La mayoría de mis diseños se pueden volver a producir especialmente para ti.
                  </p>
                </div>
                <div>
                  <h3 className="font-avenir-medium text-white text-base md:text-lg mb-2">Personalizada:</h3>
                  <p className="font-avenir-light text-white text-sm md:text-base leading-relaxed">
                    Si tienes una idea, hablemos para crear juntos una joya completamente nueva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="snap-start bg-cover bg-center relative h-screen flex justify-center items-center"
          style={{
            backgroundImage: `url(${buildGitHubRawUrl("public/lovable-uploads/Como%20comprar/Medalla.jpg")})`,
          }}>
          <div className="screen-content justify-start items-center p-8 md:p-16 lg:p-24">
            <div className="max-w-2xl">
              <h2 className="font-avenir-heavy text-white text-xl md:text-2xl mb-8">
                2 Contacto y confirmación
              </h2>
              <div className="space-y-4">
                <p className="font-avenir-light text-white text-sm md:text-base leading-relaxed">
                  Escríbeme para que conversemos sobre la pieza que te interesa.
                </p>
                <p className="font-avenir-light text-white text-sm md:text-base leading-relaxed">
                  Confirmaremos juntos los detalles, la talla, el precio final y los tiempos de creación o envío.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="snap-start bg-cover bg-center relative h-screen flex justify-center items-center"
          style={{
            backgroundImage: `url(${buildGitHubRawUrl("public/lovable-uploads/Como%20comprar/Caja.jpg")})`,
          }}>
          <div className="screen-content justify-start items-center p-8 md:p-16 lg:p-24">
            <div className="max-w-2xl">
              <h2 className="font-avenir-heavy text-black text-xl md:text-2xl mb-8">
                3 Pago y envío
              </h2>
              <div className="space-y-4">
                <p className="font-avenir-light text-black text-sm md:text-base leading-relaxed">
                  El pago se realiza por transferencia bancaria.
                </p>
                <p className="font-avenir-light text-black text-sm md:text-base leading-relaxed">
                  Una vez lista, preparo y envío tu joya a tu domicilio.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contenido sin scroll-snap que se desplaza de forma normal */}
      <div className="relative z-10 bg-white">
        <div className="container mx-auto max-w-4xl py-24 px-6">
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
      </div>
      <SizeGuideDrawer
        isOpen={showSizeGuide}
        onClose={() => setShowSizeGuide(false)}
      />
    </div>
  );
};