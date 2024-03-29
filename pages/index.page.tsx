import type { NextPage } from 'next'
import Head from 'next/head'
import About from './components/About'
import Banner from './components/Banner'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Navigation from './components/navigation/Navigation'
import Skills from './components/Skills'
import Connect from './components/Connect'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jon Prell Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <Banner />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Connect />
      </main>
      <Footer />
    </div>
  )
}

export default Home
