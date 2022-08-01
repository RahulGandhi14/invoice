import React from 'react'
import styled from 'styled-components'
import { fontStyle1 } from '../styled/Typography'
import Input from '../styled/Input'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-right: 2rem;
    overflow: scroll;
    overflow-x: hidden;
`

const FieldSet = styled.fieldset`
    border: none;
`

const Legend = styled.legend`
    ${fontStyle1}
    margin-bottom:1.5rem;
    font-weight: bold;
    color: #7c5dfa;
`

const AddressFields = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;

    > *:nth-child(1) {
        grid-column: 1 / 4;
    }

    > *:nth-child(2) {
        grid-column: 1 / 2;
    }
`

const BillTo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const OtherInvoiceFields = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    > *:nth-child(3) {
        grid-column: 1/3;
    }
`

const FormFields: React.FC = () => {
    return (
        <Wrapper>
            <FieldSet>
                <Legend>Bill From</Legend>
                <AddressFields>
                    <Input label="Street Address" name="senderAddress.street" />
                    <Input label="City" name="senderAddress.city" />
                    <Input label="Post Code" name="senderAddress.postCode" />
                    <Input label="Country" name="senderAddress.country" />
                </AddressFields>
            </FieldSet>
            <FieldSet>
                <Legend>Bill To</Legend>
                <BillTo>
                    <Input label="Client's Name" name="clientName" />
                    <Input
                        label="Client's Email"
                        name="clientEmail"
                        type="email"
                        placeholder="e.g.email@example.com"
                    />
                    <AddressFields>
                        <Input
                            label="Street Address"
                            name="clientAddress.street"
                        />
                        <Input label="City" name="clientAddress.city" />
                        <Input
                            label="Post Code"
                            name="clientAddress.postCode"
                        />
                        <Input label="Country" name="clientAddress.country" />
                    </AddressFields>
                </BillTo>
            </FieldSet>
            <FieldSet>
                <OtherInvoiceFields>
                    <Input
                        inputType="date"
                        label="Payment Date"
                        name="createdAt"
                    />
                    <Input
                        inputType="select"
                        label="Payment Terms"
                        name="paymentTerms"
                    />
                    <Input
                        label="Description"
                        name="description"
                        placeholder="e.g.Graphic Design Service"
                    />
                </OtherInvoiceFields>
            </FieldSet>
        </Wrapper>
    )
}

export default FormFields
