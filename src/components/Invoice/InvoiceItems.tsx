import styled from 'styled-components'
import { themeType } from '../styled/Theme'
import { fontStyle1 } from '../styled/Typography'

const Wrapper = styled('div')`
    margin-top: 1.25rem;
    grid-column: 1 / span 3;
    border-radius: 8px;
    overflow: hidden;
`

const InvoiceItemsTable = styled('table')`
    padding-top: 2rem;
    border-spacing: 0;
    width: 100%;
    background: ${({ theme }: themeType) => theme.color.invoiceTable.bg};
    transition: background 0.3s;

    & th {
        ${fontStyle1}
        font-weight: normal;

        &:first-child {
            text-align: start;
            padding: 0px 0px 2rem 2rem;
        }

        &:nth-of-type(2) {
            text-align: center;
            padding-bottom: 2rem;
        }

        &:nth-of-type(3) {
            text-align: end;
            padding-bottom: 2rem;
        }

        &:last-child {
            text-align: end;
            padding: 0px 2rem 2rem 0px;
        }
    }

    & tr td {
        ${fontStyle1}
        font-weight: bold;
        border: 0px;

        &:first-child {
            padding: 0px 0px 2rem 2rem;
            color: ${({ theme }: themeType) => theme.color.text.formText};
        }

        &:nth-of-type(2) {
            text-align: center;
            padding-bottom: 2rem;
        }

        &:nth-of-type(3) {
            padding-bottom: 2rem;
            text-align: end;
        }

        &:last-child {
            text-align: end;
            padding: 0px 2rem 2rem 0px;
            color: ${({ theme }: themeType) => theme.color.text.formText};
        }
    }

    & tfoot {
        background: ${({ theme }: themeType) =>
            theme.color.invoiceTable.footerBg};
        transition: background 0.3s;

        & tr td:first-child {
            color: white;
            padding: 2rem;
            padding-right: 0;
        }

        & tr td:last-child {
            color: white;
            font-size: 1.5rem;
            padding: 2rem;
            padding-left: 0;
        }
    }
`

const InvoiceItems = () => {
    return (
        <Wrapper>
            <InvoiceItemsTable>
                <thead>
                    <tr>
                        <th>Item name</th>
                        <th>Qty.</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Item1</td>
                        <td>1</td>
                        <td>₹ 102.33</td>
                        <td>₹ 102.33</td>
                    </tr>
                    <tr>
                        <td>Item1</td>
                        <td>1</td>
                        <td>₹ 102.33</td>
                        <td>₹ 102.33</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Amount Due</td>
                        <td></td>
                        <td></td>
                        <td>₹ 304.66</td>
                    </tr>
                </tfoot>
            </InvoiceItemsTable>
        </Wrapper>
    )
}

export default InvoiceItems
