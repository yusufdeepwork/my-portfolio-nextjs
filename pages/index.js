import Head from 'next/head'
import Image from 'next/image'
import React from "react";
import styles from '../styles/Home.module.scss'
import photo from '../public/images/photo.jpeg';
import { motion } from "framer-motion";
import { Blob } from 'react-blob'
import Link from 'next/link'
export default function Home() {
    const [isActive, setIsActive] = React.useState(false);
  return (
      <>
       <Head>
         <title>Yusuf Tanrıkulu</title>
        <meta name="description" content="Yusuf Tanrıkulu" />
       <link rel="icon" href="/favicon.ico" />
       </Head>

        <div className={styles.container} >
            <div className={styles.leftContainer}>
                <Link href="/projects"><text>My Projects</text></Link>
               </div>
            <div className={styles.profile}>
                <motion.img src={photo}  animate={{ scale: 2.5 }}
                                   transition={{ duration: 5 }}/>
                                   <text> Yusuf Tanrıkulu</text>
                <text> Software Developer & Computer Engineering Student who has so curious and energetic✨</text>
               <text>Don’t hesitate to contact me</text>
            </div>
            <div className={styles.rightContainer}><Link href="/blog"><text>Blog</text></Link></div>
        </div>
      </>
      // {/*<main className={styles.main}>*/}
      // {/*  <h1 className={styles.title}>*/}
      // {/*    Welcome to my profile*/}
      // {/*  </h1>*/}
      //
      // {/*  <div className={styles.grid}>*/}
      //
      // {/*    <a href="https://github.com/yusufdeepwork" className={styles.card}>*/}
      // {/*      <Image src={photo} width={100} height={100}/>*/}
      // {/*      <h2>Look my projects & enjoy </h2>*/}
      // {/*      <p>I'm Yusuf, I improve myself for produce well jobs. </p>*/}
      // {/*    </a>*/}
      //
      //
      //
      // {/*  </div>*/}
      // {/*</main>*/}

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <span className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </span>
    //     </a>
    //   </footer>
    // </div>
  )
}
