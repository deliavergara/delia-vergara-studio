import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";
import { Link } from "react-router-dom";

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

      {/* Logo */}
      <div className="pt-24 pb-8 text-center">
        <img
          src="/lovable-uploads/Material de Apoyo/Logo/logo gris_Mesa de trabajo 1.png"
          alt="Delia Vergara Logo"
          className="h-16 mx-auto mb-8"
        />
        <h1 className="font-elegant font-medium text-4xl text-slate-500 tracking-title">
          {category.name}
        </h1>
      </div>

      {/* Grid de productos */}
      <div className="container mx-auto px-6 pb-24">
        {/* Descripción de la categoría */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-body font-light text-muted-foreground tracking-body leading-body">
            {category.id === 'anillos' && 'Anillos únicos hechos a mano en plata 925 y oro. Cada pieza es cuidadosamente crafteada con atención al detalle.'}
            {category.id === 'collares' && 'Collares delicados y elegantes que complementan cualquier look. Diseños minimalistas con máximo impacto.'}
            {category.id === 'pendientes' && 'Pendientes con diseños innovadores y técnicas artesanales. Desde sutiles hasta statement pieces.'}
            {category.id === 'pulseras' && 'Pulseras únicas que combinan artesanía tradicional con diseño contemporáneo.'}
          </p>
        </div>

        {/* Grid de productos */}
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
              <h3 className="font-elegant font-medium text-xl text-slate-500 text-center tracking-title">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Footer con contacto */}
        <div className="mt-16 pt-8 border-t border-border text-center space-y-4">
          <p className="text-body font-light text-muted-foreground tracking-body leading-body">
            deliavergara.joyas@gmail.com | +34 625857127
          </p>
          <Link to="/contactame">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-elegant">
              Contáctame
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;