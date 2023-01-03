import classNames from 'classnames';
import { AppButton } from 'components/app-button/app-button';
import { Genres } from 'components/menu/menu';
import { Modal } from 'components/modal/modal';
import { useMemo } from 'react';
import { Field, Form, FieldRenderProps } from 'react-final-form';
import { useAppDispatch } from 'redux/hooks';
import { addMovieAction, updateMovieAction } from 'redux/movies';
import { Movie } from 'types/movie';
import styles from './edit-movie.module.scss';

const genres = [Genres.Comedy, Genres.Crime, Genres.Documentary, Genres.Horror];

export enum Actions {
  Add = 'add',
  Edit = 'edit',
}

interface Props {
  title: string;
  movie?: Movie;
  onClose: () => void;
  action: Actions;
}

interface MovieFields {
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

  const onSubmit = (values: MovieFields) => {
    if (!values || !isValidMovie(values)) {
      return;
    }

    if (action === Actions.Add) {
      dispatch(addMovieAction(values));
    }
    if (movie?.id) {
      dispatch(updateMovieAction({ ...values, id: movie.id }));
    }
    onClose();
  };
  const handleReset = () => {
    onClose();
  };
  const getValidator = (value: string | number | string[] | undefined) =>
    value ? undefined : 'Required';

  const initialValues = useMemo(
    () => ({
      title: movie?.title,
      release_date: movie?.release_date,
      poster_path: movie?.poster_path,
      vote_average: movie?.vote_average,
      genres: movie?.genres,
      runtime: movie?.runtime,
      overview: movie?.overview,
    }),
    [movie],
  );

  const TextFieldAdapter = ({
    input,
    meta,
    placeholder,
    className,
    type = 'text',
  }: FieldRenderProps<string | number>) => {
    return (
      <>
        <input
          {...input}
          className={classNames(className, styles.input)}
          type={type}
          placeholder={placeholder}
        />
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </>
    );
  };

  return (
    <Modal onClose={handleReset}>
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className={styles.title}>{title}</div>
              <div className={styles.content}>
                <div className={styles.textWrapper}>
                  <label className={styles.label}>Title</label>
                  <Field
                    name="title"
                    validate={getValidator}
                    component={TextFieldAdapter}
                    className={styles.firstCol}
                  />
                </div>
                <div className={styles.textWrapper}>
                  <label className={styles.label}>Release Date</label>
                  <Field
                    name="release_date"
                    validate={getValidator}
                    component={TextFieldAdapter}
                    className={styles.secondCol}
                    placeholder="Select Date"
                    type="date"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.textWrapper}>
                  <label className={styles.label}>Movie URL</label>
                  <Field
                    name="poster_path"
                    validate={getValidator}
                    component={TextFieldAdapter}
                    className={styles.firstCol}
                    placeholder="http://"
                  />
                </div>
                <div className={styles.textWrapper}>
                  <label className={styles.label}>Rating</label>
                  <Field
                    name="vote_average"
                    validate={getValidator}
                    component={TextFieldAdapter}
                    className={styles.secondCol}
                    placeholder="7.8"
                    type="number"
                  />
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
                  <Field
                    name="runtime"
                    validate={getValidator}
                    component={TextFieldAdapter}
                    className={styles.secondCol}
                    placeholder="minutes"
                    type="number"
                  />
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.textWrapper}>
                  <label className={styles.label}>Description</label>
                  <Field name="overview" validate={getValidator}>
                    {({ input, meta }: FieldRenderProps<string>) => (
                      <>
                        <textarea
                          {...input}
                          className={classNames(styles.textarea)}
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
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
