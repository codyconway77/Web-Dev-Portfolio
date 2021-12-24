import React from 'react'
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
import styles from '../styles/Home.module.scss'

function Skills() {
    return (
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
    )
}

export default Skills
