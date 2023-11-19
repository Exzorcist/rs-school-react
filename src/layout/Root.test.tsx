import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Root from './Root';

jest.mock(
  '../components/Information/Information',
  () =>
    function InformationMock() {
      return <div data-testid="information" />;
    }
);

jest.mock(
  '../components/Ui/Pagination',
  () =>
    function PaginationMock() {
      return <div data-testid="pagination" />;
    }
);

jest.mock(
  '../components/Ui/Loader',
  () =>
    function LoaderMock() {
      return <div data-testid="loader" />;
    }
);

describe('Root Component', () => {
  it('renders correctly', () => {
    const { getByTestId, queryByText } = render(
      <MemoryRouter>
        <Root />
      </MemoryRouter>
    );

    expect(getByTestId('information')).toBeInTheDocument();
    expect(getByTestId('pagination')).toBeInTheDocument();
    expect(queryByText('Click to pokemon to see details.')).toBeInTheDocument();
    expect(getByTestId('loader')).toBeInTheDocument();
    expect(queryByText('Test message to check ErrorBoundary operation')).not.toBeInTheDocument();
  });
});
