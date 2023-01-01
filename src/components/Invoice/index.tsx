import { PageWrapper } from '../styled/shared'
import styled from 'styled-components'
import BackBtn from './BackBtn'
import InvoiceHeader from './InvoiceHeader'

const Wrapper = styled(PageWrapper)`
    padding: 0 3rem;
`

const Invoice = () => {
    return (
        <Wrapper>
            <BackBtn />
            <InvoiceHeader />
        </Wrapper>
    )
}

export default Invoice
