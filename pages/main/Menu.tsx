import React, { useState } from "react";
import styles from "./nav.module.scss";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };
  const renderClasses = () => {
    let classes = "menu";
    if (navOpen) {
      classes += "active";
    }
    return classes;
  };
  return (
    <>
      <nav className={styles.nav}>
        <h1 className={styles.header}>
          <a href="/">Gravity</a>
        </h1>

        <ul className={styles.menu}>
          <li className={styles.link}>
            <a href="/">Features</a>
          </li>
          <li className={styles.link}>
            <a href="/"> Pricing</a>
          </li>
          <li className={styles.link}>
            <a href="/">Why Gravity</a>
          </li>
          <li className={styles.link}>
            <a href="/">Sign In</a>
          </li>
        </ul>
        <div className={styles.toggle} onClick={handleNavToggle}>
          <button className={styles.bars}>
            <img src="/dots.png" alt="Logo" />
          <span>MENU</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
