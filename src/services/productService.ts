import { supabase } from "@/integrations/supabase/client";
import { SUPABASE_CONFIG, buildSupabaseUrl } from "@/lib/supabase-config";
import { JewelryItem, Category } from "@/types/jewelry";

// Tipo para el producto de la base de datos
interface DBProduct {
  id: string;
  sku: string;
  nombre: string;
  categoria: string | null;
  descripcion: string | null;
  porte: string | null;
  precio_venta_es: number | null;
  precio_venta_con_bano_oro_es: number | null;
  storage_path_folder: string | null;
}

// Cache para evitar múltiples llamadas
let productsCache: JewelryItem[] | null = null;
let categoriesCache: Category[] | null = null;

// Mapeo de categorías DB -> Frontend
const categoryMapping: Record<string, string> = {
  'ANILLO': 'anillos',
  'COLLAR': 'collares',
  'PENDIENTE': 'pendientes',
  'PULSERA': 'pulseras'
};

// Mapeo inverso para nombres de categorías
const categoryNames: Record<string, string> = {
  'anillos': 'Anillos',
  'collares': 'Collares',
  'pendientes': 'Pendientes',
  'pulseras': 'Pulseras'
};

/**
 * Lista los archivos de una carpeta en el storage de Supabase
 */
async function listStorageFiles(folderPath: string): Promise<string[]> {
  const { data, error } = await supabase.storage
    .from(SUPABASE_CONFIG.bucket)
    .list(folderPath, {
      sortBy: { column: 'name', order: 'asc' }
    });

  if (error) {
    console.error(`Error listing files in ${folderPath}:`, error);
    return [];
  }

  if (!data || data.length === 0) {
    return [];
  }

  // Filtrar solo archivos (no carpetas) y construir URLs completas
  return data
    .filter(file => file.name && !file.name.startsWith('.'))
    .map(file => buildSupabaseUrl(`${folderPath}/${file.name}`));
}

/**
 * Obtiene los precios de Chile desde la vista de precios
 */
async function getPreciosCL(): Promise<Map<string, { precio_cl: number; precio_cl_con_bano_oro: number }>> {
  const { data, error } = await supabase
    .from('precios_y_costos_finales')
    .select('sku, precio_cl, precio_cl_con_bano_oro');

  if (error) {
    console.error('Error fetching precios CL:', error);
    return new Map();
  }

  const preciosMap = new Map();
  data?.forEach(item => {
    if (item.sku) {
      preciosMap.set(item.sku, {
        precio_cl: item.precio_cl || 0,
        precio_cl_con_bano_oro: item.precio_cl_con_bano_oro || 0
      });
    }
  });

  return preciosMap;
}

/**
 * Convierte un producto de la DB a JewelryItem
 */
async function dbProductToJewelryItem(
  product: DBProduct,
  preciosCL: Map<string, { precio_cl: number; precio_cl_con_bano_oro: number }>
): Promise<JewelryItem | null> {
  if (!product.storage_path_folder || !product.categoria) {
    console.warn(`Product ${product.sku} missing storage_path_folder or categoria`);
    return null;
  }

  // Listar archivos del storage
  const images = await listStorageFiles(product.storage_path_folder);
  
  if (images.length === 0) {
    console.warn(`No images found for product ${product.sku} in ${product.storage_path_folder}`);
    return null;
  }

  // Obtener precios de Chile
  const preciosCLData = preciosCL.get(product.sku) || { precio_cl: 0, precio_cl_con_bano_oro: 0 };

  // Mapear categoría
  const frontendCategory = categoryMapping[product.categoria] || product.categoria.toLowerCase();

  return {
    id: product.sku.toLowerCase(),
    name: product.nombre.toLowerCase().replace(/ /g, '_'),
    description: product.descripcion || '',
    category: frontendCategory,
    images,
    mainImage: images[0],
    prices: {
      silverEUR: product.precio_venta_es || 0,
      goldEUR: product.precio_venta_con_bano_oro_es || 0,
      silverCLP: preciosCLData.precio_cl,
      goldCLP: preciosCLData.precio_cl_con_bano_oro
    }
  };
}

/**
 * Obtiene todos los productos desde Supabase
 */
export async function fetchProducts(): Promise<JewelryItem[]> {
  // Retornar cache si existe
  if (productsCache) {
    return productsCache;
  }

  const { data: products, error } = await supabase
    .from('productos')
    .select('id, sku, nombre, categoria, descripcion, porte, precio_venta_es, precio_venta_con_bano_oro_es, storage_path_folder')
    .order('categoria')
    .order('nombre');

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  if (!products || products.length === 0) {
    return [];
  }

  // Obtener precios de Chile
  const preciosCL = await getPreciosCL();

  // Convertir todos los productos
  const jewelryItems: JewelryItem[] = [];
  
  for (const product of products) {
    const item = await dbProductToJewelryItem(product as DBProduct, preciosCL);
    if (item) {
      jewelryItems.push(item);
    }
  }

  // Guardar en cache
  productsCache = jewelryItems;

  return jewelryItems;
}

/**
 * Obtiene las categorías con sus productos
 */
export async function fetchCategories(): Promise<Category[]> {
  // Retornar cache si existe
  if (categoriesCache) {
    return categoriesCache;
  }

  const products = await fetchProducts();

  const categoriesOrder = ['anillos', 'collares', 'pendientes', 'pulseras'];
  
  const categories: Category[] = categoriesOrder.map(categoryId => ({
    id: categoryId,
    name: categoryNames[categoryId] || categoryId,
    items: products.filter(item => item.category === categoryId)
  }));

  // Guardar en cache
  categoriesCache = categories;

  return categories;
}

/**
 * Obtiene un producto por su ID
 */
export async function fetchProductById(productId: string): Promise<JewelryItem | null> {
  const products = await fetchProducts();
  return products.find(p => p.id === productId) || null;
}

/**
 * Obtiene productos por categoría
 */
export async function fetchProductsByCategory(categoryId: string): Promise<JewelryItem[]> {
  const products = await fetchProducts();
  return products.filter(p => p.category === categoryId);
}

/**
 * Limpia el cache (útil para forzar recarga)
 */
export function clearProductsCache(): void {
  productsCache = null;
  categoriesCache = null;
}

