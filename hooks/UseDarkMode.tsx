import React, { useEffect, useState } from 'react'

function UseDarkMode() {
    const [theme, setTheme] = useState(() => {
        if(typeof window !== 'undefined') {
            return localStorage.getItem('theme')
        } else {
            return 'light'
        }
    })

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.body.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [theme])

    return (
        <a style={{cursor: 'pointer'}} onClick={() => {
            setTheme(theme => (theme === 'dark' ? 'light' : 'dark'))
        }}>
            {theme === 'dark' ? 'Light' : 'Dark'} mode
        </a>
    )
}

export default UseDarkMode
