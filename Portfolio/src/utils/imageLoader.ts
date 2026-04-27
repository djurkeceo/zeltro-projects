export function getOptimizedUrl(src: string, width: number, quality = 75): string {
  if (src.includes('unsplash.com')) {
    const url = new URL(src);
    url.searchParams.set('w', width.toString());
    url.searchParams.set('q', quality.toString());
    url.searchParams.set('fm', 'webp');
    url.searchParams.set('auto', 'format');
    return url.toString();
  }
  return src;
}
