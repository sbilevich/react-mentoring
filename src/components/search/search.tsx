import { AppButton } from 'components/app-button/app-button';
import { useState } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { fetchMoviesAction } from 'redux/movies';

import styles from './search.module.scss';

const placeholder = 'What do you want to watch?';

export const Search = () => {
  const [searchText, setSearchText] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(fetchMoviesAction({ searchText, searchBy: 'title' }));
  };

  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <AppButton text="Search" onButtonClick={handleClick} />
    </div>
  );
};
