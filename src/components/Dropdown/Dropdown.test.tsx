import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  const mockItems = [
    { key: '1', label: 'Option 1' },
    { key: '2', label: 'Option 2' },
    { key: '3', label: 'Option 3' },
  ];

  it('renders with initial value', () => {
    const mockOnChange = jest.fn();
    render(<Dropdown items={mockItems} value="1" onChange={mockOnChange} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('renders with first item when value not found', () => {
    const mockOnChange = jest.fn();
    render(<Dropdown items={mockItems} value="non-existent" onChange={mockOnChange} />);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('renders dropdown button with correct classes', () => {
    const mockOnChange = jest.fn();
    const { container } = render(<Dropdown items={mockItems} value="1" onChange={mockOnChange} />);
    expect(container.querySelector('.dropdown')).toBeInTheDocument();
  });
}); 