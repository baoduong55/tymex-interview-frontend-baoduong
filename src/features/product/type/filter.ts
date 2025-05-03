import { TProduct } from "@/features/product/type/product";

export type TFilter = {
  minPrice: number;
  maxPrice: number;
  priceSort: 'asc' | 'desc';
  tier: TProduct['tier'] | 'all';
  theme: TProduct['theme'] | 'all';
  timeSort: 'asc' | 'desc';
}

export type TSearchProductParams = {
  page: number
  limit: number
  category?: TProduct['category'] | "all"
  title?: string
} & TFilter