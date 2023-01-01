import { useState } from 'react'
import InvoiceForm from '../InvoiceForm'
import { PageWrapper } from '../styled/shared'
import Header from './Header'
import InvoiceList from './InvoiceList'

const Home = () => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
            <InvoiceForm open={open} setOpen={setOpen} />
            <PageWrapper>
                <Header setOpen={setOpen} />
                <InvoiceList />
            </PageWrapper>
        </>
    )
}

export default Home
