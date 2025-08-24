// Supabase Storage configuration
export const SUPABASE_CONFIG = {
  url: 'https://kkidpownxuyylbkdwlxf.supabase.co',
  bucket: 'delia-vergara-studio'
};

// Función unificada para construir URLs de Supabase Storage
export const buildSupabaseUrl = (path: string): string => {
  const url = `${SUPABASE_CONFIG.url}/storage/v1/object/public/${SUPABASE_CONFIG.bucket}/${path}`;
  console.log('Generated Supabase URL:', url);
  return url;
};

// Función simple para productos - usa directamente los nombres de archivos de products.ts
export const buildProductImageUrl = (category: string, productName: string, fileName: string): string => {
  const categoryMapping: Record<string, string> = {
    'pulseras': 'pulsera' // Solo este necesita mapeo
  };
  
  const mappedCategory = categoryMapping[category] || category;
  return buildSupabaseUrl(`productos/${mappedCategory}/${productName}/${fileName}`);
};

// Función simple para material de apoyo
export const buildMaterialUrl = (folder: string, fileName: string): string => {
  return buildSupabaseUrl(`productos/material-de-apoyo/${folder}/${fileName}`);
};

// Función simple para contenido
export const buildContentUrl = (section: string, fileName: string): string => {
  return buildSupabaseUrl(`productos/contenido/${section}/${fileName}`);
};
