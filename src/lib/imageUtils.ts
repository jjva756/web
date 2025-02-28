
/**
 * Utilidades para el manejo de imágenes
 */

/**
 * Verifica si una URL de imagen es válida intentando cargarla
 * @param url URL de la imagen a verificar
 * @returns Promesa que resuelve a true si la imagen es válida, false en caso contrario
 */
export function checkImageUrl(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (!url) {
      console.error('URL de imagen vacía');
      resolve(false);
      return;
    }

    const img = new Image();
    img.onload = () => {
      console.log(`Imagen verificada correctamente: ${url}`);
      resolve(true);
    };
    img.onerror = () => {
      console.error(`Error verificando imagen: ${url}`);
      resolve(false);
    };
    img.src = url;
  });
}

/**
 * Construye una URL completa para una imagen basada en el nombre de archivo
 * @param filename Nombre del archivo de imagen
 * @returns URL completa
 */
export function buildImageUrl(filename: string): string {
  // Si la URL ya es absoluta o comienza con /, devolverla tal cual
  if (filename.startsWith('http') || filename.startsWith('/')) {
    return filename;
  }
  
  // Caso contrario, construir URL relativa al servidor
  return `/images/${filename}`;
}

/**
 * Corrige URLs de Wikipedia para hacerlas compatibles con CORS
 * @param url URL de la imagen
 * @returns URL corregida
 */
export function fixWikipediaImageUrl(url: string): string {
  if (!url) return '';
  
  // Reemplaza wikipedia.org por wikimedia.org para evitar problemas de CORS
  if (url.includes('wikipedia.org')) {
    return url.replace('wikipedia.org', 'wikimedia.org');
  }
  
  // Si la URL contiene commons.wikimedia.org, asegúrate de que sea HTTPS
  if (url.includes('commons.wikimedia.org') && url.startsWith('http:')) {
    return url.replace('http:', 'https:');
  }
  
  return url;
}
