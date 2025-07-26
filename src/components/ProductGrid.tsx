import { useState } from "react";
import { JewelryItem } from "@/types/jewelry";
import { ProductModal } from "./ProductModal";

interface ProductGridProps {
  items: JewelryItem[];
  category: 'rings' | 'earrings';
}

export const ProductGrid = ({ items, category }: ProductGridProps) => {
  const [selectedItem, setSelectedItem] = useState<JewelryItem | null>(null);

  const filteredItems = items.filter(item => item.category === category);

  return (
    <>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-elegant text-3xl md:text-4xl text-center mb-16 text-foreground">
            {category === 'rings' ? 'Anillos' : 'Pendientes'}
          </h2>
          
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer transition-elegant"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-[4/5] overflow-hidden bg-accent rounded-sm shadow-minimal group-hover:shadow-hover transition-elegant">
                  <img
                    src={item.mainImage}
                    alt={item.name}
                    className="w-full h-full object-cover transition-elegant group-hover:scale-105"
                  />
                </div>
                <h3 className="font-elegant text-xl mt-4 text-foreground group-hover:text-muted-foreground transition-quick">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedItem && (
        <ProductModal
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </>
  );
};