import { Header } from 'components/header/header';
import { MovieDescription } from 'components/movie-description/movie-description';
import { MovieSearch } from 'components/movie-search/movie-search';
import { useMovieContext } from 'contexts/movie-context';

import styles from './header-component.module.scss';

export const HeaderComponent = () => {
  const { selectedMovie } = useMovieContext();

  return (
    <header className={styles.header}>
      {selectedMovie ? (
        <MovieDescription />
      ) : (
        <>
          <Header />
          <MovieSearch />
        </>
      )}
    </header>
  );
};
