import { JewelryItem, Category } from "@/types/jewelry";
import { buildProductImageUrl } from "@/lib/supabase-config";
import pricesData from "@/data/prices.json";

interface PriceData {
  valor_venta_es: number;
  valor_venta_bano_oro_es: number;
  valor_venta_cl: number;
  valor_venta_bano_oro_cl: number;
}

// Mapeo de productos con sus carpetas e imágenes
const productMapping = {
  // Anillos
  "ALCAZARANILLOUNICO": {
    category: "anillos",
    name: "alcazar",
    images: [
      "alcazar_1.jpg",
      "alcazar_2.jpg", 
      "alcazar_3.jpg"
    ],
    description: "Diseñado en oro blanco 18K y una espectacular aguamarina. Este anillo puede reproducirse en el material y la piedra que se ajusten a tu presupuesto.\n\nHecho por encargo\nDisponible en plata, plata con baño de oro, oro 18k"
  },
  "ANAANILLOUNICO": {
    category: "anillos",
    name: "ana",
    images: [
      "ana_1.jpg",
      "ana_2.jpg",
      "ana_3.mov"
    ],
    description: "Pieza única en oro blanco con una Tanzanita. Tallado a mano, por lo que ninguno será igual al anterior.\nSe puede encargar con la piedra y el material que se ajuste a tú presupuesto.\n\nHecho por encargo\nDisponible en plata, plata con baño de oro, oro 18k"
  },
  "BLANCAANILLOUNICO": {
    category: "anillos",
    name: "blanca", 
    images: [
      "blanca_1.jpg",
      "blanca_2.jpg",
      "blanca_3.jpg",
      "blanca_4.jpg"
    ],
    description: "Anillo con una pequeña curva interna que guía hasta la piedra central. Color a elección.\n\nHecho a mano en plata 925\nDisponible con baño en oro"
  },
  "MAGMAANILLOUNICO": {
    category: "anillos",
    name: "magma",
    images: [
      "magma_1.jpg",
      "magma_2.jpg",
      "magma_3.jpg"
    ],
    description: "Con textura como la de la piedra volcánica, el anillo magma es diferente, atrevido, pero también elegante y delicado.\n\nHecho a mano en plata 925\nDisponible con baño en oro"
  },
  "GRANATEANILLOUNICO": {
    category: "anillos",
    name: "granate",
    images: [
      "granate_1.jpg",
      "granate_2.jpg",
      "granate_3.jpg"
    ],
    description: "Este anillo lleva un granate de forma rectangular, tallado con pocas facetas para resaltar su profundidad y su tono vino intenso.\nEstá montado en un cuerpo de plata, con un engaste que envuelve toda la piedra y acentúa su forma geométrica.\n\nHecho a mano en plata 925\nDisponible con baño en oro"
  },
  "NUBEANILLOUNICO": {
    category: "anillos",
    name: "nube",
    images: [
      "nube_1.jpg",
      "nube_2.jpg",
      "nube_3.jpg"
    ],
    description: "Modelado a mano, con terminación mate y relieves orgánicos.\nIncluye tres piedras de color a elección.\n\nHecho a mano en plata 925\nDisponible con baño en oro"
  },
  "IRISANILLOUNICO": {
    category: "anillos",
    name: "iris",
    images: [
      "iris_1.jpg",
      "iris_2.jpg",
      "iris_3.jpg",
      "iris_4.jpg"
    ],
    description: "El anillo Iris parte de una forma fina y sencilla, que se ensancha sutilmente justo antes de abrazar la piedra. Ese cambio de volumen lo vuelve anguloso, elegante y con carácter.\nDisponible con piedra a elección. En la imagen: granate rodolita.\n\nHecho a mano en plata 925\nDisponible con baño en oro"
  },
  
  // Collares
  "FLORCOLLARUNICO": {
    category: "collares",
    name: "flor",
    images: [
      "flor_1.jpg",
      "flor_2.jpg"
    ],
    description: "Pequeña flor con un circón en el centro. Diseño mínimo y delicado.\n\nIncluye cadena\nHechos a mano en plata 925\nDisponibles con baño en oro"
  },
  "MEDALLONCOLLARUNICO": {
    category: "collares",
    name: "medallon",
    images: [
      "medallon_1.jpg"
    ],
    description: "Medallón con textura y una circonita a un costado. Sutil, pero con presencia.\n\nIncluye cadena\nHechos a mano en plata 925\nDisponibles con baño en oro"
  },
  "OVALCOLLARUNICO": {
    category: "collares",
    name: "ovalo", 
    images: [
      "ovalo_1.jpg"
    ],
    description: "Collar con forma oval, con un circón de color en el centro que le aporta elegancia. Perfecto para combinar con los pendientes.\n\nIncluye cadena\nHechos a mano en plata 925\nDisponibles con baño en oro"
  },
  
  // Pendientes
  "PARFRACTALPENDIENTEUNO": {
    category: "pendientes",
    name: "un-fractal",
    images: [
      "un-fractal_1.jpg",
      "un-fractal_2.jpg",
      "un-fractal_3.jpg",
      "un-fractal_4.mov"
    ],
    description: "Formado por un solo módulo fractal, este pendiente es una pieza delicada, ligera y con un diseño diferente. Ideal para uso diario por su comodidad.\n\nHecho a mano en plata 925\nDisponible con baño en oro"
  },
  "PARFRACTALPENDIENTEDOS": {
    category: "pendientes",
    name: "dos-fractales",
    images: [
      "dos-fractales_1.jpg",
      "dos-fractales_2.jpg",
      "dos-fractales_3.jpg"
    ],
    description: "Compuestos por dos módulos florales: uno pequeño que se ajusta de forma delicada y otro más grande que le da carácter. Una pieza con equilibrio, elegante, ligera y con movimiento.\n\nHecho a mano en plata 925\nDisponible con baño en oro"
  },
  "PARFRACTALPENDIENTETRES": {
    category: "pendientes",
    name: "tres-fractales",
    images: [
      "tres-fractales_1.jpg",
      "tres-fractales_2.jpg",
      "tres-fractales_3.jpg"
    ],
    description: "Compuestos por tres módulos fractales. Forman una pieza de impacto, ligera y con presencia.\n\nHechos a mano en plata 925\nDisponibles con baño en oro"
  },
    "PARFRACTALPENDIENTECUATRO": {
    category: "pendientes",
    name: "cuatro-fractales",
    images: [
      "cuatro-fractales_1.jpg",
      "cuatro-fractales_2.jpg",
      "cuatro-fractales_3.mov"
    ],
    description: "Pendientes de cuatro fractales, creados originalmente por encargo para una novia en París. Su movimiento y largo los hicieron imprescindibles en la colección. \n\nHechos a mano en plata 925\nDisponibles con baño en oro"
  },
  "CAUDALPENDIENTEUNICO": {
    category: "pendientes",
    name: "caudales",
    images: [
      "caudales_1.jpg",
      "caudales_2.jpg",
      "caudales_3.mov"
    ],
    description: "Con textura orgánica y cadenas que caen como caudales. Tienen movimiento y mucho carácter.\n\nHecho a mano en plata 925\nDisponible con baño en oro"
  },
  "OVALPENDIENTEUNO": {
    category: "pendientes",
    name: "un-ovalo",
    images: [
      "un-ovalo_1.jpg",
      "un-ovalo_2.jpg",
      "un-ovalo_3.jpg"
    ],
    description: "Sutiles y elegantes. Puedes elegir el color de la piedra o incluso perlas.\n\nHecho a mano en plata 925\nDisponible con baño en oro"
  },
  "OVALPENDIENTEDOS": {
    category: "pendientes",
    name: "dos-ovalos",
    images: [
      "dos-ovalos_1.jpg",
      "dos-ovalos_2.jpg"
    ],
    description: "Coloridos y sentadores. Puedes elegir el color de la piedra o incluso perlas\n\nHecho a mano en plata 925\nDisponible con baño en oro"
  },
  "MITSUROROSASPENDIENTEUNICO": {
    category: "pendientes",
    name: "rosa-mitsuro",
    images: [
      "rosa-mitsuro_1.jpg",
      "rosa-mitsuro_2.jpg",
      "rosa-mitsuro_3.mov",
      "rosa-mitsuro_4.mov"
    ],
    description: "Modelados con la técnica Mitsuro, que permite que tomen curvas y una forma orgánica que recuerda a una rosa con su tallo.\n\nHecho a mano en plata 925\nDisponible con baño en oro"
  },
  "MITSUROROSITASPENDIENTEUNICO": {
    category: "pendientes",
    name: "rositas-mitsuro",
    images: [
      "rositas-mitsuro_1.jpg",
      "rositas-mitsuro_2.jpg"
    ],
    description: "Pequeñas rosas modeladas con la técnica Mitsuro. Sutiles, delicadas y con curvas orgánicas que nacen solo del modelado a mano.\n\nHechas a mano en plata 925\nDisponibles con baño en oro"
  },
  "MITSUROARGOLLASPENDIENTEUNICO": {
    category: "pendientes",
    name: "argollas-mitsuro",
    images: [
      "argollas-mitsuro_1.jpg",
      "argollas-mitsuro_2.jpg"
    ],
    description: "Argollas modeladas a mano con la técnica Mitsuro. De una sola pieza que gira sobre sí misma.\n\nHecho a mano en plata 925\nDisponible con baño en oro"
  },
  "NITIDOPENDIENTEUNICO": {
    category: "pendientes",
    name: "nitido",
    images: [
      "nitido_1.jpg",
      "nitido_2.jpg"
    ],
    description: "Sutiles y delicados. Pensados para usarse todos los días.\n\nHecho a mano en plata 925\nDisponible con baño en oro"
  },


  // Pulseras
  "FRACTALPULSERAUNICO": {
    category: "pulseras",
    name: "pulsera-fractal",
    images: [
      "pulsera-fractal_1.jpg",
      "pulsera-fractal_2.jpg",
      "pulsera-fractal_3.jpg"
    ],
    description: "Con dos módulos fractales a cada lado, esta pulsera tiene gran carácter y elegancia. Diseñada para hacerse notar, diferente a cualquier otra.\n\nHecha a mano en plata 925\nDisponible con baño en oro"
  },
  "FACETADAPULSERAUNICO": {
    category: "pulseras",
    name: "pulsera-facetada",
    images: [
      "pulsera-facetada_1.jpg",
      "pulsera-facetada_2.jpg",
      "pulsera-facetada_3.jpg",
      "pulsera-facetada_4.mov"
    ],
    description: "Diseñada desde cero cada vez. Cada una con sus propias facetas, única e irrepetible.\n\nHecha a mano en plata 925\nDisponible con baño en oro"
  },
  "MITSUROPULSERAUNICO": {
    category: "pulseras",
    name: "pulsera-mitsuro",
    images: [
      "pulsera-mitsuro_1.jpg",
      "pulsera-mitsuro_2.jpg",
      "pulsera-mitsuro_3.jpg"
    ],
    description: "Modelada a mano con la técnica Mitsuro, esta pulsera de casi 200g de plata se forma a partir de sus propias curvas. Es una pieza única.\nSi quieres la tuya será una nueva, pero igual de especial.\n\nHecha a mano en plata 925\nDisponible con baño en oro"
  },
  "LYRAPULSERAUNICO": {
    category: "pulseras",
    name: "pulsera-lyra",
    images: [
      "pulsera-lyra_1.jpg",
      "pulsera-lyra_2.jpg"
    ],
    description: "Par de pulseras orgánicas Se acompañan y se mueven juntas, ligeras y con textura sutil. Diseñadas para lucir siempre en pareja.\n\nHecha a mano en plata 925\nDisponible con baño en oro"
  }
};

