import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>JumpStarter</title>
        <meta name="description" content="Lets JumpStart projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to JumpStarter!</h1>

        <p className={styles.description}>
          JumpStarter is a platform for people to jumpstart their projects, way
          better than kicking. Join today!
        </p>

        <div className={styles.grid}>
          <a href="/create" className={styles.card}>
            <h2>Create a new project</h2>
          </a>

          <a></a>

          <a href="/discover" className={styles.card}>
            <h2>Discover</h2>
          </a>
          <a href="/login" className={styles.card}>
            <h2>Login</h2>
          </a>

          <a></a>

          <a href="/signup" className={styles.card}>
            <h2>Signup</h2>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>Built by Team Blend 😎</footer>
    </div>
  );
};

export default Home;
