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
import InvoiceFooter from './InvoiceFooter'
import { fontStyle1 } from '../styled/Typography'
import { H1, H4 } from '../styled/Headings'

const InvoiceWrapper = styled(PageWrapper)`
    height: auto;
    padding: 0 3rem;

    @media only screen and (max-width: 700px) {
        padding: 0;
        margin-bottom: 5.5rem; // Compansate for the footer
    }
`

const InvoiceNotFoundWrapper = styled('div')`
    ${fontStyle1}
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;
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

    const [doesInvoiceExist, setDoesInvoiceExist] = useState<boolean>(true)

    const invoices = useAppSelector((state) => state.invoice.invoices)
    const editCurrentInvoice = useAppSelector(
        (state) => state.invoice.editCurrentInvoice
    )

    const [currentInvoice, setCurrentInvoice] = useState<
        InitialValuesType | undefined
    >(undefined)

    useEffect(() => {
        const idxOfInvoice = invoices.findIndex(
            (invoice) => invoice.id === params?.id
        )
        if (idxOfInvoice === -1) {
            setDoesInvoiceExist(false)
        } else {
            setCurrentInvoice(invoices[idxOfInvoice])
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editCurrentInvoice, invoices])

    return (
        <>
            <DeletePopup />
            <InvoiceWrapper
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <BackBtn />
                {doesInvoiceExist ? (
                    <>
                        <InvoiceHeader
                            invoiceStatus={
                                currentInvoice?.status || EInvoiceStatus.DRAFT
                            }
                        />
                        <InvoiceBody invoice={currentInvoice} />
                        <InvoiceFooter
                            status={
                                currentInvoice?.status || EInvoiceStatus.DRAFT
                            }
                        />
                    </>
                ) : (
                    <InvoiceNotFoundWrapper>
                        <H1>Oops!</H1>
                        <H4>404 - Invoice not found</H4>
                    </InvoiceNotFoundWrapper>
                )}
            </InvoiceWrapper>
        </>
    )
}

export default Invoice
