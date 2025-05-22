import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';
import Image from 'next/image';

// Mock the Image component from next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: { src: string; alt: string; className?: string }) => <Image {...props} alt={props.alt} />,
}));

// Mock the useDebounce hook
jest.mock('@/hook/useDebounce', () => ({
  useDebounce: (callback: (e: React.ChangeEvent<HTMLInputElement>) => void) => callback,
}));

describe('Search Component', () => {
  it('renders with default placeholder', () => {
    const mockOnChange = jest.fn();
    render(<Search onChange={mockOnChange} />);
    expect(screen.getByPlaceholderText('Quick search')).toBeInTheDocument();
  });

  it('renders with custom placeholder', () => {
    const mockOnChange = jest.fn();
    render(<Search placeholder="Custom search" onChange={mockOnChange} />);
    expect(screen.getByPlaceholderText('Custom search')).toBeInTheDocument();
  });

  it('calls onChange when input changes', () => {
    const mockOnChange = jest.fn();
    render(<Search onChange={mockOnChange} />);
    const input = screen.getByPlaceholderText('Quick search');
    fireEvent.change(input, { target: { value: 'test search' } });
    expect(mockOnChange).toHaveBeenCalledWith('test search');
  });

  it('renders search icon', () => {
    const mockOnChange = jest.fn();
    render(<Search onChange={mockOnChange} />);
    const searchIcon = screen.getByAltText('search');
    expect(searchIcon).toBeInTheDocument();
  });
}); 