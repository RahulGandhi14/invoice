import React, { useCallback, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Sidebar from './components/Sidebar/Sidebar'
import GlobalStyles from './components/styled/GlobalStyles'
import { light, dark, themeType } from './components/styled/Theme'

const Wrapper = styled.div`
    display: flex;
    background-color: ${({ theme }: themeType) => theme.color.body.bg};
    transition: background-color 0.3s;

    @media only screen and (max-width: 900px) {
        flex-direction: column;
        height: 100vh;
    }
`

const Main = styled.main`
    width: 100%;
    height: 100vh;
    padding: 4.5rem 3rem;

    @media only screen and (max-width: 900px) {
        padding-top: 3.5rem;
        flex: 1;
    }
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
