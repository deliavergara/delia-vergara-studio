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
        }}>JOYAS A MEDIDA</h1>
          
          {/* Contenido de texto */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="space-y-8 font-avenir-light text-base leading-relaxed" style={{
            color: '#353333'
          }}>
              
              
              <p>
                Trabajo principalmente con plata de ley 925 y baños de oro, aunque también puedo realizar piezas en oro macizo u otros materiales según tus preferencias y presupuesto. Cada diseño se desarrolla a mano, desde el boceto inicial hasta la pieza final, asegurando que sea exactamente lo que habías imaginado.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-avenir-medium text-xl" style={{
                color: '#353333'
              }}>
                  ¿Cómo funciona el proceso?
                </h3>
                
                <div className="space-y-3 pl-4">
                  <p><strong>1. Conversación inicial:</strong> Hablamos sobre tu idea, tus gustos y el presupuesto.</p>
                  <p><strong>2. Diseño:</strong> Desarrollo bocetos y te muestro propuestas hasta dar con el diseño perfecto.</p>
                  <p><strong>3. Creación:</strong> Trabajo la pieza a mano en mi taller de Valencia.</p>
                  <p><strong>4. Entrega:</strong> Envío tu joya única directamente a tu domicilio.</p>
                </div>
              </div>
              
              <p>
                Los tiempos de creación varían según la complejidad: desde unos días para piezas sencillas hasta algunas semanas para las más elaboradas. El precio depende del diseño, los materiales elegidos y el tiempo de trabajo requerido.
              </p>
              
              <p className="font-avenir-medium">
                Si tienes una idea o un sueño, hablemos. Me gusta colaborar y crear juntos una joya totalmente nueva y personal.
              </p>
            </div>
          </div>
          
          {/* Imagen */}
          <div className="flex justify-center mb-16">
            <div className="max-w-2xl w-full">
              <img src={buildGitHubRawUrl("public/lovable-uploads/Material%20de%20Apoyo/Foto%20portada/DSC_0124.jpg")} alt="Proceso de creación de joyas a medida" className="w-full h-auto rounded-lg shadow-elegant" />
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