import React, { useCallback, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Sidebar from './components/Sidebar/Sidebar'
import GlobalStyles from './components/styled/GlobalStyles'
import { light, dark } from './components/styled/Theme'

const Wrapper = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.color.body.bg};
    transition: background-color 0.3s;
`

const Main = styled.main`
    width: 100%;
    padding: 4.5rem 3rem;
`

interface propType {
    children?: React.ReactNode
}

const App: React.FC<propType> = ({ children }) => {
    const [isDark, setIsDark] = useState(false)

    const toggleTheme = useCallback(() => {
        setIsDark((prevState) => !prevState)
    }, [setIsDark])

    return (
        <ThemeProvider theme={isDark ? dark : light}>
            <GlobalStyles />
            <Wrapper>
                <Sidebar toggleTheme={toggleTheme} />
                <Main>{children}</Main>
            </Wrapper>
        </ThemeProvider>
    )
}

export default App
