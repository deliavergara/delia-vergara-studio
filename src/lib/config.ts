// Supabase Storage configuration
export const SUPABASE_CONFIG = {
  url: 'https://kkidpownxuyylbkdwlxf.supabase.co',
  bucket: 'delia-vergara-studio'
};

// Helper function to build Supabase Storage URLs
export const buildSupabaseUrl = (path: string): string => {
  return `${SUPABASE_CONFIG.url}/storage/v1/object/public/${SUPABASE_CONFIG.bucket}/${path}`;
};