import { render, screen } from '@testing-library/react'
import FilterGroup from './FilterGroup'

describe('FilterGroup', () => {
  const mockOnApplyFilter = jest.fn()

  beforeEach(() => {
    mockOnApplyFilter.mockClear()
  })

  it('renders all filter sections', () => {
    render(<FilterGroup onApplyFilter={mockOnApplyFilter} />)

    // Check if all filter sections are rendered
    expect(screen.getAllByText('PRICE')[0]).toBeInTheDocument()
    expect(screen.getAllByText('TIER')[0]).toBeInTheDocument()
    expect(screen.getAllByText('THEME')[0]).toBeInTheDocument()
  })
}) 