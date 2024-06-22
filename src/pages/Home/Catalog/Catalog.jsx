import React from "react";
import styles from "./catalog.module.scss";
import cheese from "../../../assets/img/pizza/5cheese.png";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../../../components/UI/Loading/Loading";

const dbPizzas = "http://localhost:3000/pizzas";

async function fetchCard() {
  const { data } = await axios.get(dbPizzas);
  return data;
}

const Catalog = () => {
  const { data, isLoading, isError } = useQuery("pizza", fetchCard);
  if (isLoading) return <Loading/>
  if (isError) return <div>Error loading data</div>;
  return (
    <section className={styles.catalog}>
      <div className={styles.catalog__cards}>
        {data.map((card) => (
          <div key={card.id} className={styles.catalog__card}>
            {card.new ? true : <div className={styles.catalog__new}>NEW!</div>}
            <img src={cheese} alt="product" />
            <h4 className={styles.catalog__card__title}>{card.name}</h4>
            <p className={styles.catalog__card__subtitle}>{card.subtitle}</p>
            <div className={styles.catalog__card__bottom}>
              <p className={styles.catalog__card__price}>{card.price}₴</p>
              <button className={styles.catalog__card__btn}>У корзину</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Catalog;
