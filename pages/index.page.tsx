import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from './components/Banner'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jon Prell Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner />
        {/* About */}
        {/* Skills */}
        {/* Experience */}
        {/* Examples */}
        {/* Contact */}
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
