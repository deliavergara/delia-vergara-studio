import { useNavigate } from "react-router-dom";
import { buildGitHubRawUrl } from "@/lib/config";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { useEffect, useRef, useState } from "react";
import { SizeGuideDrawer } from "@/components/SizeGuideDrawer";
import FixedSocialButtons from "@/components/FixedSocialButtons";

const HowToBuyPage = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const sectionsRef = useRef([]);

  // Opacidades de las imágenes de fondo, controladas por el estado
  const [opacities, setOpacities] = useState({
    image1: 1,
    image2: 0,
    image3: 0,
    image4: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Lógica para el efecto de parallax/overlay
      const newOpacities = { ...opacities };
      const viewportHeight = window.innerHeight;

      // Definir los puntos de inicio y fin del scroll para cada transición
      const scrollPoints = [
        { start: 0, end: viewportHeight, key: 'image1' },
        { start: viewportHeight * 1, end: viewportHeight * 2, key: 'image2' },
        { start: viewportHeight * 2, end: viewportHeight * 3, key: 'image3' },
        { start: viewportHeight * 3, end: viewportHeight * 4, key: 'image4' },
      ];

      scrollPoints.forEach(point => {
        const { start, end, key } = point;
        if (scrollY >= start && scrollY < end) {
          const progress = (scrollY - start) / (end - start);
          newOpacities[key] = Math.min(1, progress * 2); // Ajusta la velocidad del fade-in
          newOpacities[key] = Math.max(0, newOpacities[key]);
        } else if (scrollY >= end) {
          newOpacities[key] = 1;
        } else {
          newOpacities[key] = 0;
        }
      });

      setOpacities(newOpacities);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, opacities]);

  return (
    <div className="min-h-screen bg-background relative">
      <HamburgerMenu />

      {/* Contenedor de imágenes fijas */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms]" // Duración de la transición más lenta
          style={{
            backgroundImage: `url(${buildGitHubRawUrl("public/lovable-uploads/Como%20comprar/1_arbol.jpg")})`,
            opacity: opacities.image1,
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms]"
          style={{
            backgroundImage: `url(${buildGitHubRawUrl("public/lovable-uploads/Como%20comprar/0_persona.jpg")})`,
            opacity: opacities.image2,
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms]"
          style={{
            backgroundImage: `url(${buildGitHubRawUrl("public/lovable-uploads/Como%20comprar/2_medalla.jpg")})`,
            opacity: opacities.image3,
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms]"
          style={{
            backgroundImage: `url(${buildGitHubRawUrl("public/lovable-uploads/Como%20comprar/3_caja.jpg")})`,
            opacity: opacities.image4,
          }}
        />
      </div>

      {/* Contenido que se desplaza */}
      <div className="relative z-10">
        {/* Sección 1 */}
        <section className="bg-transparent h-screen pt-32 flex flex-col items-center justify-start">
          <h1 className="font-avenir-medium text-white text-4xl md:text-5xl lg:text-6xl text-center">
            CÓMO COMPRAR
            <br />
            <span className="block font-avenir-light mt-8 italic text-2xl md:text-3xl lg:text-5xl">En tres pasos</span>
          </h1>
        </section>

        {/* Sección 2 */}
        <section className="bg-transparent h-screen pt-32 flex flex-col items-center justify-start">
          <div className="max-w-2xl px-6">
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
        </section>

        {/* Sección 3 */}
        <section className="bg-transparent h-screen pt-32 flex flex-col items-center justify-start">
          <div className="max-w-2xl px-6">
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
        </section>

        {/* Sección 4 */}
        <section className="bg-transparent h-screen pt-32 flex flex-col items-center justify-start">
          <div className="max-w-2xl px-6">
            <h2 className="font-avenir-heavy text-white text-xl md:text-2xl mb-8">
              3 Pago y envío
            </h2>
            <div className="space-y-4">
              <p className="font-avenir-light text-white text-sm md:text-base leading-relaxed">
                El pago se realiza por transferencia bancaria.
              </p>
              <p className="font-avenir-light text-white text-sm md:text-base leading-relaxed">
                Una vez lista, preparo y envío tu joya a tu domicilio.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Preguntas Frecuentes y Contacto */}
      <div className="relative z-10 bg-background">
        {/* ... (el resto de tu código para las FAQs y el contacto) ... */}
      </div>

      <SizeGuideDrawer isOpen={showSizeGuide} onClose={() => setShowSizeGuide(false)} />
      <FixedSocialButtons />
    </div>
  );
};

export default HowToBuyPage;
