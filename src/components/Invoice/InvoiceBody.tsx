import styled from 'styled-components'
import { H3 } from '../styled/Headings'
import { CardStyles } from '../styled/shared'
import { themeType } from '../styled/Theme'
import { fontStyle1, fontStyle2 } from '../styled/Typography'

const Card = styled('div')`
    ${CardStyles}
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 1rem;
`

const Text = styled('p')`
    ${fontStyle1};
    margin-bottom: 0.5rem;
`

const FieldValue = styled('p')`
    font-weight: bold;
    font-size: 0.9325rem;
`

const Dates = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Id = styled(H3)`
    margin-bottom: 0.25rem;

    span {
        color: ${({ theme }: themeType) => theme.color.invoiceItem.hash};
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
`

const InvoiceBody = () => {
    return (
        <Card>
            <div>
                <Id>
                    <span>#</span>GS0200
                </Id>
                <Text>RENTAL INCOME</Text>
            </div>
            <Address>
                <span>A, Selborne Mansions</span>
                <span>United Kingdom</span>
                <span>Bradford</span>
                <span>BD9 4NP</span>
            </Address>
            <Dates>
                <div>
                    <Text>Invoice Date</Text>
                    <FieldValue>25 Dec 2022</FieldValue>
                </div>
                <div>
                    <Text>Payment Due</Text>
                    <FieldValue>31 Dec 2022</FieldValue>
                </div>
            </Dates>
            <div>
                <Text>Bill to</Text>
                <FieldValue style={{ marginBottom: '0.25rem' }}>
                    John Cena
                </FieldValue>
                <Address textAlign="start">
                    <span>A, Selborne Mansions</span>
                    <span>United Kingdom</span>
                    <span>Bradford</span>
                    <span>BD9 4NP</span>
                </Address>
            </div>
            <div>
                <Text>Sent to</Text>
                <FieldValue>random@gmail.com</FieldValue>
            </div>
        </Card>
    )
}

export default InvoiceBody
