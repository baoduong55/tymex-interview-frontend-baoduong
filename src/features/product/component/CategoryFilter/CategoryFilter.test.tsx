import { render, screen, fireEvent } from '@testing-library/react'
import CategoryFilter from './CategoryFilter'

describe('CategoryFilter', () => {
  const mockOnApplyFilter = jest.fn()

  beforeEach(() => {
    mockOnApplyFilter.mockClear()
  })

  it('renders all category options', () => {
    render(<CategoryFilter onApplyFilter={mockOnApplyFilter} />)

    // Check if all category options are rendered
    expect(screen.getByText('All')).toBeInTheDocument()
    expect(screen.getByText('Upper Body')).toBeInTheDocument()
    expect(screen.getByText('Lower Body')).toBeInTheDocument()
    expect(screen.getByText('Hat')).toBeInTheDocument()
    expect(screen.getByText('Shoes')).toBeInTheDocument()
    expect(screen.getByText('Accessory')).toBeInTheDocument()
  })

  it('calls onApplyFilter with correct category when option is clicked', () => {
    render(<CategoryFilter onApplyFilter={mockOnApplyFilter} />)

    // Click on Upper Body category
    fireEvent.click(screen.getByText('Upper Body'))

    expect(mockOnApplyFilter).toHaveBeenCalledWith('Upper Body')
  })

  it('highlights selected category', () => {
    render(<CategoryFilter onApplyFilter={mockOnApplyFilter} />)

    // Click on Upper Body category
    const upperBodyButton = screen.getByText('Upper Body')
    fireEvent.click(upperBodyButton)

    // Check if Upper Body button has active class
    expect(upperBodyButton).toHaveClass('active')

    // Click on Lower Body category
    const lowerBodyButton = screen.getByText('Lower Body')
    fireEvent.click(lowerBodyButton)

    // Check if Upper Body button no longer has active class
    expect(upperBodyButton).not.toHaveClass('active')
    // Check if Lower Body button has active class
    expect(lowerBodyButton).toHaveClass('active')
  })

  it('resets to All Categories when All Categories is clicked', () => {
    render(<CategoryFilter onApplyFilter={mockOnApplyFilter} />)

    // Click on Upper Body category
    fireEvent.click(screen.getByText('Upper Body'))

    // Click on All Categories
    fireEvent.click(screen.getByText('All'))

    expect(mockOnApplyFilter).toHaveBeenCalledWith('all')
  })
}) 