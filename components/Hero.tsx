import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import ProfilePic from '../public/IMG_0019.jpg'

function Hero() {
    return (
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
    )
}

export default Hero
