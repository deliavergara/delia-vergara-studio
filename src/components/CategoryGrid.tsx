import { categories } from "@/data/products";
import { useNavigate } from "react-router-dom";

export const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/categoria/${categoryId}`);
    // Scroll al inicio de la página
    window.scrollTo(0, 0);
  };

  // Mapeo de imágenes de portada para cada categoría
  const categoryImages = {
    anillos: "https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Anillos/anillo%20portada/anillo%20portada.jpg",
    collares: "https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Collares/portada%20collares/2.portada%20collares.jpg",
    pendientes: "https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Pendientes/portada%20pendientes/1.pendientes%20portada.jpg",
    pulseras: "https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Pulsera/portada%20pulsera/portada%20pulsera.jpg"
  };

  return (
    <section className="py-24 bg-background mt-48">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light text-center mb-12 text-foreground">
          Nuestras Categorías
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {categories.map((category) => {
            const categoryImage = categoryImages[category.id as keyof typeof categoryImages];
            return (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-lg overflow-hidden relative">
                  {categoryImage && (
                    <>
                      <img
                        src={categoryImage}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-85"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                      <h3 className="absolute inset-0 flex items-center justify-center text-white text-3xl lg:text-4xl font-medium text-center group-hover:text-primary transition-colors opacity-95">
                        {category.name}
                      </h3>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};