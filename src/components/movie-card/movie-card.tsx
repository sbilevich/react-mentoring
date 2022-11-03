import { FC } from "react";
import styles from "./movie-card.module.scss";

interface MovieCardProps {
  img: string;
  title: string;
  year: number;
  description: string;
}
export const MovieCard: FC<MovieCardProps> = ({
  img,
  title,
  year,
  description,
}) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="" className={styles.img} />
      <div className={styles.descriptionWrappper}>
        <div className={styles.nameWrapper}>
          <div className={styles.title}>{title}</div>
          <div className={styles.year}>{year}</div>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
