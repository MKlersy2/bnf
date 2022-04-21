import Head from 'next/head'
import styles from '../../styles/Home.module.css';
import sons from '../../styles/sons.module.css';
import title from '../../styles/title.module.css';
import Arrow from '../../components/svg/arrow';
import Link from 'next/link';
import Image from 'next/image';
import Replay from '../../components/svg/replay';
import SonIcon from '../../components/svg/son';
import Script from '../script/scriptMenu';
import WaitCount from '../script/waitCount';
import { motion } from 'framer-motion'
import { launchMusic, stopMusic, retour, stopQuitMusic } from '../script/musicPlayer';
import MusicPlayer from '../script/musicPlayer';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Son({nameCollection, collectionSon}) {
    const router = useRouter();
    useEffect(() => {
        router.events.on('routeChangeComplete', () => {
            stopQuitMusic()
        })
        return () => {
            router.events.off('routeChangeComplete', () => {
                console.log('on quitte')
            })
        };
    }, [router.events]);
    const titre = nameCollection;
    const variants = {
        hidden: { opacity: 0, x: 200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: -200, y: 0 },
    }
    const variants2 = {
        hidden: { opacity: 0, x: 0, y: -100 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 1, x: 0, y: +100 },
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Son dans la collection</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={sons.global}>
                    <div className={title.global}>
                        <div className={`${title.subGlobal} ${styles.displayFlex}`}>
                            <div className={title.barre}></div>
                            <motion.div                                 
                                initial="hidden"
                                animate="enter"
                                exit="exit"
                                variants={variants2}
                                transition={{ type: 'linear' }}
                                className={title.title}>{titre}</motion.div>
                        </div>
                    </div>
                    <motion.div
                        initial="hidden"
                        animate="enter"
                        exit="exit"
                        transition={{ type: 'linear' }}
                        variants={variants}
                        className={`${sons.subGlobal} ${styles.displayFlex}`}>
                        {collectionSon.map((collectionSon, index) => (
                            <div id={`player`+index} key={index} className={`${sons.playerGlobal}`}>
                                <div className={sons.playerSubGlobal}>
                                    <div className={sons.globalDisplay}>
                                        <div id={`bigPlayGlobal` + index} className={`${sons.playerLaunch}`}onClick={() => launchMusic('/'+collectionSon.url, index)} >
                                            <div id={`bigPlay` + index} className={`${sons.play}`}>
                                                <Image width={67} height={80} src={'/icon/bigplay.svg'} alt={'Gros bouton play'}/>
                                                {/* <BigPlay/> */}
                                            </div>
                                        </div>
                                        <Image src={`/image/${collectionSon.img}`} width={700} height={700} alt={collectionSon.desc}/>
                                    </div>
                                    <div className={sons.playerButton}>
                                        <div className={sons.progressPlayer}>
                                            <div className={sons.playerProgressBar}></div>
                                            <div className={sons.playerProgressButton}></div>
                                        </div>
                                        <div className={`${sons.actionsPlayer} ${styles.displayFlex}`}>
                                            <div className={sons.backPlayer} onClick={() => retour(index)}><Replay/></div>
                                            <div id={`play` + index} onClick={() => launchMusic('/'+collectionSon.url, index)} className={sons.playPlayer}><Image width={23} height={26} src={'/icon/start.svg'} alt={'Petit bouton play'}/></div>
                                            <div id={`pause` + index} onClick={() => stopMusic()} className={`${sons.pausePlayer} toggle`}><Image width={23} height={27} src={'/icon/pause.svg'} alt={'Bouton pause'}/></div>
                                            <div className={sons.puissancePlayer}>
                                                <div className={sons.puissanceIcon}><SonIcon/></div>
                                                <div className={sons.puissanceGlobal}>
                                                    <div className={sons.puissancePlayerBg}>
                                                        <div className={sons.playerPuissanceBar}></div>
                                                        <div className={sons.playerPuissanceButton}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={sons.description}>
                                    <div className={sons.titre}>{collectionSon.name}</div>
                                    <div className={sons.desc}>{collectionSon.desc}</div>
                                    <div className={sons.subDesc}>{collectionSon.subDesc}</div>
                                    <div className={sons.cote}>{collectionSon.cote}</div>
                                    <div className={sons.prov}>Prov. : {collectionSon.provenance}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    <Link passHref href={'/menu?referer=son'}>
                        <div className={`${sons.retour} ${styles.displayFlex} ${styles.buttonScale}`}><Arrow/></div>
                    </Link>
                    <div className={sons.progressBar}>
                        <div className={sons.progress}></div>
                    </div>
                </div>
                <Script/>
                <WaitCount/>
                <MusicPlayer/>
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query
    const reference = id;
    const res = await fetch(`https://bnf.vercel.app/api/collection`, {
        headers: { Accept: "application/json" },
    })
    const collectionSons = await res.json()
    const collectionSon = collectionSons[reference].sons;
    const nameCollection = collectionSons[reference].name;
    return{props:{nameCollection, collectionSon}}
}