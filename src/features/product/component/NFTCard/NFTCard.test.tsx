import { render, screen, fireEvent } from '@testing-library/react'
import NFTCard from './NFTCard'
import { TProduct } from '@/features/product/type/product'

const mockProduct: TProduct = {
  "id": 37,
  "title": "The Neon Brawler",
  "category": "Upper Body",
  "price": 87.1,
  "isFavorite": false,
  "createdAt": 1670626035000,
  "theme": "Dark",
  "tier": "Epic",
  "imageId": 7,
  "author": {
    "firstName": "Dennis",
    "lastName": "Rosenshine",
    "email": "drosenshinem@google.ca",
    "gender": "Male",
    "avatar": "https://robohash.org/etaccusantiumminus.png?size=100x100&set=set1",
    "onlineStatus": "online"
  }
}

describe('NFTCard', () => {
  it('renders NFT card with correct content', () => {
    render(<NFTCard product={mockProduct} />)

    // Check if title is rendered
    expect(screen.getByText('The Neon Brawler')).toBeInTheDocument()

    // Check if price is rendered
    expect(screen.getByText('87.1')).toBeInTheDocument()

    // Check if tier is rendered
    expect(screen.getByText('Epic')).toBeInTheDocument()

    // Check if author name is rendered
    expect(screen.getByText('Dennis_Rosenshine')).toBeInTheDocument()

    // Check if images are rendered with correct alt text
    expect(screen.getByAltText('The Neon Brawler - Epic Tier Digital Asset')).toBeInTheDocument()
    expect(screen.getByAltText('Ethereum Currency Symbol')).toBeInTheDocument()
    expect(screen.getByAltText('Dennis_Rosenshine is online')).toBeInTheDocument()
  })

  it('renders NFT card with correct styling', () => {
    render(<NFTCard product={mockProduct} />)

    const card = screen.getByRole('figure')
    expect(card).toHaveClass('bg-[#2A2A2D]')
    expect(card).toHaveClass('rounded-[10px]')
  })

  it('handles favorite button click', () => {
    render(<NFTCard product={mockProduct} />)

    const favoriteButton = screen.getByRole('button', { name: /select favorite/i })
    fireEvent.click(favoriteButton)

    // Add assertions based on your favorite button implementation
    // For example, if you have a state change or callback
  })
}) 