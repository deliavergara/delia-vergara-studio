import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  
  const category = categories.find(cat => cat.id === categoryId);
  
  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-elegant text-2xl text-foreground mb-4">Categoría no encontrada</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header con botón volver */}
      <div className="fixed top-6 left-6 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90 border border-border shadow-minimal transition-elegant"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>

      {/* Título de la categoría */}
      <div className="pt-24 pb-12 text-center">
        <h1 className="font-elegant text-4xl text-foreground">
          {category.name}
        </h1>
      </div>

      {/* Grid de productos */}
      <div className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {category.items.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => navigate(`/producto/${item.id}`)}
            >
              <div className="aspect-[4/5] bg-accent rounded-sm overflow-hidden mb-4 transition-elegant group-hover:scale-105 group-hover:shadow-elegant">
                <img
                  src={item.mainImage}
                  alt={item.name}
                  className="w-full h-full object-cover transition-elegant group-hover:scale-110"
                />
              </div>
              <h3 className="font-elegant text-xl text-foreground text-center">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;