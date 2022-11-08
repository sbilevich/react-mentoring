import { AppButton } from 'components/app-button/app-button';
import styles from './add-movie-button.module.scss';

interface Props {
  onAddClick: () => void;
}

export const AddMovieButton = ({ onAddClick }: Props) => (
  <AppButton text="+ Add Movie" onButtonClick={onAddClick} />
);
