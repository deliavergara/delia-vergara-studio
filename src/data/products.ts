import { JewelryItem, Category } from "@/types/jewelry";
import { buildGitHubRawUrl } from "@/lib/config";
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
    folder: "Anillos/Alcázar",
    images: [
      "Anillo oro blanco 18 k aguamarina.jpg",
      "Anillo oro blanco 18 k aguamarina 2.0.jpg", 
      "Anillo oro blanco 18 k aguamarina 3.0.jpg"
    ],
    category: "anillos",
    name: "Alcázar",
    description: "Diseñado en oro blanco 18K y una espectacular aguamarina. Este anillo puede reproducirse en el material y la piedra que se ajusten a tu presupuesto.\n\nHecho por encargo\nDisponible en plata, plata con baño de oro, oro 18k\nContáctame"
  },
  "ANAANILLOUNICO": {
    folder: "Anillos/Ana",
    images: [
      "1.Anillo oro blanco 18k con tanzanita.jpg",
      "2.Anillo oro blanco 18k con tanzanita 2.0.jpg",
      "ana_3.mov"
    ],
    category: "anillos",
    name: "Ana",
    description: "Pieza única en oro blanco con una Tanzanita. Tallado a mano, por lo que ninguno será igual al anterior.\nSe puede encargar con la piedra y el material que se ajuste a tú presupuesto.\n\nHecho por encargo\nDisponible en plata, plata con baño de oro, oro 18k\nContáctame"
  },
  "BLANCAANILLOUNICO": {
    folder: "Anillos/Blanca", 
    images: [
      "1.Anillo plata pidra azul.jpg",
      "3. Anillo oro piedra verde.jpg"
    ],
    category: "anillos",
    name: "Blanca",
    description: "Anillo con una pequeña curva interna que guía hasta la piedra central. Color a elección.\n\nHecho a mano en plata 925\nDisponible con baño en oro\nContáctame"
  },
  "MAGMAANILLOUNICO": {
    folder: "Anillos/Magma",
    images: [
      "1.Anillo magma.jpg",
      "2.Anillo magma .jpg"
    ],
    category: "anillos",
    name: "Magma",
    description: "Con textura como la de la piedra volcánica, el anillo magma es diferente, atrevido, pero también elegante y delicado.\n\nHecho a mano en plata 925\nDisponible con baño en oro\nContáctame"
  },
  "GRANATEANILLOUNICO": {
    folder: "Anillos/Granate",
    images: [
      "granate_1.jpg",
      "granate_2.jpg",
      "granate_3.jpg"
    ],
    category: "anillos",
    name: "Granate",
    description: "Este anillo lleva un granate de forma rectangular, tallado con pocas facetas para resaltar su profundidad y su tono vino intenso.\nEstá montado en un cuerpo de plata, con un engaste que envuelve toda la piedra y acentúa su forma geométrica.\n\nHecho a mano en plata 925\nDisponible con baño en oro\nContáctame"
  },
  "NUBEANILLOUNICO": {
    folder: "Anillos/Nube",
    images: [
      "nube_1.jpg",
      "nube_2.jpg",
      "nube_3.jpg"
    ],
    category: "anillos",
    name: "Nube",
    description: "Anillo Nube\nModelado a mano, con terminación mate y relieves orgánicos.\nIncluye tres piedras de color a elección.\n\nHecho a mano en plata 925\nDisponible con baño en oro\nContáctame"
  },
  "IRISANILLOUNICO": {
    folder: "Anillos/Iris",
    images: [
      "iris_1.jpg",
      "iris_2.jpg",
      "iris_3.jpg",
      "iris_4.jpg"
    ],
    category: "anillos",
    name: "Iris",
    description: "El anillo Iris parte de una forma fina y sencilla, que se ensancha sutilmente justo antes de abrazar la piedra. Ese cambio de volumen lo vuelve anguloso, elegante y con carácter.\nDisponible con piedra a elección. En la imagen: granate rodolita.\n\nHecho a mano en plata 925\nDisponible con baño en oro\nContáctame"
  },
  
  // Collares
  "FLORCOLLARUNICO": {
    folder: "Collares/Flor",
    images: [
      "1. collar flor plata.jpg",
      "1.collar flor plata.jpg"
    ],
    category: "collares",
    name: "Flor",
    description: "Pequeña flor con un circón en el centro. Diseño mínimo y delicado.\n\nIncluye cadena\nHechos a mano en plata 925\nDisponibles con baño en oro\nContáctame"
  },
  "MEDALLONCOLLARUNICO": {
    folder: "Collares/Medallón",
    images: [
      "1.DSC_0190.jpg"
    ],
    category: "collares",
    name: "Medallón",
    description: "Medallón con textura y una circonita a un costado. Sutil, pero con presencia.\n\nIncluye cadena\nHechos a mano en plata 925\nDisponibles con baño en oro\nContáctame"
  },
  "OVALCOLLARUNICO": {
    folder: "Collares/Ovalo",
    images: [
      "1.DSC_0057 2.jpg"
    ],
    category: "collares",
    name: "Óvalo", 
    description: "Collar con forma oval, con un circón de color en el centro que le aporta elegancia. Perfecto para combinar con los pendientes.\n\nIncluye cadena\nHechos a mano en plata 925\nDisponibles con baño en oro\nContáctame"
  },
  
  // Pendientes
  "PARFRACTALPENDIENTEUNO": {
    folder: "Pendientes/Un fractal",
    images: [
      "1.pendiente un fractal plata.jpg",
      "2.Pendiente un fractal oro.jpg"
    ],
    category: "pendientes",
    name: "Un Fractal",
    description: "Formado por un solo módulo fractal, este pendiente es una pieza delicada, ligera y con un diseño diferente. Ideal para uso diario por su comodidad.\n\nHecho a mano en plata 925\nDisponible con baño en oro\nContáctame"
  },
  "PARFRACTALPENDIENTEDOS": {
    folder: "Pendientes/Dos fractales",
    images: [
      "1.dos fractales plata.jpg",
      "2.pendientes dos fractales oro .jpg",
      "3.Dos fractales oro.jpg"
    ],
    category: "pendientes",
    name: "Dos Fractales",
    description: "Compuestos por dos módulos florales: uno pequeño que se ajusta de forma delicada y otro más grande que le da carácter. Una pieza con equilibrio, elegante, ligera y con movimiento.\n\nHecho a mano en plata 925\nDisponible con baño en oro\nContáctame"
  },
  "PARFRACTALPENDIENTETRES": {
    folder: "Pendientes/Tres fracteles",
    images: [
      "1.tres fractales plata 4.0.jpg",
      "2.tres fractales plata 2.0.jpg",
      "3.tres fractales oro.jpg"
    ],
    category: "pendientes",
    name: "Tres Fractales",
    description: "Compuestos por tres módulos fractales. Forman una pieza de impacto, ligera y con presencia.\n\nHechos a mano en plata 925\nDisponibles con baño en oro\nContáctame"
  },
  "MITSUROROSASPENDIENTEUNICO": {
    folder: "Pendientes/Rosa mitsuro",
    images: [
      "1.pendiente rosita mitsuro plata.jpg",
      "2.pendiente rosita mitsuro oro.jpg",
      "mitsurorosa.mov"
    ],
    category: "pendientes",
    name: "Rosa Mitsuro",
    description: "Modelados con la técnica Mitsuro, que permite que tomen curvas y una forma orgánica que recuerda a una rosa con su tallo.\n\nHecho a mano en plata 925\nDisponible con baño en oro\nContáctame"
  },
  "MITSUROROSITASPENDIENTEUNICO": {
    folder: "Pendientes/Rosita mitsuro",
    images: [
      "Rositas mitsuro plata.jpg"
    ],
    category: "pendientes",
    name: "Rositas Mitsuro",
    description: "Pequeñas rosas modeladas con la técnica mistura. Sutiles, delicadas y con curvas orgánicas que nacen solo del modelado a mano.\n\nHechas a mano en plata 925\nDisponibles con baño en oro\nContáctame"
  },
  "MITSUROARGOLLASPENDIENTEUNICO": {
    folder: "Pendientes/Argollas mitsuro",
    images: [
      "1.pendientes argollas mitsuro plata.jpg",
      "2.pendientes argollas mitsuro plata 2.0.jpg"
    ],
    category: "pendientes",
    name: "Argolla Mitsuro",
    description: "Argollas modeladas a mano con la técnica Mitsuro. De una sola pieza que gira sobre sí misma.\n\nHecho a mano en plata 925\nDisponible con baño en oro\nContáctame"
  },
  "NITIDOPENDIENTEUNICO": {
    folder: "Pendientes/Nítido",
    images: [
      "1.Pendiente Nítido plata.jpg",
      "2.Pendiente Nítido plata 2.0.jpg"
    ],
    category: "pendientes",
    name: "Nítido",
    description: "Sutiles y delicados. Pensados para usarse todos los días.\n\nHecho a mano en plata 925\nDisponible con baño en oro\nContáctame"
  },
  "CAUDALESPENDIENTEUNICO": {
    folder: "Pendientes/Caudales",
    images: [
      "1.Pendinetes caudales plata.jpg",
      "2.Pendinetes caudales plata 2.0.JPG",
      "caudales_3.mov"
    ],
    category: "pendientes",
    name: "Caudal",
    description: "Con textura orgánica y cadenas que caen como caudales. Tienen movimiento y mucho carácter.\n\nHecho a mano en plata 925\nDisponible con baño en oro\nContáctame"
  },
  "OVALPENDIENTEDOS": {
    folder: "Pendientes/Dos ovalos",
    images: [
      "1.Pendientes oval plata verde 2.0.jpg",
      "2. pendientes ovalo perlas plata 3.0.jpg"
    ],
    category: "pendientes",
    name: "Dos Óvalos",
    description: "Coloridos y sentadores. Puedes elegir el color de la piedra o incluso perlas\n\nHecho a mano en plata 925\nDisponible con baño en oro\nContáctame"
  },
  "OVALPENDIENTEUNO": {
    folder: "Pendientes/Un Ovalo",
    images: [
      "unovalo_1.jpg",
      "unovalo_2.jpg",
      "unovalo_3.jpg"
    ],
    category: "pendientes",
    name: "Un Óvalo",
    description: "Sutiles y elegantes. Puedes elegir el color de la piedra o incluso perlas.\n\nHecho a mano en plata 925\nDisponible con baño en oro\nContáctame"
  },

  // Pulseras
  "FRACTALPULSERAUNICO": {
    folder: "Pulsera/Pulsera Fractal plata",
    images: [
      "1. Pulsera fractal plata.jpg",
      "2. pulsera fractal.jpg",
      "3.Pulsera fractal plata.jpg"
    ],
    category: "pulseras",
    name: "Pulsera Fractal",
    description: "Con dos módulos fractales a cada lado, esta pulsera tiene gran carácter y elegancia. Diseñada para hacerse notar, diferente a cualquier otra.\n\nHecha a mano en plata 925\nDisponible con baño en oro\nContáctame"
  },
  "MITSUROPULSERAUNICO": {
    folder: "Pulsera/Pulsera Mitsuro",
    images: [
      "1.Pulsera Mitsuro plata.jpg",
      "2.Pulsera mitsuro plata 2.0.jpg",
      "3.Pulsera mitsuro plata 3.0.jpg"
    ],
    category: "pulseras",
    name: "Pulsera Mitsuro",
    description: "Modelada a mano con la técnica Mitsuro, esta pulsera de casi 200g de plata se forma a partir de sus propias curvas. Es una pieza única.\nSi quieres la tuya será una nueva, pero igual de especial.\n\nHecha a mano en plata 925\nDisponible con baño en oro\nContáctame"
  },
  "FACETADAPULSERAUNICO": {
    folder: "Pulsera/Pulsera Facetada",
    images: [
      "facetada_1.jpg",
      "facetada_2.jpg",
      "facetada_3.jpg",
      "facetada_4.mov"
    ],
    category: "pulseras",
    name: "Pulsera Facetada",
    description: "Diseñada desde cero cada vez. Cada una con sus propias facetas, única e irrepetible.\n\nHecha a mano en plata 925\nDisponible con baño en oro\nContáctame"
  },
  "LYRAPULSERAUNICO": {
    folder: "Pulsera/Pulsera Lyra",
    images: [
      "lyra_1.jpg",
      "lyra_2.jpg",
    ],
    category: "pulseras",
    name: "Pulsera Facetada",
    description: "Diseñada desde cero cada vez. Cada una con sus propias facetas, única e irrepetible.\n\nHecha a mano en plata 925\nDisponible con baño en oro\nContáctame"
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

  // Construir URLs de imágenes
  const encodedFolder = mapping.folder.split('/').map(encodeURIComponent).join('/');
  const images = mapping.images.map((imageName) =>
    buildGitHubRawUrl(`public/lovable-uploads/${encodedFolder}/${encodeURIComponent(imageName)}`)
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