import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './Root';

describe('Root component', () => {
  it('renders without errors', () => {
    render(
      <Router>
        <Root />
      </Router>
    );

    expect(screen.getByText('Click to pokemon to see details.')).toBeInTheDocument();
    expect(screen.getByText('Attantion!')).toBeInTheDocument();
  });
});
