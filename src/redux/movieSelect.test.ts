import { mockMovie } from 'mocks/movies';
import moviesSlice, { MoviesState } from './movies';

const state: MoviesState = {
  movies: [mockMovie],
  moviesCount: 1,
};

describe('movieSelect', () => {
  test('returns correct value', () => {
    const movieState = moviesSlice.reducer(
      state,
      moviesSlice.actions.select(mockMovie),
    );
    expect(movieState.selectedMovie).toEqual(mockMovie);
  });
});
