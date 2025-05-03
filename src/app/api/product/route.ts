import { type NextRequest } from 'next/server';
import allProducts from './data.json';
import { LIMIT } from '@/app/api/product/const';
import { filterProducts, sortProducts } from './helper';
import { parseQueryParam } from './helper';


export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const paginationQuery = {
    limit: parseQueryParam(params.get('limit'), LIMIT, 'number'),
    offset: parseQueryParam(params.get('offset'), 0, 'number'),
  }
  const sortQuery = {
    tier: parseQueryParam(params.get('tier'), '').toLowerCase(),
    category: parseQueryParam(params.get('category'), ''),
    theme: parseQueryParam(params.get('theme'), '').toLowerCase(),
    time: parseQueryParam(params.get('time'), ''),
    priceOrder: parseQueryParam(params.get('priceOrder'), ''),
  };
  const filterQuery = {
    text: parseQueryParam(params.get('text'), ''),
    minPrice: parseQueryParam(params.get('minPrice'), 0, 'number'),
    maxPrice: parseQueryParam(params.get('maxPrice'), 0, 'number'),
  }
  const filtered = filterProducts(allProducts, filterQuery);
  const sorted = sortProducts(filtered, sortQuery.time, sortQuery.priceOrder);
  const paginated = sorted.slice(paginationQuery.offset, paginationQuery.offset + paginationQuery.limit);

  return new Response(
    JSON.stringify({
      total: filtered.length,
      data: paginated,
    }),
    { headers: { 'Content-Type': 'application/json' } }
  );
}
