import React, { FC } from "react";
import styles from "./app-button.module.scss";

interface AppButtonProps {
  text: string;
  onButtonClick: () => void;
}

export const AppButton: FC<AppButtonProps> = ({
  text = "ok",
  onButtonClick,
}) => (
  <button className={styles.button} onClick={onButtonClick}>
    {text}
  </button>
);
