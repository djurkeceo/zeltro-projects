/**
 * Optimizes Unsplash URLs by appending transformations for width, quality, and format.
 */
export const getUnsplashUrl = (baseUrl: string, width: number = 800, quality: number = 80): string => {
  // Strip existing query params if any
  const cleanUrl = baseUrl.split('?')[0];
  return `${cleanUrl}?w=${width}&q=${quality}&fm=webp&auto=format&fit=crop`;
};
