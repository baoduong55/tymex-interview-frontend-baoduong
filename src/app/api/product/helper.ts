/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from '@/app/api/product/type';

export const parseQueryParam = (param: string | null, fallback: any, type: 'number' | 'string' = 'string') => {
  if (type === 'number') return param !== null ? Number(param) : fallback;
  return param ?? fallback;
};

export const filterProducts = (
  products: TProduct[],
  { text, tier, category, theme, minPrice, maxPrice }: any
) => {
  return products.filter((p) =>
    p.title.toLowerCase().includes(text.toLowerCase()) &&
    (!tier || p.tier.toLowerCase() === tier) &&
    (!category || p.category === category) &&
    (!theme || p.theme.toLowerCase() === theme) &&
    p.price >= minPrice &&
    (!maxPrice || p.price <= maxPrice)
  );
};

export const sortProducts = (products: TProduct[], time?: string, priceOrder?: string) => {
  if (time) {
    products.sort((a, b) =>
      time === 'oldest' ? a.createdAt - b.createdAt : b.createdAt - a.createdAt
    );
  }

  if (priceOrder) {
    products.sort((a, b) =>
      priceOrder === 'low-to-high' ? a.price - b.price : b.price - a.price
    );
  }

  return products;
};