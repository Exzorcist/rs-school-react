import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store.tsx';
import Loader from './Loader.tsx';

describe('Loader Component', () => {
  it('should render loading indicator when isLoading is true', () => {
    store.dispatch({ type: 'loader/setLoader', payload: true });

    const { getByText, container } = render(
      <Provider store={store}>
        <Loader />
      </Provider>
    );

    expect(container.querySelector('.loader.show')).toBeInTheDocument();
    expect(getByText('Loading. Please wait ...')).toBeInTheDocument();
  });

  it('should not render loading indicator when isLoading is false', () => {
    store.dispatch({ type: 'loader/setLoader', payload: false });

    const { container } = render(
      <Provider store={store}>
        <Loader />
      </Provider>
    );

    expect(container.querySelector('.loader.show')).not.toBeInTheDocument();
  });
});
