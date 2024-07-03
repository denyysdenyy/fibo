import React from "react";
import styles from "./contact.module.scss";
import Tel from "../../components/UI/callback/number/Tel";

const Contact = () => {
  return (
    <main>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d560.1446671522021!2d30.49635391130432!3d50.44426540355663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1719990958389!5m2!1sru!2sua"
          width="1100"
          height="322"
          loading="lazy"
        ></iframe>
        <Tel />
        <p>вул. Харківська, 1</p>
        <p>Доставка и самовывоз 10:00 — 23:00</p>
      </section>
    </main>
  );
};

export default Contact;
