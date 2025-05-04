import { render, screen } from '@testing-library/react'
import HeroBanner from './HeroBanner'

describe('HeroBanner', () => {
  it('renders hero banner with correct content', () => {
    render(<HeroBanner />)

    // Check if all images are rendered with correct alt text
    expect(screen.getByAltText('New Arrival Collection - Tymex Marketplace')).toBeInTheDocument()
    expect(screen.getByAltText('The DJ - Featured Digital Asset')).toBeInTheDocument()
    expect(screen.getByAltText('Tymex Marketplace Product Introduction')).toBeInTheDocument()

    // Check if the section has correct aria-label
    expect(screen.getByLabelText('New Arrival - The DJ')).toBeInTheDocument()
  })

  it('renders hero banner with correct styling', () => {
    render(<HeroBanner />)

    const section = screen.getByLabelText('New Arrival - The DJ')
    expect(section).toHaveClass('flex-1')
    expect(section).toHaveClass('relative')
  })
}) 