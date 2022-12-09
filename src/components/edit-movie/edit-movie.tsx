import classNames from 'classnames';
import { AppButton } from 'components/app-button/app-button';
import { Genres } from 'components/menu/menu';
import { Modal } from 'components/modal/modal';
import { Field, Form } from 'react-final-form';
import { useAppDispatch } from 'redux/hooks';
import { addMovieAction, updateMovieAction } from 'redux/movies';
import { Movie } from 'types/movie';
import styles from './edit-movie.module.scss';

const genres = [Genres.Comedy, Genres.Crime, Genres.Documentary, Genres.Horror];

export enum Actions {
  Add = 'add',
  Edit = 'edit',
}

enum MovieFields {
  Title = 'title',
  ReleaseDate = 'release_date',
  PosterPath = 'poster_path',
  Genres = 'genres',
  VoteAverage = 'vote_average',
  Runtime = 'runtime',
  Overview = 'overview',
}

interface Props {
  title: string;
  movie?: Movie;
  onClose: () => void;
  action: Actions;
}

interface Values {
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  genres: string[];
  runtime: number;
  overview: string;
}

export const EditMovie = ({ title, movie, onClose, action }: Props) => {
  const dispatch = useAppDispatch();

  const onSubmit = (values: Values) => {
    if (!values || !isValidMovie(values)) {
      return;
    }

    if (action === Actions.Add) {
      dispatch(addMovieAction(movieData));
    } else {
      dispatch(updateMovieAction({ ...movieData, id: movie?.id }));
    }
    onClose();
  };
  const handleReset = () => {
    onClose();
  };
  const required = (value: any) => (value ? undefined : 'Required');

  const setData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setMovieData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Modal onClose={handleReset}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <label className={styles.label}>Title</label>
          <input
            value={movieData?.[MovieFields.Title]}
            onChange={setData}
            type="text"
            name={MovieFields.Title}
            required
            className={classNames(styles.firstCol, styles.input)}
          />
        </div>
        <div className={styles.textWrapper}>
          <label className={styles.label}>Release Date</label>
          <input
            value={movieData?.[MovieFields.ReleaseDate]}
            onChange={setData}
            type="date"
            name={MovieFields.ReleaseDate}
            required
            className={classNames(styles.secondCol, styles.input)}
            placeholder="Select Date"
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <label className={styles.label}>Movie URL</label>
          <input
            value={movieData?.[MovieFields.PosterPath]}
            onChange={setData}
            type="text"
            name={MovieFields.PosterPath}
            required
            className={classNames(styles.firstCol, styles.input)}
            placeholder="http://"
          />
        </div>
        <div className={styles.textWrapper}>
          <label className={styles.label}>Rating</label>
          <input
            value={movieData?.[MovieFields.PosterPath]}
            onChange={setData}
            type="number"
            name={MovieFields.PosterPath}
            required
            className={classNames(styles.secondCol, styles.input)}
            placeholder="7.8"
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <label className={styles.label}>Genre</label>
          <select
            value={
              movieData?.[MovieFields.Genres]?.length
                ? movieData?.[MovieFields.Genres][0]
                : Genres.Comedy
            }
            onChange={setData}
            name={MovieFields.Genres}
            required
            className={classNames(styles.firstCol, styles.input)}
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.textWrapper}>
          <label className={styles.label}>Runtime</label>
          <input
            value={movieData?.[MovieFields.Runtime]}
            onChange={setData}
            type="number"
            name={MovieFields.Runtime}
            required
            className={classNames(styles.secondCol, styles.input)}
            placeholder="minutes"
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <label className={styles.label}>Description</label>
          <input
            value={movieData?.[MovieFields.Overview]}
            onChange={setData}
            type="text"
            name={MovieFields.Overview}
            required
            className={classNames(styles.textarea)}
          />
        </div>
      </div>
      <div className={styles.buttons}>
        <AppButton
          text="Reset"
          className={styles.reset}
          onButtonClick={handleReset}
        />
        <AppButton text="Submit" onButtonClick={handleSubmit} />
      </div>
    </Modal>
  );
};

const isValidMovie = (movie: Partial<Movie>): movie is Movie =>
  !!(
    movie.title &&
    movie.vote_average &&
    movie.release_date &&
    movie.poster_path &&
    movie.overview &&
    movie.runtime &&
    movie.genres
  );
