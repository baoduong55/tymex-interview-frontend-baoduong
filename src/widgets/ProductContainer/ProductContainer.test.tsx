import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProductContainer from './ProductContainer'
import { useProducts } from '@/features/product/hook/useProduct'

// Mock dependencies
jest.mock('@/features/product/hook/useProduct')
jest.mock('@/features/product/component/HeroBanner/HeroBanner', () => ({
  __esModule: true,
  default: () => <div data-testid="hero-banner">Hero Banner</div>,
}))
jest.mock('@/features/product/component/CategoryFilter/CategoryFilter', () => ({
  __esModule: true,
  default: () => <div data-testid="category-filter">Category Filter</div>,
}))
jest.mock('@/features/product/component/FilterGroup/FilterGroup', () => ({
  __esModule: true,
  default: () => <div data-testid="filter-group">Filter Group</div>,
}))
jest.mock('@/features/product/component/ModalFilter/ModalFilter', () => ({
  __esModule: true,
  default: ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
    <div data-testid="modal-filter" style={{ display: isOpen ? 'block' : 'none' }}>
      Modal Filter
      <button onClick={onClose}>Close</button>
    </div>
  ),
}))

// Mock product data for testing
const mockProducts = [
  {
    id: 1,
    title: 'Test NFT 1',
    price: '1.5',
    tier: 'Legendary',
    imageId: 1,
    isFavorite: false,
    category: 'art',
    theme: 'fantasy',
    createdAt: '2024-03-20',
    author: {
      firstName: 'John',
      lastName: 'Doe',
      avatar: '/test-avatar.jpg',
      onlineStatus: 'online'
    }
  },
  {
    id: 2,
    title: 'Test NFT 2',
    price: '2.5',
    tier: 'Epic',
    imageId: 2,
    isFavorite: true,
    category: 'music',
    theme: 'cyberpunk',
    createdAt: '2024-03-21',
    author: {
      firstName: 'Jane',
      lastName: 'Smith',
      avatar: '/test-avatar2.jpg',
      onlineStatus: 'offline'
    }
  }
]

describe('ProductContainer', () => {
  beforeEach(() => {
    // Reset mock implementation before each test
    (useProducts as jest.Mock).mockReturnValue({
      products: mockProducts,
      isLoading: false,
      onSearch: jest.fn(),
      onLoadMore: jest.fn(),
      isFirstLoad: false
    })
  })

  it('renders all components correctly', () => {
    render(<ProductContainer />)

    // Verify main components are rendered
    expect(screen.getByTestId('hero-banner')).toBeInTheDocument()
    expect(screen.getByTestId('category-filter')).toBeInTheDocument()
    expect(screen.getByTestId('filter-group')).toBeInTheDocument()

    // Verify product items are rendered
    expect(screen.getByText('Test NFT 1')).toBeInTheDocument()
    expect(screen.getByText('Test NFT 2')).toBeInTheDocument()
  })

  it('handles search functionality', async () => {
    const mockOnSearch = jest.fn()
      ; (useProducts as jest.Mock).mockReturnValue({
        products: mockProducts,
        isLoading: false,
        onSearch: mockOnSearch,
        onLoadMore: jest.fn(),
        isFirstLoad: false
      })

    render(<ProductContainer />)

    // Simulate search input
    const searchInput = screen.getByPlaceholderText('Quick search')
    fireEvent.change(searchInput, { target: { value: 'Test' } })

    // Verify search callback is called with correct parameters
    await waitFor(() => {
      expect(mockOnSearch).toHaveBeenCalledWith({ title: 'Test', page: 1 })
    })
  })

  it('handles load more functionality', () => {
    const mockOnLoadMore = jest.fn()
      ; (useProducts as jest.Mock).mockReturnValue({
        products: mockProducts,
        isLoading: false,
        onSearch: jest.fn(),
        onLoadMore: mockOnLoadMore,
        isFirstLoad: false
      })

    render(<ProductContainer />)

    // Simulate load more click
    const loadMoreButton = screen.getByText('View more')
    fireEvent.click(loadMoreButton)

    // Verify load more callback is called
    expect(mockOnLoadMore).toHaveBeenCalled()
  })

  it('displays loading state correctly', () => {
    (useProducts as jest.Mock).mockReturnValue({
      products: [],
      isLoading: true,
      onSearch: jest.fn(),
      onLoadMore: jest.fn(),
      isFirstLoad: true
    })

    render(<ProductContainer />)

    // Verify skeleton loading is displayed
    expect(screen.getAllByRole('status')[0]).toBeInTheDocument()
  })

  it('displays no products message when no results found', () => {
    ; (useProducts as jest.Mock).mockReturnValue({
      products: [],
      isLoading: false,
      onSearch: jest.fn(),
      onLoadMore: jest.fn(),
      isFirstLoad: false
    })

    render(<ProductContainer />)

    // Verify no products message is displayed
    expect(screen.getByText('No products found')).toBeInTheDocument()
  })
}) 