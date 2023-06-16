import styled from 'styled-components'
import InvoiceItem from './InvoiceItem'
import { motion, Variants } from 'framer-motion'
import { InitialValuesType } from '../../data/Form'

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 3rem;
`

const animation: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.125,
            delayChildren: 0.3,
        },
    },
}

const itemAnimation: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
}

type InvoiceListProps = {
    invoices: InitialValuesType[]
}

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices }) => {
    return invoices?.length ? (
        <Wrapper variants={animation} initial="hidden" animate="show">
            {invoices.map((invoice) => (
                <motion.div variants={itemAnimation}>
                    <InvoiceItem key={invoice.id} invoice={invoice} />
                </motion.div>
            ))}
        </Wrapper>
    ) : null
}

export default InvoiceList
