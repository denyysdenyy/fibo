import React, { useState } from "react";
import styles from "./basket.module.scss";
import BasketItem from "./BasketItem/BasketItem";
const Basket = () => {
  const [basketActive, setBasketActive] = useState(false);

  const toogleActive = () => {
    setBasketActive(!basketActive)
  };

  const items = [
    { id: 1, name: "Пепероні", price: 120, count: 1 },
    { id: 2, name: "Пепероні", price: 120, count: 1 },
  ];

  return (
    <div className={styles.basket}>
      <button onClick={toogleActive} className={styles.basket__btn}>
        Кошик <span></span>
      </button>
      <div className={`${styles.basket__body} ${basketActive ? styles.active : ''}`}>
        <BasketItem items={items} />
        <div className={styles.basket__receipt}>
          <p className={styles.basket__receipt__title}>Сума заказу</p>
          <p className={styles.basket__receipt__amount}>₴</p>
        </div>
      </div>
    </div>
  );
};

export default Basket;
