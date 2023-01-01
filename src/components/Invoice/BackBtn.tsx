import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { themeType } from '../styled/Theme'
import { fontStyle1 } from '../styled/Typography'
import LeftArrow from '../../assets/icon-arrow-left.svg'

const Link = styled(motion.a)`
    ${fontStyle1}
    text-decoration: none;
    color: ${({ theme }: themeType) => theme.color.text.link};
    display: inline-block;
    margin-bottom: 2rem;

    span {
        margin-left: 1.5rem;
    }
`

const BackBtn = () => {
    return (
        <Link href="/">
            <img src={LeftArrow} alt="Back" />
            <span>Go back</span>
        </Link>
    )
}

export default BackBtn
