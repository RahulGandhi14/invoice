import { motion } from 'framer-motion'
import styled from 'styled-components'
import { H3, H4 } from '../styled/Headings'
import InvoiceStatus from '../styled/InvoiceStatus'
import { fontStyle1 } from '../styled/Typography'
import ArrowImage from '../../assets/icon-arrow-right.svg'
import { InitialValuesType } from '../../data/Form'
import moment from 'moment'

const Container = styled(motion.a)`
    display: grid;
    grid-template-columns: 4rem 8rem 1fr min-content min-content min-content;
    gap: 1.5rem;
    align-items: center;
    background: white;
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
`

const Hash = styled('span')`
    color: #7e88c3;
`

const Text = styled('div')`
    ${fontStyle1}
`

const Rupee = styled('span')`
    margin-right: 0.2rem;
`

const Total = styled(H3)`
    grid-area: 1 / 4 / 2 / 5;
`

const InvoiceStatusWrapper = styled(InvoiceStatus)`
    grid-area: 1 / 5 / 2 / 6;
`

const Arrow = styled('img')``

type InvoiceItemProps = { invoice: InitialValuesType }

const InvoiceItem = ({ invoice }: InvoiceItemProps) => {
    return (
        <Container>
            <H4>
                <Hash>#</Hash>
                {invoice?.id}
            </H4>
            <Text>{`Due ${moment(invoice.paymentDue).format(
                'DD MMM YYYY'
            )}`}</Text>
            <Text>{invoice.clientName}</Text>
            <Total>
                <Rupee>₹</Rupee>
                {invoice?.total || 0}
            </Total>
            <InvoiceStatusWrapper status={invoice.status} />
            <Arrow alt="Right arrow" src={ArrowImage} />
        </Container>
    )
}

export default InvoiceItem
