import classNames from 'classnames';
import { AppButton } from 'components/app-button/app-button';
import { Genres } from 'components/menu/menu';
import { Modal } from 'components/modal/modal';
import { useState } from 'react';
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

// enum MovieFormValues {
//   Title = 'title',
//   ReleaseDate = 'release_date',
//   PosterPath = 'poster_path',
//   Genres = 'genres',
//   VoteAverage = 'vote_average',
//   Runtime = 'runtime',
//   Overview = 'overview',
// }

interface Props {
  title: string;
  movie?: Movie;
  onClose: () => void;
  action: Actions;
}

interface MovieFormValues {
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

  const [movieData, setMovieData] = useState<Movie | undefined>(movie);
  const onSubmit = (values: MovieFormValues) => {
    if (!values || !isValidMovie(values)) {
      return;
    }

    if (action === Actions.Add && movieData) {
      dispatch(addMovieAction(movieData));
    }
    if (movie?.id) {
      dispatch(updateMovieAction({ ...values, id: movie.id }));
    }
    onClose();
  };
  const handleReset = () => {
    onClose();
  };
  const required = (value: any) => (value ? undefined : 'Required');

  const initialValues = {
    title: movie?.title,
    release_date: movie?.release_date,
    poster_path: movie?.poster_path,
    vote_average: movie?.vote_average,
    genres: movie?.genres,
    runtime: movie?.runtime,
    overview: movie?.overview,
  };

  return (
    <Form onSubmit={onSubmit} initialValues={initialValues}>
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className={styles.title}>{title}</div>
            <div className={styles.content}>
              <div className={styles.textWrapper}>
                <label className={styles.label}>Title</label>
                <Field name="title" validate={required}>
                  {({ input, meta }) => (
                    <>
                      <input
                        {...input}
                        className={classNames(styles.firstCol, styles.input)}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </div>
              <div className={styles.textWrapper}>
                <label className={styles.label}>Release Date</label>
                <Field name="release_date" validate={required}>
                  {({ input, meta }) => (
                    <>
                      <input
                        {...input}
                        type="date"
                        className={classNames(styles.secondCol, styles.input)}
                        placeholder="Select Date"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.textWrapper}>
                <label className={styles.label}>Movie URL</label>
                <Field name="poster_path" validate={required}>
                  {({ input, meta }) => (
                    <>
                      <input
                        {...input}
                        className={classNames(styles.firstCol, styles.input)}
                        placeholder="http://"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </div>
              <div className={styles.textWrapper}>
                <label className={styles.label}>Rating</label>
                <Field name="vote_average" validate={required}>
                  {({ input, meta }) => (
                    <>
                      <input
                        {...input}
                        type="number"
                        className={classNames(styles.secondCol, styles.input)}
                        placeholder="7.8"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.textWrapper}>
                <label className={styles.label}>Genre</label>
                <Field name="genres">
                  {({ input }) => (
                    <select
                      {...input}
                      className={classNames(styles.firstCol, styles.input)}
                    >
                      {genres.map((genre) => (
                        <option key={genre} value={genre}>
                          {genre}
                        </option>
                      ))}
                    </select>
                  )}
                </Field>
              </div>
              <div className={styles.textWrapper}>
                <label className={styles.label}>Runtime</label>
                <Field name="runtime" validate={required}>
                  {({ input, meta }) => (
                    <>
                      <input
                        {...input}
                        type="number"
                        className={classNames(styles.secondCol, styles.input)}
                        placeholder="minutes"
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.textWrapper}>
                <label className={styles.label}>Description</label>
                <Field name="overview" validate={required}>
                  {({ input, meta }) => (
                    <>
                      <textarea
                        {...input}
                        className={classNames(styles.textarea)}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </>
                  )}
                </Field>
              </div>
            </div>
            <div className={styles.buttons}>
              <AppButton
                text="Reset"
                className={styles.reset}
                onButtonClick={handleReset}
              />
              <AppButton text="Submit" type="submit" />
            </div>
          </form>
        );
      }}
    </Form>
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
