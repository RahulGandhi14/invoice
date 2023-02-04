import { PageWrapper } from '../styled/shared'
import styled from 'styled-components'
import BackBtn from './BackBtn'
import InvoiceHeader from './InvoiceHeader'
import InvoiceBody from './InvoiceBody'
import { useAppSelector } from '../../redux/hooks'
import { EInvoiceStatus, InitialValuesType } from '../../data/Form'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Wrapper = styled(PageWrapper)`
    padding: 0 3rem;
    margin-bottom: 3rem;
`

const Invoice = () => {
    const params = useParams<{ id: string }>()

    const invoices = useAppSelector((state) => state.invoices)

    const [currentInvoice, setCurrentInvoice] = useState<
        InitialValuesType | undefined
    >(undefined)

    useEffect(() => {
        setCurrentInvoice(invoices.find((invoice) => invoice.id === params?.id))
    }, [])

    return (
        <Wrapper>
            <BackBtn />
            <InvoiceHeader
                invoiceStatus={currentInvoice?.status || EInvoiceStatus.DRAFT}
            />
            <InvoiceBody invoice={currentInvoice} />
        </Wrapper>
    )
}

export default Invoice
