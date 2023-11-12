import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('NotFound component', () => {
  it('renders correctly', () => {
    render(<NotFound />);

    expect(screen.getByText('Wrong path.')).toBeInTheDocument();
    expect(screen.getByText("Can't load data.")).toBeInTheDocument();
  });
});
