import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { ISearchProps } from '../../interfaces/Props.ts';
import styles from './Search.module.css';

function Search({ request, page, limit }: ISearchProps) {
  const router = useRouter();
  const [input, setInput] = useState<string>(request);

  useEffect(() => {
    setInput(request);
  }, [request]);

  const inputChange = (e: FormEvent<HTMLInputElement>): void => {
    const data = (e.target as HTMLInputElement).value.trim().toLocaleLowerCase();
    setInput(data);
    if (!data) router.push(`/page/${page}?limit=${limit}`);
    localStorage.setItem('request', data);
  };

  const showDetails = () => {
    router.push(`/page/${page}?limit=${limit}&pokemon=${input}`);
  };

  return (
    <div className={styles.search} data-testid="search">
      <h3 className={styles.title}>
        Use pokemon <span>Name</span> for search
      </h3>

      <div className={styles.box}>
        <input
          type="search"
          className={styles.input}
          placeholder="For example: charmeleon or 142"
          value={input}
          onInput={(e: FormEvent<HTMLInputElement>) => inputChange(e)}
        />

        <button
          type="button"
          className={styles.button}
          onClick={() => showDetails()}
          data-testid="search-click"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
