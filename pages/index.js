import Head from 'next/head'
import React from "react";
import styles from '../styles/Home.module.scss'
import photo from '../public/images/photo.jpeg';
import { motion } from "framer-motion";
import Typical from 'react-typical'
import Link from 'next/link'
export default function Home() {

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
                                   <text>Yusuf Tanrıkulu</text>
                <text><Typical
                    steps={['Software Developer',2000,'Computer Engineering Student',2000]}
                    loop={Infinity}
                    wrapper="p"
                />who has so curious and energetic✨</text>

                <a href="https://www.linkedin.com/in/yusuf-tanrikulu/">
                    <text>Don’t hesitate to contact me</text>
                </a>
            </div>
            <div className={styles.rightContainer}><Link href="/blog"><text>Blog</text></Link></div>
        </div>
      </>

  )
}
