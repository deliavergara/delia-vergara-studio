import { categories } from "@/data/products";
import { useNavigate } from "react-router-dom";
import { buildGitHubRawUrl } from "@/lib/config";

export const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/categoria/${categoryId}`);
    // Scroll al inicio de la página
    window.scrollTo(0, 0);
  };

  // Mapeo de imágenes de portada para cada categoría
  const categoryImages = {
    anillos: buildGitHubRawUrl("public/lovable-uploads/Anillos/anillo%20portada/portada%20anillo%20categoria%203.jpg"),
    collares: buildGitHubRawUrl("public/lovable-uploads/Collares/portada%20collares/portada%20collar%20categoria%20.jpg"),
    pendientes: buildGitHubRawUrl("public/lovable-uploads/Pendientes/portada%20pendientes/portada%20pendientes%20categoria.jpg"),
    pulseras: buildGitHubRawUrl("public/lovable-uploads/Pulsera/portada%20pulsera/1.%20pulsera%20portada.jpg")
  };

  return (
    <section className="bg-background">
      <div className="w-full">
        <div className="flex flex-col">
          {categories.map((category) => {
            const categoryImage = categoryImages[category.id as keyof typeof categoryImages];
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