import React from 'react'
import styled from 'styled-components'
import { fontStyle1 } from '../styled/Typography'
import Input from './Input'

const FieldSet = styled.fieldset`
    border: none;
`

const Legend = styled.legend`
    ${fontStyle1}
    margin-bottom:1.5rem;
    font-weight: bold;
    color: #7c5dfa;
`

const BillFrom = styled.div`
    display: grid;
`

const FormFields: React.FC = () => {
    return (
        <>
            <FieldSet>
                <Legend>Bill From</Legend>
                <BillFrom>
                    <Input label="Street Address" name="senderAddress.street" />
                    <Input label="City" name="senderAddress.city" />
                    <Input label="Post Code" name="senderAddress.postCode" />
                    <Input label="Country" name="senderAddress.country" />
                </BillFrom>
            </FieldSet>
        </>
    )
}

export default FormFields
