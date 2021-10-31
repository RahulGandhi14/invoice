import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import avatar from '../../assets/image-avatar.jpg'
import ThemeToggler from './ThemeToggler'

const Aside = styled.aside`
    position: sticky;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: ${(props) => props.theme.color.sidebar.bg};
    color: white;
    width: fit-content;
    border-radius: 0px 20px 20px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: background-color 0.3s;
`

const Logo = styled.div`
    width: 6.5rem;
    height: 6.5rem;
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
        width: 36px;
        height: auto;
        z-index: 1;
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
`

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: rgb(73, 78, 110);
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
