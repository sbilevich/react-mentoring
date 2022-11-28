import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Movie } from 'types/movie';
import { RootState } from './store';

interface MoviesState {
  movies: Movie[];
  selectedMovie?: Movie;
  moviesCount: number;
}
interface fetchProps {
  searchText?: string;
  searchBy?: string;
  sortBy?: string;
  sortOrder?: string;
  filter?: string[];
}
const initialState: MoviesState = {
  movies: [],
  selectedMovie: undefined,
  moviesCount: 0,
};
export const fetchMoviesAction = createAsyncThunk(
  'moviesFetch',
  (params: fetchProps) => {
    return fetchMovies(params);
  },
);

const fetchMovies = async ({
  searchText,
  searchBy,
  sortBy,
  sortOrder = 'asc',
  filter,
}: fetchProps) => {
  const queryParams = [
    searchText ? `search=${searchText}` : '',
    searchBy ? `&searchBy=${searchBy}` : '',
    sortBy ? `&sortBy=${sortBy}` : '',
    filter?.length ? `&filter=${filter.join()}` : '',
    `sortOrder=${sortOrder}`,
  ]
    .filter(Boolean)
    .join('&');
  const response = await fetch(`http://localhost:4000/movies?${queryParams}`);

  return await response.json();
};

export const addMovieAction = createAsyncThunk(
  'addMovie',
  async (movie: Movie) => {
    await fetch('http://localhost:4000/movies', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    });
    const response = await fetch('http://localhost:4000/movies');

    return await response.json();
  },
);

export const updateMovieAction = createAsyncThunk(
  'updateMovie',
  async (movie: Movie) => {
    await fetch('http://localhost:4000/movies', {
      method: 'PUT',
      body: JSON.stringify(movie),
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    });
    const response = await fetch('http://localhost:4000/movies');

    return await response.json();
  },
);

export const deleteMovieAction = createAsyncThunk(
  'deleteMovie',
  async (id: number) => {
    await fetch(`http://localhost:4000/movies/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    });
    const response = await fetch('http://localhost:4000/movies');

    return await response.json();
  },
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    select(state, action: PayloadAction<Movie | undefined>) {
      state.selectedMovie = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMoviesAction.fulfilled, (state, action) => {
      state.movies = action.payload.data;
      state.moviesCount = action.payload.totalAmount;
    }),
      builder.addCase(addMovieAction.fulfilled, (state, action) => {
        state.movies = action.payload.data;
        state.moviesCount = action.payload.totalAmount;
      }),
      builder.addCase(updateMovieAction.fulfilled, (state, action) => {
        state.movies = action.payload.data;
        state.moviesCount = action.payload.totalAmount;
      }),
      builder.addCase(deleteMovieAction.fulfilled, (state, action) => {
        state.movies = action.payload.data;
        state.moviesCount = action.payload.totalAmount;
      });
  },
});

export const { select } = moviesSlice.actions;
export default moviesSlice;
