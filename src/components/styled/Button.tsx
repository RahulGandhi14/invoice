import styled, { css } from 'styled-components'
import { themeType } from './Theme'
import { fontStyle1 } from './Typography'

interface BtnProps {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'danger'
    wide?: boolean
}

type BtnType = BtnProps & themeType

const Button = styled.button<BtnProps>`
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    border: none;
    outline: none;
    ${fontStyle1}
    font-weight: bold;
    padding: 1rem 1.5rem;
    border-radius: 2rem;
    transition: background 0.3s, color 0.3s;

    // Primary
    color: ${({ theme }: themeType) => theme.color.btn.primary.text};
    background-color: ${({ theme }: themeType) => theme.color.btn.primary.bg};

    :hover {
        background-color: ${({ theme }: themeType) =>
            theme.color.btn.primary.hover};
    }

    ${({ wide }: BtnType) =>
        wide &&
        css`
            width: 100%;
        `}

    ${({ theme, variant }: BtnType) =>
        variant === 'secondary' &&
        css`
            background: ${theme.color.btn.secondary.bg};
            color: ${theme.color.btn.secondary.text};

            :hover {
                background: ${theme.color.btn.secondary.hover};
            }
        `}

    ${({ theme, variant }: BtnType) =>
        variant === 'tertiary' &&
        css`
            background: ${theme.color.btn.tertiary.bg};
            color: ${theme.color.btn.tertiary.text};

            :hover {
                background: ${theme.color.btn.tertiary.hover};
            }
        `}

    ${({ theme, variant }: BtnType) =>
        variant === 'danger' &&
        css`
            background: ${theme.color.btn.danger.bg};
            color: ${theme.color.btn.danger.text};

            :hover {
                background: ${theme.color.btn.danger.hover};
            }
        `}

    @media only screen and (max-width: 540px) {
        padding: 0.8rem 1rem;
    }
`

export default Button
