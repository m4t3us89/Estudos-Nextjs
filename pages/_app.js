import Router from "next/router";
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NProgress from "nprogress";

import "../styles/globals.css";

Router.events.on("routeChangeStart", function (url) {
  console.log(`Loading: ${url}`);
  NProgress.start();
});

Router.events.on("routeChangeComplete", function () {
  NProgress.done();
});

Router.events.on("routeChangeError", function () {
  NProgress.done();
});

function App({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossorigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        ></link>
      </Head>

      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <Link href="/">
              <a>PROJETOS</a>
            </Link>
          </li>
          <li>
            <Link href="/quem-sou">
              <a>QUEM SOU ?</a>
            </Link>
          </li>
        </ul>
      </nav>

      <main className={styles.main}>
        <div id="teste"></div>
        <Component {...pageProps} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export default App;
