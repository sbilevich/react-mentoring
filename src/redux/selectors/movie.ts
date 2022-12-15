import { RootState } from 'redux/store';

export const selectMovie = (state: RootState) => state.movies.selectedMovie;

export const SelectMoviesCount = (state: RootState) => state.movies.moviesCount;
