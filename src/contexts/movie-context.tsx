import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';
import movie1 from '../assets/Movie1.jpg';

const defaultMovies = Array(6).fill({
  img: movie1,
  title: 'Pulp Fiction',
  year: 2004,
  rating: 4.3,
  duration: '154 min',
  shortDescription: 'Action & Adventure',
  description:
    'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
});
export type Movie = {
  img: string;
  title: string;
  year: number;
  rating: number;
  duration: string;
  shortDescription: string;
  description: string;
};
interface ContextValue {
  movies: Movie[];
  selectedMovie?: Movie;
  setSelectedMovie: Dispatch<SetStateAction<Movie | undefined>>;
}

const MovieContext = React.createContext<ContextValue | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const MovieContextProvider: FC<ProviderProps> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>(defaultMovies);
  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(
    undefined,
  );

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
