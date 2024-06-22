import React, { useState } from 'react'
import styles from './basket.module.scss'
const Basket = () => {
  const [openBasket,setBasketOpen] = useState(0)
 
  return (
    <div className={styles.basket}>Кошик  <span></span> {openBasket} </div>
  )
}

export default Basket