import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders primary button by default', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('primary');
  });

  it('renders secondary button when variant is secondary', () => {
    render(<Button variant="secondary">Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('secondary');
  });

  it('applies inactive class when isActive is false', () => {
    render(<Button isActive={false}>Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('inactive');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders children content', () => {
    render(<Button>Test Content</Button>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('passes through additional props', () => {
    render(<Button disabled data-testid="test-button">Click me</Button>);
    const button = screen.getByTestId('test-button');
    expect(button).toBeDisabled();
  });

  it('renders with correct container class', () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container.querySelector('.customButton')).toBeInTheDocument();
  });
}); 