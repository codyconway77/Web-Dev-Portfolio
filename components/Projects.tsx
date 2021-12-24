import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import CalculatorPreview from '../public/calculator-preview.png'
import PomodoroPreview from '../public/pomodoro-preview.png'
import QuotePreview from '../public/random-quote.png'
import MarkdownPreview from '../public/markdown-preview.png'

function Projects() {
    return (
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
    )
}

export default Projects
