import { RootState } from 'redux/store';

export const moviesCountSelector = (state: RootState) =>
  state.movies.moviesCount;