// Función para cargar un producto desde el mapeo
function loadProductFromMapping(sku: string): JewelryItem | null {
  const mapping = productMapping[sku as keyof typeof productMapping];
  if (!mapping) {
    console.warn(`No mapping found for SKU: ${sku}`);
    return null;
  }

  const prices = pricesData[sku as keyof typeof pricesData] as PriceData;
  if (!prices) {
    console.warn(`No prices found for SKU: ${sku}`);
    return null;
  }

  // Construir URLs de imágenes usando Supabase Storage
  const images = mapping.images.map((imageName) =>
    buildProductImageUrl(mapping.category, mapping.name, imageName)
  );

  return {
    id: sku.toLowerCase(),
    name: mapping.name,
    description: mapping.description,
    category: mapping.category,
    images,
    mainImage: images[0],
    prices: {
      silverEUR: prices.valor_venta_es,
      goldEUR: prices.valor_venta_bano_oro_es,
      silverCLP: prices.valor_venta_cl,
      goldCLP: prices.valor_venta_bano_oro_cl,
    }
  };
}

// Cargar todos los productos
function loadAllProducts(): JewelryItem[] {
  const skus = Object.keys(productMapping);
  const products: JewelryItem[] = [];
  
  for (const sku of skus) {
    const product = loadProductFromMapping(sku);
    if (product) {
      products.push(product);
    }
  }
  
  return products;
}

// Exportar productos cargados
export const jewelryItems: JewelryItem[] = loadAllProducts();

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
