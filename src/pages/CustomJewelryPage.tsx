import { HamburgerMenu } from "@/components/HamburgerMenu";
import { buildGitHubRawUrl } from "@/lib/config";

const CustomJewelryPage = () => {
  return (
    <div className="relative min-h-screen">
      <HamburgerMenu />
      
      <div className="pt-24 pb-32">
        {/* Imagen de fondo con título superpuesto */}
        <div className="relative mb-16">
          <div className="mx-auto max-w-4xl px-6">
            <img 
              src={buildGitHubRawUrl("public/lovable-uploads/Joyas%20a%20medida/foto%20para%20actegoria%20joyas%20a%20medida.jpg")} 
              alt="Joyas a medida" 
              className="w-full h-auto rounded-lg shadow-elegant"
            />
          </div>
          
          {/* Título sobre la imagen */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <h1 className="font-avenir-heavy text-2xl tracking-wide text-white">
              Joyas a medida
            </h1>
          </div>
        </div>

        {/* Contenido de texto */}
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8" style={{ color: '#353333' }}>
            
            {/* Pregunta principal con Avenir Heavy */}
            <h2 className="font-avenir-heavy text-xl text-center">
              ¿Tienes una idea en mente?
            </h2>
            
            {/* Descripción con Avenir Medium */}
            <p className="font-avenir-medium text-base leading-relaxed text-center">
              La convertimos en una joya única. Trabajo principalmente con plata y baños de oro, pero también puedo usar oro u otros materiales, según lo que necesites y tu presupuesto. Cada pieza se diseña y se crea a mano, desde el boceto hasta el acabado final.
            </p>
            
            {/* Proceso con Avenir Book */}
            <div className="font-avenir-book space-y-4">
              <h3 className="text-lg font-semibold">Así funciona el proceso:</h3>
              
              <ul className="space-y-3 pl-4">
                <li>• <strong>Hablemos de tu idea:</strong> Conversamos sobre lo que te imaginas, los materiales que te gustan y el presupuesto.</li>
                <li>• <strong>Diseñamos juntos:</strong> Preparamos varios bocetos y trabajamos en la propuesta hasta tener el diseño final.</li>
                <li>• <strong>Elaboración de la joya:</strong> La pieza se hace a mano en mi taller de Valencia y, una vez terminada, se prepara para el envío.</li>
                <li>• <strong>Plazos:</strong> El tiempo de creación suele ser de entre 15 y 25 días hábiles, dependiendo de la complejidad de la pieza.</li>
              </ul>
            </div>
            
            {/* Cierre con Avenir Book */}
            <p className="font-avenir-book text-base text-center leading-relaxed">
              Si tienes alguna idea, no dudes en contactarme. Hablemos y diseñemos una joya.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomJewelryPage;