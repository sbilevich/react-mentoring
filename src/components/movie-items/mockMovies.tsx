import { MovieCard } from 'components/movie-card/movie-card';
import { useMovieContext } from 'contexts/movie-context';

import styles from './movie-items.module.scss';

export const MockMoves = () => {
  const { movies, setSelectedMovie } = useMovieContext();

  return (
    <div className={styles.movies}>
      {movies.map((movie) => (
        // eslint-disable-next-line react/jsx-key
        <MovieCard
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
