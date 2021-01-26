import React from "react";
import styles from "./nav.module.scss";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <h1 className={styles.header}>
          <a href="/">Gravity</a>
        </h1>

        <div className={styles.menu}>
          <a href="/" className={styles.link}>
            Features
          </a>

          <a href="/" className={styles.link}>
            Pricing
          </a>

          <a href="/" className={styles.link}>
            Why Gravity
          </a>

          <a href="/" className={styles.link}>
            Sign In
          </a>
        </div>

        <div className={styles.toggle}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
