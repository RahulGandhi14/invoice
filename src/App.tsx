import React, { useCallback, useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import InvoiceForm from './components/InvoiceForm'
import Sidebar from './components/Sidebar/Sidebar'
import GlobalStyles from './components/styled/GlobalStyles'
import { light, dark, themeType } from './components/styled/Theme'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { getInvoiceById, openForm } from './redux/invoice/actions'

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
    overflow-y: scroll;

    @media only screen and (max-width: 900px) {
        padding: 2rem 1.5rem;
        flex: 1;
    }
`

interface propType {
    children?: React.ReactNode
}

const App: React.FC<propType> = ({ children }) => {
    const dispatch = useAppDispatch()

    const open = useAppSelector((state) => state.openForm)

    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        if (!open) {
            // resetting current invoice
            dispatch(getInvoiceById('-1'))
        }
    }, [open])

    const toggleTheme = useCallback(() => {
        setIsDark((prevState) => !prevState)
    }, [setIsDark])

    const setOpen = (state: boolean) => dispatch(openForm(state))

    return (
        <ThemeProvider theme={isDark ? dark : light}>
            <GlobalStyles />
            <Wrapper>
                <Sidebar toggleTheme={toggleTheme} />
                <Main>
                    <InvoiceForm open={open} setOpen={setOpen} />
                    {children}
                </Main>
            </Wrapper>
        </ThemeProvider>
    )
}

export default App
