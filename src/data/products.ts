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
    id: "pendiente-un-fractal",
    name: "Un Fractal",
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
    id: "pendiente-dos-fractales",
    name: "Dos Fractales",
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
    id: "pendiente-tres-fractales",
    name: "Tres Fractales",
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
    id: "pendiente-rosa-mitsuro",
    name: "Rosa Mitsuro",
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
    id: "pendiente-rosita-mitsuro",
    name: "Rositas Mitsuro",
    description: "Pequeñas rosas modeladas con la técnica mitsuro. Sutiles, delicadas y con curvas orgánicas que nacen solo del modelado a mano. Hechos a mano en plata 925. Disponibles con baño en oro.",
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
    id: "pendiente-argollas-mitsuro",
    name: "Argolla Mitsuro",
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
    id: "pendiente-nitido",
    name: "Nítido",
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
    id: "pendiente-caudales",
    name: "Caudales",
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

  // Pendientes - Ovalo
  {
    id: "pendiente-ovalo",
    name: "Óvalo",
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
  },

  // Anillos - Alcázar
  {
    id: "anillo-alcazar",
    name: "Alcázar",
    description: "Anillo único de oro blanco 18k con aguamarina talla esmeralda de 2 quilates. Pieza exclusiva.",
    category: "anillos",
    images: [
      "/lovable-uploads/Anillos/Alcázar/Anillo oro blanco 18 k aguamarina.jpg",
      "/lovable-uploads/Anillos/Alcázar/Anillo oro blanco 18 k aguamarina 2.0.jpg",
      "/lovable-uploads/Anillos/Alcázar/Anillo oro blanco 18 k aguamarina 3.0.jpg"
    ],
    mainImage: "/lovable-uploads/Anillos/Alcázar/Anillo oro blanco 18 k aguamarina.jpg",
    prices: {
      silverEUR: 0,
      goldEUR: 0,
      silverCLP: 0,
      goldCLP: 0,
    }
  },

  // Anillos - Ana
  {
    id: "anillo-ana",
    name: "Ana",
    description: "Anillo de oro blanco 18k con tanzanita. Diseño elegante y sofisticado.",
    category: "anillos",
    images: [
      "/lovable-uploads/Anillos/Ana/1.Anillo oro blanco 18k con tanzanita.jpg",
      "/lovable-uploads/Anillos/Ana/2.Anillo oro blanco 18k con tanzanita 2.0.jpg"
    ],
    mainImage: "/lovable-uploads/Anillos/Ana/1.Anillo oro blanco 18k con tanzanita.jpg",
    prices: {
      silverEUR: 0,
      goldEUR: 0,
      silverCLP: 0,
      goldCLP: 0,
    }
  },

  // Anillos - Blanca
  {
    id: "anillo-blanca",
    name: "Blanca",
    description: "Anillo disponible en plata con piedra azul y oro con piedra verde. Diseño clásico y atemporal.",
    category: "anillos",
    images: [
      "/lovable-uploads/Anillos/Blanca/1.Anillo plata pidra azul.jpg",
      "/lovable-uploads/Anillos/Blanca/3. Anillo oro piedra verde.jpg"
    ],
    mainImage: "/lovable-uploads/Anillos/Blanca/1.Anillo plata pidra azul.jpg",
    prices: {
      silverEUR: 0,
      goldEUR: 0,
      silverCLP: 0,
      goldCLP: 0,
    }
  },

  // Anillos - Magma
  {
    id: "anillo-magma",
    name: "Magma",
    description: "Anillo con diseño orgánico inspirado en la lava. Textura única y contemporánea.",
    category: "anillos",
    images: [
      "/lovable-uploads/Anillos/Magma/1.Anillo magma.jpg",
      "/lovable-uploads/Anillos/Magma/2.Anillo magma .jpg"
    ],
    mainImage: "/lovable-uploads/Anillos/Magma/1.Anillo magma.jpg",
    prices: {
      silverEUR: 0,
      goldEUR: 0,
      silverCLP: 0,
      goldCLP: 0,
    }
  },

  // Pulseras - Fractal
  {
    id: "pulsera-fractal",
    name: "Pulsera Fractal",
    description: "Con dos módulos fractales a cada lado, esta pulsera tiene gran carácter y elegancia. Diseñada para hacerse notar, diferente a cualquier otra. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "pulseras",
    images: [
      "/lovable-uploads/Pulsera/Pulsera Fractal plata/1. Pulsera fractal plata.jpg",
      "/lovable-uploads/Pulsera/Pulsera Fractal plata/2. pulsera fractal.jpg",
      "/lovable-uploads/Pulsera/Pulsera Fractal plata/3.Pulsera fractal plata.jpg"
    ],
    mainImage: "/lovable-uploads/Pulsera/Pulsera Fractal plata/1. Pulsera fractal plata.jpg",
    prices: {
      silverEUR: 85,
      goldEUR: 105,
      silverCLP: 85000,
      goldCLP: 105000,
    }
  },

  // Pulseras - Mitsuro
  {
    id: "pulsera-mitsuro",
    name: "Pulsera Mitsuro",
    description: "Modelada a mano con la técnica Mitsuro, esta pulsera de casi 200g de plata se forma a partir de sus propias curvas. Es una pieza única. Si quieres la tuya será una nueva: pero igual de especial. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "pulseras",
    images: [
      "/lovable-uploads/Pulsera/Pulsera Mitsuro/1.Pulsera Mitsuro plata.jpg",
      "/lovable-uploads/Pulsera/Pulsera Mitsuro/2.Pulsera mitsuro plata 2.0.jpg",
      "/lovable-uploads/Pulsera/Pulsera Mitsuro/3.Pulsera mitsuro plata 3.0.jpg"
    ],
    mainImage: "/lovable-uploads/Pulsera/Pulsera Mitsuro/1.Pulsera Mitsuro plata.jpg",
    prices: {
      silverEUR: 90,
      goldEUR: 120,
      silverCLP: 90000,
      goldCLP: 120000,
    }
  },
];

// Categorías con sus respectivos items
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
  },
  {
    id: "anillos",
    name: "Anillos", 
    items: jewelryItems.filter(item => item.category === "anillos")
  },
  {
    id: "pulseras",
    name: "Pulseras",
    items: jewelryItems.filter(item => item.category === "pulseras")
  }
];