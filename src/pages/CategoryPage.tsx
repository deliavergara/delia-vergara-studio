import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";
import { buildSupabaseUrl } from "@/lib/supabase-config";
import { Link } from "react-router-dom";
import { HamburgerMenu } from "@/components/HamburgerMenu";
const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  const category = categories.find(cat => cat.id === categoryId);

  if (!category) {
    return <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Categoría no encontrada</h1>
        <button 
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
        >
          Volver al inicio
        </button>
      </div>
    </div>;
  }

  // Mapeo de imágenes de portada para cada categoría
  const categoryPortraits = {
    anillos: buildSupabaseUrl('productos/anillos/portada-anillos/anillo-portada.jpg'),
    collares: buildSupabaseUrl('productos/collares/portada-collares/portada_collares_3.jpg'),
    pendientes: buildSupabaseUrl('productos/pendientes/portada-pendientes/portada_pendientes_4.jpg'),
    pulseras: buildSupabaseUrl('productos/pulsera/portada-pulseras/portada-pulsera_1.jpg')
  };
  const categoryImage = categoryPortraits[categoryId as keyof typeof categoryPortraits];
  return <div className="min-h-screen bg-background">
      <HamburgerMenu />

      {/* Logo y título centrados */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
      </div>

      {/* Hero section con imagen de portada y logo superpuesto */}
      <div className="relative h-[28rem] overflow-hidden">
        {categoryImage && <>
            <img src={categoryImage} alt={category.name} className={`w-full h-full object-cover opacity-70 ${categoryId === 'pulseras' ? 'object-[center_30%]' : ''}`} />
            <div className="absolute inset-0 bg-black/20"></div>
          </>}

        {/* Logo superpuesto más abajo y más grande */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer hover:opacity-70 transition-elegant" onClick={() => navigate("/")}>
          <img 
          src={buildSupabaseUrl(`Logo/LOGO SIMPLE ${categoryId.toUpperCase()}.png`)} 
          alt={`Logo ${category.name}`} 
          className="w-[60vw] max-w-md h-auto opacity-80"
        />
        </div>
      </div>

      {/* Grid de productos */}
      <div className="container mx-auto px-3 sm:px-6 pb-24 mt-16">
        {/* Descripción de la categoría */}
        <div className="max-w-xl mx-auto text-center mb-16 mt-12">
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {category.items.map(item => <div key={item.id} className="group cursor-pointer relative" onClick={() => navigate(`/producto/${item.id}`)}>
              <div className="aspect-[3/4] bg-accent rounded-sm overflow-hidden relative transition-elegant mb-2">
                <img src={item.mainImage} alt={item.name} className="w-full h-full object-cover transition-elegant group-hover:scale-105" style={{
              opacity: 0.95
            }} />
              </div>
              <h3 className="font-avenir font-medium tracking-title mb-0.5 text-left text-sm text-[#535353]">
                {item.name}
              </h3>
            </div>)}
        </div>

        {/* Contact section */}
        <div className="mt-32 pt-12 border-t border-border relative">
          <div className="absolute bottom-0 left-0 z-0 -ml-8 cursor-pointer hover:opacity-30 transition-elegant" onClick={() => navigate("/")}>
            <img 
          src={buildSupabaseUrl("Logo/isologo.png")} 
          alt="Delia Vergara Isologo" 
          className="h-32 w-auto opacity-50" 
        />
          </div>

          <div className="text-center space-y-8 relative z-10 pb-12">
            <h2 className="font-avenir-black font-black text-2xl uppercase mb-8" style={{
            color: '#353333'
          }}>
              CONTÁCTAME
            </h2>

            <p className="font-avenir-light font-light tracking-body leading-body" style={{
            color: '#353333'
          }}>
              deliavergara.joyas@gmail.com <br /> +34 625857127
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default CategoryPage;