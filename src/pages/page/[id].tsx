import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import RootLayout from '../../components/RootLayout.tsx';
import MainLayout from '../../components/MainLayout.tsx';
import Search from '../../components/Search/Search.tsx';

import { PokemonInformation, PokemonShortInformation } from '../../interfaces/Pokemon.ts';
import clearImageUrl from '../../helper/clearImageUrl.tsx';
import styles from '../../styles/PokemonsList.module.css';

interface IRequestParams {
  params: {
    id: string;
  };
}

interface IPokemonListParams {
  list: PokemonInformation[];
  page: number;
}

function PokemonList({ list, page }: IPokemonListParams) {
  return (
    <RootLayout>
      <MainLayout>
        <>
          <Search />

          <div className={styles.wrapper}>
            <div className={styles.list}>
              {list &&
                list.map((item: PokemonInformation) => (
                  <Link
                    key={item.name}
                    className={styles.pokemon}
                    href={`${page}/pokemon/${item.name}`}
                    onClick={() => {
                      // TODO: logic to display name on the search
                      localStorage.setItem('request', item.name as string);
                    }}
                  >
                    <img src={clearImageUrl(item.image)} width="150" height="150" alt={item.name} />
                    <h4 className={styles.title}>{item.name}</h4>
                  </Link>
                ))}
            </div>
          </div>
        </>
      </MainLayout>
    </RootLayout>
  );
}

export default PokemonList;

export async function getServerSideProps({ params }: IRequestParams) {
  const page = params.id;
  const offset = 0;
  const limit = 10;

  try {
    const list: PokemonInformation[] = [];
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    );
    const json = await response.json();

    await Promise.all(
      json.results.map((item: PokemonShortInformation) =>
        fetch(item.url).then((resp) => resp.json())
      )
    ).then((results) => {
      results.forEach((pokemon: PokemonInformation) => {
        list.push({
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
      props: { list, page },
    };
  } catch (error) {
    return {
      props: { list: null, page },
    };
  }
}
