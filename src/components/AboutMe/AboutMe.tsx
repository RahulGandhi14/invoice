import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import Backdrop from '../InvoiceForm/Backdrop'
import avatar from '../../assets/image-attribution.jpg'

type AboutMeProps = { open: boolean; setOpen: () => void }

const Wrapper = styled(motion.div)`
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    & img {
        width: 75px;
        border-radius: 50%;
    }

    & a {
        color: inherit;
        text-decoration: none;
    }
`

export const AboutMe: React.FC<AboutMeProps> = ({ open, setOpen }) => {
    const AboutMeJSX: JSX.Element = (
        <Wrapper>
            <img src={avatar} alt="avatar" />
            <p>Made with &nbsp;&#10084;&nbsp; by Rahul Gandhi</p>
            <a href="https://github.com/RahulGandhi14/invoice">
                &#128279; See the source code
            </a>
        </Wrapper>
    )

    return (
        <AnimatePresence>
            {open ? (
                <Backdrop
                    zIndex={100}
                    setOpen={setOpen}
                    children={AboutMeJSX}
                    style={{ backdropFilter: 'blur(5px)' }}
                />
            ) : null}
        </AnimatePresence>
    )
}
