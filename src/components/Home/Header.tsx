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

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`

type HeaderPropType = {
    setOpen: (state: boolean) => void
}

const Header: React.FC<HeaderPropType> = ({ setOpen }) => {
    return (
        <FlexContainer>
            <div>
                <Heading>Invoices</Heading>
                <SubHeading>There are total 5 invoices.</SubHeading>
            </div>
            <FlexContainer>
                <Filter />
                <NewInvoiceBtn setOpen={setOpen} />
            </FlexContainer>
        </FlexContainer>
    )
}

export default Header