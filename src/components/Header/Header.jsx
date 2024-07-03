import logo from "../../assets/img/logo.png";
import Callback from "../UI/callback/Callback";
import Container from "../container/Container";
import styles from "./header.module.scss";
import { Nav } from "./Nav/Nav";
import Auth from "../Auth/Auth";
import { Link } from "react-router-dom";
import Location from "./Nav/Location/Location";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Header = () => {
  const [changeLoc, setChangeLoc] = useState(false)
  const [selectedCity,setSelectedCity]= useState('Kyiv')


  const toogleLoc = () => {
    setChangeLoc(!changeLoc);
  };

  const handleCitySelect = (city)=>{
    setSelectedCity(city)
    setChangeLoc(false) // Закрытие location при выборе города
  }

  return (
    <Container>
      <header className={styles.header}>
        <div className={styles.header__body}>
          <Link to={"/"}>
            <img className={styles.header__logo} src={logo} alt="fibo" />
          </Link>
          <div className={styles.header__details}>
            <p className={styles.header__city}>
              Доставка пасти <span onClick={toogleLoc}>{selectedCity }</span>
            </p>
            {changeLoc && <Location selectLoc={handleCitySelect}/> }
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
