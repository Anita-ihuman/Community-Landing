import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h1 className={styles.title}>
          <a href="/">Gravity</a>
        </h1>
        <div className={styles.menu}>
          <a href="/">Features</a>
          <a href="/"> Pricing</a>
          <a href="/">Why Gravity</a>
          <a href="/">Sign In</a>
        </div>
      </nav>

      <main className={styles.main}>
        <img src="/img.png" alt="Logo" className={styles.img} />
        <div>
          <h2>Simply time tracking Powerful reporting</h2>
          <p>
            Turn your team on to productivituy with Gravity the time tracker
          </p>
          <button>Request early access</button>
        </div>
      </main>

      <footer className={styles.footer}>
        Recreated by <p>Anita Ihuman</p>
      </footer>
    </div>
  );
}
