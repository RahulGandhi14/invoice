import React, { useCallback, useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { AboutMe } from './components/AboutMe/AboutMe'
import InvoiceForm from './components/InvoiceForm'
import Sidebar from './components/Sidebar/Sidebar'
import GlobalStyles from './components/styled/GlobalStyles'
import { light, dark, themeType } from './components/styled/Theme'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { getInvoiceById, openForm } from './redux/invoice/actions'
import { toggleTheme } from './redux/theme/actions'

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

    const open = useAppSelector((state) => state.invoice.openForm)
    const theme = useAppSelector((state) => state.theme)

    const [openAboutMe, setOpenAboutMe] = useState(false)

    useEffect(() => {
        if (!open) {
            // resetting current invoice
            dispatch(getInvoiceById('-1'))
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])

    const toggleThemeHandler = useCallback(() => {
        dispatch(toggleTheme(!theme.isDarkTheme))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme.isDarkTheme])

    const setOpen = (state: boolean) => dispatch(openForm(state))

    const toggleOpenAboutMe = () => setOpenAboutMe((prevState) => !prevState)

    return (
        <ThemeProvider theme={theme.isDarkTheme ? dark : light}>
            <GlobalStyles />
            <Wrapper>
                <Sidebar
                    toggleTheme={toggleThemeHandler}
                    setOpenAboutMe={toggleOpenAboutMe}
                />
                <Main>
                    <InvoiceForm open={open} setOpen={setOpen} />
                    {children}
                </Main>
            </Wrapper>
            <AboutMe open={openAboutMe} setOpen={toggleOpenAboutMe} />
        </ThemeProvider>
    )
}

export default App
