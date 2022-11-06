import { AppButton } from 'components/app-button/app-button';
import styles from './search.module.scss';

const placeholder = 'What do you want to watch?';

export const Search = () => {
  const handleClick = () => {
    console.log('search');
  };
  return (
    <div className={styles.searchWrapper}>
      <input type="text" className={styles.input} placeholder={placeholder} />
      <AppButton text="Search" onButtonClick={handleClick} />
    </div>
  );
};
