import { RootState } from 'redux/store';

export const selectedMovieSelector = (state: RootState) =>
  state.movies.selectedMovie;
