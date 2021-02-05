import React, { useState } from "react";
import styles from "../styles/nav.module.scss";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const onClick = () => setNavOpen(true);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };
  const renderClasses = () => {
    let classes = "menu";
    if (navOpen) {
      // classes += { Results };
    }

    return classes;
  };

  return (
    <>
      <nav className={styles.nav}>
        <p className={styles.header}>
          <img src="/Logo.png" alt="Logo" />
        </p>

        <ul
          className={styles.menu}
          // style={{
          //   transform: navOpen ? "translateX(0px)" : "translateX(-700px)",
          // }}
        >
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
            <span className={styles.special}>
              <a href="/">Sign In</a>
            </span>
          </li>
        </ul>
        <div className={styles.toggle} onClick={handleNavToggle}>
          <button className={styles.bars} onClick={() => setNavOpen}>
            <img src="/dots.png" alt="Logo" />
            <span>Menu</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
