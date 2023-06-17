import { PageWrapper } from '../styled/shared'
import styled from 'styled-components'
import BackBtn from './BackBtn'
import InvoiceHeader from './InvoiceHeader'
import InvoiceBody from './InvoiceBody'
import { useAppSelector } from '../../redux/hooks'
import { EInvoiceStatus, InitialValuesType } from '../../data/Form'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DeletePopup from './DeletePopup'
import { Variants } from 'framer-motion'

const Wrapper = styled(PageWrapper)`
    padding: 0 3rem;
    margin-bottom: 3rem;

    @media only screen and (max-width: 700px) {
        padding: 0;
    }
`

const variants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeIn' } },
    exit: {
        x: '50%',
        opacity: 0,
        transition: {
            type: 'tween',
            ease: 'easeIn',
            duration: 0.5,
        },
    },
}

const Invoice = () => {
    const params = useParams<{ id: string }>()

    const invoices = useAppSelector((state) => state.invoice.invoices)
    const editCurrentInvoice = useAppSelector(
        (state) => state.invoice.editCurrentInvoice
    )

    const [currentInvoice, setCurrentInvoice] = useState<
        InitialValuesType | undefined
    >(undefined)

    useEffect(() => {
        setCurrentInvoice(invoices.find((invoice) => invoice.id === params?.id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editCurrentInvoice])

    return (
        <>
            <DeletePopup />
            <Wrapper
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <BackBtn />
                <InvoiceHeader
                    invoiceStatus={
                        currentInvoice?.status || EInvoiceStatus.DRAFT
                    }
                />
                <InvoiceBody invoice={currentInvoice} />
            </Wrapper>
        </>
    )
}

export default Invoice
