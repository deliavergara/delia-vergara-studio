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

// Helper function to build product image URLs
export const buildProductImageUrl = (category: string, productName: string, imageName: string): string => {
  // Mapear nombres de categorías para que coincidan con Supabase
  const categoryMapping: Record<string, string> = {
    'anillos': 'anillos',
    'collares': 'collares', 
    'pendientes': 'pendientes',
    'pulseras': 'pulsera' // En Supabase es 'pulsera' no 'pulseras'
  };
  
  const mappedCategory = categoryMapping[category] || category;
  const url = buildSupabaseUrl(`productos/${mappedCategory}/${productName}/${imageName}`);
  console.log('Product image URL:', { category, mappedCategory, productName, imageName, url });
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
    'anillos': 'anillos',
    'collares': 'collares', 
    'pendientes': 'pendientes',
    'pulseras': 'pulsera'
  };
  
  const mappedCategory = categoryMapping[category] || category;
  return buildContentUrl('productos', mappedCategory, fileName);
};
