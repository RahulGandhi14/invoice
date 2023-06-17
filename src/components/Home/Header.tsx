import { motion, Variants } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { H1 } from '../styled/Headings'
import { fontStyle1 } from '../styled/Typography'
import Filter from './Filter'
import NewInvoiceBtn from './NewInvoiceBtn'

const Heading = styled(H1)`
    margin-bottom: 0.5rem;

    @media (max-width: 540px) {
        font-size: 1.25rem;
    }
`

const SubHeading = styled.p`
    ${fontStyle1}
`

const FlexContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 540px) {
        gap: 1rem;
    }
`

type HeaderPropType = {
    setOpen: (state: boolean) => void
    numOfInvoices: number
}

const variants: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeIn' },
    },
}

const Header: React.FC<HeaderPropType> = ({ setOpen, numOfInvoices }) => {
    return (
        <FlexContainer
            variants={variants}
            initial="initial"
            animate="animate"
            style={{ marginBottom: '3rem' }}
        >
            <div>
                <Heading>Invoices</Heading>
                <SubHeading>
                    There are total {numOfInvoices || 0} invoices.
                </SubHeading>
            </div>
            <FlexContainer>
                <Filter />
                <NewInvoiceBtn setOpen={setOpen} />
            </FlexContainer>
        </FlexContainer>
    )
}

export default Header
