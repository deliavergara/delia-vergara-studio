import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";
import { Link } from "react-router-dom";
const CategoryPage = () => {
  const {
    categoryId
  } = useParams();
  const navigate = useNavigate();
  const category = categories.find(cat => cat.id === categoryId);

  // Mapeo de imágenes de portada para cada categoría
  const categoryImages = {
    anillos: "https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Anillos/anillo%20portada/anillo%20portada.jpg",
    collares: "https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Collares/portada%20collares/2.portada%20collares.jpg",
    pendientes: "https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Pendientes/portada%20pendientes/1.pendientes%20portada.jpg",
    pulseras: "https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Pulsera/portada%20pulsera/portada%20pulsera.jpg"
  };
  if (!category) {
    return <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-elegant text-2xl text-foreground mb-4">Categoría no encontrada</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Volver al inicio
          </Button>
        </div>
      </div>;
  }
  const categoryImage = categoryImages[categoryId as keyof typeof categoryImages];
  return <div className="min-h-screen bg-background">
      {/* Header con botón volver */}
      <div className="fixed top-6 left-6 z-50">
        <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="bg-white/80 backdrop-blur-sm hover:bg-white/90 border border-border shadow-minimal transition-elegant">
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>

      {/* Hero section con imagen de portada */}
      <div className="relative h-[28rem] overflow-hidden">
        {categoryImage && <>
            <img src={categoryImage} alt={category.name} className={`w-full h-full object-cover opacity-70 ${categoryId === 'pulseras' ? 'object-[center_30%]' : ''}`} />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img src="https://github.com/deliavergara/delia-vergara-studio/raw/main/public/lovable-uploads/Material%20de%20Apoyo/Logo/logo%20blanco_Mesa%20de%20trabajo%201.png" alt="Delia Vergara Logo" className="h-16 mb-6 cursor-pointer hover:opacity-70 transition-elegant" onClick={() => navigate("/")} />
              <h1 className="font-roboto-medium text-white tracking-title text-2xl">
                {category.name}
              </h1>
            </div>
          </>}
      </div>

      {/* Grid de productos */}
      <div className="container mx-auto px-6 pb-24 mt-16">
        {/* Descripción de la categoría */}
        <div className="max-w-xl mx-auto text-center mb-16 mt-12">
          <p className="font-light text-muted-foreground tracking-body leading-body text-lg">
            {category.id === 'anillos' && <>
                Anillos únicos hechos a mano en plata 925 y oro.
                <br />
                Cada pieza es cuidadosamente crafteada con atención al detalle.
              </>}
            {category.id === 'collares' && 'Collares delicados y elegantes que complementan cualquier look. Diseños minimalistas con máximo impacto.'}
            {category.id === 'pendientes' && 'Pendientes con diseños innovadores y técnicas artesanales. Desde sutiles hasta statement pieces.'}
            {category.id === 'pulseras' && 'Pulseras únicas que combinan artesanía tradicional con diseño contemporáneo.'}
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-2 gap-10 max-w-2xl mx-auto">
          {category.items.map(item => <div key={item.id} className="group cursor-pointer relative" onClick={() => navigate(`/producto/${item.id}`)}>
              <div className="aspect-[3/4] bg-accent rounded-sm overflow-hidden relative transition-elegant mb-4">
                <img src={item.mainImage} alt={item.name} className="w-full h-full object-cover transition-elegant group-hover:scale-105" style={{
              opacity: '0.87'
            }} />
              </div>
              <h3 style={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '400'
          }} className="text-product-title tracking-title text-base font-normal text-left text-slate-950">
                {item.name}
              </h3>
            </div>)}
        </div>

        {/* Footer con contacto */}
        <div className="mt-16 pt-8 border-t border-border text-center space-y-4">
          <p className="text-body font-light text-muted-foreground tracking-body leading-body">
            deliavergara.joyas@gmail.com | +34 625857127
          </p>
          <Link to="/contacto">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-elegant">
              Contáctame
            </Button>
          </Link>
        </div>
      </div>
    </div>;
};
export default CategoryPage;