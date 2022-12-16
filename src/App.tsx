import { FooterComponent } from 'components/footer-component/footer-component';
import { HeaderComponent } from 'components/header-component/header-component';
import { MoviesComponent } from 'components/movies-component/movies-component';
import { NotFound } from 'components/not-found/not-found';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { store } from 'redux/store';

import styles from './App.module.scss';

function App() {
  const searchPage = (
    <div className={styles.App}>
      <HeaderComponent />
      <MoviesComponent />
      <FooterComponent />
    </div>
  );

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/">
            <Route path="search">
              <Route index element={searchPage} />
              <Route path=":searchQuery" element={searchPage} />
            </Route>
            <Route index element={<Navigate to="/search" />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
