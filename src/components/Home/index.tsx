import { useState } from 'react'
import styled from 'styled-components'
import App from '../../App'
import InvoiceForm from '../InvoiceForm'
import Header from './Header'
import InvoiceList from './InvoiceList'

const Wrapper = styled.div`
    width: 100%;
    max-width: 45.625rem;
    height: 100%;
    margin: auto;
`

const Home = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <App>
            <InvoiceForm open={open} setOpen={setOpen} />
            <Wrapper>
                <Header setOpen={setOpen} />
                <InvoiceList />
            </Wrapper>
        </App>
    )
}

export default Home
