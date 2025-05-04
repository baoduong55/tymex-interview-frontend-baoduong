import { render } from '@testing-library/react';
import SkeletonCard from './SkeletonCard';

describe('SkeletonCard Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<SkeletonCard />);
    expect(container).toBeInTheDocument();
  });

  it('renders with correct structure', () => {
    const { container } = render(<SkeletonCard />);
    // Check for main container
    expect(container.firstChild).toHaveClass('w-full');
    expect(container.firstChild).toHaveClass('aspect-[267/365]');
    expect(container.firstChild).toHaveClass('bg-gray-200');
    expect(container.firstChild).toHaveClass('rounded-lg');
  });

  it('renders all skeleton elements', () => {
    const { container } = render(<SkeletonCard />);
    // Check for skeleton elements
    const skeletonElements = container.querySelectorAll('.ant-skeleton');
    expect(skeletonElements.length).toBeGreaterThan(0);
  });
}); 