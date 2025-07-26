export interface JewelryItem {
  id: string;
  name: string;
  description: string;
  category: string;
  images: string[];
  mainImage: string;
  prices: {
    silverEUR: number;
    goldEUR: number;
    silverCLP: number;
    goldCLP: number;
  };
}

export interface Category {
  id: string;
  name: string;
  items: JewelryItem[];
}