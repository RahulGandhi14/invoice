import { PageWrapper } from '../styled/shared'
import styled from 'styled-components'
import BackBtn from './BackBtn'
import InvoiceHeader from './InvoiceHeader'
import InvoiceBody from './InvoiceBody'

const Wrapper = styled(PageWrapper)`
    padding: 0 3rem;
`

const Invoice = () => {
    return (
        <Wrapper>
            <BackBtn />
            <InvoiceHeader />
            <InvoiceBody />
        </Wrapper>
    )
}

export default Invoice
