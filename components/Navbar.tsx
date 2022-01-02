import React from 'react'
import UseDarkMode from '../hooks/UseDarkMode'
import navbar from '../styles/Navbar.module.scss'

function Navbar() {
    return (
        <div className={navbar['nav-wrapper']}>
            <nav className={[navbar.nav, navbar.stroke].join(' ')}>
                <ul>
                    <li>
                        <UseDarkMode />
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
