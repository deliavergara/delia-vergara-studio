export interface JewelryItem {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  images: string[];
  mainImage: string;
  prices: {
    silver: number;
    gold: number;
  };
}

export interface JewelryGroup {
  id: string;
  items: JewelryItem[];
}