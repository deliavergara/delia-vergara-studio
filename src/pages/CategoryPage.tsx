import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";

export const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryProducts = products.filter(product => product.category === category);

  const getCategoryTitle = (cat: string) => {
    switch(cat) {
      case 'collares': return 'Collares';
      case 'pendientes': return 'Pendientes';
      default: return cat;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-6 left-6 z-40">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/')}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
        >
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </Button>
      </div>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-elegant text-4xl md:text-5xl text-center mb-16 text-foreground">
            {getCategoryTitle(category || '')}
          </h1>
          
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {categoryProducts.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer transition-elegant"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="aspect-[4/5] overflow-hidden bg-accent rounded-sm shadow-minimal group-hover:shadow-hover transition-elegant">
                  <img
                    src={product.mainImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-elegant group-hover:scale-105"
                  />
                </div>
                <h3 className="font-elegant text-xl mt-4 text-foreground group-hover:text-muted-foreground transition-quick">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};