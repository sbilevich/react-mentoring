import { Header } from 'components/header/header';
import { MovieDescription } from 'components/movie-description/movie-description';
import { MovieSearch } from 'components/movie-search/movie-search';
import { useAppSelector } from 'redux/hooks';
import { selectedMovieSelector } from 'redux/selectors/selectedMovie';

import styles from './header-component.module.scss';

export const HeaderComponent = () => {
  const selectedMovie = useAppSelector(selectedMovieSelector);

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
