import Head from 'next/head'
import styles from '../styles/Home.module.css';
import menu from '../styles/menu.module.css';
import title from '../styles/title.module.css';
import Image from 'next/image';
import Link from 'next/link';
import WaitCount from './script/waitCount';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Menu({collection}) {

    const { query } = useRouter();
    const referer = query.referer;
    if(referer == 'son') {
        var variants = {
            hidden: { opacity: 0, x: -200, y: 0 },
            enter: { opacity: 1, x: 0, y: 0 },
            exit: { opacity: 1, x: -200, y: 0 },
        }
        var ordre = 'neg';
    } else {
        var variants = {
            hidden: { opacity: 0, x: 200, y: 0 },
            enter: { opacity: 1, x: 0, y: 0 },
            exit: { opacity: 1, x: -200, y: 0 },
        }
        var ordre = 'pos';
    }


    const variants2 = {
        hidden: { opacity: 0, x: 0, y: -100 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 1, x: 0, y: 0 },
    }

    return (
        <div className={styles.container}>
            <Head>
            <title>Les collections sonores</title>
            <meta name="description" content="Liste des collections sonores" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className={`${styles.main}`}>
                <div className={menu.global}>
                    <div className={title.global}>
                        <div className={`${title.subGlobal} ${styles.displayFlex}`}>
                            <div className={title.barre}></div>
                            <motion.div
                                initial="hidden"
                                animate="enter"
                                exit="exit"
                                variants={variants2}
                                transition={{ type: 'linear' }}
                                className={title.title}>Collections sonores</motion.div>
                        </div>
                        <div className={title.subTitle}>Choisissez un thème</div>
                    </div>
                    <div className={menu.liste}>
                        {collection.map((collection, index) => (
                            // const val = index*ordre
                            <Link passHref key={index} href={'/sons/' + collection.reference}>
                                <motion.div 
                                initial="hidden"
                                animate="enter"
                                exit="exit"
                                variants={variants}
                                transition={{ type: 'linear', delay: defOrdre(index, ordre) }}
                                className={`${menu.subListe} ${styles.buttonScale}`}>
                                    <div className={menu.image}>
                                        <Image src={process.env.HOSTNAME + 'images/' + collection.img} width={400} height={400} alt={collection.name}/>
                                    </div>
                                    <div className={menu.filtreColor}></div>
                                    <div className={menu.filtreNoir}></div>
                                    <div className={menu.desc}>
                                        {collection.name}
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                    <div className={menu.credits}>Ligne Crédits</div>
                </div>
                <WaitCount/>
            </main>
            <footer className={styles.footer}>

            </footer>
        </div>
    )
}

export function defOrdre(index, ordre) {
    if(index%2) {
        return (index - 1) *0.1
    } else {
        return index *0.1
    }
}

export async function getServerSideProps() {
    const res = await fetch(process.env.HOSTNAME + `list.json`, {
        headers: { Accept: "application/json" },
    })
    const collection = await res.json()
    console.error(collection)
    return{props:{collection}}
}