import { JewelryItem } from "@/types/jewelry";

interface ProductGridProps {
  items: JewelryItem[];
}

export const ProductGrid = ({ items }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-8 md:gap-12">
      {items.map((item) => (
        <div
          key={item.id}
          className="group cursor-pointer transition-elegant"
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
  );
};