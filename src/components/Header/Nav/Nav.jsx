import React from "react";
import styles from "./Nav.module.scss";
import Auth from "../../Auth/Auth";
import Basket from "./Basket/Basket";

export const Nav = () => {
  const links = [
    { name: "Піца", id: 1 },
    { name: "Паста", id: 2 },
    { name: "Супи", id: 3 },
    { name: "Салати", id: 4 },
    { name: "Напої", id: 5 },
    { name: "Десерти", id: 6 },
    { name: "Бакалія", id: 7 },
    { name: "Антипасти", id: 8 },
    { name: "Акції", id: 9 },
    { name: "Комбо", id: 10 },
    { name: "Контакти", id: 11 },
  ];
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__links}>
        {links.map((link) => (
          <li key={link.id}>
            <a href="#">{link.name}</a>
          </li>
        ))}
      </ul>
      <div className={styles.nav__action}>
        <Auth />
        <Basket />
      </div>
    </nav>
  );
};
