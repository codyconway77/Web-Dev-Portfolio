import React from 'react'
import styles from '../styles/Home.module.scss'

function Hero() {
    return (
        <div className={styles['hero-grid']}>
          <div className={styles['text-box-1']}>
            <div className={styles['text-box-header']}>
              <h1>Cody</h1>
            </div>
            <p>&ldquo;I&#39;m Cody, a full stack developer from the San Francisco Bay Area. I design and implement and awesome webpages!&ldquo;</p>
          </div>
          <div className={styles['text-box-2']}>
            <h1>Cody</h1>
            <p>
              &ldquo;I love to learn cutting edge technologies and enjoy the feeling of overcoming a challenge.
            </p>
            <p>
              I am skilled in HTML, CSS, Javascript and Typescript. I build most projects using front-end frameworks such as React and Svelte.
              I am also skilled in back-end through NodeJs, Express, and a variety of databases.&ldquo;
            </p>
          </div>
          <a href='#skills' className={[styles.arrow, styles.bounce].join(' ')}></a>
        </div>
    )
}

export default Hero
