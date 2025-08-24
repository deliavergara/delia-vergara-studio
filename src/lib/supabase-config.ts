// Supabase Storage configuration
export const SUPABASE_CONFIG = {
  url: 'https://kkidpownxuyylbkdwlxf.supabase.co',
  bucket: 'delia-vergara-studio'
};

// Helper function to build Supabase Storage URLs
export const buildSupabaseUrl = (path: string): string => {
  const url = `${SUPABASE_CONFIG.url}/storage/v1/object/public/${SUPABASE_CONFIG.bucket}/${path}`;
  console.log('Generated Supabase URL:', url);
  return url;
};

// Mapeo de nombres de productos a nombres reales de archivos en Supabase
const productFileMapping: Record<string, Record<string, string[]>> = {
  'anillos': {
    'alcazar': [
      'alcazar_1.jpg',
      'alcazar_2.jpg',
      'alcazar_3.jpg'
    ],
    'ana': [
      'ana_1.jpg',
      'ana_2.jpg',
      'ana_3.mov'
    ],
    'blanca': [
      'blanca_1.jpg',
      'blanca_2.jpg',
      'blanca_3.jpg',
      'blanca_4.jpg'
    ],
    'magma': [
      'magma_1.jpg',
      'magma_2.jpg',
      'magma_3.jpg'
    ],
    'granate': [
      'granate_1.jpg',
      'granate_2.jpg',
      'granate_3.jpg'
    ],
    'nube': [
      'nube_1.jpg',
      'nube_2.jpg',
      'nube_3.jpg'
    ],
    'iris': [
      'iris_1.jpg',
      'iris_2.jpg',
      'iris_3.jpg',
      'iris_4.jpg'
    ]
  },
  'collares': {
    'flor': [
      'flor_1.jpg',
      'flor_2.jpg'
    ],
    'medallon': [
      'medallon_1.jpg',
      'medallon_2.mov'
    ],
    'ovalo': [
      'ovalo_1.jpg'
    ]
  },
  'pendientes': {
    'argollas-mitsuro': [
      'argollas-mitsuro_1.jpg',
      'argollas-mitsuro_2.jpg'
    ],
    'caudales': [
      'caudales_1.jpg',
      'caudales_2.jpg',
      'caudales_3.mov'
    ],
    'cuatro-fractales': [
      'cuatro-fractales_1.jpg',
      'cuatro-fractales_2.jpg',
      'cuatro-fractales_3.mov'
    ],
    'dos-fractales': [
      'dos-fractales_1.jpg',
      'dos-fractales_2.jpg',
      'dos-fractales_3.jpg'
    ],
    'dos-ovalos': [
      'dos-ovalos_1.jpg',
      'dos-ovalos_2.jpg'
    ],
    'nitido': [
      'nitido_1.jpg',
      'nitido_2.jpg'
    ],
    'rosa-mitsuro': [
      'rosa-mitsuro_1.jpg',
      'rosa-mitsuro_2.jpg',
      'rosa-mitsuro_3.mov',
      'rosa-mitsuro_4.mov'
    ],
    'rosita-mitsuro': [
      'rosita-mitsuro_1.jpg',
      'rosita-mitsuro_2.jpg'
    ],
    'tres-fractales': [
      'tres-fractales_1.jpg',
      'tres-fractales_2.jpg',
      'tres-fractales_3.jpg'
    ],
    'un-fractal': [
      'un-fractal_1.jpg',
      'un-fractal_2.jpg',
      'un-fractal_3.jpg',
      'un-fractal_4.mov'
    ],
    'un-ovalo': [
      'un-ovalo_1.jpg',
      'un-ovalo_2.jpg',
      'un-ovalo_3.jpg'
    ]
  },
  'pulseras': {
    'pulsera-facetada': [
      'pulsera-facetada_1.jpg',
      'pulsera-facetada_2.jpg',
      'pulsera-facetada_3.jpg',
      'pulsera-facetada_4.mov'
    ],
    'pulsera-fractal': [
      'pulsera-fractal_1.jpg',
      'pulsera-fractal_2.jpg',
      'pulsera-fractal_3.jpg'
    ],
    'pulsera-lyra': [
      'pulsera-lyra_1.jpg',
      'pulsera-lyra_2.jpg'
    ],
    'pulsera-mitsuro': [
      'pulsera-mitsuro_1.jpg',
      'pulsera-mitsuro_2.jpg',
      'pulsera-mitsuro_3.jpg'
    ]
  }
};

