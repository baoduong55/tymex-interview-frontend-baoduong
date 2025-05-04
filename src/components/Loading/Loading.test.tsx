import { render } from '@testing-library/react';
import Loading from './Loading';

describe('Loading Component', () => {
  it('renders with blur background by default', () => {
    const { container } = render(<Loading />);
    const blurBackground = container.querySelector('.bg-white\\/30');
    expect(blurBackground).toBeInTheDocument();
  });

  it('renders without blur background when specified', () => {
    const { container } = render(<Loading blurBackground={false} />);
    const blurBackground = container.querySelector('.bg-white\\/30');
    expect(blurBackground).not.toBeInTheDocument();
  });

  it('renders loading indicator', () => {
    const { container } = render(<Loading />);
    const loadingIcon = container.querySelector('.spin');
    expect(loadingIcon).toBeInTheDocument();
  });

  it('renders with correct positioning classes', () => {
    const { container } = render(<Loading />);
    const spin = container.querySelector('.spin');
    expect(spin).toHaveClass('left-[50%]');
    expect(spin).toHaveClass('top-[50%]');
  });
}); 