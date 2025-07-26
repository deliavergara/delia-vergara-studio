import { JewelryItem } from "@/types/jewelry";

export const jewelryData: JewelryItem[] = [
  // Anillos
  {
    id: "aguamarina-ring",
    name: "Anillo Aguamarina",
    description: "Delicado anillo con aguamarina natural tallada en forma esmeralda, engastada en plata con detalles orgánicos.",
    category: "rings",
    images: [
      "/lovable-uploads/319738b7-b278-4220-bf38-a67ac219597c.png",
      "/lovable-uploads/ff73170b-3e88-40b4-a76f-ec56dc62576c.png",
      "/lovable-uploads/c4e8a778-0c72-4247-b21b-5109bcd7ce8e.png"
    ],
    mainImage: "/lovable-uploads/319738b7-b278-4220-bf38-a67ac219597c.png",
    prices: {
      silver: 185,
      gold: 285
    }
  },
  {
    id: "violeta-ring",
    name: "Anillo Amatista",
    description: "Elegante anillo con amatista violeta en engaste fluido, inspirado en formas naturales y texturas orgánicas.",
    category: "rings",
    images: [
      "/lovable-uploads/5b222704-3f60-4aa1-ada8-dfc1aea76a13.png",
      "/lovable-uploads/9af57dc8-0b26-4984-8286-808cb947caf3.png"
    ],
    mainImage: "/lovable-uploads/5b222704-3f60-4aa1-ada8-dfc1aea76a13.png",
    prices: {
      silver: 195,
      gold: 295
    }
  },
  // Pendientes
  {
    id: "cluster-gold-earrings",
    name: "Pendientes Cluster Dorado",
    description: "Pendientes en cascada con textura orgánica, inspirados en la naturaleza y acabados en oro rosado.",
    category: "earrings",
    images: [
      "/lovable-uploads/2f343a7b-278a-4911-9b4c-9508b3d1ebc1.png"
    ],
    mainImage: "/lovable-uploads/2f343a7b-278a-4911-9b4c-9508b3d1ebc1.png",
    prices: {
      silver: 125,
      gold: 225
    }
  },
  {
    id: "cluster-silver-earrings",
    name: "Pendientes Cluster Plata",
    description: "Pendientes estructurales con textura granulada, diseño escultórico que captura la luz de manera única.",
    category: "earrings",
    images: [
      "/lovable-uploads/959bd229-42b6-4e91-ba58-bc26a7bd59ca.png",
      "/lovable-uploads/4ae306ad-d747-4462-b262-40c93eec72b7.png"
    ],
    mainImage: "/lovable-uploads/959bd229-42b6-4e91-ba58-bc26a7bd59ca.png",
    prices: {
      silver: 135,
      gold: 235
    }
  }
];