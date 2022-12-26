import { MovieCard } from 'components/movie-card/movie-card';
import { fetchMoviesAction, select } from 'redux/movies';
import { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';

import styles from './movie-items.module.scss';
import { selectMovies } from 'redux/selectors/movie';

export const MovieItems: FC = () => {
  const movies = useAppSelector(selectMovies);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAction({}));
  }, [dispatch]);

  if (!movies) {
    return null;
  }

  return (
    <div className={styles.movies}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => dispatch(select(movie))}
        />
      ))}
    </div>
  );
};
