import { HamburgerMenu } from "@/components/HamburgerMenu";
import { buildGitHubRawUrl } from "@/lib/config";
const CustomJewelryPage = () => {
  return <div className="relative min-h-screen">
      <HamburgerMenu />
      
      <div className="container mx-auto px-6 pt-24 pb-32">
        <div className="max-w-4xl mx-auto">
          
          {/* Título */}
          <h1 className="font-avenir-black font-black text-3xl uppercase text-center mb-12" style={{
          color: '#353333'
        }}>
            JOYAS A MEDIDA
          </h1>
          
          {/* Contenido de texto */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="space-y-8 font-avenir-light text-base leading-relaxed" style={{
            color: '#353333'
          }}>
              
              <p>
                ¿Tienes una idea en mente?
              </p>
              
              <p>
                La convertimos en una joya única. Trabajo principalmente con plata y baños de oro, pero también puedo usar oro u otros materiales, según lo que necesites y tu presupuesto. Cada pieza se diseña y se crea a mano, desde el boceto hasta el acabado final.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-avenir-medium text-xl" style={{
                color: '#353333'
              }}>
                  Así funciona el proceso:
                </h3>
                
                <div className="space-y-3 pl-4">
                  <p>• Hablemos de tu idea: Conversamos sobre lo que te imaginas, los materiales que te gustan y el presupuesto.</p>
                  <p>• Diseñamos juntos: Preparamos varios bocetos y trabajamos en la propuesta hasta tener el diseño final.</p>
                  <p>• Elaboración de la joya: La pieza se hace a mano en mi taller de Valencia y, una vez terminada, se prepara para el envío.</p>
                  <p>• Plazos: El tiempo de creación suele ser de entre 15 y 25 días hábiles, dependiendo de la complejidad de la pieza.</p>
                </div>
              </div>
              
              <p>
                Si tienes alguna idea, no dudes en contactarme. Hablemos y diseñemos una joya.
              </p>
            </div>
          </div>
          
          {/* Imagen */}
          <div className="flex justify-center mb-16 mt-8">
            <div className="max-w-2xl w-full">
              <img src={buildGitHubRawUrl("public/lovable-uploads/Joyas%20a%20medida/foto%20para%20actegoria%20joyas%20a%20medida.jpg")} alt="Proceso de creación de joyas a medida" className="w-full h-auto rounded-lg shadow-elegant" />
            </div>
          </div>
          
          {/* Contacto */}
          <div className="text-center space-y-6">
            <h3 className="font-avenir-medium text-xl" style={{
            color: '#353333'
          }}>
              ¿Empezamos a crear tu joya?
            </h3>
            
            <p className="font-avenir-light" style={{
            color: '#353333'
          }}>
              Contáctame para comenzar a diseñar juntos la pieza perfecta para ti
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              
              
              
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default CustomJewelryPage;