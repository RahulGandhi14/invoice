import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import avatar from '../../assets/image-avatar.jpg'
import ThemeToggler from './ThemeToggler'
import { themeType } from '../styled/Theme'

const Aside = styled.aside`
    position: sticky;
    width: 100%;
    height: fit-content;
    top: 0;
    left: 0;
    z-index: 15;
    background-color: ${({ theme }: themeType) => theme.color.sidebar.bg};
    color: white;
    display: flex;

    justify-content: space-between;
    transition: background-color 0.3s;

    @media only screen and (min-width: 900px) {
        position: sticky;
        flex-direction: column;
        height: 100vh;
        width: fit-content;
        border-radius: 0px 20px 20px 0px;
    }
`

const Logo = styled.div`
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 0px 20px 20px 0px;
    background-color: rgb(124, 93, 250);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 50%;
        width: 100%;
        background-color: rgb(146, 119, 255);
        border-radius: 20px 0px 20px 0px;
    }

    .logo {
        width: 30px;
        height: auto;
        z-index: 1;
    }

    @media only screen and (min-width: 900px) {
        width: 6.5rem;
        height: 6.5rem;

        .logo {
            width: 36px;
        }
    }
`

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .themeToggler,
    .avatar {
        margin: 2rem 0;
        cursor: pointer;
    }

    .avatar {
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }

    @media only screen and (max-width: 900px) {
        flex-direction: row;
        gap: 2rem;

        .themeToggler,
        .avatar {
            margin: 0;
        }

        .avatar {
            margin-right: 2rem;
        }
    }
`

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: rgb(73, 78, 110);

    @media only screen and (max-width: 900px) {
        width: 1px;
        height: 100%;
    }
`

interface propType {
    toggleTheme: () => void
}

const Sidebar: React.FC<propType> = ({ toggleTheme }) => {
    return (
        <Aside>
            <Logo>
                <img src={logo} alt="Logo" className="logo" />
            </Logo>
            <FlexContainer>
                <ThemeToggler toggleTheme={toggleTheme} />
                <Divider />
                <img src={avatar} alt="avatar" className="avatar" />
            </FlexContainer>
        </Aside>
    )
}

export default Sidebar
