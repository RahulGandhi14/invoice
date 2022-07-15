import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

interface propType {
    toggleTheme: () => void
}

const ThemeToggler: React.FC<propType> = ({ toggleTheme }) => {
    const theme = useContext(ThemeContext)

    return (
        <img
            {...theme.icon}
            className="themeToggler"
            onClick={toggleTheme}
            alt="theme toggle icon"
        />
    )
}

export default ThemeToggler
