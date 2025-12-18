const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/roofilmz' : '';

export function getAssetPath(path: string): string {
  if (path.startsWith('http') || path.startsWith('//')) return path;
  
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  return `${basePath}/${cleanPath}`;
}

