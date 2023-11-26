import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';
import Search from './Search';

jest.mock('next/router', () => ({
  __esModule: true,
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(),
}));

describe('Search component', () => {
  const mockProps = {
    request: 'initialValue',
    page: '1',
    limit: '10',
  };

  test('renders search component with initial values', () => {
    render(<Search request={mockProps.request} page={mockProps.page} limit={mockProps.limit} />);
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });

  test('updates input value on user input', () => {
    render(<Search request={mockProps.request} page={mockProps.page} limit={mockProps.limit} />);

    fireEvent.input(screen.getByPlaceholderText(/For example: charmeleon or 142/i), {
      target: { value: 'pikachu' },
    });

    expect(screen.getByPlaceholderText(/For example: charmeleon or 142/i)).toHaveValue('pikachu');
  });

  test('navigates to the correct route on button click', async () => {
    const pushMock = jest.fn();
    const replaceMock = jest.fn();

    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
      replace: replaceMock,
    });

    render(<Search request={mockProps.request} page={mockProps.page} limit={mockProps.limit} />);

    fireEvent.input(screen.getByPlaceholderText(/For example: charmeleon or 142/i), {
      target: { value: 'bulbasaur' },
    });

    fireEvent.click(screen.getByTestId('search-click'));

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith(
        `/page/${mockProps.page}?limit=${mockProps.limit}&pokemon=bulbasaur`
      );
    });
  });

  test('navigates to the correct route on button click if input empty', async () => {
    const pushMock = jest.fn();
    const replaceMock = jest.fn();

    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
      replace: replaceMock,
    });

    render(<Search request={mockProps.request} page={mockProps.page} limit={mockProps.limit} />);

    fireEvent.input(screen.getByPlaceholderText(/For example: charmeleon or 142/i), {
      target: { value: '' },
    });

    fireEvent.click(screen.getByTestId('search-click'));

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith(`/page/${mockProps.page}?limit=${mockProps.limit}`);
    });
  });
});
