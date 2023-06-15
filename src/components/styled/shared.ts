import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { themeType } from './Theme'

export const PageWrapper = styled(motion.div)`
    width: 100%;
    max-width: 45.625rem;
    height: 100vh;
    margin: auto;
`

export const CardStyles = css`
    background: ${({ theme }: themeType) => theme.color.invoiceItem.bg};
    transition: background 0.3s ease 0s;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: ${({ theme }: themeType) =>
        `0px 10px 10px -10px ${theme.color.invoiceItem.shadow}`};
`
