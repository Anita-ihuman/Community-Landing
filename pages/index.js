import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Nav from "../pages/main/nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>
        <img src="/img.png" alt="Logo" className={styles.img} />
        <div className={styles.title}>
          <h2>Simply time tracking. Powerful reporting.</h2>
          <p>
            Turn your team on to productivituy with Gravity the time tracker
          </p>
          <button className={styles.btn}>Request early access</button>
        </div>
        <img src="/img.png" alt="Logo" className={styles.img2} />
      </main>

      <footer className={styles.footer}>
        Recreated by <p>Anita Ihuman</p>
      </footer>
    </div>
  );
}
