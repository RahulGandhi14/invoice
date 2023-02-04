import { PageWrapper } from '../styled/shared'
import styled from 'styled-components'
import BackBtn from './BackBtn'
import InvoiceHeader from './InvoiceHeader'
import InvoiceBody from './InvoiceBody'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { EInvoiceStatus } from '../../data/Form'
import { useEffect } from 'react'
import { getInvoiceById } from '../../redux/invoice/actions'

const Wrapper = styled(PageWrapper)`
    padding: 0 3rem;
    margin-bottom: 3rem;
`

const Invoice = () => {
    const dispatch = useAppDispatch()
    const currentInvoice = useAppSelector((state) => state.currentInvoice)

    useEffect(() => {
        return () => {
            // setting currentInvoice to null
            dispatch(getInvoiceById('-1'))
        }
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
