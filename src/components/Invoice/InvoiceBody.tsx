import moment from 'moment'
import styled from 'styled-components'
import { InitialValuesType } from '../../data/Form'
import { H3 } from '../styled/Headings'
import { CardStyles } from '../styled/shared'
import { themeType } from '../styled/Theme'
import { fontStyle1, fontStyle2 } from '../styled/Typography'
import InvoiceItems from './InvoiceItems'

const Card = styled('div')`
    ${CardStyles}
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 2.5rem;

    @media only screen and (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
        row-gap: 1.5rem;
    }
`

const Text = styled('p')`
    ${fontStyle1};
    margin-bottom: 0.5rem;
`

const FieldValue = styled('p')`
    font-weight: bold;
    font-size: 0.9325rem;
    color: ${({ theme }: themeType) => theme.color.text.formText};
    transition: color 0.3s;
`

const StatusDiv = styled('div')`
    @media only screen and (max-width: 700px) {
        grid-area: 1 / 1 / 2 / 3;
    }
`

const Dates = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100px;

    @media only screen and (max-width: 700px) {
        grid-area: 3 / 1 / 4 / 2;
    }
`

const Id = styled(H3)`
    margin-bottom: 0.25rem;

    span {
        color: ${({ theme }: themeType) => theme.color.invoiceItem.hash};
        transition: color 0.3s;
    }
`

type AddressProps = {
    textAlign?:
        | 'start'
        | 'end'
        | 'left'
        | 'right'
        | 'center'
        | 'justify'
        | 'match-parent'
}

const Address = styled('address')<AddressProps>`
    ${fontStyle2}
    font-style: normal;
    display: flex;
    flex-direction: column;
    text-align: ${(props) => (props.textAlign ? props.textAlign : 'end')};
    grid-area: 1 / 2 / 2 / 4;

    @media only screen and (max-width: 700px) {
        text-align: start;
        grid-area: 2 / 1 / 3 / 2;
    }
`

const BillTo = styled.div`
    @media only screen and (max-width: 700px) {
        grid-area: 3 / 2 / 4 / 3;
    }
`

const SentTo = styled.div`
    @media only screen and (max-width: 700px) {
        grid-area: 4 / 1 / 5 / 3;
    }
`

type InvoiceBodyType = { invoice: InitialValuesType | undefined }

const InvoiceBody = ({ invoice }: InvoiceBodyType) => {
    return (
        <Card>
            <StatusDiv>
                <Id>
                    <span>#</span>
                    {invoice?.id}
                </Id>
                <Text>{invoice?.description}</Text>
            </StatusDiv>
            <Address>
                <span>{invoice?.senderAddress.street}</span>
                <span>{invoice?.senderAddress.city}</span>
                <span>{invoice?.senderAddress.postCode}</span>
                <span>{invoice?.senderAddress.country}</span>
            </Address>
            <Dates>
                <div>
                    <Text>Invoice Date</Text>
                    <FieldValue>
                        {invoice?.createdAt
                            ? moment(invoice.createdAt).format('DD MMM YYYY')
                            : 'N/A'}
                    </FieldValue>
                </div>
                <div>
                    <Text>Payment Due</Text>
                    <FieldValue>
                        {invoice?.paymentDue
                            ? moment(invoice.paymentDue).format('DD MMM YYYY')
                            : 'N/A'}
                    </FieldValue>
                </div>
            </Dates>
            <BillTo>
                <Text>Bill to</Text>
                <FieldValue style={{ marginBottom: '0.25rem' }}>
                    {invoice?.clientName}
                </FieldValue>
                <Address textAlign="start">
                    <span>{invoice?.clientAddress.street}</span>
                    <span>{invoice?.clientAddress.city}</span>
                    <span>{invoice?.clientAddress.postCode}</span>
                    <span>{invoice?.clientAddress.country}</span>
                </Address>
            </BillTo>
            <SentTo>
                <Text>Sent to</Text>
                <FieldValue>{invoice?.clientEmail}</FieldValue>
            </SentTo>
            <InvoiceItems
                items={invoice?.items || []}
                total={invoice?.total || 0}
            />
        </Card>
    )
}

export default InvoiceBody
