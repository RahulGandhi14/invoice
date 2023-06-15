import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../redux/hooks'
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

    @media (max-width: 540px) {
        gap: 1rem;
    }
`

type HeaderPropType = {
    setOpen: (state: boolean) => void
}

const Header: React.FC<HeaderPropType> = ({ setOpen }) => {
    const invoices = useAppSelector((state) => state.invoice.invoices)

    return (
        <FlexContainer style={{ marginBottom: '3rem' }}>
            <div>
                <Heading>Invoices</Heading>
                <SubHeading>
                    There are total {invoices?.length ? invoices.length : 0}{' '}
                    invoices.
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
