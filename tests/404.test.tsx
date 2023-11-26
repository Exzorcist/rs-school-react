import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page404 from '../src/pages/404.tsx';

describe('{ 404 } Page', () => {
  test('renders 404 page with correct content and behavior', () => {
    render(<Page404 />);

    expect(screen.getByTestId('404')).toBeInTheDocument();
    expect(screen.getByTestId('to-home')).toHaveAttribute('href', '/');

    userEvent.click(screen.getByTestId('to-home'));
    expect(window.location.pathname).toBe('/');
  });
});
