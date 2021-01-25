import React from 'react'
import styles from "./nav.module.scss";

 const Home: React.FC = () => {
  return (
    
    <nav className={styles.nav}>
      <h1 className={styles.header}>
        <a href="/">Gravity</a>
      </h1>
      <div className={styles.menu}>
        <a href="/">Features</a>
        <a href="/"> Pricing</a>
        <a href="/">Why Gravity</a>
        <a href="/">Sign In</a>
      </div>
    </nav>
  )
 }
export default Home;