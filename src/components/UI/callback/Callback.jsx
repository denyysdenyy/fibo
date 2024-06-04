import React from 'react'
import styles from './Callback.module.scss'

const Callback = () => {
  return (
    <div className={styles.callback}>
    <button className={styles.callback__btn} > Замовити дзвінок</button>
    <a className={styles.callback__tel} href="tel:#">380 068 111-22-33</a>
  </div>
  )
}

export default Callback