// GitHub configuration
export const GITHUB_CONFIG = {
  owner: 'deliavergara',
  repo: 'delia-vergara-studio',
  branch: import.meta.env.VITE_GITHUB_BRANCH || 'main'
};

// Helper function to build asset URLs (now relative to the app)
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

  // Return as relative URL from the public root
  return `/${encoded}`;
};