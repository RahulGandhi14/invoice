import { css } from 'styled-components'

const commonStyles = css`
    font-family: 'Spartan', sans-serif;
    transition: color 0.3s;
    color: ${(props) => props.theme.color.text.bodyA};
`

export const fontStyle1 = css`
    ${commonStyles}
    font-size: 0.75rem;
    line-height: 1.125;
    letter-spacing: -0.25px;
`

export const fontStyle2 = css`
    ${commonStyles}
    font-size: .6875rem;
    line-height: 1.63;
    letter-spacing: -0.23px;
`
