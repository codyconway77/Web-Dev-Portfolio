import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'
import HtmlIcon from '../public/icons/html5.svg'
import CssIcon from '../public/icons/css3.svg'
import JavascriptIcon from '../public/icons/js.svg'
import TypescriptIcon from '../public/icons/ts.svg'
import ReactIcon from '../public/icons/react.svg'
import NextIcon from '../public/icons/next.svg'
import SassIcon from '../public/icons/sass.svg'
import TailwindIcon from '/public/icons/tailwind.svg'
import NodeIcon from '../public/icons/node.svg'
import ExpressIcon from '../public/icons/express.svg'
import MongoIcon from '../public/icons/mongodb.svg'
import PostgresIcon from '../public/icons/postgresql.svg'
import GithubIcon from '../public/icons/github.svg'
import LinkedInIcon from '../public/icons/linkedin.svg'
import TwitterIcon from '../public/icons/twitter.svg'
import ProfilePic from '../public/IMG_0019.jpg'
import CalculatorPreview from '../public/calculator-preview.png'
import PomodoroPreview from '../public/pomodoro-preview.png'
import QuotePreview from '../public/random-quote.png'
import MarkdownPreview from '../public/markdown-preview.png'
import Blob from '../public/blob.svg'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cody C. Portfolio</title>
        <meta name="Web development portfolio" content="Generated by create next app" />
        <meta name="description" content="A portolio webpage showing of the web development skills of Cody Conway"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>

        <div className={styles.grid}>
          <div className={styles.box}>
            <h3 className={styles.title}>
              My name is Cody<br/>and I design and<br/>implement awesome<br/>web designs.
            </h3>
          </div>
          <Image layout='intrinsic' width={350} height={420} src={ProfilePic} alt="picture of my face" className={styles['hero-pic']} />

          <p className={styles.description}>
            I&#39;m a developer that loves to learn cutting edge technologies and enjoy the feeling of overcoming a challenge.
          </p>
          <span className={[styles.arrow, styles.bounce].join(' ')}></span>
        </div>
        <h2 id="skills">Skills</h2>
        <div className={styles['skills-container']}>
          <div className={styles['skills-card']}>
            <HtmlIcon />
          </div>
          <div className={styles['skills-card']}>
            <CssIcon />
          </div>
          <div className={styles['skills-card']}>
            <JavascriptIcon />
          </div>
          <div className={styles['skills-card']}>
            <TypescriptIcon />
          </div>
          <div className={styles['skills-card']}>
            <ReactIcon />
          </div>
          <div className={styles['skills-card']}>
            <NextIcon />
          </div>
          <div className={styles['skills-card']}>
            <SassIcon />
          </div>
          <div className={styles['skills-card']}>
            <TailwindIcon />
          </div>
          <div className={styles['skills-card']}>
            <NodeIcon />
          </div>
          <div className={styles['skills-card']}>
            <ExpressIcon />
          </div>
          <div className={styles['skills-card']}>
            <MongoIcon />
          </div>
          <div className={styles['skills-card']}>
            <PostgresIcon />
          </div>
        </div>
        <h2 id="projects">Projects</h2>
        <div className={styles["projects-container"]}>
          <div className={styles['project-card']}>
            <h3>Calculator App</h3>
            <a href='https://eager-euclid-acf984.netlify.app/' target={'_blank'} rel='noreferrer'>
              <Image src={CalculatorPreview} placeholder="blur" alt="preview picture of a calculator website" className={styles['project-pic']} />
            </a>  
          </div>
          <div className={styles['project-card']}>
            <h3>Pomodoro Clock</h3>
            <a href="https://react-fcc-pomodoro-clock.netlify.app/" target={'_blank'} rel='noreferrer'>
              <Image src={PomodoroPreview} placeholder="blur" alt='preview picture of a pomodoro clock website' className={styles['project-pic']} />
            </a>
          </div>
          <div className={styles['project-card']}>
            <h3>Randome Quote Machine</h3>
            <a href="https://quirky-random-quote-generator.netlify.app/" target={'_blank'} rel='noreferrer'>
              <Image src={QuotePreview} placeholder="blur" alt='preview picture of a random quote website' className={styles['project-pic']} />
            </a>
          </div>
          <div className={styles['project-card']}>
            <h3>Text to Markdown</h3>
            <a href="https://quirky-fcc-markdown-previewer.netlify.app/" target={'_blank'} rel='noreferrer'>
              <Image src={MarkdownPreview} placeholder="blur" alt='preview picutre of a text to markdown website' className={styles['project-pic']} />
            </a>
          </div>
        </div>
        <h2 id="contact">Contact Me</h2>
        <div className={styles['contact-container']}>
          <a className={styles['contact-card']} rel="noreferrer" target={"_blank"} href="https://github.com/codyconway77">
            <GithubIcon />
          </a>
          <a className={styles['contact-card']} rel="noreferrer" target={"_blank"} href="https://www.linkedin.com/in/cody-c-7b19221a9/">
            <LinkedInIcon />
          </a>
          <a className={styles['contact-card']} rel="noreferrer" target={"_blank"} href="https://twitter.com/Codemeister100">
            <TwitterIcon />
          </a>
        </div>

      </main>

      <footer className={styles.footer}>
          Powered by{' '}
          <span className={styles.logo}>
            <NextIcon />
          </span>
      </footer>
    </div>
  )
}

export default Home
