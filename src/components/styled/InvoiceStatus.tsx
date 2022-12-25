import styled from 'styled-components'
import { EInvoiceStatus } from '../../data/Form'
import { themeType } from './Theme'
import { fontStyle1 } from './Typography'

type StatusProps = {
    status: EInvoiceStatus
}

const Wrapper = styled('div')<StatusProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 6.5rem;
    height: 2.5rem;
    border-radius: 6px;
    background: ${(props: StatusProps & themeType) => {
        if (props.status === EInvoiceStatus.PAID)
            return 'rgba(51, 214, 159, .06)'
        if (props.status === EInvoiceStatus.PENDING)
            return 'rgba(255, 143, 0, .06)'
        if (props.status === EInvoiceStatus.DRAFT)
            return props.theme.color.invoiceStatus.bg
    }};
`

const Status = styled('p')<StatusProps>`
    ${fontStyle1}
    line-height: 0;
    font-weight: bold;
    text-transform: capitalize;
    color: ${(props: StatusProps & themeType) => {
        if (props.status === EInvoiceStatus.PAID) return '#33D69F'
        if (props.status === EInvoiceStatus.PENDING) return '#FF8F00'
        if (props.status === EInvoiceStatus.DRAFT)
            return props.theme.color.invoiceStatus.text
    }};
`

const StatusIcon = styled('div')<StatusProps>`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    background: ${(props: StatusProps & themeType) => {
        if (props.status === EInvoiceStatus.PAID) return '#33D69F'
        if (props.status === EInvoiceStatus.PENDING) return '#FF8F00'
        if (props.status === EInvoiceStatus.DRAFT)
            return props.theme.color.invoiceStatus.text
    }};
`

type InvoiceStatusProps = {
    status: EInvoiceStatus
}
const InvoiceStatus = ({ status }: InvoiceStatusProps) => {
    return (
        <Wrapper status={status}>
            <StatusIcon status={status} />
            <Status status={status}>{status}</Status>
        </Wrapper>
    )
}

export default InvoiceStatus
