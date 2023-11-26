import { render, screen } from '@testing-library/react';
import Loader from './Loader.tsx';

jest.mock('./LoaderIcon', () => () => 'MockedLoaderIcon');

describe('{ Loader } component', () => {
  test('show Loader', async () => {
    const setIsLoading = jest.fn();
    const props = { isLoading: true, setIsLoading };

    render(<Loader isLoading={props.isLoading} setIsLoading={props.setIsLoading} />);

    expect(screen.getByText('Loading. Please wait ...')).toBeInTheDocument();
    expect(screen.getByText('MockedLoaderIcon')).toBeInTheDocument();
  });

  test('hide Loader', async () => {
    const setIsLoading = jest.fn();
    const props = { isLoading: false, setIsLoading };

    render(<Loader isLoading={props.isLoading} setIsLoading={props.setIsLoading} />);

    expect(screen.getByTestId('loader')).not.toHaveClass('show');
  });
});
