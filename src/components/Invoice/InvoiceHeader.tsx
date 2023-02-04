import React from 'react'
import styled from 'styled-components'
import { EInvoiceStatus } from '../../data/Form'
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

const InvoiceHeader = () => {
    return (
        <Card>
            <Status>
                <Text>Status</Text>
                <InvoiceStatus status={EInvoiceStatus.DRAFT} />
            </Status>
            <ActionButtons>
                <Button type="button" variant="secondary">
                    Edit
                </Button>
                <Button type="button" variant="danger">
                    Delete
                </Button>
                <Button type="button" variant="primary">
                    Mark As Paid
                </Button>
            </ActionButtons>
        </Card>
    )
}

export default InvoiceHeader