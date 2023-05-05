import styled from 'styled-components'
import InvoiceItem from './InvoiceItem'
import { useAppSelector } from '../../redux/hooks'

const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 3rem;
`

const InvoiceList = () => {
    const invoices = useAppSelector((state) => state.invoice.invoices)

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
