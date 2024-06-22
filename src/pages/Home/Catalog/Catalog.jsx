import React from "react";
import styles from "./catalog.module.scss";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../../../components/UI/Loading/Loading";
import Card from "./Card/Card";

const dbPizzas = "http://localhost:3000/pizzas";

async function fetchCard() {
  const { data } = await axios.get(dbPizzas);
  return data;
}

const Catalog = () => {
  const { data, isLoading, isError } = useQuery("pizza", fetchCard);

  if (isLoading) return <Loading />;
  if (isError) return console.log('Error data');


  return (
    <section className={styles.catalog}>
      <div className={styles.catalog__cards}>
        <Card cards={data} />
      </div>
    </section>
  );
};

export default Catalog;
