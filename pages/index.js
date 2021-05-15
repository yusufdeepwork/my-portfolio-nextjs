import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import photo from '../public/images/photo.jpeg';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yusuf Tanrıkulu</title>
        <meta name="description" content="Yusuf Tanrıkulu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my profile
        </h1>

        <div className={styles.grid}>

          <a href="https://github.com/yusufdeepwork" className={styles.card}>
            <Image src={photo} width={100} height={100}/>
            <h2>Look my projects & enjoy </h2>
            <p>I'm Yusuf, I improve myself for produce well jobs. </p>
          </a>



        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
