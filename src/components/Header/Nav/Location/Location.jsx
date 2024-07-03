import React, { useState } from "react";
import styles from "./location.module.scss";

const Location = ({ selectLoc,city }) => {
  const cities = ["Київ", "Харків", "Львів", "Полтава"];


  const handleCitySelect = (city)=>{
    selectLoc(city)
  }
  return (
    <div className={styles.location}>
      <ul  className={styles.list}>
        {cities.map((city, index) => (
          <li onClick={()=> handleCitySelect(city)}  key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
};

export default Location;
