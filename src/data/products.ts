import { JewelryItem, Category } from "@/types/jewelry";
import { buildGitHubRawUrl } from "@/lib/config";

// Productos basados en las imágenes reales de las carpetas
export const jewelryItems: JewelryItem[] = [
  // Collares - Flor
  {
    id: "collar-flor",
    name: "Collar Flor",
    description: "Pequeña flor con un circón en el centro. Diseño mínimo y delicado. Incluye cadena. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "collares",
    images: [
      buildGitHubRawUrl("public/lovable-uploads/Collares/Flor/1.%20collar%20flor%20plata.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Collares/Flor/1.collar%20flor%20plata.jpg")
    ],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Collares/Flor/1.%20collar%20flor%20plata.jpg"),
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
    images: [buildGitHubRawUrl("public/lovable-uploads/Collares/Medallón/1.DSC_0190.jpg")],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Collares/Medallón/1.DSC_0190.jpg"),
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
    images: [buildGitHubRawUrl("public/lovable-uploads/Collares/Ovalo/1.DSC_0057%202.jpg")],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Collares/Ovalo/1.DSC_0057%202.jpg"),
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
      buildGitHubRawUrl("public/lovable-uploads/Pendientes/Un%20fractal/1.pendiente%20un%20fractal%20plata.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Pendientes/Un%20fractal/2.Pendiente%20un%20fractal%20oro.jpg")
    ],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Pendientes/Un%20fractal/1.pendiente%20un%20fractal%20plata.jpg"),
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
      buildGitHubRawUrl("public/lovable-uploads/Pendientes/Dos%20fractales/1.dos%20fractales%20plata.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Pendientes/Dos%20fractales/2.pendientes%20dos%20fractales%20oro%20.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Pendientes/Dos%20fractales/3.Dos%20fractales%20oro.jpg")
    ],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Pendientes/Dos%20fractales/1.dos%20fractales%20plata.jpg"),
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
      buildGitHubRawUrl("public/lovable-uploads/Pendientes/Tres%20fracteles/1.tres%20fractales%20plata%204.0.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Pendientes/Tres%20fracteles/2.tres%20fractales%20plata%202.0.jpg")
    ],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Pendientes/Tres%20fracteles/1.tres%20fractales%20plata%204.0.jpg"),
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
      buildGitHubRawUrl("public/lovable-uploads/Pendientes/Rosa%20mitsuro/1.pendiente%20rosita%20mitsuro%20plata.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Pendientes/Rosa%20mitsuro/2.pendiente%20rosita%20mitsuro%20oro.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Pendientes/Rosa%20mitsuro/DSC_0118.mov")
    ],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Pendientes/Rosa%20mitsuro/1.pendiente%20rosita%20mitsuro%20plata.jpg"),
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
    images: [buildGitHubRawUrl("public/lovable-uploads/Pendientes/Rosita%20mitsuro/Rositas%20mitsuro%20plata.jpg")],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Pendientes/Rosita%20mitsuro/Rositas%20mitsuro%20plata.jpg"),
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
      buildGitHubRawUrl("public/lovable-uploads/Pendientes/Argollas%20mitsuro/1.pendientes%20argollas%20mitsuro%20plata.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Pendientes/Argollas%20mitsuro/2.pendientes%20argollas%20mitsuro%20plata%202.0.jpg")
    ],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Pendientes/Argollas%20mitsuro/1.pendientes%20argollas%20mitsuro%20plata.jpg"),
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
      buildGitHubRawUrl("public/lovable-uploads/Pendientes/Nítido/1.Pendiente%20Nítido%20plata.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Pendientes/Nítido/2.Pendiente%20Nítido%20plata%202.0.jpg")
    ],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Pendientes/Nítido/1.Pendiente%20Nítido%20plata.jpg"),
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
    images: [buildGitHubRawUrl("public/lovable-uploads/Pendientes/Caudales/1.Pendinetes%20caudales%20plata.jpg")],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Pendientes/Caudales/1.Pendinetes%20caudales%20plata.jpg"),
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
      buildGitHubRawUrl("public/lovable-uploads/Pendientes/Ovalo/1.Pendientes%20oval%20plata%20verde%202.0.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Pendientes/Ovalo/2.%20pendientes%20ovalo%20perlas%20plata%203.0.jpg")
    ],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Pendientes/Ovalo/1.Pendientes%20oval%20plata%20verde%202.0.jpg"),
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
    description: "Diseñado en oro blanco 18K y una espectacular aguamarina. Este anillo puede reproducirse en el material y la piedra que se ajusten a tu presupuesto. Hecho por encargo. Disponible en plata, plata con baño de oro, oro 18k.",
    category: "anillos",
    images: [
      buildGitHubRawUrl("public/lovable-uploads/Anillos/Alcázar/Anillo%20oro%20blanco%2018%20k%20aguamarina.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Anillos/Alcázar/Anillo%20oro%20blanco%2018%20k%20aguamarina%202.0.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Anillos/Alcázar/Anillo%20oro%20blanco%2018%20k%20aguamarina%203.0.jpg")
    ],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Anillos/Alcázar/Anillo%20oro%20blanco%2018%20k%20aguamarina.jpg"),
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
    description: "Pieza única en oro blanco con una Tanzanita. Tallado a mano, por lo que ninguno será igual al anterior. Se puede encargar con la piedra y el material que se ajuste a tu presupuesto. Hecho por encargo. Disponible en plata, plata con baño de oro, oro 18k.",
    category: "anillos",
    images: [
      buildGitHubRawUrl("public/lovable-uploads/Anillos/Ana/1.Anillo%20oro%20blanco%2018k%20con%20tanzanita.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Anillos/Ana/2.Anillo%20oro%20blanco%2018k%20con%20tanzanita%202.0.jpg")
    ],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Anillos/Ana/2.Anillo%20oro%20blanco%2018k%20con%20tanzanita%202.0.jpg"),
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
    description: "Anillo con una pequeña curva interna que guía hasta la piedra central. Color a elección. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "anillos",
    images: [
      buildGitHubRawUrl("public/lovable-uploads/Anillos/Blanca/1.Anillo%20plata%20pidra%20azul.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Anillos/Blanca/3.%20Anillo%20oro%20piedra%20verde.jpg")
    ],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Anillos/Blanca/1.Anillo%20plata%20pidra%20azul.jpg"),
    prices: {
      silverEUR: 65,
      goldEUR: 70,
      silverCLP: 65000,
      goldCLP: 70000,
    }
  },

  // Anillos - Magma
  {
    id: "anillo-magma",
    name: "Magma",
    description: "Con textura como la de la piedra volcánica, el anillo magma logra ser diferente, atrevido, pero también elegante y delicado. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "anillos",
    images: [
      buildGitHubRawUrl("public/lovable-uploads/Anillos/Magma/1.Anillo%20magma.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Anillos/Magma/2.Anillo%20magma%20.jpg")
    ],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Anillos/Magma/1.Anillo%20magma.jpg"),
    prices: {
      silverEUR: 55,
      goldEUR: 65,
      silverCLP: 55000,
      goldCLP: 65000,
    }
  },

  // Pulseras - Fractal
  {
    id: "pulsera-fractal",
    name: "Pulsera Fractal",
    description: "Con dos módulos fractales a cada lado, esta pulsera tiene gran carácter y elegancia. Diseñada para hacerse notar, diferente a cualquier otra. Hechos a mano en plata 925. Disponibles con baño en oro.",
    category: "pulseras",
    images: [
      buildGitHubRawUrl("public/lovable-uploads/Pulsera/Pulsera%20Fractal%20plata/1.%20Pulsera%20fractal%20plata.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Pulsera/Pulsera%20Fractal%20plata/2.%20pulsera%20fractal.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Pulsera/Pulsera%20Fractal%20plata/3.Pulsera%20fractal%20plata.jpg")
    ],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Pulsera/Pulsera%20Fractal%20plata/1.%20Pulsera%20fractal%20plata.jpg"),
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
      buildGitHubRawUrl("public/lovable-uploads/Pulsera/Pulsera%20Mitsuro/1.Pulsera%20Mitsuro%20plata.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Pulsera/Pulsera%20Mitsuro/2.Pulsera%20mitsuro%20plata%202.0.jpg"),
      buildGitHubRawUrl("public/lovable-uploads/Pulsera/Pulsera%20Mitsuro/3.Pulsera%20mitsuro%20plata%203.0.jpg")
    ],
    mainImage: buildGitHubRawUrl("public/lovable-uploads/Pulsera/Pulsera%20Mitsuro/1.Pulsera%20Mitsuro%20plata.jpg"),
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
    id: "anillos",
    name: "Anillos", 
    items: jewelryItems.filter(item => item.category === "anillos")
  },
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
    id: "pulseras",
    name: "Pulseras",
    items: jewelryItems.filter(item => item.category === "pulseras")
  }
];