import { motion, Variants } from 'framer-motion'
import styled from 'styled-components'
import { EInvoiceStatus } from '../../data/Form'
import { CardStyles } from '../styled/shared'
import InvoiceActionButtons from './InvoiceActionButtons'

const ActionButtons = styled(motion.div)`
    ${CardStyles}
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: none;
    justify-content: end;
    gap: 1rem;

    @media only screen and (max-width: 700px) {
        display: flex;
    }
`

type InvoiceFooterProps = {
    status: EInvoiceStatus
}

const variants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.25, ease: 'easeIn' } },
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

const InvoiceFooter = ({ status }: InvoiceFooterProps) => {
    return (
        <ActionButtons
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <InvoiceActionButtons status={status} />
        </ActionButtons>
    )
}

export default InvoiceFooter
