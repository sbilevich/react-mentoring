import movie1 from '../assets/Movie1.jpg';

export const mockMovies = Array(6)
  .fill({
    img: movie1,
    title: 'Pulp Fiction',
    year: 2004,
    rating: 4.3,
    duration: '154 min',
    shortDescription: 'Action & Adventure',
    description:
      'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
  })
  .map((movie) => ({ ...movie, id: Math.floor(Math.random() * 6) }));
