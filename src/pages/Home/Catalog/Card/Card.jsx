import React from 'react';
import styles from "./card.module.scss";
import pizza from '../../../../assets/img/pizza/5cheese.png'

const Card = ({ cards }) => {
  return (
    <>
      {cards.map((card) => (
        <div key={card.id} className={styles.card}>
          {card.new ? true : <div className={styles.card__new} > NEW!</div>}
          <img src={pizza} alt={card.name} className={styles.card__img} />
          <h4 className={styles.card__title}>{card.name}</h4>
          <p className={styles.card__subtitle}>{card.subtitle}</p>
          <div className={styles.card__bottom}>
            <p className={styles.card__price}>{card.price}₴</p>
            <button className={styles.card__btn}>У корзину</button>
          </div>
        </div>
      ))}
    </>
  )
};

export default Card;
