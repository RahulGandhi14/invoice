import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { EInvoiceStatus } from '../../data/Form'
import { useAppDispatch } from '../../redux/hooks'
import {
    deleteInvoice,
    getInvoiceById,
    openForm,
} from '../../redux/invoice/actions'
import Button from '../styled/Button'
import InvoiceStatus from '../styled/InvoiceStatus'
import { CardStyles } from '../styled/shared'
import { fontStyle1 } from '../styled/Typography'

const Card = styled('div')`
    ${CardStyles}
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`

const Text = styled('p')`
    ${fontStyle1}
`

const Status = styled('div')`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const ActionButtons = styled('div')`
    display: flex;
    gap: 0.5rem;
`

type InvoiceHeaderProps = {
    invoiceStatus: EInvoiceStatus
}

const InvoiceHeader = ({ invoiceStatus }: InvoiceHeaderProps) => {
    const history = useHistory()
    const params = useParams<{ id: string }>()
    const dispatch = useAppDispatch()

    const deleteCurrentInvoice = () => {
        dispatch(deleteInvoice(params.id))
        history.push('/')
    }

    return (
        <Card>
            <Status>
                <Text>Status</Text>
                <InvoiceStatus status={invoiceStatus} />
            </Status>
            <ActionButtons>
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
                <Button
                    type="button"
                    variant="primary"
                    disabled={invoiceStatus === EInvoiceStatus.PAID}
                >
                    Mark As Paid
                </Button>
            </ActionButtons>
        </Card>
    )
}

export default InvoiceHeader
