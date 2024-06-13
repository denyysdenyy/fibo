import React from "react";
import Container from "../container/Container";
import styles from "./Footer.module.scss";
import logo from "../../assets/img/logo.png";
import Callback from "../UI/callback/Callback";
const Footer = () => {
  const links = [
    {
      name: "YouTube",
      link: "https://www.youtube.com/?app=desktop&hl=ru",
      id: "1",
    },
    {
      name: "Instagram",
      link: "#",
      id: "2",
    },
    {
      name: "Facebook",
      link: "#",
      id: "3",
    },
    {
      name: "Glovo",
      link: "#",
      id: "4",
    },
  ];

  return (
    <Container>
      <footer className={styles.footer}>
        <div className={styles.footer__body}>
          <img className={styles.footer__logo} src={logo} alt="Fibo" />
          <div className={styles.footer__links}>
            <a href="#">Калорійність та склад</a>
            <a href="#">Правова інформація</a>
          </div>
          <h4 className={styles.footer__title}>Ми у соцмережах</h4>
          <div className={styles.footer__contact}>
            <ul className={styles.footer__info}>
              {links.map((link) => (
                <li key={link.id}>
                  <a className={styles.footer__social} href={link.link}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className={styles.footer__adress}>м.Київ вул. Харківська, 1</p>
          </div>
          <p className={styles.footer__copyrights}>Всі права захищені © 2024</p>
        </div>
        <Callback />
      </footer>
    </Container>
  );
};

export default Footer;
