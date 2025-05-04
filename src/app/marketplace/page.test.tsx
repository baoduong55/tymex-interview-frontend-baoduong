import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Page, { metadata } from './page'

// Mock child components
jest.mock('@/layout/OneColumnsLayout', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="one-columns-layout">{children}</div>
  ),
}))

jest.mock('@/features/product/component/ProductContainer/ProductContainer', () => ({
  __esModule: true,
  default: () => <div data-testid="product-container">Product Container</div>,
}))

describe('Marketplace Page', () => {
  it('renders marketplace page with correct layout and components', () => {
    render(<Page />)

    // Verify layout component is rendered
    expect(screen.getByTestId('one-columns-layout')).toBeInTheDocument()

    // Verify product container is rendered
    expect(screen.getByTestId('product-container')).toBeInTheDocument()
  })

  it('has correct metadata configuration', () => {
    // Verify page title
    expect(metadata.title).toBe('Digital Asset Marketplace')
    // Verify page description
    expect(metadata.description).toContain('Browse and trade digital assets')
    // Verify OpenGraph title
    expect(metadata.openGraph!.title).toBe('Digital Asset Marketplace | Tymex')
    // Verify canonical URL
    expect(metadata.alternates!.canonical).toBe('/marketplace')
  })
}) 