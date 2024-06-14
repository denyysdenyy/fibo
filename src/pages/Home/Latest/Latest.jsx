import React from "react";
import styles from "./latest.module.scss";
import fiveCheese from "../../../assets/img/pizza/5cheese.png";
import bbq from "../../../assets/img/pizza/bbq.png";
import margarita from "../../../assets/img/pizza/margarita.png";
import pepperoni from "../../../assets/img/pizza/pepperoni.png";

const newProducts = [
  { name: "Маргарита", price: 230, img: fiveCheese, id: 1 },
  { name: "Чотири сира", price: 250, img: bbq, id: 2 },
  { name: "Пеперонні", price: 240, img: margarita, id: 3 },
  { name: "Барбекю", price: 240, img: pepperoni, id: 4 },
];

const Latest = () => {
  return (
    <section className={styles.latest}>
      <h3 className={styles.latest__title}>Новинки</h3>
      <div className={styles.latest__cards}>
        {newProducts.map((card) => (
          <div key={card.id} className={styles.latest__card}>
            <img className={styles.latest__img} src={card.img} alt="pizza" />
            <div>
              <p className={styles.latest__card__title}>{card.name}</p>
              <p className={styles.latest__card__price}>{card.price} ₴</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Latest;
