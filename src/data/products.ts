import { JewelryItem, Category } from "@/types/jewelry";

// Productos basados en las imágenes reales de las carpetas
export const jewelryItems: JewelryItem[] = [
  // Collares - Flor
  {
    id: "collar-flor",
    name: "Collar Flor",
    description: "Pequeña flor con un circón en el centro. Diseño mínimo y delicado. Incluye cadena. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "collares",
    images: ["/lovable-uploads/Collares/Flor/1.collar flor plata.jpg"],
    mainImage: "/lovable-uploads/Collares/Flor/1.collar flor plata.jpg",
    prices: {
      silverEUR: 35,
      goldEUR: 45,
      silverCLP: 35000,
      goldCLP: 45000,
    }
  },
  
  // Collares - Medallón
  {
    id: "collar-medallon",
    name: "Collar Medallón", 
    description: "Medallón con textura y un circonitas a un costado. Sutil, pero con presencia. Incluye cadena. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "collares",
    images: ["/lovable-uploads/Collares/Medallón/1.DSC_0190.jpg"],
    mainImage: "/lovable-uploads/Collares/Medallón/1.DSC_0190.jpg",
    prices: {
      silverEUR: 40,
      goldEUR: 55,
      silverCLP: 40000,
      goldCLP: 55000,
    }
  },

  // Collares - Óvalo
  {
    id: "collar-ovalo",
    name: "Collar Óvalo",
    description: "Collar con forma oval, con un circón de color en el centro que le aporta elegancia. Perfecto para combinar con los pendientes. Incluye cadena. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "collares", 
    images: ["/lovable-uploads/Collares/Ovalo/1.DSC_0057 2.jpg"],
    mainImage: "/lovable-uploads/Collares/Ovalo/1.DSC_0057 2.jpg",
    prices: {
      silverEUR: 45,
      goldEUR: 57,
      silverCLP: 45000,
      goldCLP: 57000,
    }
  },

  // Pendientes - Un fractal
  {
    id: "pendientes-un-fractal",
    name: "Pendientes Un Fractal",
    description: "Formado por un solo módulo fractal, este pendiente logra una pieza delicada, ligera y con un diseño diferente. Ideal para uso diario por su comodidad. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "pendientes",
    images: [
      "/lovable-uploads/Pendientes/Un fractal/1.pendiente un fractal plata.jpg",
      "/lovable-uploads/Pendientes/Un fractal/2.Pendiente un fractal oro.jpg"
    ],
    mainImage: "/lovable-uploads/Pendientes/Un fractal/1.pendiente un fractal plata.jpg",
    prices: {
      silverEUR: 48,
      goldEUR: 63,
      silverCLP: 48000,
      goldCLP: 63000,
    }
  },

  // Pendientes - Dos fractales
  {
    id: "pendientes-dos-fractales",
    name: "Pendientes Dos Fractales",
    description: "Compuestos por dos módulos florales: uno pequeño que se ajusta de forma delicada y otro más grande que le da carácter. Una pieza con equilibrio, elegante, ligera y con movimiento. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "pendientes",
    images: [
      "/lovable-uploads/Pendientes/Dos fractales/1.dos fractales plata.jpg",
      "/lovable-uploads/Pendientes/Dos fractales/2.pendientes dos fractales oro .jpg",
      "/lovable-uploads/Pendientes/Dos fractales/3.Dos fractales oro.jpg"
    ],
    mainImage: "/lovable-uploads/Pendientes/Dos fractales/1.dos fractales plata.jpg",
    prices: {
      silverEUR: 55,
      goldEUR: 71,
      silverCLP: 55000,
      goldCLP: 71000,
    }
  },

  // Pendientes - Tres fractales
  {
    id: "pendientes-tres-fractales", 
    name: "Pendientes Tres Fractales",
    description: "Compuestos por tres módulos fractales. Forman una pieza de impacto, ligera y con presencia. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "pendientes",
    images: [
      "/lovable-uploads/Pendientes/Tres fracteles/1.tres fractales plata 4.0.jpg",
      "/lovable-uploads/Pendientes/Tres fracteles/2.tres fractales plata 2.0.jpg"
    ],
    mainImage: "/lovable-uploads/Pendientes/Tres fracteles/1.tres fractales plata 4.0.jpg",
    prices: {
      silverEUR: 68,
      goldEUR: 83,
      silverCLP: 68000,
      goldCLP: 83000,
    }
  },

  // Pendientes - Rosa mitsuro
  {
    id: "pendientes-rosa-mitsuro",
    name: "Pendientes Rosa Mitsuro",
    description: "Modelados con la técnica mitsuro, lo que permite que tomen curvas y una forma orgánica que recuerda a una rosa con su tallo. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "pendientes",
    images: [
      "/lovable-uploads/Pendientes/Rosa mitsuro/1.pendiente rosita mitsuro plata.jpg",
      "/lovable-uploads/Pendientes/Rosa mitsuro/2.pendiente rosita mitsuro oro.jpg"
    ],
    mainImage: "/lovable-uploads/Pendientes/Rosa mitsuro/1.pendiente rosita mitsuro plata.jpg",
    prices: {
      silverEUR: 70,
      goldEUR: 85,
      silverCLP: 70000,
      goldCLP: 85000,
    }
  },

  // Pendientes - Rosita mitsuro
  {
    id: "pendientes-rosita-mitsuro",
    name: "Pendientes Rosita Mitsuro", 
    description: "Pequeñas rosas modeladas con la técnica mistura. Sutiles, delicadas y con curvas orgánicas que nacen solo del modelado a mano. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "pendientes",
    images: ["/lovable-uploads/Pendientes/Rosita mitsuro/Rositas mitsuro plata.jpg"],
    mainImage: "/lovable-uploads/Pendientes/Rosita mitsuro/Rositas mitsuro plata.jpg",
    prices: {
      silverEUR: 35,
      goldEUR: 50,
      silverCLP: 35000,
      goldCLP: 50000,
    }
  },

  // Pendientes - Argollas mitsuro
  {
    id: "pendientes-argollas-mitsuro",
    name: "Pendientes Argollas Mitsuro",
    description: "Argollas modeladas a mano con la técnica mitsuro. De una sola pieza que gira sobre sí misma. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "pendientes",
    images: [
      "/lovable-uploads/Pendientes/Argollas mitsuro/1.pendientes argollas mitsuro plata.jpg",
      "/lovable-uploads/Pendientes/Argollas mitsuro/2.pendientes argollas mitsuro plata 2.0.jpg"
    ],
    mainImage: "/lovable-uploads/Pendientes/Argollas mitsuro/1.pendientes argollas mitsuro plata.jpg",
    prices: {
      silverEUR: 50,
      goldEUR: 65,
      silverCLP: 50000,
      goldCLP: 65000,
    }
  },

  // Pendientes - Nítido
  {
    id: "pendientes-nitido",
    name: "Pendientes Nítido",
    description: "Sutiles y delicados. Pensados para usarse todos los días. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "pendientes",
    images: [
      "/lovable-uploads/Pendientes/Nítido/1.Pendiente Nítido plata.jpg",
      "/lovable-uploads/Pendientes/Nítido/2.Pendiente Nítido plata 2.0.jpg"
    ],
    mainImage: "/lovable-uploads/Pendientes/Nítido/1.Pendiente Nítido plata.jpg",
    prices: {
      silverEUR: 36,
      goldEUR: 48,
      silverCLP: 36000,
      goldCLP: 48000,
    }
  },

  // Pendientes - Caudales
  {
    id: "pendientes-caudales",
    name: "Pendientes Caudales",
    description: "Con textura orgánica y cadenas que caen como caudales. Tienen movimiento y mucho carácter. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "pendientes",
    images: ["/lovable-uploads/Pendientes/Caudales/1.Pendinetes caudales plata.jpg"],
    mainImage: "/lovable-uploads/Pendientes/Caudales/1.Pendinetes caudales plata.jpg",
    prices: {
      silverEUR: 65,
      goldEUR: 83,
      silverCLP: 65000,
      goldCLP: 83000,
    }
  },

  // Pendientes - Óvalo
  {
    id: "pendientes-ovalo",
    name: "Pendientes Óvalo",
    description: "Coloridos y senadores. Puedes elegir el color de la piedra o incluso perlas. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "pendientes",
    images: [
      "/lovable-uploads/Pendientes/Ovalo/1.Pendientes oval plata verde 2.0.jpg",
      "/lovable-uploads/Pendientes/Ovalo/2. pendientes ovalo perlas plata 3.0.jpg"
    ],
    mainImage: "/lovable-uploads/Pendientes/Ovalo/1.Pendientes oval plata verde 2.0.jpg",
    prices: {
      silverEUR: 56,
      goldEUR: 70,
      silverCLP: 56000,
      goldCLP: 70000,
    }
  }
];

// Organizar por categorías según Menu.txt
export const categories: Category[] = [
  {
    id: "collares",
    name: "Collares", 
    items: jewelryItems.filter(item => item.category === "collares")
  },
  {
    id: "pendientes",
    name: "Pendientes",
    items: jewelryItems.filter(item => item.category === "pendientes")
  }
];