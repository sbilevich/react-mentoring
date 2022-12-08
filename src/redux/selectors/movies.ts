import { RootState } from 'redux/store';

export const moviesSelector = (state: RootState) => state.movies.movies;
