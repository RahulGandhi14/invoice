import styled from 'styled-components'
import InvoiceItem from './InvoiceItem'
import { useAppSelector } from '../../redux/hooks'
import { motion, Variants } from 'framer-motion'

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 3rem;
`

const animation: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
    exit: {
        x: '-50%',
        opacity: 0,
        transition: { type: 'tween', ease: 'easeIn', duration: 0.5 },
    },
}

const InvoiceList = () => {
    const invoices = useAppSelector((state) => state.invoice.invoices)

    return (
        <Wrapper
            variants={animation}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {invoices?.length
                ? invoices.map((invoice: any) => (
                      <InvoiceItem invoice={invoice} />
                  ))
                : null}
        </Wrapper>
    )
}

export default InvoiceList
