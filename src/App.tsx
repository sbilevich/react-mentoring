import { FooterComponent } from 'components/footer-component/footer-component';
import { HeaderComponent } from 'components/header-component/header-component';
import { MoviesComponent } from 'components/movies-component/movies-component';
import { MovieContextProvider } from 'contexts/movie-context';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <MovieContextProvider>
        <HeaderComponent />
        <MoviesComponent />
      </MovieContextProvider>
      <FooterComponent />
    </div>
  );
}

export default App;
