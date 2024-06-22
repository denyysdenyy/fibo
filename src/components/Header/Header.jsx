import logo from "../../assets/img/logo.png";
import Callback from "../UI/callback/Callback";
import Container from "../container/Container";
import styles from "./header.module.scss";
import { Nav } from "./Nav/Nav";
import Auth from "../Auth/Auth";
const Header = () => {
  
  return (
    <Container>
      <header className={styles.header}>
        <div className={styles.header__body}>
          <img className={styles.header__logo} src={logo} alt="fibo" />
          <div className={styles.header__details}>
            <p className={styles.header__city}>
              Доставка пасти <span>Київ</span>{" "}
            </p>
            <div className={styles.header__plus}>
              <p className={styles.header__reviews}>
                Glovo <span></span> 4.8
              </p>
              <p className={styles.header__reviews}>
                Час доставки <span></span> від 31 хвилини.
              </p>
            </div>
          </div>
          <Callback />
        </div>
        <Nav />
      </header>
    </Container>
  );
};

export default Header;
