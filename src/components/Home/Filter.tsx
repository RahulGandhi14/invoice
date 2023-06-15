import styled from 'styled-components'
import { fontStyle1 } from '../styled/Typography'
import { themeType } from '../styled/Theme'
import downArrow from '../../assets/icon-arrow-down.svg'
import { useState } from 'react'
import CheckBox from '../styled/CheckBox'
import { AnimatePresence, motion, Variants } from 'framer-motion'

const variants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3, ease: 'easeIn' } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } },
}

const Wrapper = styled.div`
    position: relative;
`

const P = styled.div`
    ${fontStyle1}
    font-weight: 700;
    color: ${({ theme }: themeType) => theme.color.text.heading};
    cursor: pointer;

    & span {
        display: inline-block;
        margin-left: 0.5rem;
    }

    & span img {
        transition: transform 0.3s ease-out;
    }

    .active {
        transform: rotate(180deg);
    }

    &::before {
        content: 'Filter by status';
    }

    @media only screen and (max-width: 600px) {
        &::before {
            content: 'Filter';
        }
    }
`

const DropDown = styled(motion.div)`
    position: absolute;
    top: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: ${({ theme }: themeType) =>
        `0px 10px 20px ${theme.color.dropdown.shadow}`};
    background-color: ${({ theme }: themeType) => theme.color.dropdown.bg};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 12rem;
    transition: background-color 0.3s, box-shadow 0.3s;
`

const dropdownList = ['Paid', 'Pending', 'Draft']

const Filter = () => {
    const [openDropDown, setOpenDropDown] = useState(false)

    return (
        <Wrapper>
            <P onClick={() => setOpenDropDown((prevState) => !prevState)}>
                <span>
                    <img
                        src={downArrow}
                        alt="DownArrow"
                        className={openDropDown ? 'active' : ''}
                    />
                </span>
            </P>
            <AnimatePresence>
                {openDropDown && (
                    <DropDown
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        {dropdownList.map((listItem) => (
                            <CheckBox key={listItem} label={listItem} />
                        ))}
                    </DropDown>
                )}
            </AnimatePresence>
        </Wrapper>
    )
}

export default Filter
