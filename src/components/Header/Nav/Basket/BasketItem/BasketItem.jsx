import React from "react";
import styles from "./basketItem.module.scss";
import itemImg from "../../../../../assets/img/pizza/5cheese.png";

const BasketItem = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <img src={itemImg} alt="" />
          <div className={styles.item__info}>
            <p className={styles.item__title}>{item.name}</p>
            <div className={styles.item__count}>
              <button className={styles.item__btn}>-</button>
              <p className={styles.item__value}>{item.count}</p>
              <button className={styles.item__btn}>+</button>
            </div>
          </div>
          <div className={styles.item__action}>
            <button className={styles.item__delete}>
              <span></span>
              <span></span>
            </button>
            <p className={styles.item__price}>{item.price}₴</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BasketItem;
