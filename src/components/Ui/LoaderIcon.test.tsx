import { render } from '@testing-library/react';
import LoaderIcon from './LoaderIcon';

describe('{ LoaderIcon } component', () => {
  it('renders the loader icon correctly', () => {
    const { container } = render(<LoaderIcon />);
    expect(container).toBeInTheDocument();

    const div = container.querySelectorAll('.icon > div');
    expect(div.length).toBe(8);
  });
});
