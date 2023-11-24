import fetch from 'isomorphic-unfetch';

import RootLayout from '../../components/RootLayout.tsx';
import MainLayout from '../../components/MainLayout.tsx';
import PokemonList from '../../components/Pokemon/PokemonList.tsx';
import Pagination from '../../components/Ui/Pagination.tsx';
import Loader from '../../components/Ui/Loader.tsx';

import Search from '../../components/Search/Search.tsx';

import { PokemonInformation, PokemonShortInformation } from '../../interfaces/Pokemon.ts';
import styles from '../../styles/MainPage.module.css';

interface IRequestParams {
  params: {
    id: string;
  };
  query: {
    limit: string;
  };
}

interface IMainPageProps {
  data: {
    limit: string;
    page: string;
    offset: number;
    prev: string;
    next: string;
    list: PokemonInformation[];
  };
}

function MainPage({ data }: IMainPageProps) {
  return (
    <RootLayout>
      <MainLayout>
        <>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Click to pokemon to see details.</h2>
            <Pagination page={data.page} next={data.next} prev={data.prev} limit={data.limit} />
          </div>

          <section className={styles.box}>
            <div className={styles.screen}>
              <Search />
              <PokemonList list={data.list} page={data.page} limit={data.limit} />
            </div>

            <div className={styles.panel}>
              <span />
              <span />
              <span />
            </div>
          </section>

          <Loader />
        </>
      </MainLayout>
    </RootLayout>
  );
}

export default MainPage;

export async function getServerSideProps({ params, query }: IRequestParams) {
  const data = {
    limit: query.limit,
    page: params.id,
    offset: +query.limit * +params.id - +query.limit,
    prev: '',
    next: '',
    list: [] as PokemonInformation[],
  };

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${data.offset}&limit=${data.limit}`
    );
    const json = await response.json();

    // Calculate values for pagination & select
    data.prev = json.previous ? `/page/${+data.page - 1}?limit=${data.limit}` : '';
    data.next = json.next ? `/page/${+data.page + 1}?limit=${data.limit}` : '';

    await Promise.all(
      json.results.map((item: PokemonShortInformation) =>
        fetch(item.url).then((resp) => resp.json())
      )
    ).then((results) => {
      results.forEach((pokemon: PokemonInformation) => {
        data.list.push({
          id: pokemon.id,
          name: pokemon.name,
          abilities: pokemon.abilities,
          image: pokemon.sprites?.other?.['official-artwork']?.front_default as string,
          stats: pokemon.stats,
          types: pokemon.types,
        });
      });
    });

    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { data: null },
    };
  }
}
