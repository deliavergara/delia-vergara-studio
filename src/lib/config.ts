// GitHub configuration
export const GITHUB_CONFIG = {
  owner: 'deliavergara',
  repo: 'delia-vergara-studio',
  branch: import.meta.env.VITE_GITHUB_BRANCH || 'main'
};

// Supabase Storage configuration
export const SUPABASE_CONFIG = {
  url: 'https://kkidpownxuyylbkdwlxf.supabase.co',
  bucket: 'delia-vergara-studio'
};

// Helper function to build Supabase Storage URLs
export const buildSupabaseUrl = (path: string): string => {
  return `${SUPABASE_CONFIG.url}/storage/v1/object/public/${SUPABASE_CONFIG.bucket}/${path}`;
};

// Helper function to build asset URLs (now using Supabase Storage)
// Accepts paths that may include "public/" prefix and may be already encoded.
export const buildGitHubRawUrl = (path: string): string => {
  // Normalize by removing any leading "public/"
  const cleaned = path.replace(/^public\//, '');

  // Encode each path segment safely (avoid double-encoding)
  const encoded = cleaned
    .split('/')
    .map((seg) => {
      try {
        // Decode if already encoded, then encode once
        return encodeURIComponent(decodeURIComponent(seg));
      } catch {
        // If decoding fails, encode raw segment
        return encodeURIComponent(seg);
      }
    })
    .join('/');

  // Return Supabase Storage URL instead of relative URL
  return buildSupabaseUrl(encoded);
};