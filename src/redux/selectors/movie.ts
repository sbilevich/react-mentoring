import { RootState } from 'redux/store';

export const selectMovie = (state: RootState) => state.movies.selectedMovie;

export const selectMoviesCount = (state: RootState) => state.movies.moviesCount;

export const selectMovies = (state: RootState) => state.movies.movies;
