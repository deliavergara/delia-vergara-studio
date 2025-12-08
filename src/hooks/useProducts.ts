import { useState, useEffect } from 'react';
import { JewelryItem, Category } from '@/types/jewelry';
import { 
  fetchProducts, 
  fetchCategories, 
  fetchProductById, 
  fetchProductsByCategory 
} from '@/services/productService';

/**
 * Hook para obtener todos los productos
 */
export function useProducts() {
  const [products, setProducts] = useState<JewelryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadProducts() {
      try {
        setLoading(true);
        const data = await fetchProducts();
        if (mounted) {
          setProducts(data);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error('Error loading products'));
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      mounted = false;
    };
  }, []);

  return { products, loading, error };
}

/**
 * Hook para obtener las categorías con sus productos
 */
export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadCategories() {
      try {
        setLoading(true);
        const data = await fetchCategories();
        if (mounted) {
          setCategories(data);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error('Error loading categories'));
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadCategories();

    return () => {
      mounted = false;
    };
  }, []);

  return { categories, loading, error };
}

/**
 * Hook para obtener un producto por ID
 */
export function useProduct(productId: string | undefined) {
  const [product, setProduct] = useState<JewelryItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadProduct() {
      if (!productId) {
        setProduct(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await fetchProductById(productId);
        if (mounted) {
          setProduct(data);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error('Error loading product'));
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadProduct();

    return () => {
      mounted = false;
    };
  }, [productId]);

  return { product, loading, error };
}

/**
 * Hook para obtener productos de una categoría
 */
export function useProductsByCategory(categoryId: string | undefined) {
  const [products, setProducts] = useState<JewelryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadProducts() {
      if (!categoryId) {
        setProducts([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await fetchProductsByCategory(categoryId);
        if (mounted) {
          setProducts(data);
          setError(null);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err : new Error('Error loading products'));
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadProducts();

    return () => {
      mounted = false;
    };
  }, [categoryId]);

  return { products, loading, error };
}

