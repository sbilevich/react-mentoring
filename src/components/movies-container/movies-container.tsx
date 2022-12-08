import { ErrorBoundary } from 'components/error-boundary/error-boundary';
import { Menu } from 'components/menu/menu';
import { MovieItems } from 'components/movie-items/movieItems';
import { useAppSelector } from 'redux/hooks';
import { moviesCountSelector } from 'redux/selectors/moviesCount';

import styles from './movies-container.module.scss';

export const MoviesContainer = () => {
  const moviesCount = useAppSelector(moviesCountSelector);

  return (
    <div className={styles.moviesContainer}>
      <Menu />
      <div className={styles.foundItems}>
        <span className={styles.span}>{moviesCount}</span>
        <span>movies found</span>
      </div>
      <ErrorBoundary>
        <MovieItems />
      </ErrorBoundary>
    </div>
  );
};
