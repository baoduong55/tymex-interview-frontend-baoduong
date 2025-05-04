import { render, screen } from '@testing-library/react';
import RangeSlider from './RangeSlider';

describe('RangeSlider Component', () => {
  it('renders with default props', () => {
    const { container } = render(<RangeSlider />);
    expect(container.querySelector('.custom-slider')).toBeInTheDocument();
    expect(screen.getByText('0 ETH')).toBeInTheDocument();
    expect(screen.getByText('1000 ETH')).toBeInTheDocument();
  });

  it('renders with custom unit', () => {
    render(<RangeSlider unit="USD" />);
    expect(screen.getByText('0 USD')).toBeInTheDocument();
    expect(screen.getByText('1000 USD')).toBeInTheDocument();
  });

  it('renders with custom limit', () => {
    render(<RangeSlider limit={[100, 500]} />);
    expect(screen.getByText('100 ETH')).toBeInTheDocument();
    expect(screen.getByText('500 ETH')).toBeInTheDocument();
  });

  it('renders with custom min and max values', () => {
    render(<RangeSlider minValue={200} maxValue={800} />);
    const sliders = screen.getAllByRole('slider');
    expect(sliders).toHaveLength(2);
    expect(sliders[0]).toHaveAttribute('aria-valuemin', '0');
    expect(sliders[1]).toHaveAttribute('aria-valuemax', '1000');
  });

  it('renders with correct container classes', () => {
    const { container } = render(<RangeSlider />);
    const sliderContainer = container.querySelector('.custom-slider');
    expect(sliderContainer).toHaveClass('w-full');
    expect(sliderContainer).toHaveClass('px-2');
    expect(sliderContainer).toHaveClass('text-white');
    expect(sliderContainer).toHaveClass('mb-1.5');
    expect(sliderContainer).toHaveClass('desktop:mb-3');
  });
}); 