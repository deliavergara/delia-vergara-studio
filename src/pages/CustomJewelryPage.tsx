import { HamburgerMenu } from "@/components/HamburgerMenu";

const CustomJewelryPage = () => {
  return (
    <div className="relative min-h-screen">
      <HamburgerMenu />
      
      <div className="pt-16 pb-32">
        {/* Hero Image with Title Overlay */}
        <div className="relative">
          {/* Title Overlay */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-white py-8">
            <h1 className="font-avenir-black font-black text-3xl uppercase text-center" style={{
              color: '#353333'
            }}>JOYAS A MEDIDA</h1>
          </div>
          
          {/* Main Image */}
          <div className="px-6 md:px-12 lg:px-24 pt-24">
            <div className="max-w-4xl mx-auto">
              <img 
                src="/lovable-uploads/5c8df177-b901-4eeb-830c-3b9acc3e35c1.png"
                alt="Joyas a medida - Anillo en proceso de creación" 
                className="w-full h-auto rounded-lg shadow-elegant" 
              />
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="container mx-auto px-6 mt-16">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Question */}
            <h2 className="font-avenir-heavy text-2xl text-center" style={{
              color: '#353333'
            }}>
              ¿Tienes una idea en mente?
            </h2>
            
            {/* Description */}
            <p className="font-avenir-medium text-base leading-relaxed text-center" style={{
              color: '#353333'
            }}>
              La convertimos en una joya única. Trabajo principalmente con plata y baños de oro, pero también puedo usar oro u otros materiales, según lo que necesites y tu presupuesto. Cada pieza se diseña y se crea a mano, desde el boceto hasta el acabado final.
            </p>
            
            {/* Process */}
            <div className="space-y-6">
              <h3 className="font-avenir-book text-lg" style={{
                color: '#353333'
              }}>
                Así funciona el proceso:
              </h3>
              
              <div className="space-y-4 font-avenir-book text-base leading-relaxed" style={{
                color: '#353333'
              }}>
                <p><strong>•</strong> <strong>Hablemos de tu idea:</strong> Conversamos sobre lo que te imaginas, los materiales que te gustan y el presupuesto.</p>
                <p><strong>•</strong> <strong>Diseñamos juntos:</strong> Preparamos varios bocetos y trabajamos en la propuesta hasta tener el diseño final.</p>
                <p><strong>•</strong> <strong>Elaboración de la joya:</strong> La pieza se hace a mano en mi taller de Valencia y, una vez terminada, se prepara para el envío.</p>
                <p><strong>•</strong> <strong>Plazos:</strong> El tiempo de creación suele ser de entre 15 y 25 días hábiles, dependiendo de la complejidad de la pieza.</p>
              </div>
            </div>
            
            {/* Final message */}
            <p className="font-avenir-book text-base leading-relaxed text-center" style={{
              color: '#353333'
            }}>
              Si tienes alguna idea, no dudes en contactarme. Hablemos y diseñemos una joya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomJewelryPage;