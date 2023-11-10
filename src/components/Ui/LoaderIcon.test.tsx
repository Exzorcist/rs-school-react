import { render } from '@testing-library/react';
import LoaderIcon from './LoaderIcon';

describe('{ LoaderIcon } component', () => {
  it('renders the loader icon correctly', () => {
    const { container } = render(<LoaderIcon />);

    // Ensure the component renders without errors
    expect(container).toBeInTheDocument();

    // Check that the correct number of child elements are present
    const div = container.querySelectorAll('.icon > div');
    expect(div.length).toBe(8);
  });
});
