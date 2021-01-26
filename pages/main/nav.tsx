import React, { useState, useRef } from "react";
import styles from "./nav.module.scss";



interface NavProps {
  text: string;
  option: boolean;
  units: number;
}

const menu: React.FC<NavProps> = () => {
  const [count, setCount] = useState(false);
  const [selector, setSelector] = useState(false);
  const toggle = () => setCount(!count);

  const handleClick = () => setCount(!count);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setSelector(false);
    } else {
      setSelector(true);
    }
  };
  return (
    <>
      <nav className={styles.nav}>
        <h1 className={styles.header}>
          <a href="/">Gravity</a>
        </h1>
        <div onClick={handleClick}>
          <p className={styles.toggle}>menu </p>
        </div>

        <div
          className={count ? "nav-menu active" : "nav-menu"}
          onMouseEnter={onMouseEnter}
        >
          <a href="/">Features</a>
          <a href="/"> Pricing</a>
          <a href="/">Why Gravity</a>
          <a href="/">Sign In</a>
        </div>
      </nav>
    </>
  );
};

export default menu;
