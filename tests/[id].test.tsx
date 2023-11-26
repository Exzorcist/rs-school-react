import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import fetchMock from 'jest-fetch-mock';
import { useRouter } from 'next/router';
import MainPage, { getServerSideProps, IRequestQuery } from '../src/pages/page/[id].tsx';
import { IMainPageProps } from '../src/interfaces/Props.js';

jest.mock('isomorphic-unfetch', () => fetchMock);
jest.mock('next/router', () => ({
  __esModule: true,
  ...jest.requireActual('next/router'),
  useRouter: jest.fn(),
}));

describe('MainPage component', () => {
  const mockData: IMainPageProps = {
    data: {
      limit: '10',
      page: '1',
      offset: 0,
      prev: '',
      next: '',
      list: [
        {
          id: 1,
          name: 'bulbasaur',
          abilities: [],
          image: 'bulbasaur-image-url',
          stats: [],
          types: [],
        },
      ],
      pokemon: {
        id: 1,
        name: 'bulbasaur',
        abilities: [],
        image: 'bulbasaur-image-url',
        stats: [],
        types: [],
      },
      request: 'bulbasaur',
    },
  };

  beforeEach(() => {
    fetchMock.mockClear();
  });

  test('renders MainPage component with data', async () => {
    const pushMock = jest.fn();
    const replaceMock = jest.fn();

    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
      replace: replaceMock,
    });

    fetchMock.mockResponseOnce(
      JSON.stringify({
        results: [
          {
            url: 'bulbasaur-url',
            name: 'bulbasaur',
          },
        ],
        previous: null,
        next: null,
      })
    );

    await act(async () => {
      render(<MainPage data={mockData.data} />);
    });

    expect(screen.getByText('Click to pokemon to see details.')).toBeInTheDocument();
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(screen.getByTestId('list')).toBeInTheDocument();
    expect(screen.getByTestId('pokemon')).toBeInTheDocument();
  });

  test('getServerSideProps fetches data correctly', async () => {
    const mockQuery: IRequestQuery = {
      query: {
        id: '1',
        limit: '10',
        pokemon: 'bulbasaur',
      },
    };

    fetchMock.mockResponseOnce(
      JSON.stringify({
        results: [
          {
            url: 'bulbasaur-url',
            name: 'bulbasaur',
          },
        ],
        previous: null,
        next: null,
      })
    );

    const equalData = {
      limit: '10',
      page: '1',
      offset: 0,
      prev: '',
      next: '',
      list: [
        {
          id: undefined,
          name: undefined,
          abilities: undefined,
          image: '',
          stats: undefined,
          types: undefined,
        },
      ],
      pokemon: {},
      request: 'bulbasaur',
    };

    const serverSideProps = await getServerSideProps(mockQuery);
    expect(serverSideProps.props.data).toEqual(equalData);
  });
});
