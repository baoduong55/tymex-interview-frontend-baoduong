import { type NextRequest } from 'next/server';
import { filterProducts, sortProducts } from './helper';
import { parseQueryParam } from './helper';
import { TProduct } from '@/features/product/type/product';
import { LIMIT } from '@/features/product/const/filter';
import allProducts from '@/features/product/const/data.json';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const filterQuery = {
    title: parseQueryParam(params.get('title'), ''),
    minPrice: parseQueryParam(params.get('minPrice'), 0, 'number'),
    maxPrice: parseQueryParam(params.get('maxPrice'), 0, 'number'),
    tier: parseQueryParam(params.get('tier'), '').toLowerCase(),
    theme: parseQueryParam(params.get('theme'), '').toLowerCase(),
    category: parseQueryParam(params.get('category'), ''),
  }
  const paginationQuery = {
    limit: parseQueryParam(params.get('limit'), LIMIT, 'number'),
    page: parseQueryParam(params.get('page'), 1, 'number'),
  }
  const sortQuery = {
    time: parseQueryParam(params.get('timeSort'), ''),
    priceSort: parseQueryParam(params.get('priceSort'), ''),
  };
  const filtered = filterProducts(allProducts as TProduct[], filterQuery);
  const sorted = sortProducts(filtered, sortQuery.time, sortQuery.priceSort);
  const paginated = sorted.slice((paginationQuery.page - 1) * paginationQuery.limit, paginationQuery.page * paginationQuery.limit);

  return new Response(
    JSON.stringify({
      total: filtered.length,
      data: paginated,
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}
