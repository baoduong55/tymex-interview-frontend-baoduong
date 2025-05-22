'use client'
import { TSearchProductParams } from '@/features/product/type/filter';
import { TProduct } from '@/features/product/type/product';
import { useState, useEffect, useCallback } from 'react';
import { initialSearchParams } from '@/features/product/const/filter';
import { api } from '../api/http-client';


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
  const fetchProducts = useCallback(async (params: TSearchProductParams = searchParams, noLoading = false) => {
    try {
      if (!noLoading) {
        setIsLoading(true)
      }
      const res = await api.fetchProducts(params)
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
  }, [searchParams, products])

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