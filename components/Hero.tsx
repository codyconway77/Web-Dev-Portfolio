import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import ProfilePic from '../public/IMG_0019.jpg'

function Hero() {
    return (
        <div className={styles.hero2}>
          <div className={styles['hero-offset']}>
            <div className={styles.box}>
            
            </div>
              <h3 className={styles.title}>
                My name is Cody and I design and implement awesome web designs.
              </h3>

          </div>
          
          <div className={styles['image-wrapper']}>
            <Image width={380} height={420} src={ProfilePic} alt="picture of my face" className={styles['image']} />

          </div>

          
          

          <p className={styles.description}>
            I&#39;m a developer that loves to learn cutting edge technologies and enjoy the feeling of overcoming a challenge.
          </p>
          <a href='#skills' className={[styles.arrow, styles.bounce].join(' ')}></a>
        </div>
    )
}

export default Hero
