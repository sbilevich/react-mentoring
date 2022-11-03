import { useState } from "react";
import styles from "./menu.module.scss";

export const Menu = () => {
  const menu = ["all", "documentary", "comedy", "horror", "crime"];
  const sortOptions = ["Release date", "Title"];

  const [selectedMenu, setSelectedMenu] = useState("all");
  
  return (
    <div className={styles.menuWrapper}>
      <nav className={styles.menuItems}>
        {menu.map((item) => {
            const active = item === selectedMenu
            return (
                <div key={item} className={`${styles.menuItem} ${active ? styles.active : ''}`} onClick={(e) => setSelectedMenu(item)}>{item}</div>
            );
        })}
      </nav>
      <div className={styles.sorting}>
        <div className={styles.sortBy}>Sort by</div>
        <select className={styles.sortSelect}>
          {sortOptions.map((option) => (
            <option key={option} value={option} className={`${styles.option} `}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
