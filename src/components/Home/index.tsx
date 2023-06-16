import { Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import { InitialValuesType } from '../../data/Form'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { openForm } from '../../redux/invoice/actions'
import { PageWrapper } from '../styled/shared'
import Header from './Header'
import InvoiceList from './InvoiceList'

const variants: Variants = {
    exit: {
        x: '-50%',
        opacity: 0,
        transition: {
            type: 'tween',
            ease: 'easeIn',
            duration: 0.5,
        },
    },
}

const Home = () => {
    const dispatch = useAppDispatch()
    const invoices = useAppSelector((state) => state.invoice.invoices)
    const filters = useAppSelector((state) => state.invoice.filters)

    const [filterdInvoices, setFilteredInvoices] = useState<
        InitialValuesType[]
    >([])

    useEffect(() => {
        if (filters.length) {
            setFilteredInvoices(
                invoices.filter((invoice) => filters.includes(invoice.status))
            )
        } else {
            setFilteredInvoices([...invoices])
        }
    }, [invoices, filters])

    const setOpen = (state: boolean) => dispatch(openForm(state))

    return (
        <>
            <PageWrapper variants={variants} exit="exit">
                <Header
                    setOpen={setOpen}
                    numOfInvoices={filterdInvoices.length}
                />
                <InvoiceList invoices={filterdInvoices} />
            </PageWrapper>
        </>
    )
}

export default Home
