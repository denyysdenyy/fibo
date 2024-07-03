import React from 'react'
import styles from './Callback.module.scss'
import Tel from './number/Tel'

const Callback = () => {
  return (
    <div className={styles.callback}>
    <button className={styles.callback__btn} > Замовити дзвінок</button>
    <Tel/>

  </div>
  )
}

export default Callback