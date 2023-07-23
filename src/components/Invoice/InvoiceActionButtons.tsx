import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { EInvoiceStatus } from '../../data/Form'
import { useAppDispatch } from '../../redux/hooks'
import {
    deleteInvoiceId,
    getInvoiceById,
    markInvoiceAsPaid,
    openDeleteInvoiceModal,
    openForm,
} from '../../redux/invoice/actions'
import Button from '../styled/Button'
import { CardStyles } from '../styled/shared'

type InvoiceActionButtonsProps = { status: EInvoiceStatus }

const InvoiceActionButtons = ({ status }: InvoiceActionButtonsProps) => {
    const params = useParams<{ id: string }>()
    const dispatch = useAppDispatch()

    const deleteCurrentInvoice = () => {
        dispatch(deleteInvoiceId(params.id))
        dispatch(openDeleteInvoiceModal(true))
    }

    const markAsPaid = () => dispatch(markInvoiceAsPaid(params.id))

    return (
        <>
            <Button
                type="button"
                variant="secondary"
                onClick={() => {
                    dispatch(getInvoiceById(params.id))
                    dispatch(openForm(true))
                }}
            >
                Edit
            </Button>
            <Button
                type="button"
                variant="danger"
                onClick={deleteCurrentInvoice}
            >
                Delete
            </Button>
            {status !== EInvoiceStatus.PAID ? (
                <Button type="button" variant="primary" onClick={markAsPaid}>
                    Mark As Paid
                </Button>
            ) : null}
        </>
    )
}

const InvoiceActionButtonFooterWrapper = styled('div')`
    ${CardStyles}
`

export const InvoiceActionButtonFooter = () => (
    <InvoiceActionButtonFooterWrapper>
        <InvoiceActionButtons status={EInvoiceStatus.PAID} />
    </InvoiceActionButtonFooterWrapper>
)

export default InvoiceActionButtons
