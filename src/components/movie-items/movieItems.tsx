import { MovieCard } from 'components/movie-card/movie-card';
import { fetchMoviesAction, select } from 'redux/movies';
import { FC, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'redux/hooks';

import styles from './movie-items.module.scss';
import { useSearchParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import { selectMovies } from 'redux/selectors/movie';

export const MovieItems: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const movies = useAppSelector(selectMovies);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAction({}));
  }, [dispatch]);

  if (!movies) {
    return null;
  }

  const handleMovieSelect = (movie: Movie) => {
    dispatch(select(movie));
    searchParams.set('movieId', String(movie.id));
    setSearchParams(searchParams);
  };

  return (
    <div className={styles.movies}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={handleMovieSelect} />
      ))}
    </div>
  );
};
