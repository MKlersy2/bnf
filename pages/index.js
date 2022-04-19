import Head from 'next/head'
import styles from '../styles/Home.module.css';
import homepage from '../styles/homepage.module.css';
import Casque from '../components/svg/casque';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bancs sonores - BNF</title>
        <meta name="description" content="Bancs sonores application - BNF" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} index`}>
        <video className={homepage.vynil} autoPlay loop muted>
          <source src="/video/vynil.mp4" />
        </video>
        <div className={`${homepage.global} ${styles.displayFlex}`}>
          <div className={homepage.title}>
            <div className={`${styles.displayFlex} ${homepage.rowTitle}`}>
              <div className={homepage.col}></div>
              <div className={homepage.col}>Collections</div>
              <div className={homepage.col}></div>
            </div>
            <div className={`${styles.displayFlex} ${homepage.rowTitle}`}>
              <div className={homepage.col}></div>
              <div className={homepage.col}>sonores</div>
              <div className={homepage.col}></div>
            </div>
          </div>
          <div className={`${homepage.subtitle} ${styles.displayFlex}`}>
            <div className={homepage.subIcon}><Casque/></div>
            <div className={homepage.subText}>Prenez un casque</div>
          </div>
          <Link href={'/menu?referrer=index'} passHref>
            <div className={`${styles.button} ${homepage.button}`}>Commencer</div>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
