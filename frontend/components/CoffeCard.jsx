/* Import Module */
import React from 'react'
import Image from 'next/image'
import styles from "../styles/CoffeCard.module.css"

/* Make function  */
function CoffeCard() {
  return (
    
    <div className={styles.container}>
        <Image src="/img/coffe.png" alt="" width="200" height="200" /> {/* */}
        <h1 className={styles.title}>RASA YANG PERNAH ADA</h1>
        <span className={styles.price}>10k</span>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  )
}

export default CoffeCard // melakukan export suapaya dapat digunakan di file lain