// Helper function to build product image URLs
export const buildProductImageUrl = (category: string, productName: string, imageIndex: number): string => {
  // Mapear nombres de categorías para que coincidan con Supabase
  const categoryMapping: Record<string, string> = {
    'anillos': 'anillos',
    'collares': 'collares', 
    'pendientes': 'pendientes',
    'pulseras': 'pulsera' // En Supabase es 'pulsera' no 'pulseras'
  };
  
  const mappedCategory = categoryMapping[category] || category;
  
  // Obtener el nombre real del archivo desde el mapeo
  const realFiles = productFileMapping[category]?.[productName];
  if (!realFiles || !realFiles[imageIndex]) {
    console.warn(`No file mapping found for ${category}/${productName} at index ${imageIndex}`);
    return '';
  }
  
  const realFileName = realFiles[imageIndex];
  const url = buildSupabaseUrl(`productos/${mappedCategory}/${productName}/${realFileName}`);
  console.log('Product image URL:', { category, mappedCategory, productName, imageIndex, realFileName, url });
  return url;
};

// Generic function to build URLs for any content in Supabase
export const buildContentUrl = (section: string, subfolder?: string, fileName?: string): string => {
  let path = section;
  if (subfolder) path += `/${subfolder}`;
  if (fileName) path += `/${fileName}`;
  return buildSupabaseUrl(path);
};

// Specific helper functions using the generic buildContentUrl
export const buildAssetUrl = (folder: string, fileName: string): string => {
  return buildContentUrl('productos/assets', folder, fileName);
};

export const buildMaterialUrl = (folder: string, fileName: string): string => {
  // Mapeo de nombres de archivos específicos
  const fileMapping: Record<string, string> = {
    'ICONO WHATSAP.png': 'iconos_2.png',
    'ICONO INSTAGRAM.png': 'iconos_1.png',
    'isologo.png': 'logo_2.png',
    'logo gcasi blanco_Mesa de trabajo 1.png': 'logo_4.png',
    'DSC_0124.jpg': 'foto_portada_3.png',
    'DSC_0326.mov': 'videos_1.mov'
  };
  
  // Mapeo de nombres de carpetas para corregir mayúsculas/minúsculas
  const folderMapping: Record<string, string> = {
    'Iconos': 'iconos',
    'Logo': 'logo',
    'Foto portada': 'foto-portada',
    'Videos': 'videos'
  };
  
  const realFileName = fileMapping[fileName] || fileName;
  const realFolder = folderMapping[folder] || folder;
  return buildSupabaseUrl(`productos/material-de-apoyo/${realFolder}/${realFileName}`);
};

export const buildCustomJewelryUrl = (fileName: string): string => {
  return buildSupabaseUrl(`productos/contenido/joyas-a-medida/${fileName}`);
};

export const buildHowToBuyUrl = (fileName: string): string => {
  return buildSupabaseUrl(`productos/contenido/como-comprar/${fileName}`);
};

export const buildCategoryPortraitUrl = (category: string, fileName: string): string => {
  const categoryMapping: Record<string, string> = {
    'anillos': 'anillos',
    'collares': 'collares', 
    'pendientes': 'pendientes',
    'pulseras': 'pulsera'
  };
  
  // Mapeo de nombres de archivos de portada
  const portraitMapping: Record<string, string> = {
    'portada anillo categoria 3.jpg': 'anillo-portada.jpg',
    'portada collar categoria .jpg': 'portada_collares_3.jpg',
    'portada pendientes categoria.jpg': 'portada_pendientes_4.jpg',
    '1. pulsera portada.jpg': 'portada-pulsera_1.jpg'
  };
  
  const mappedCategory = categoryMapping[category] || category;
  const realFileName = portraitMapping[fileName] || fileName;
  return buildSupabaseUrl(`productos/${mappedCategory}/${realFileName}`);
};
