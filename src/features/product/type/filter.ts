import { TProduct } from "@/features/product/type/product";

export type TFilter = {
  minPrice: number;
  maxPrice: number;
  priceSort: 'asc' | 'desc';
  tier: TProduct['tier'] | null;
  theme: TProduct['theme'] | null;
  timeSort: 'asc' | 'desc';
}

export type TSearchProductParams = {
  page: number
  limit: number
  category?: TProduct['category']
  title?: string
} & TFilter