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
      'Anillo oro blanco 18 k aguamarina.jpg',
      'Anillo oro blanco 18 k aguamarina 2.0.jpg',
      'Anillo oro blanco 18 k aguamarina 3.0.jpg'
    ],
    'ana': [
      '1.Anillo oro blanco 18k con tanzanita.jpg',
      '2.Anillo oro blanco 18k con tanzanita 2.0.jpg',
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
      '1. collar flor plata.jpg',
      '1.collar flor plata.jpg'
    ],
    'medallon': [
      '1.DSC_0190.jpg',
      '2.DSC_0486.mov'
    ],
    'ovalo': [
      '1.DSC_0057 2.jpg'
    ]
  },
  'pendientes': {
    'argollas-mitsuro': [
      '1.pendientes argollas mitsuro plata.jpg',
      '2.pendientes argollas mitsuro plata 2.0.jpg'
    ],
    'caudales': [
      '1.Pendinetes caudales plata.jpg',
      '2.Pendinetes caudales plata 2.0.JPG',
      'caudales_3.mov'
    ],
    'cuatro-fractales': [
      'cuatrofractales_1.jpg',
      'cuatrofractales_2.jpg',
      'cuatrofractales_3.mov'
    ],
    'dos-fractales': [
      '1.dos fractales plata.jpg',
      '2.pendientes dos fractales oro .jpg',
      '3.Dos fractales oro.jpg'
    ],
    'dos-ovalos': [
      '1.Pendientes oval plata verde 2.0.jpg',
      '2. pendientes ovalo perlas plata 3.0.jpg'
    ],
    'nitido': [
      '1.Pendiente Nítido plata.jpg',
      '2.Pendiente Nítido plata 2.0.jpg'
    ],
    'rosa-mitsuro': [
      '1.pendiente rosita mitsuro plata.jpg',
      '2.pendiente rosita mitsuro oro.jpg',
      'rosamitsuro_1.mov',
      'rosamitsuro_2.mov'
    ],
    'rosita-mitsuro': [
      'rositas_1.jpg',
      'rositas_2.jpg'
    ],
    'tres-fractales': [
      '1.tres fractales plata 4.0.jpg',
      '2.tres fractales plata 2.0.jpg',
      '3.tres fractales oro.jpg'
    ],
    'un-fractal': [
      'unfractal_1.jpg',
      'unfractal_2.jpg',
      'unfractal_3.jpg',
      'unfractal_4.mov'
    ],
    'un-ovalo': [
      'unovalo_1.jpg',
      'unovalo_2.jpg',
      'unovalo_3.jpg'
    ]
  },
  'pulseras': {
    'pulsera-facetada': [
      'facetada_1.jpg',
      'facetada_2.jpg',
      'facetada_3.jpg',
      'facetada_4.mov'
    ],
    'pulsera-fractal': [
      '1. Pulsera fractal plata.jpg',
      '2. pulsera fractal.jpg',
      '3.Pulsera fractal plata.jpg'
    ],
    'pulsera-lyra': [
      'lyra_1.jpg',
      'lyra_2.jpg'
    ],
    'pulsera-mitsuro': [
      '1.Pulsera Mitsuro plata.jpg',
      '2.Pulsera mitsuro plata 2.0.jpg',
      '3.Pulsera mitsuro plata 3.0.jpg'
    ]
  }
};

// Helper function to build product image URLs
export const buildProductImageUrl = (category: string, productName: string, imageIndex: number): string => {
  // Mapear nombres de categorías para que coincidan con Supabase
  const categoryMapping: Record<string, string> = {
    'anillos': 'Anillos',
    'collares': 'Collares', 
    'pendientes': 'Pendientes',
    'pulseras': 'Pulsera' // En Supabase es 'Pulsera' no 'pulseras'
  };
  
  const mappedCategory = categoryMapping[category] || category;
  
  // Obtener el nombre real del archivo desde el mapeo
  const realFiles = productFileMapping[category]?.[productName];
  if (!realFiles || !realFiles[imageIndex]) {
    console.warn(`No file mapping found for ${category}/${productName} at index ${imageIndex}`);
    return '';
  }
  
  const realFileName = realFiles[imageIndex];
  const url = buildSupabaseUrl(`${mappedCategory}/${productName}/${realFileName}`);
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
  return buildContentUrl('assets', folder, fileName);
};

export const buildMaterialUrl = (folder: string, fileName: string): string => {
  // Si el fileName ya contiene una ruta de carpeta, usarlo directamente
  if (fileName.includes('/')) {
    return buildContentUrl('contenido', 'material-de-apoyo', `${folder}/${fileName}`);
  }
  // Si no, construir la ruta normalmente
  return buildContentUrl('contenido', 'material-de-apoyo', `${folder}/${fileName}`);
};

export const buildCustomJewelryUrl = (fileName: string): string => {
  return buildContentUrl('contenido', 'joyas-a-medida', fileName);
};

export const buildHowToBuyUrl = (fileName: string): string => {
  return buildContentUrl('contenido', 'como-comprar', fileName);
};

export const buildCategoryPortraitUrl = (category: string, fileName: string): string => {
  const categoryMapping: Record<string, string> = {
    'anillos': 'Anillos',
    'collares': 'Collares', 
    'pendientes': 'Pendientes',
    'pulseras': 'Pulsera'
  };
  
  const mappedCategory = categoryMapping[category] || category;
  return buildSupabaseUrl(`${mappedCategory}/${fileName}`);
};
