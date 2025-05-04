'use client'
import { TSearchProductParams } from '@/features/product/type/filter';
import { TProduct } from '@/features/product/type/product';
import { ApiInstance } from '@/lib/axios';
import { useState, useEffect } from 'react';
import { initialSearchParams } from '@/features/product/const/filter';
export const fetcher = async (params?: TSearchProductParams, signal?: AbortSignal) => {
  // Convert 'all' values to null in params
  if (params) {
    const cleanedParams = { ...params };
    for (const key in cleanedParams) {
      if (cleanedParams[key] === 'all') {
        cleanedParams[key] = null;
      }
    }
    params = cleanedParams;
  }
  return ApiInstance.get<{ data: TProduct[] }>('/product', params, signal);
};

export function useProducts() {
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [searchParams, setSearchParams] = useState<TSearchProductParams>(initialSearchParams)
  const [products, setProducts] = useState<TProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function onLoadMore() {
    setSearchParams({
      ...searchParams,
      page: searchParams.page + 1
    })
    const newParams = {
      ...searchParams,
      page: searchParams.page + 1
    }
    fetchProducts(newParams)
  }

  async function fetchProducts(params: TSearchProductParams = searchParams, noLoading = false) {
    try {
      if (!noLoading) {
        setIsLoading(true)
      }
      const res = await fetcher(params)
      if (params.page === 1) {
        setProducts(res.data)
      } else {
        setProducts([...products, ...res.data])
      }
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
    setIsFirstLoad(false)
  }
  function onSearch(params: Partial<TSearchProductParams>) {
    const newParams = {
      ...searchParams,
      ...params,
    }
    setSearchParams(newParams)
    fetchProducts(newParams)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // System auto fetch products every 60 seconds (no loading indicator)
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchProducts({
        ...searchParams,
        page: 1,
        limit: searchParams.page * searchParams.limit,
      }, true);
    }, 60000); // 60 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [searchParams]);

  return {
    products,
    isLoading,
    onSearch,
    onLoadMore,
    isFirstLoad
  }
}