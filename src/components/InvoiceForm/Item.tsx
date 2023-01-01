import { FieldArrayRenderProps, useFormikContext } from 'formik'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Input from '../styled/Input'
import DeleteIcon from '../../assets/icon-delete.svg'
import { InitialValuesType } from '../../data/Form'

const Wrapper = styled.div`
    display: grid;
    column-gap: 1rem;
    row-gap: 1.5rem;
    grid-template-columns: 2.5fr 0.7fr 1.5fr 1fr min-content;
    margin-bottom: 1rem;
`

const DeleteButton = styled.img`
    align-self: center;
    cursor: pointer;
`

type ItemType = {
    idx: number
    helpers: FieldArrayRenderProps
}

const Item: React.FC<ItemType> = ({ idx, helpers }) => {
    const { values, setFieldValue } = useFormikContext<InitialValuesType>()

    useEffect(() => {
        setFieldValue(
            `items[${idx}].total`,
            values.items[idx].quantity * values.items[idx].price
        )
    }, [
        idx,
        values,
        setFieldValue,
        values.items[idx].price,
        values.items[idx].quantity,
    ])

    const hideLabel = idx > 0

    return (
        <Wrapper>
            <Input
                label="Item name"
                name={`items[${idx}].name`}
                hideLabel={hideLabel}
            />
            <Input
                type="number"
                label="Qty."
                name={`items[${idx}].quantity`}
                hideLabel={hideLabel}
            />
            <Input
                type="number"
                label="Price"
                name={`items[${idx}].price`}
                hideLabel={hideLabel}
            />
            <Input
                label="Total"
                name={`items[${idx}].total`}
                hideLabel={hideLabel}
                noBorders={true}
                disabled
            />
            <DeleteButton
                src={DeleteIcon}
                alt="Delete icon"
                onClick={() => helpers.remove(idx)}
            />
        </Wrapper>
    )
}

export default Item
