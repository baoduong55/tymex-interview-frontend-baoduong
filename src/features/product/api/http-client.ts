import { ApiInstance } from "@/lib/axios";
import { TSearchProductParams } from "../type/filter";
import { TProduct } from "../type/product";

export const api = {
  fetchProducts: async (params?: TSearchProductParams, signal?: AbortSignal) => {
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
  }
}