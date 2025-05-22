import { render, screen } from '@testing-library/react';
import Field from './Field';

describe('Field Component', () => {
  it('renders children without label', () => {
    render(
      <Field>
        <div>Test Child</div>
      </Field>
    );
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(
      <Field label="Test Label">
        <div>Test Child</div>
      </Field>
    );
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });

  it('applies custom label class', () => {
    render(
      <Field label="Test Label" labelClass="custom-class">
        <div>Test Child</div>
      </Field>
    );
    const label = screen.getByText('Test Label');
    expect(label).toHaveClass('custom-class');
  });

  it('renders with correct container classes', () => {
    const { container } = render(
      <Field>
        <div>Test Child</div>
      </Field>
    );
    const fieldContainer = container.firstChild;
    expect(fieldContainer).toHaveClass('flex');
    expect(fieldContainer).toHaveClass('flex-col');
    expect(fieldContainer).toHaveClass('gap-1');
    expect(fieldContainer).toHaveClass('w-full');
  });
}); 