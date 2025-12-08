import { useNavigate } from "react-router-dom";
import { buildSupabaseUrl } from "@/lib/supabase-config";

// Categorías estáticas (las portadas no vienen de la DB de productos)
const categoriesList = [
  { id: 'anillos', name: 'Anillos' },
  { id: 'collares', name: 'Collares' },
  { id: 'pendientes', name: 'Pendientes' },
  { id: 'pulseras', name: 'Pulseras' }
];

// Mapeo de imágenes de portada para cada categoría
const categoryPortraits: Record<string, string> = {
  anillos: buildSupabaseUrl('productos/anillos/portada_anillos/portada_anillos_4.jpg'),
  collares: buildSupabaseUrl('productos/collares/portada_collares/portada_collares_3.jpg'),
  pendientes: buildSupabaseUrl('productos/pendientes/portada_pendientes/portada_pendientes_4.jpg'),
  pulseras: buildSupabaseUrl('productos/pulseras/portada_pulseras/portada_pulsera_1.jpg')
};

export const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/categoria/${categoryId}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="bg-background">
      <div className="w-full">
        <div className="flex flex-col">
          {categoriesList.map((category) => {
            const categoryImage = categoryPortraits[category.id];
            return (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="group cursor-pointer"
              >
                <div className="w-full" style={{ aspectRatio: '21/9' }}>
                  <div className="overflow-hidden relative h-full">
                    {categoryImage && (
                      <>
                        <img
                          src={categoryImage}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                        />
                        <div className="absolute inset-0" style={{ backgroundColor: '#7a7a7a', opacity: 0.3 }}></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="bg-transparent backdrop-blur-sm rounded-full px-5 py-2 border-2 border-white/60 group-hover:border-white group-hover:border-4 transition-all duration-300">
                            <h3 className="text-white text-base lg:text-lg font-medium text-center whitespace-nowrap">
                              {category.name}
                            </h3>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
