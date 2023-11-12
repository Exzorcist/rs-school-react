import { render, screen } from '@testing-library/react';
import Information from './Information';

test('render { Information } component', () => {
  render(<Information />);

  // Check if the heading is present
  const title = screen.getByText(/Attantion!/i);
  expect(title).toBeInTheDocument();

  // Check if the paragraphs are present
  const p1 = screen.getByText(/There are limitations/i);
  const p2 = screen.getByText(/You can verify this by looking at the documentation/i);

  expect(p1).toBeInTheDocument();
  expect(p2).toBeInTheDocument();

  // Check if the link is present with the correct href attribute
  const link = screen.getByTestId('info-link');
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', 'https://pokeapi.co/docs/v2');
});
