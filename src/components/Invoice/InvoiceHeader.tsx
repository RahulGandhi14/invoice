import styled from 'styled-components'
import { EInvoiceStatus } from '../../data/Form'
import InvoiceStatus from '../styled/InvoiceStatus'
import { CardStyles } from '../styled/shared'
import { fontStyle1 } from '../styled/Typography'
import InvoiceActionButtons from './InvoiceActionButtons'

const Card = styled('div')`
    ${CardStyles}
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`

const Text = styled('p')`
    ${fontStyle1}
`

const Status = styled('div')`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media only screen and (max-width: 700px) {
        width: 100%;
        justify-content: space-between;
    }
`

const ActionButtons = styled('div')`
    display: flex;
    gap: 0.5rem;

    @media only screen and (max-width: 700px) {
        display: none;
    }
`

type InvoiceHeaderProps = {
    invoiceStatus: EInvoiceStatus
}

const InvoiceHeader = ({ invoiceStatus }: InvoiceHeaderProps) => {
    return (
        <Card>
            <Status>
                <Text>Status</Text>
                <InvoiceStatus status={invoiceStatus} />
            </Status>
            <ActionButtons>
                <InvoiceActionButtons status={invoiceStatus} />
            </ActionButtons>
        </Card>
    )
}

export default InvoiceHeader
