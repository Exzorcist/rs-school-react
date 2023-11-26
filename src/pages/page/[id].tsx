import fetch from 'isomorphic-unfetch';

import RootLayout from '../../components/RootLayout.tsx';
import MainLayout from '../../components/MainLayout.tsx';
import PokemonList from '../../components/Pokemon/PokemonList.tsx';
import PokemonCurrent from '../../components/Pokemon/PokemonCurrent.tsx';
import Pagination from '../../components/Ui/Pagination.tsx';
import Search from '../../components/Search/Search.tsx';

import { PokemonInformation, PokemonShortInformation } from '../../interfaces/Pokemon.tsx';
import { IMainPageProps } from '../../interfaces/Props.ts';
import clearImageUrl from '../../helper/clearImageUrl.tsx';
import styles from '../../styles/MainPage.module.css';

export interface IRequestQuery {
  query: {
    id: string;
    limit: string;
    pokemon: string;
  };
}

function MainPage({ data }: IMainPageProps) {
  return (
    <RootLayout>
      <MainLayout>
        <>
          {data && (
            <div className={styles.wrapper}>
              <h2 className={styles.title}>Click to pokemon to see details.</h2>
              <Pagination page={data.page} next={data.next} prev={data.prev} limit={data.limit} />
            </div>
          )}

          <section className={styles.box}>
            <div className={styles.screen}>
              {data && (
                <>
                  <Search request={data.request} page={data.page} limit={data.limit} />
                  <PokemonList list={data.list} page={data.page} limit={data.limit}>
                    {data.request && (
                      <PokemonCurrent pokemon={data.pokemon} page={data.page} limit={data.limit} />
                    )}
                  </PokemonList>
                </>
              )}
              {!data && (
                <>
                  <h3>Sorry, can&lsquo;t load data. Problem with server.</h3>
                  <br />
                  <h4>Please try to refresh page.</h4>
                </>
              )}
            </div>

            <div className={styles.panel}>
              <span />
              <span />
              <span />
            </div>
          </section>
        </>
      </MainLayout>
    </RootLayout>
  );
}

export default MainPage;

export async function getServerSideProps({ query }: IRequestQuery) {
  const data = {
    limit: query.limit,
    page: query.id,
    offset: +query.limit * +query.id - +query.limit,
    prev: '',
    next: '',
    list: [] as PokemonInformation[],
    pokemon: {} as PokemonInformation,
    request: query.pokemon || '',
  };

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${data.offset}&limit=${data.limit}`
    );
    const json = await response.json();

    // Calculate values for pagination & select
    data.prev = json.previous ? `/page/${+data.page - 1}?limit=${data.limit}` : '';
    data.next = json.next ? `/page/${+data.page + 1}?limit=${data.limit}` : '';

    const results = await Promise.all(
      json.results.map(async (item: PokemonShortInformation) => {
        const resp = await fetch(item.url);
        return resp.json();
      })
    );

    results.forEach((pokemon: PokemonInformation) => {
      const info: PokemonInformation = {
        id: pokemon.id,
        name: pokemon.name,
        abilities: pokemon.abilities,
        image: clearImageUrl(pokemon.sprites?.other?.['official-artwork']?.front_default as string),
        stats: pokemon.stats,
        types: pokemon.types,
      };

      if (query.pokemon && query.pokemon === pokemon.name) data.pokemon = info;
      data.list.push(info);
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
