/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiInstance } from '@/lib/axios';
import { TProduct } from '@/app/api/product/type';
import { useState, useEffect } from 'react';

export const fetcher = async (params?: Record<string, any>, signal?: AbortSignal) => {
  return ApiInstance.get<{ data: TProduct[] }>('/product', params, signal);
};

export function useProducts() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchProducts = async ({ page = 1, limit = 12 }: { page?: number, limit?: number }) => {
    try {
      setIsLoading(true)
      const res = await fetcher({ page, limit })
      setProducts([...products, ...res.data])
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchProducts({ page: 1, limit: 12 })
  }, [])

  return {
    products,
    isLoading,
    fetchProducts
  }
}