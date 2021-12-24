import React from 'react'
import styles from '../styles/Home.module.scss'
import GithubIcon from '../public/icons/github.svg'
import LinkedInIcon from '../public/icons/linkedin.svg'
import TwitterIcon from '../public/icons/twitter.svg'

function Contact() {
    return (
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
    )
}

export default Contact
