import styled, { css } from 'styled-components'
import { themeType } from './Theme'

const commonStyles = css`
    color: ${({ theme }: themeType) => theme.color.text.heading};
    transition: color 0.3s;
`

export const H1 = styled.h1`
    ${commonStyles}
    font-size: 2rem;
    line-height: 1.125;
    letter-spacing: -1px;
`

export const H2 = styled.h2`
    ${commonStyles}
    font-size: 1.25rem;
    line-height: 1.1;
    letter-spacing: -0.63px;
`

export const H3 = styled.h3`
    ${commonStyles}
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: -0.8px;
`

export const H4 = styled.h4`
    ${commonStyles}
    font-size: .75rem;
    line-height: 1.25;
    letter-spacing: -0.5px;
`
