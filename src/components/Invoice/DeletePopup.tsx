import { AnimatePresence, motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
    deleteInvoice,
    openDeleteInvoiceModal,
} from '../../redux/invoice/actions'
import Backdrop from '../InvoiceForm/Backdrop'
import Button from '../styled/Button'
import { H2 } from '../styled/Headings'
import { themeType } from '../styled/Theme'
import { fontStyle1 } from '../styled/Typography'

const Modal = styled(motion.div)`
    width: 100%;
    max-width: 30rem;
    padding: 2.75rem;
    border-radius: 8px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }: themeType) => theme.color.popup.bg};
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const Text = styled('p')`
    ${fontStyle1}
    line-height: 1.5;
`

const Buttons = styled('div')`
    display: flex;
    justify-content: end;
    gap: 0.5rem;
`

const DeletePopup = () => {
    const history = useHistory()
    const dispatch = useAppDispatch()

    const { openDeleteInvoiceModal: open, deleteInvoiceId } = useAppSelector(
        (state) => state
    )

    const setOpen = (open: boolean) => dispatch(openDeleteInvoiceModal(open))

    const onDeleteInvoice = () => {
        dispatch(deleteInvoice(deleteInvoiceId))
        history.push('/')
    }

    return (
        <AnimatePresence>
            {open ? (
                <Backdrop
                    zIndex={100}
                    setOpen={setOpen}
                    children={
                        <Modal>
                            <H2>Confirm Deletion</H2>
                            <Text>
                                Are you sure you want to delete invoice{' '}
                                {deleteInvoiceId}? This action cannot be undone.
                            </Text>
                            <Buttons>
                                <Button variant="secondary">Cancel</Button>
                                <Button
                                    variant="danger"
                                    onClick={onDeleteInvoice}
                                >
                                    Delete
                                </Button>
                            </Buttons>
                        </Modal>
                    }
                />
            ) : null}
        </AnimatePresence>
    )
}

export default DeletePopup
