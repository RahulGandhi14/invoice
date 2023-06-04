import { motion } from 'framer-motion'
import styled from 'styled-components'
import { H3, H4 } from '../styled/Headings'
import InvoiceStatus from '../styled/InvoiceStatus'
import { fontStyle1 } from '../styled/Typography'
import ArrowImage from '../../assets/icon-arrow-right.svg'
import { InitialValuesType } from '../../data/Form'
import moment from 'moment'
import { themeType } from '../styled/Theme'
import { useAppDispatch } from '../../redux/hooks'
import { getInvoiceById } from '../../redux/invoice/actions'
import { Link } from 'react-router-dom'

const LinkContainer = styled(Link)`
    text-decoration: none;
`

const Container = styled(motion.div)`
    display: grid;
    grid-template-columns: 4rem 8rem 1fr min-content min-content min-content;
    column-gap: 1.5rem;
    align-items: center;
    background: ${({ theme }: themeType) => theme.color.invoiceItem.bg};
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 8px;
    transition: border 0.3s, background 0.3s;

    :hover {
        border-color: #7c5dfa;
    }

    :focus-visible {
        outline: 2px dotted #7c5dfa;
    }

    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`

const Heading = styled(H4)`
    span {
        color: ${({ theme }: themeType) => theme.color.invoiceItem.hash};
    }

    @media only screen and (max-width: 768px) {
        grid-area: 1 / 1 /2 / 2;
        margin-bottom: 1.25rem;
    }
`

const DueDate = styled('span')`
    ${fontStyle1}

    @media only screen and (max-width: 768px) {
        grid-area: 2 / 1 / 3 / 2;
        margin-bottom: 0.25rem;
    }
`

const ClientName = styled('span')`
    ${fontStyle1}

    @media only screen and (max-width: 768px) {
        grid-area: 1 / 2 / 2/ 3;
        align-self: baseline;
        justify-self: end;
    }
`

const Total = styled(H3)`
    grid-area: 1 / 4 / 2 / 5;

    span {
        margin-right: 0.2rem;
    }

    @media only screen and (max-width: 768px) {
        grid-area: 3 / 1 / 4 / 2;
    }
`

const InvoiceStatusWrapper = styled('div')`
    @media only screen and (max-width: 768px) {
        grid-area: 2 / 2 / span 2 / 3;
        justify-self: end;
    }
`

const Arrow = styled('img')`
    @media only screen and (max-width: 768px) {
        display: none;
    }
`

type InvoiceItemProps = { invoice: InitialValuesType }

const InvoiceItem = ({ invoice }: InvoiceItemProps) => {
    const dispatch = useAppDispatch()

    return (
        <LinkContainer to={`/invoice/${invoice.id}`}>
            <Container
                onClick={() => dispatch(getInvoiceById(`${invoice.id}`))}
            >
                <Heading>
                    <span>#</span>
                    {invoice.id}
                </Heading>
                <DueDate>
                    {`Due ${moment(invoice.paymentDue).format('DD MMM YYYY')}`}
                </DueDate>
                <ClientName>{invoice.clientName}</ClientName>
                <Total>
                    <span>₹</span>
                    {invoice?.total || 0}
                </Total>
                <InvoiceStatusWrapper>
                    <InvoiceStatus status={invoice.status} />
                </InvoiceStatusWrapper>
                <Arrow alt="Right arrow" src={ArrowImage} />
            </Container>
        </LinkContainer>
    )
}

export default InvoiceItem
