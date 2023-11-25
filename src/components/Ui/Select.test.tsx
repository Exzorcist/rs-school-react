import { render, fireEvent, screen } from '@testing-library/react';
import Select from './Select.tsx';

describe('{ Select } component', () => {
  test('renders Select and updates limit on option click', () => {
    const setIsLoadingMock = jest.fn();
    const initialLimit = '10';

    render(<Select limit={initialLimit} setIsLoading={setIsLoadingMock} />);

    const select = screen.getByTestId('select');
    expect(select).toBeInTheDocument();

    const placeholder = screen.getByTestId('placeholder');
    fireEvent.click(placeholder);

    const options = screen.getByTestId('options');
    expect(options).toHaveClass('show');

    const option15 = screen.getByTestId('option15');
    fireEvent.click(option15);

    expect(options).not.toHaveClass('show');
  });
});
