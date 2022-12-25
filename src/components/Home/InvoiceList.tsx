import styled from 'styled-components'
import InvoiceItem from './InvoiceItem'
import invoices from '../../data/data.json'

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 3rem;
`

const InvoiceList = () => {
    return (
        <Wrapper>
            {invoices?.length
                ? invoices.map((invoice: any) => (
                      <InvoiceItem invoice={invoice} />
                  ))
                : null}
        </Wrapper>
    )
}

export default InvoiceList
