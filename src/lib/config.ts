// GitHub configuration
export const GITHUB_CONFIG = {
  owner: 'deliavergara',
  repo: 'delia-vergara-studio',
  branch: import.meta.env.VITE_GITHUB_BRANCH || 'main'
};

// Helper function to build GitHub raw URLs
export const buildGitHubRawUrl = (path: string): string => {
  return `https://github.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/raw/${GITHUB_CONFIG.branch}/${path}`;
};