import { mockMovies } from 'mocks/movies';
import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Movie } from 'types/movie';

interface ContextValue {
  movies?: Movie[];
  selectedMovie?: Movie;
  setSelectedMovie: Dispatch<SetStateAction<Movie | undefined>>;
}

const MovieContext = React.createContext<ContextValue | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const MovieContextProvider: FC<ProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(
    undefined,
  );

  useEffect(() => {
    setMovies(mockMovies);
  }, []);

  const value = useMemo<ContextValue>(
    () => ({
      movies,
      selectedMovie,
      setSelectedMovie,
    }),
    [movies, selectedMovie],
  );

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);

  if (context === undefined) {
    throw new Error(
      'useMovieContext must be used within a MovieContextProvider',
    );
  }

  return context;
};
