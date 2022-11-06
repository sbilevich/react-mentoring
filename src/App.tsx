import { FooterComponent } from "components/footer-component/footer-component";
import { HeaderComponent } from "components/header-component/header-component";
import { MoviesComponent } from "components/movies-component/movies-component";
import styles from "./App.module.scss";

function App() {
  return <div className={styles.App}>
    <HeaderComponent />
    <MoviesComponent />
    <FooterComponent />
  </div>;
}

export default App;
