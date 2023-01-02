import { AppButton } from 'components/app-button/app-button';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import { fetchMoviesAction } from 'redux/movies';

import styles from './search.module.scss';

const placeholder = 'What do you want to watch?';

export const Search = () => {
  const { searchQuery } = useParams();

  const navigate = useNavigate();

  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    if (searchQuery) {
      setSearchText(searchQuery);
      dispatch(
        fetchMoviesAction({ searchText: searchQuery, searchBy: 'title' }),
      );
    }
  }, [searchQuery]);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    navigate(`/search/${searchText}`);
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
