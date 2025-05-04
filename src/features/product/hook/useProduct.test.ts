import { renderHook, act } from '@testing-library/react';
import { useProducts } from './useProduct';
import { ApiInstance } from '@/lib/axios';
import { initialSearchParams } from '@/features/product/const/filter';

// Mock the axios instance
jest.mock('@/lib/axios', () => ({
  ApiInstance: {
    get: jest.fn(),
  },
}));

describe('useProducts', () => {
  const mockProducts = [
    {
      id: 1,
      title: 'Test Product',
      category: 'Upper Body',
      price: 100,
      isFavorite: false,
      theme: 'Fantasy',
      createdAt: Date.now(),
      tier: 'Legendary',
      imageId: 1,
      author: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        gender: 'male',
        avatar: 'avatar.jpg',
        onlineStatus: 'online',
      },
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    (ApiInstance.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: mockProducts })
    );
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useProducts());
    expect(result.current.products).toEqual([]);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.isFirstLoad).toBe(true);
  });

  it('should fetch products on initial render', async () => {
    const { result } = renderHook(() => useProducts());

    await act(async () => {
      await Promise.resolve();
    });

    const expectedParams = {
      ...initialSearchParams,
      theme: null,
      tier: null,
    };

    expect(ApiInstance.get).toHaveBeenCalledWith('/product', expectedParams, undefined);
    expect(result.current.products[0].id).toEqual(mockProducts[0].id);
  });

  it('should handle search with new parameters', async () => {
    const { result } = renderHook(() => useProducts());

    await act(async () => {
      await Promise.resolve();
    });

    const searchParams = {
      title: 'test',
      category: 'Upper Body',
    };

    await act(async () => {
      result.current.onSearch(searchParams);
      await Promise.resolve();
    });

    const expectedParams = {
      ...initialSearchParams,
      ...searchParams,
      theme: null,
      tier: null,
    };

    expect(ApiInstance.get).toHaveBeenCalledWith('/product', expectedParams, undefined);
  });

  it('should handle load more functionality', async () => {
    const { result } = renderHook(() => useProducts());

    await act(async () => {
      await Promise.resolve();
    });

    await act(async () => {
      result.current.onLoadMore();
      await Promise.resolve();
    });

    const expectedParams = {
      ...initialSearchParams,
      page: 2,
      theme: null,
      tier: null,
    };

    expect(ApiInstance.get).toHaveBeenCalledWith('/product', expectedParams, undefined);
  });

  it('should handle API errors gracefully', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    (ApiInstance.get as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error('API Error'))
    );

    const { result } = renderHook(() => useProducts());

    await act(async () => {
      await Promise.resolve();
    });

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(result.current.products).toEqual([]);

    consoleErrorSpy.mockRestore();
  });

  it('should auto-refresh products every 60 seconds', async () => {
    const { result } = renderHook(() => useProducts());

    await act(async () => {
      await Promise.resolve();
    });

    await act(async () => {
      jest.advanceTimersByTime(60000);
      await Promise.resolve();
    });

    const expectedParams = {
      ...initialSearchParams,
      page: 1,
      limit: initialSearchParams.page * initialSearchParams.limit,
      theme: null,
      tier: null,
    };

    expect(ApiInstance.get).toHaveBeenCalledWith('/product', expectedParams, undefined);
  });

  it('should clean up interval on unmount', () => {
    const { unmount } = renderHook(() => useProducts());
    unmount();
    expect(jest.getTimerCount()).toBe(0);
  });
}); 