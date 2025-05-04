import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input Component', () => {
  it('renders input with placeholder', () => {
    render(<Input placeholder="Test placeholder" />);
    expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Input placeholder="Test" className="custom-class" />);
    const input = screen.getByPlaceholderText('Test');
    expect(input).toHaveClass('custom-class');
  });

  it('passes through additional props', () => {
    render(<Input placeholder="Test" disabled />);
    const input = screen.getByPlaceholderText('Test');
    expect(input).toBeDisabled();
  });
}); 