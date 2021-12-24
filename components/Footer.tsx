import React from 'react'
import styles from '../styles/Home.module.scss'
import NextIcon from '../public/icons/next.svg'

function Footer() {
    return (
        <footer className={styles.footer}>
          Powered by{' '}
          <span className={styles.logo}>
            <NextIcon />
          </span>
        </footer>
    )
}

export default Footer
