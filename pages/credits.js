import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import homepage from '../styles/homepage.module.css';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Head from 'next/head'
import credits from '../styles/credits.module.css'
import WaitCount from './script/waitCount';
import Link from 'next/link';

export default function Credits() {
    const [dataCredit, setCredits] = useState([])
    const [detailsCredit, setDetails] = useState([])
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`
    }
    async function fetchCredits() {
        const request = await fetch(`${process.env.HOSTNAME}requestList.php?f=list`);
        const data = await request.json()
        console.log(data[data.length - 1].details)
        setCredits(data[data.length - 1]);
        setDetails(data[data.length - 1].details);
    }


    useEffect(() => {
        fetchCredits();
    }, [])
    return (
        <div className={styles.container}>
            <Head>
                <title>Page de crédits</title>
                <meta name="description" content="Page de crédits" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <video className={homepage.vynil} autoPlay loop muted>
                <source src={process.env.basePath + "/video/vynil.mp4"} />
            </video>
            <main className={`${styles.main} wait ${credits.global}`}>
                <div className={credits.global}>
                    {detailsCredit.map((data, index) => (
                        <div className={credits.subGlobal} key={index}>
                            <div className={credits.topSide}>
                                <div className={credits.barre}></div>
                                <div className={`${credits.texte} ${credits.title}`}>{data.title}</div> 
                            </div>
                            {data.content.map((dataDetail, indexDetail) => (
                                <div className={credits.globalDetail} key={indexDetail}>
                                    <div className={credits.subTitle}>
                                        {dataDetail.title}
                                    </div>
                                    <div className={credits.desc}>
                                        {dataDetail.desc}
                                    </div>
                                </div>
                            ))}
                            <div className={`${credits.globalLogo} ${credits.globalDetail}`}>
                                {data.logo.map((dataLogo, indexLogo) => (
                                    <div className={credits.subGlobalLogo} key={indexLogo}>
                                        <Image loading="eager" loader={myLoader} src={process.env.HOST_FILES + 'logo/' + dataLogo.url} width={dataLogo.width} height={dataLogo.height} alt={dataLogo.url}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <Link passHref href={'/menu?referer=son'}>
                    <div className={credits.close}>  
                        <svg width="31px" height="31px" viewBox="0 0 31 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-igy1u70qe6-1">
                                    <stop stopColor="#667187" offset="0%"></stop>
                                    <stop stopColor="#557997" offset="53.6458%"></stop>
                                    <stop stopColor="#475C90" offset="100%"></stop>
                                </linearGradient>
                                <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-igy1u70qe6-2">
                                    <stop stopColor="#667187" offset="0%"></stop>
                                    <stop stopColor="#557997" offset="53.6458%"></stop>
                                    <stop stopColor="#475C90" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="pictoMoyen-croix" transform="translate(2.000000, 2.000000)" strokeWidth="3">
                                    <line x1="0" y1="0" x2="27" y2="27" id="Path" stroke="url(#linearGradient-igy1u70qe6-1)"></line>
                                    <line x1="27" y1="0" x2="0" y2="27" id="Path" stroke="url(#linearGradient-igy1u70qe6-2)"></line>
                                </g>
                            </g>
                        </svg>
                    </div>
                </Link><WaitCount/>
            </main>
        </div>
    )
}   