// Supabase Storage configuration
export const SUPABASE_CONFIG = {
  url: 'https://kkidpownxuyylbkdwlxf.supabase.co',
  bucket: 'delia-vergara-studio'
};

// Helper function to build Supabase Storage URLs
export const buildSupabaseUrl = (path: string): string => {
  return `${SUPABASE_CONFIG.url}/storage/v1/object/public/${SUPABASE_CONFIG.bucket}/${path}`;
};

// Helper function to build product image URLs
export const buildProductImageUrl = (category: string, productName: string, imageName: string): string => {
  return buildSupabaseUrl(`productos/${category}/${productName}/${imageName}`);
};

// Helper function to build asset URLs
export const buildAssetUrl = (folder: string, fileName: string): string => {
  return buildSupabaseUrl(`assets/${folder}/${fileName}`);
};

// Helper function to build content URLs
export const buildContentUrl = (section: string, folder: string, fileName: string): string => {
  return buildSupabaseUrl(`contenido/${section}/${folder}/${fileName}`);
};
