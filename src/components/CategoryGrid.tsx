import { categories } from "@/data/products";
import { useNavigate } from "react-router-dom";

export const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/categoria/${categoryId}`);
  };

  return (
    <section className="py-24 bg-background mt-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light text-center mb-12 text-foreground">
          Nuestras Categorías
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const firstImage = category.items[0]?.mainImage;
            return (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="group cursor-pointer"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  {firstImage && (
                    <img
                      src={firstImage}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                <h3 className="text-lg font-medium text-center text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};