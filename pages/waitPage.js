import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import homepage from '../styles/homepage.module.css';
import waiting from '../styles/waiting.module.css';
import WaitScript from './script/wait';

export default function Wait() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <Head>
            <title>Page d&apos;inactivité</title>
            <meta name="description" content="Page d'attente en cas d&apos;inactivité" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <video className={homepage.vynil} autoPlay loop muted>
                <source src={process.env.basePath + "/video/vynil.mp4"} />
            </video>
            <main className={`${styles.main} index`} onClick={() => router.back()}>
                <div className={waiting.global}>
                    <div className={waiting.barre}></div>
                    <div className={waiting.texte}>Touchez l&apos;écran ou votre consultation va s&apos;arrêter</div>
                    <div className={waiting.barre}></div>
                </div>
            </main>
            <WaitScript/>
        </div>
    )
}