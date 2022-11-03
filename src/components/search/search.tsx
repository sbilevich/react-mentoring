import { OkButton } from "components/ok-button/ok-button";
import React from "react";
import styles from "./search.module.scss";

export const Search = () => {
  const placeholder = "What do you want to watch?";
  return (
    <div className={styles.searchWrapper}>
      <input type="text" className={styles.input} placeholder={placeholder} />
      <OkButton text="Search"/>
    </div>
  );
};
