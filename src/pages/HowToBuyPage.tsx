import { useNavigate } from "react-router-dom";
import { buildGitHubRawUrl } from "@/lib/config";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HowToBuyPage = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);

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
              backgroundImage: `url(${buildGitHubRawUrl("public/lovable-uploads/Como%20comprar/1.%20como%20comprar.JPG")})`,
            }}
          />
          {/* CAMBIO CLAVE AQUÍ: Overlay de color negro hecho completamente transparente para depuración */}
          <div className="absolute inset-0 bg-black/0" /> 
          
          <div className="relative z-10 h-full flex flex-col justify-center items-center px-6">
            <div 
              className="text-center mb-8"
              style={{
                opacity: getOpacity(200, 400),
                transform: `translateY(${getTranslateY(200, 400)}px)`
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
                opacity: getOpacity(400, 600),
                transform: `translateY(${getTranslateY(400, 600)}px)`
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
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${buildGitHubRawUrl("public/lovable-uploads/Como%20comprar/2.%20como%20comprar.jpg")})`,
            }}
          />
          {/* CAMBIO CLAVE AQUÍ: Overlay de color blanco hecho completamente transparente para depuración */}
          <div className="absolute inset-0 bg-white/0" /> 
          
          <div className="relative z-10 h-full flex flex-col justify-start items-start px-6 md:px-16 pt-32">
            <div 
              className="mb-8"
              style={{
                opacity: getOpacity(800, 1000),
                transform: `translateY(${getTranslateY(800, 1000)}px)`
              }}
            >
              <span className="font-avenir-medium text-8xl md:text-9xl