import React from 'react'
import UseDarkMode from '../hooks/UseDarkMode'
import navbar from '../styles/Navbar.module.scss'

function Navbar() {
    return (
        <div className={navbar.nav}>
            <UseDarkMode />
            <a className={navbar['nav-link']} href="#skills">Skills</a>
            <a className={navbar['nav-link']} href="#projects">Projects</a>
            <a className={navbar['nav-link']} href="#contact">Contact</a>
        </div>
    )
}

export default Navbar
