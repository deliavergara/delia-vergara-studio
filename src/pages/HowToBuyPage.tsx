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
    // Contenedor principal sin scroll
    <div className="relative h-screen overflow-hidden">
      <HamburgerMenu />

      <div className="scroll-container h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
        {/* Las secciones de scroll-snap */}
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

        {/* ... (resto de las 3 secciones de fotos, que ya están correctas) */}

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

      {/* Contenido sin scroll-snap */}
      <div className="absolute top-[100vh] left-0 right-0 z-10 bg-white">
        <div className="container mx-auto max-w-4xl py-24 px-6">
          {/* ... (Contenido de Preguntas y Contacto, que ya está correcto) */}
        </div>
      </div>

      <SizeGuideDrawer
        isOpen={showSizeGuide}
        onClose={() => setShowSizeGuide(false)}
      />
    </div>
  );
};