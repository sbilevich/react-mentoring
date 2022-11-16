import { MovieCard } from 'components/movie-card/movie-card';
import { useMovieContext } from 'contexts/movie-context';
import { FC } from 'react';

import styles from './movie-items.module.scss';

export const MockMoves: FC = () => {
  const { movies, setSelectedMovie } = useMovieContext();

  if (!movies) return null;

  return (
    <div className={styles.movies}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          img={movie.img}
          title={movie.title}
          year={movie.year}
          shortDescription={movie.shortDescription}
          onClick={() => setSelectedMovie(movie)}
        />
      ))}
    </div>
  );
};
