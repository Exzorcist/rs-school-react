import { render, fireEvent, screen } from '@testing-library/react';
import Select from './Select.tsx';
import { useRootContext } from '../../provider/RootProvider.tsx';

const mockedUseRootContext = useRootContext as jest.Mock;

// Mock the useRootContext function
jest.mock('../../provider/RootProvider.tsx', () => ({
  useRootContext: jest.fn(),
}));

describe('{ Select } component', () => {
  it('renders the currentLimit from the context', () => {
    // Mock the context values
    mockedUseRootContext.mockImplementation(() => ({
      currentLimit: 10,
      setCurrentLimit: jest.fn(),
    }));

    const { container } = render(<Select />);
    expect(container).toBeInTheDocument();
  });

  it('checking render all { Select } options', () => {
    const { container } = render(<Select />);
    const span = container.querySelectorAll('.select .options > span');

    expect(span.length).toBe(3);
  });

  it('checking { Select } open event', () => {
    render(<Select />);

    fireEvent.click(screen.getByTestId('select-placeholder'));
    expect(screen.getByTestId('select-content')).toHaveClass('show');
  });

  it('{ Select } choose another limit', () => {
    const setCurrentLimitMock = jest.fn();

    // Mock the context values
    mockedUseRootContext.mockImplementation(() => ({
      currentLimit: 10,
      setCurrentLimit: setCurrentLimitMock,
    }));

    render(<Select />);

    fireEvent.click(screen.getByTestId('select-placeholder'));
    fireEvent.click(screen.getByTestId('select-item-15'));
    expect(setCurrentLimitMock).toHaveBeenCalledWith(15);
  });
});
