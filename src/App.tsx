import { FooterComponent } from 'components/footer-component/footer-component';
import { HeaderComponent } from 'components/header-component/header-component';
import { MoviesComponent } from 'components/movies-component/movies-component';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Provider store={store}>
        <HeaderComponent />
        <MoviesComponent />
      </Provider>
      <FooterComponent />
    </div>
  );
}

export default App;
