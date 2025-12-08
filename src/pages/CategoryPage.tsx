import { useParams, useNavigate } from "react-router-dom";
import { buildSupabaseUrl } from "@/lib/supabase-config";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { useProductsByCategory } from "@/hooks/useProducts";

// Nombres de categorías
const categoryNames: Record<string, string> = {
  anillos: 'Anillos',
  collares: 'Collares',
  pendientes: 'Pendientes',
  pulseras: 'Pulseras'
};

// Mapeo de imágenes de portada para cada categoría
const categoryPortraits: Record<string, string> = {
  anillos: buildSupabaseUrl('productos/anillos/portada_anillos/portada_anillos_4.jpg'),
  collares: buildSupabaseUrl('productos/collares/portada_collares/portada_collares_3.jpg'),
  pendientes: buildSupabaseUrl('productos/pendientes/portada_pendientes/portada_pendientes_4.jpg'),
  pulseras: buildSupabaseUrl('productos/pulseras/portada_pulseras/portada_pulsera_1.jpg')
};

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  
  const { products, loading, error } = useProductsByCategory(categoryId);

  const categoryName = categoryId ? categoryNames[categoryId] : '';
  const categoryImage = categoryId ? categoryPortraits[categoryId] : '';

  if (!categoryId || !categoryNames[categoryId]) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Categoría no encontrada</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HamburgerMenu />

      {/* Logo y título centrados */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
      </div>

      {/* Hero section con imagen de portada y logo superpuesto */}
      <div className="relative h-[28rem] overflow-hidden">
        {categoryImage && (
          <>
            <img 
              src={categoryImage} 
              alt={categoryName} 
              className={`w-full h-full object-cover opacity-70 ${categoryId === 'pulseras' ? 'object-[center_30%]' : ''}`} 
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </>
        )}

        {/* Logo superpuesto más abajo y más grande */}
        <div 
          className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer hover:opacity-70 transition-elegant" 
          onClick={() => navigate("/")}
        >
          <img 
            src={buildSupabaseUrl(`productos/material_de_apoyo/logo/logos_simples/logo_simple_${categoryId}.png`)} 
            alt={`Logo ${categoryName}`} 
            className="w-[60vw] max-w-md h-auto opacity-80"
          />
        </div>
      </div>

      {/* Grid de productos */}
      <div className="container mx-auto px-3 sm:px-6 pb-24 mt-16">
        {/* Descripción de la categoría */}
        <div className="max-w-xl mx-auto text-center mb-16 mt-12">
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400"></div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="text-center py-20 text-red-500">
            Error al cargar productos
          </div>
        )}

        {/* Grid de productos */}
        {!loading && !error && (
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {products.map(item => (
              <div 
                key={item.id} 
                className="group cursor-pointer relative" 
                onClick={() => navigate(`/producto/${item.id}`)}
              >
                <div className="aspect-[3/4] bg-accent rounded-sm overflow-hidden relative transition-elegant mb-2">
                  <img 
                    src={item.mainImage} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-elegant group-hover:scale-105" 
                    style={{ opacity: 0.95 }} 
                  />
                </div>
                <h3 className="font-avenir font-medium tracking-title mb-0.5 text-left text-sm text-[#535353]">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        )}

        {/* Contact section */}
        <div className="mt-32 pt-12 border-t border-border relative">
          <div 
            className="absolute bottom-0 left-0 z-0 -ml-8 cursor-pointer hover:opacity-30 transition-elegant" 
            onClick={() => navigate("/")}
          >
            <img 
              src={buildSupabaseUrl("productos/material_de_apoyo/logo/logo_2.png")} 
              alt="Delia Vergara Isologo" 
              className="h-32 w-auto opacity-50" 
            />
          </div>

          <div className="text-center space-y-8 relative z-10 pb-12">
            <h2 
              className="font-avenir-black font-black text-2xl uppercase mb-8" 
              style={{ color: '#353333' }}
            >
              CONTÁCTAME
            </h2>

            <p 
              className="font-avenir-light font-light tracking-body leading-body" 
              style={{ color: '#353333' }}
            >
              deliavergara.joyas@gmail.com <br /> +34 625857127
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
