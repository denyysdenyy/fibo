import React, { useEffect, useState } from "react";
import styles from "./basket.module.scss";
import BasketItem from "./BasketItem/BasketItem";
const Basket = () => {
  const items = [
    { id: 1, name: "Пепероні", price: 120, count: 1 },
    { id: 2, name: "Пепероні", price: 120, count: 1 },
  ];

  const [basketActive, setBasketActive] = useState(false);
  const [countCheck, setCountCheck] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const calcItems = () => {
    const total = items.length;
    setTotalItems(total);
  };

  const toogleActive = () => {
    setBasketActive(!basketActive);
  };

  const calcTotal = () => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    setCountCheck(total);
  };

  useEffect(() => {
    calcTotal();
    calcItems();
  }, [items]);

  return (
    <div className={styles.basket}>
      <button onClick={toogleActive} className={styles.basket__btn}>
        Кошик <span></span> {totalItems}
      </button>
      <div
        className={`${styles.basket__body} ${
          basketActive ? styles.active : ""
        }`}
      >
        {items.length == 0 ? (
          <div>Кошик пустий</div>
        ) : (
          <>
            <BasketItem items={items} />
            <div className={styles.basket__receipt}>
         <p className={styles.basket__receipt__title}>Сума заказу</p>
         <p className={styles.basket__receipt__amount}>{countCheck}₴</p>
       </div> 
          </>
        )}
      </div>
    </div>
  );
};

export default Basket;
