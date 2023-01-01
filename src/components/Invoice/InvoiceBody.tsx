import styled from 'styled-components'
import { H3 } from '../styled/Headings'
import { CardStyles } from '../styled/shared'
import { themeType } from '../styled/Theme'
import { fontStyle1, fontStyle2 } from '../styled/Typography'

const Card = styled('div')`
    ${CardStyles}
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const Text = styled('p')`
    ${fontStyle1}
`

const Id = styled(H3)`
    margin-bottom: 0.25rem;

    span {
        color: ${({ theme }: themeType) => theme.color.invoiceItem.hash};
    }
`

const Address = styled('address')`
    ${fontStyle2}
    font-style: normal;
    display: flex;
    flex-direction: column;
    text-align: end;
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
        </Card>
    )
}

export default InvoiceBody
