import React from "react";
import styles from "./nav.module.scss";
import Auth from "../../Auth/Auth";
import Basket from "./Basket/Basket";
import { Link } from "react-router-dom";

export const Nav = () => {
  const links = [
    { name: "Піца", id: 1, path: '/' },
    { name: "Паста", id: 2,path: '/'  },
    { name: "Супи", id: 3,path: '/'  },
    { name: "Салати", id: 4,path: '/'  },
    { name: "Напої", id: 5,path: '/'  },
    { name: "Десерти", id: 6,path: '/'  },
    { name: "Бакалія", id: 7,path: '/'  },
    { name: "Антипасти", id: 8,path: '/'  },
    { name: "Акції", id: 9,path: '/'  },
    { name: "Комбо", id: 10,path: '/'  },
    { name: "Контакти", id: 11,path:'Contact'  },
  ];
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__links}>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path} >{link.name}</Link>
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
