/**
 * Este archivo ahora es un wrapper para el servicio de productos.
 * Los productos se cargan dinámicamente desde Supabase.
 * 
 * Para usar productos en componentes React, usa los hooks:
 * - useProducts() - todos los productos
 * - useCategories() - categorías con productos
 * - useProduct(id) - un producto específico
 * - useProductsByCategory(categoryId) - productos de una categoría
 */

export { 
  fetchProducts as getProducts,
  fetchCategories as getCategories,
  fetchProductById as getProductById,
  fetchProductsByCategory as getProductsByCategory,
  clearProductsCache
} from '@/services/productService';

// Re-exportar tipos
export type { JewelryItem, Category } from '@/types/jewelry';
