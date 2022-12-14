import { Header } from 'components/header/header';
import { MovieDescription } from 'components/movie-description/movie-description';
import { MovieSearch } from 'components/movie-search/movie-search';
import { useAppSelector } from 'redux/hooks';
import { selectMovie } from 'redux/selectors/movie';

import styles from './header-component.module.scss';

export const HeaderComponent = () => {
  const selectedMovie = useAppSelector(selectMovie);

  return (
    <header className={styles.header}>
      {selectedMovie ? (
        <MovieDescription movie={selectedMovie} />
      ) : (
        <>
          <Header />
          <MovieSearch />
        </>
      )}
    </header>
  );
};
